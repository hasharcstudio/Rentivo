"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, Calendar, MapPin, ReceiptText } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-2xl w-full bg-surface p-8 md:p-16 rounded-[2rem] border border-outline-variant/10 shadow-2xl relative overflow-hidden text-center">
        {/* Background confetti/glow effect */}
        <div className="absolute top-0 left-1/2 -ml-32 -mt-32 w-64 h-64 bg-[#34A853]/20 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10">
          <div className="w-24 h-24 bg-[#34A853]/10 text-[#34A853] rounded-full mx-auto flex items-center justify-center mb-8">
            <CheckCircle2 size={48} />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Reservation Confirmed</h1>
          <p className="text-secondary text-lg mb-8 leading-relaxed max-w-lg mx-auto">
            Your premium experience is locked in. We&apos;ve sent a detailed confirmation to your email.
          </p>
          
          <div className="bg-surface-container-low rounded-[1.5rem] p-6 mb-10 text-left">
            <div className="flex justify-between items-center mb-6 pb-6 border-b border-surface-container">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-1">Confirmation Number</p>
                <p className="text-2xl font-mono font-bold tracking-wider text-primary">RNT-99281X</p>
              </div>
              <ReceiptText className="text-secondary" size={32} />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Calendar className="text-secondary shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">Pickup Time</p>
                  <p className="font-bold">Oct 24, 2024</p>
                  <p className="text-sm">10:00 AM</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="text-secondary shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">Location</p>
                  <p className="font-bold">Miami Flagship</p>
                  <p className="text-sm text-secondary truncate">100 Luxury Blvd</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dashboard/bookings" className="bg-primary text-white py-4 px-8 rounded-xl font-black hover:bg-primary-container transition-colors shadow-lg shadow-primary/20 min-h-[48px] flex items-center justify-center gap-2">
              View Booking Details <ArrowRight size={20} />
            </Link>
            <Link href="/" className="bg-surface-container text-on-surface py-4 px-8 rounded-xl font-bold hover:bg-surface-container-high transition-colors min-h-[48px] flex items-center justify-center">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
