"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export function GlobalSplash() {
  const [showSplash, setShowSplash] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if user has seen the splash screen in this session
    const hasSeenSplash = sessionStorage.getItem("rentivo_has_seen_splash");
    if (hasSeenSplash) {
      setShowSplash(false);
    } else {
      // Wait for animation to finish then hide and tag as seen
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("rentivo_has_seen_splash", "true");
        // Force routing to Sign In for all fresh visitors
        router.push("/sign-in");
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [router]);

  if (!showSplash) return null;

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center p-6"
        >
          <div className="flex flex-col items-center">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-32 h-32 md:w-48 md:h-48 mb-6"
            >
              <Image
                src="/Rentivo.png"
                alt="Rentivo Logo"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* Text animation appears after 1 second */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-black tracking-widest text-on-background uppercase"
            >
              Rentivo
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-4 text-secondary text-sm md:text-base font-medium tracking-widest uppercase"
            >
              The Kinetic Concierge
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
