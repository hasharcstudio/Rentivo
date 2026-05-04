"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/Input";
import { Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  const router = useRouter();
  const redirect = typeof window !== "undefined"
    ? new URLSearchParams(window.location.search).get("redirect") || ""
    : "";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password. Please try again or sign up.");
      setIsLoading(false);
      return;
    }

    router.push(redirect ? redirect : "/dashboard/bookings");
  };

  const handleGoogleSignIn = () => {
    signIn("google", {
      callbackUrl: redirect ? redirect : "/dashboard/bookings",
    });
  };

  const handleSocialClick = () => {
    window.alert("Social login is not enabled yet. Please sign in with email and password.");
  };

  return (
    <div className="min-h-screen flex w-full bg-background overflow-hidden">
      {/* Left Form Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-16 md:p-24 overflow-y-auto max-h-screen">
        <Link href="/" className="flex items-center gap-1 -ml-2 text-2xl font-black text-on-background tracking-tighter mb-16 w-fit">
          <div className="relative w-14 h-14">
            <Image src="/Rentivo.png" alt="Rentivo Logo" fill className="object-contain" priority />
          </div>
          <span className="-ml-2">RENTIVO</span>
        </Link>
        
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-4xl font-black tracking-tighter mb-2 text-on-background">Welcome Back</h1>
          <p className="text-secondary font-medium mb-10">Access your Kinetic Concierge account.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button type="button" onClick={handleGoogleSignIn} className="flex-1 flex items-center justify-center gap-3 bg-surface border border-outline-variant/30 py-3 rounded-xl font-bold hover:bg-surface-container-low transition-colors">
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

          <div className="relative flex items-center py-5 mb-4">
            <div className="flex-grow border-t border-outline-variant/30"></div>
            <span className="flex-shrink-0 mx-4 text-secondary text-xs uppercase tracking-widest font-bold">Or continue with email</span>
            <div className="flex-grow border-t border-outline-variant/30"></div>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-2xl bg-error-container text-error px-4 py-3 text-sm font-medium">
                {error}
              </div>
            )}
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

            <div className="flex items-center justify-between text-sm font-medium">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-outline focus:ring-primary text-primary bg-surface-container" />
                <span className="text-secondary group-hover:text-on-surface transition-colors">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-primary hover:text-primary-container transition-colors">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-4 rounded-xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed">
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p className="mt-8 text-center text-secondary font-medium">
            Do not have an account? <Link href="/sign-up" className="text-primary hover:underline">Apply for Membership</Link>
          </p>
        </div>
      </div>

      {/* Right Image Side */}
      <div className="hidden lg:block w-1/2 relative bg-surface-container-highest">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNcamMPG7dODgIkwNjCWfDnOrTLhaR3awyISr9r6s6Olw-Oxu85CFs48zfCmYvDnjMRCdxffEHolVsfhSQ7P6wSkuurfqhfcGgQO9k6YH1mDFxauStBcN41mD8-hTTmDQs2SdM_szMxJQEJ3F_XcDrWFEpXWtJOUnwgO-Y6pFCAe1TRqoh6i2Ofe7S0XMCJZ0yerj4I-wvBeJs0ZeMOWiBufMTiiFWQ0OlRDU-36iXP8asO0xZcLl5Rs1WY90JNj41T9X4hRCBc2p7"
          alt="Luxury car driving at night"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
        <div className="absolute bottom-16 left-16 right-16">
          <h2 className="text-4xl font-black text-white tracking-tighter mb-4 leading-tight">
            THE PURSUIT OF <span className="text-primary italic">PRECISION.</span>
          </h2>
          <p className="text-white/80 max-w-md leading-relaxed">
            Welcome back to the Kinetic Concierge. Your premium automotive experience awaits.
          </p>
        </div>
      </div>
    </div>
  );
}
