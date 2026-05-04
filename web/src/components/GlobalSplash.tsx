"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useSession } from "next-auth/react";

export function GlobalSplash() {
  const [showSplash, setShowSplash] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { status } = useSession();

  useEffect(() => {
    setIsMounted(true);
    
    // Only show splash on initial app load, not on subsequent navigations
    // Skip splash if user is already authenticated
    if (status === "authenticated") {
      sessionStorage.setItem("rentivo_has_seen_splash", "true");
      setShowSplash(false);
      return;
    }

    // Check if splash was already shown in this session
    const hasSeen = sessionStorage.getItem("rentivo_has_seen_splash");
    if (!hasSeen && status !== "loading") {
      setShowSplash(true);
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("rentivo_has_seen_splash", "true");
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [status, isMounted]);

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
