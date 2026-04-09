"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Calendar, CreditCard, Shield, Settings, LogOut } from "lucide-react";
import { cn } from "@/components/Input";
import { useState, useEffect } from "react";

const navItems = [
  { label: "My Bookings", href: "/dashboard/bookings", icon: Calendar },
  { label: "Profile", href: "/dashboard/profile", icon: User },
  { label: "Payment", href: "/dashboard/payment", icon: CreditCard },
  { label: "Security", href: "/dashboard/security", icon: Shield },
  { label: "Preferences", href: "/dashboard/preferences", icon: Settings },
];

export function DashboardNav() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Desktop/Tablet Sidebar */}
      <aside className="hidden md:flex flex-col w-64 shrink-0 h-[calc(100vh-88px)] sticky top-[88px] border-r border-surface-container-highest bg-surface-bright/50 backdrop-blur-md px-4 py-8 overflow-y-auto">
        <div className="mb-8 px-4">
          <h2 className="text-xl font-black">Portal</h2>
          <p className="text-secondary text-xs uppercase tracking-widest font-bold mt-1">Marcus Thorne</p>
        </div>
        
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all min-h-[48px]",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-secondary hover:bg-surface-container hover:text-on-surface"
                )}
              >
                <item.icon size={20} className={isActive ? "text-primary" : "text-secondary"} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        
        <div className="mt-8 border-t border-surface-container pt-8">
          <Link
            href="/sign-in"
            onClick={() => sessionStorage.removeItem("rentivo_has_seen_splash")}
            className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-error hover:bg-error/10 transition-colors min-h-[48px]"
          >
            <LogOut size={20} />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Mobile Bottom Tab Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-xl border-t border-surface-container-highest pb-safe">
        <nav className="flex justify-around items-center px-4 pt-3 pb-4">
          {navItems.slice(0, 4).map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 min-w-[64px] min-h-[48px]",
                  isActive ? "text-primary" : "text-secondary hover:text-on-surface"
                )}
              >
                <div className={cn("p-1.5 rounded-full transition-colors", isActive && "bg-primary/10")}>
                  <item.icon size={24} className={isActive ? "text-primary" : "text-secondary"} />
                </div>
                <span className={cn("text-[10px] font-bold mt-0.5", isActive ? "text-primary" : "text-secondary")}>
                  {item.label.split(' ')[0]} {/* Shorten label for bottom bar */}
                </span>
              </Link>
            );
          })}
          {/* More menu trigger for mobile for the 5th item */}
          <Link
            href="/dashboard/preferences"
            className={cn(
              "flex flex-col items-center justify-center gap-1 min-w-[64px] min-h-[48px]",
              pathname.startsWith("/dashboard/preferences") ? "text-primary" : "text-secondary hover:text-on-surface"
            )}
          >
             <div className={cn("p-1.5 rounded-full transition-colors", pathname.startsWith("/dashboard/preferences") && "bg-primary/10")}>
                  <Settings size={24} />
             </div>
             <span className={cn("text-[10px] font-bold mt-0.5", pathname.startsWith("/dashboard/preferences") ? "text-primary" : "text-secondary")}>Settings</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
