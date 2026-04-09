"use client";

import { CheckCircle2, Star, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MembershipPage() {
  return (
    <main className="w-full px-4 sm:px-6 md:px-8 max-w-[1600px] mx-auto pb-24 pt-8">
      <header className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">Elevate Your <span className="text-primary italic">Status.</span></h1>
        <p className="text-secondary text-lg md:text-xl leading-relaxed">
          Join the Kinetic Concierge club. Exclusive access to the world&apos;s most sought-after vehicles, priority delivery, and unparalleled flexibility.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
        
        {/* Silver Tier */}
        <div className="bg-surface rounded-[2.5rem] p-8 border border-outline-variant/10 shadow-sm flex flex-col hover:shadow-lg transition-shadow">
          <div className="mb-8">
            <h3 className="text-2xl font-black mb-2 text-on-surface/80">Silver</h3>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-4xl font-black">$0</span>
              <span className="text-secondary font-medium pb-1">/ month</span>
            </div>
            <p className="text-sm text-secondary">For the occasional enthusiast.</p>
          </div>
          
          <ul className="space-y-4 mb-10 flex-1">
             <li className="flex gap-3 items-start"><CheckCircle2 className="text-primary shrink-0" size={20} /> <span className="text-sm font-medium">Pay-per-day rentals</span></li>
             <li className="flex gap-3 items-start"><CheckCircle2 className="text-primary shrink-0" size={20} /> <span className="text-sm font-medium">Standard 24hr support</span></li>
             <li className="flex gap-3 items-start"><CheckCircle2 className="text-primary shrink-0" size={20} /> <span className="text-sm font-medium">Pick-up at global hubs</span></li>
          </ul>
          
          <Link href="/sign-up" className="w-full block text-center min-h-[48px] py-4 bg-surface-container hover:bg-surface-container-high rounded-xl font-bold transition-colors">
             Create Free Account
          </Link>
        </div>

        {/* Gold Tier */}
        <div className="bg-surface-container-highest rounded-[2.5rem] p-8 border border-primary/20 shadow-xl shadow-primary/5 flex flex-col relative transform md:-translate-y-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-primary-container text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-primary/20">
            Most Popular
          </div>
          
          <div className="mb-8 mt-2">
            <h3 className="text-2xl font-black mb-2">Gold</h3>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-4xl font-black">$299</span>
              <span className="text-secondary font-medium pb-1">/ month</span>
            </div>
            <p className="text-sm text-secondary">Premium access and convenience.</p>
          </div>
          
          <ul className="space-y-4 mb-10 flex-1">
             <li className="flex gap-3 items-start"><CheckCircle2 className="text-primary shrink-0" size={20} /> <span className="text-sm font-medium">15% off all daily rates</span></li>
             <li className="flex gap-3 items-start"><CheckCircle2 className="text-primary shrink-0" size={20} /> <span className="text-sm font-medium">Free home/hotel delivery (within 50 miles)</span></li>
             <li className="flex gap-3 items-start"><CheckCircle2 className="text-primary shrink-0" size={20} /> <span className="text-sm font-medium">Priority booking access</span></li>
             <li className="flex gap-3 items-start"><CheckCircle2 className="text-primary shrink-0" size={20} /> <span className="text-sm font-medium">Two free upgrade days per year</span></li>
          </ul>
          
          <Link href="/sign-up?tier=gold" className="w-full block text-center min-h-[48px] py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-black shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
             Select Gold
          </Link>
        </div>

        {/* Black Tier */}
        <div className="bg-on-surface rounded-[2.5rem] p-8 text-background flex flex-col relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
             <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNcamMPG7dODgIkwNjCWfDnOrTLhaR3awyISr9r6s6Olw-Oxu85CFs48zfCmYvDnjMRCdxffEHolVsfhSQ7P6wSkuurfqhfcGgQO9k6YH1mDFxauStBcN41mD8-hTTmDQs2SdM_szMxJQEJ3F_XcDrWFEpXWtJOUnwgO-Y6pFCAe1TRqoh6i2Ofe7S0XMCJZ0yerj4I-wvBeJs0ZeMOWiBufMTiiFWQ0OlRDU-36iXP8asO0xZcLl5Rs1WY90JNj41T9X4hRCBc2p7" 
                alt="Texture"
                fill
                className="object-cover"
              />
          </div>
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="mb-8">
              <div className="flex justify-between items-start mb-2">
                 <h3 className="text-2xl font-black">Kinetic Black</h3>
                 <Star className="text-primary fill-primary" size={24} />
              </div>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-black">$1,499</span>
                <span className="text-white/50 font-medium pb-1">/ month</span>
              </div>
              <p className="text-sm text-white/50">Fractional ownership. Ultimate freedom.</p>
            </div>
            
            <ul className="space-y-4 mb-10 flex-1">
               <li className="flex gap-3 items-start"><CheckCircle2 className="text-primary shrink-0" size={20} /> <span className="text-sm font-medium">30 days of standard fleet access included</span></li>
               <li className="flex gap-3 items-start"><CheckCircle2 className="text-primary shrink-0" size={20} /> <span className="text-sm font-medium">10 days of hypercar access included</span></li>
               <li className="flex gap-3 items-start"><CheckCircle2 className="text-primary shrink-0" size={20} /> <span className="text-sm font-medium">Global vehicle sourcing & delivery</span></li>
               <li className="flex gap-3 items-start"><CheckCircle2 className="text-primary shrink-0" size={20} /> <span className="text-sm font-medium">Dedicated personal concierge</span></li>
            </ul>
            
            <Link href="/sign-up?tier=black" className="w-full block text-center min-h-[48px] py-4 bg-white text-on-surface rounded-xl font-black hover:bg-surface transition-colors mt-auto">
               Apply for Black
            </Link>
          </div>
        </div>
        
      </div>
      
      {/* Enterprise / Feature Highlights */}
      <div className="bg-surface-container-low rounded-[3rem] p-8 md:p-16 max-w-6xl mx-auto border border-outline-variant/10 text-center">
        <h2 className="text-3xl font-black mb-4">Corporate & Studio Leasing</h2>
        <p className="text-secondary max-w-2xl mx-auto mb-10">We provide specialized long-term leases, multi-vehicle fleets for executives, and pristine vehicles for film and television production.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-container transition-colors p-2">
          Contact our Enterprise Team <ArrowRight size={20} />
        </Link>
      </div>

    </main>
  );
}
