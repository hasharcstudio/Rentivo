"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/Input";
import { Lock, Mail, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { registerUser, setAuthenticated } from "@/lib/auth";

export default function SignUpPage() {
  const router = useRouter();
  const redirect = typeof window !== "undefined"
    ? new URLSearchParams(window.location.search).get("redirect") || ""
    : "";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const result = await registerUser(email, password, firstName, lastName);
    if (!result.success) {
      setError(result.message || "Registration failed. Please try again.");
      setIsLoading(false);
      return;
    }

    setAuthenticated(email);
    router.push(redirect ? redirect : "/dashboard/profile");
  };

  const handleSocialClick = () => {
    window.alert("Social signup is not enabled yet. Please register with email and password.");
  };

  return (
    <div className="min-h-screen flex w-full bg-background absolute inset-0 z-50 overflow-hidden">
      {/* Left Form Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-16 md:p-24 overflow-y-auto max-h-screen">
        <Link href="/" className="flex items-center gap-1 -ml-2 text-2xl font-black text-on-background tracking-tighter mb-16 w-fit">
          <div className="relative w-14 h-14">
            <Image src="/Rentivo.png" alt="Rentivo Logo" fill className="object-contain" priority />
          </div>
          <span className="-ml-2">RENTIVO</span>
        </Link>
        
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-4xl font-black tracking-tighter mb-2 text-on-background">Apply for Membership</h1>
          <p className="text-secondary font-medium mb-8">Join the Kinetic Concierge club today.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button type="button" onClick={handleSocialClick} className="flex-1 flex items-center justify-center gap-3 bg-surface border border-outline-variant/30 py-3 rounded-xl font-bold hover:bg-surface-container-low transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button type="button" onClick={handleSocialClick} className="flex-1 flex items-center justify-center gap-3 bg-on-surface text-background py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05 1.95-3.08 1.95-1.09 0-1.45-.69-2.73-.69-1.28 0-1.63.66-2.69.69-1.06.03-2.27-1.12-3.15-2.39C3.59 17.21 2.2 13.06 4.14 10.22c.98-1.44 2.45-2.34 4.01-2.37 1.18-.03 2.31.81 3.08.81.75 0 2.14-.97 3.53-.84 1.48.06 2.84.62 3.68 1.84-2.95 1.75-2.48 5.75.44 6.94-1.32 3.73-4.04 7.64-1.83 3.68zM12.03 7.25c-.16-2.12 1.6-4.12 3.84-4.25.35 2.25-1.78 4.28-3.84 4.25z"/>
              </svg>
              Apple
            </button>
          </div>

          <div className="relative flex items-center py-3 mb-4">
            <div className="flex-grow border-t border-outline-variant/30"></div>
            <span className="flex-shrink-0 mx-4 text-secondary text-xs uppercase tracking-widest font-bold">Or register with email</span>
            <div className="flex-grow border-t border-outline-variant/30"></div>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-2xl bg-error-container text-error px-4 py-3 text-sm font-medium">
                {error}
              </div>
            )}
            <div className="flex gap-4 flex-col sm:flex-row">
              <Input 
                label="First Name" 
                type="text" 
                placeholder="James" 
                Icon={User}
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required 
              />
              <Input 
                label="Last Name" 
                type="text" 
                placeholder="Bond" 
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required 
              />
            </div>

            <Input 
              label="Email Address" 
              type="email" 
              placeholder="name@example.com" 
              Icon={Mail}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required 
            />
            
            <Input 
              label="Password" 
              type="password" 
              placeholder="••••••••" 
              Icon={Lock}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required 
            />

            <p className="text-xs text-secondary mt-1 max-w-sm">
              By applying, you agree to our <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
            </p>

            <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-4 rounded-xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20 mt-4 disabled:opacity-60 disabled:cursor-not-allowed">
              {isLoading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <p className="mt-8 text-center text-secondary font-medium">
            Already a member? <Link href={redirect ? `/sign-in?redirect=${encodeURIComponent(redirect)}` : "/sign-in"} className="text-primary hover:underline">Sign In</Link>
          </p>
        </div>
      </div>

      {/* Right Image Side */}
      <div className="hidden lg:block w-1/2 relative bg-surface-container-highest">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO9SpB9tR07uUXC3dupY9BHraa8-_1EYkRUMZMIyI2bC6OnqQ4JqQbzhO1Py0lih01MbRqD0YhFhe31aX99p6CAmSxeRH8pMzSIs1OWgxubET9zduO0IsFaDTk8km4Vta-sYCor0VzCp-D6OUQ0oRnsqqHSme8sFz40-fiGV6zg2CFjgPHLtgGkGOwppkPBtEEKO9yBAul_nIN0EuREDzemkecssxqSfygqcgFBhhESEk2UBSmshNqqR1PB69fFgzcSdKHbJSTuPZh"
          alt="Luxury car interior"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
        <div className="absolute bottom-16 left-16 right-16">
          <h2 className="text-4xl font-black text-white tracking-tighter mb-4 leading-tight">
            YOUR KEY TO THE <span className="text-primary italic">EXTRAORDINARY.</span>
          </h2>
          <p className="text-white/80 max-w-md leading-relaxed">
            Gain exclusive access to the worlds most sought-after electric and luxury vehicles.
          </p>
        </div>
      </div>
    </div>
  );
}
