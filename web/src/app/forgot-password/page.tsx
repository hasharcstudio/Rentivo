"use client";

import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/Input";
import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

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
          {submitted ? (
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <Mail size={32} />
              </div>
              <h1 className="text-4xl font-black tracking-tighter mb-4 text-on-background">Check Your Email</h1>
              <p className="text-secondary font-medium mb-10 leading-relaxed">
                We have sent a secure password reset link to your email address. It will expire in 15 minutes.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="w-full bg-surface border border-outline-variant/30 text-on-surface py-4 rounded-xl font-bold hover:bg-surface-container-low transition-colors"
              >
                Try another email
              </button>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <h1 className="text-4xl font-black tracking-tighter mb-2 text-on-background">Reset Password</h1>
              <p className="text-secondary font-medium mb-10">Enter your email and will send you a recovery link.</p>
              
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <Input 
                  label="Registered Email" 
                  type="email" 
                  placeholder="name@example.com" 
                  Icon={Mail}
                  required 
                />

                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-container text-white py-4 rounded-xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20">
                  Send Recovery Link <ArrowRight size={20} />
                </button>
              </form>
            </div>
          )}

          <p className="mt-8 text-center text-secondary font-medium">
            Remembered your password? <Link href="/sign-in" className="text-primary hover:underline">Sign In</Link>
          </p>
        </div>
      </div>

      {/* Right Image Side */}
      <div className="hidden lg:block w-1/2 relative bg-surface-container-highest">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQG54jU446zKzK50oWqI1q3LwZq0q2d_9U0pA1i8Y_Yh6O_I_yTqG_q2WjJkVw_rR-t9E"
          alt="Abstract motion blur"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
        <div className="absolute bottom-16 left-16 right-16">
          <h2 className="text-4xl font-black text-white tracking-tighter mb-4 leading-tight">
            SECURE YOUR <span className="text-primary italic">GARAGE.</span>
          </h2>
          <p className="text-white/80 max-w-md leading-relaxed">
            Protecting your premium experiences and elite reservations with state-of-the-art security.
          </p>
        </div>
      </div>
    </div>
  );
}
