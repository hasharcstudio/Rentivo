"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun, User, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signOut } from "next-auth/react";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const { data: session, status } = useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Inventory", href: "/inventory" },
    { name: "Search", href: "/search" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // Do not render navbar on purely auth pages if desired, but we'll render it everywhere as a global layout or handle it per page.
  // For Rentivo, it sits on most pages.
  if (pathname === "/sign-in" || pathname === "/sign-up") {
    return null;
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-surface/90 backdrop-blur-xl border-b border-surface-container-highest transition-colors">
        <div className="flex justify-between items-center px-6 md:px-8 py-4 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 -ml-2 text-2xl font-black text-on-surface tracking-tighter hover:opacity-80 transition-opacity">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image src="/Rentivo.png" alt="Rentivo Logo" fill className="object-contain" priority />
            </div>
            <span className="-ml-2">RENTIVO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-transform duration-200 hover:scale-105 min-h-[44px] flex items-center ${
                  pathname === link.href
                    ? "text-primary border-b-2 border-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="p-2 text-secondary hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-surface-container-highest"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            {status === "loading" ? (
              <div className="w-8 h-8 bg-surface-container rounded-full animate-pulse"></div>
            ) : session ? (
              <>
                <Link
                  href="/dashboard/profile"
                  className="flex items-center gap-2 text-on-background font-medium hover:text-primary transition-colors min-h-[44px]"
                >
                  <User size={20} />
                  {session.user?.name || session.user?.email}
                </Link>
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors min-h-[44px]"
                >
                  <LogOut size={20} />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className="text-on-background font-medium hover:text-primary transition-colors min-h-[44px] flex items-center"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20 min-h-[44px] flex items-center"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
             {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="p-2 text-secondary hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 text-on-surface min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-surface-container"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 pt-20 bg-background/95 backdrop-blur-3xl lg:hidden flex flex-col"
          >
            <div className="flex flex-col gap-2 p-6 overflow-y-auto w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-bold p-4 rounded-xl min-h-[44px] flex items-center ${
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-on-surface hover:bg-surface-container"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="h-px bg-surface-container-highest my-4" />
              
              <Link
                href="/dashboard/profile"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-lg font-bold text-on-surface p-4 rounded-xl hover:bg-surface-container min-h-[44px]"
              >
                <User size={24} />
                Account Settings
              </Link>
              
              <Link
                href="/dashboard/bookings"
                onClick={() => setIsOpen(false)}
                className="mt-4 text-center bg-gradient-to-br from-primary to-primary-container text-white px-6 py-4 rounded-xl font-black text-lg active:scale-95 transition-all shadow-xl shadow-primary/20"
              >
                My Dashboard
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
