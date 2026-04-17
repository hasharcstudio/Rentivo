export interface AuthUser {
  email: string;
  passwordHash: string;
  firstName?: string;
  lastName?: string;
  createdAt: string;
}

const STORAGE_USERS_KEY = "rentivo_users";
const STORAGE_AUTH_KEY = "rentivo_authenticated";
const STORAGE_AUTH_EMAIL_KEY = "rentivo_user_email";

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function getStoredUsers(): AuthUser[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(STORAGE_USERS_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as AuthUser[];
  } catch {
    return [];
  }
}

function saveStoredUsers(users: AuthUser[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
}

export async function hashPassword(password: string) {
  if (typeof window === "undefined") return "";
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function registerUser(email: string, password: string, firstName?: string, lastName?: string) {
  const normalized = normalizeEmail(email);
  const users = getStoredUsers();
  const existing = users.find((user) => user.email === normalized);
  if (existing) {
    return { success: false, message: "An account already exists with that email." };
  }

  const passwordHash = await hashPassword(password);
  const newUser: AuthUser = {
    email: normalized,
    passwordHash,
    firstName: firstName?.trim() || undefined,
    lastName: lastName?.trim() || undefined,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveStoredUsers(users);
  return { success: true, user: newUser };
}

export async function authenticateUser(email: string, password: string) {
  const normalized = normalizeEmail(email);
  const users = getStoredUsers();
  const user = users.find((item) => item.email === normalized);
  if (!user) return null;
  const passwordHash = await hashPassword(password);
  if (passwordHash !== user.passwordHash) return null;
  return user;
}

export function setAuthenticated(email: string) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(STORAGE_AUTH_KEY, "true");
  window.sessionStorage.setItem(STORAGE_AUTH_EMAIL_KEY, normalizeEmail(email));
}

export function clearAuthentication() {
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem(STORAGE_AUTH_KEY);
  window.sessionStorage.removeItem(STORAGE_AUTH_EMAIL_KEY);
}

export function isAuthenticated() {
  if (typeof window === "undefined") return false;
  return window.sessionStorage.getItem(STORAGE_AUTH_KEY) === "true";
}

export function getAuthenticatedEmail() {
  if (typeof window === "undefined") return null;
  return window.sessionStorage.getItem(STORAGE_AUTH_EMAIL_KEY);
}
