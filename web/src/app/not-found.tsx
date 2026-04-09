"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="relative z-10 space-y-6 max-w-2xl bg-surface/80 backdrop-blur-xl p-12 rounded-[2rem] border border-outline-variant/20 shadow-2xl">
        <div className="w-20 h-20 mx-auto bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
          <AlertTriangle size={40} />
        </div>
        <h1 className="text-7xl md:text-9xl font-black text-primary tracking-tighter">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Destination Unknown</h2>
        <p className="text-secondary leading-relaxed">
          The route you are looking for has been detoured or no longer exists. 
          Return to the main grid to continue your premium experience.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/inventory" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-primary/20 min-h-[48px]">
            Explore Fleet <ArrowRight size={20} />
          </Link>
          <Link href="/" className="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-highest transition-colors min-h-[48px] flex items-center justify-center">
            Return Home
          </Link>
        </div>
      </div>
      
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10 pointer-events-none -z-10">
        <Image 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQG54jU446zKzK50oWqI1q3LwZq0q2d_9U0pA1i8Y_Yh6O_I_yTqG_q2WjJkVw_rR-t9E" 
          alt="Abstract Blur" 
          fill 
          className="object-cover"
        />
      </div>
    </div>
  );
}
