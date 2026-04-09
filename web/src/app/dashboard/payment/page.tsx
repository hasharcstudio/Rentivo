"use client";

import { CreditCard, Plus, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function PaymentMethodsPage() {
  return (
    <div className="w-full">
      <header className="mb-8">
        <h1 className="text-3xl font-black mb-2">Payment Methods</h1>
        <p className="text-secondary">Manage your billing information and view transaction history.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          {/* Primary Card */}
          <div className="bg-on-surface p-6 sm:p-8 rounded-[2rem] text-background relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-20 mix-blend-overlay">
               <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQG54jU446zKzK50oWqI1q3LwZq0q2d_9U0pA1i8Y_Yh6O_I_yTqG_q2WjJkVw_rR-t9E" 
                alt="Abstract texture"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-12">
                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md">
                  <CreditCard className="text-white" size={24} />
                </div>
                <span className="bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full text-white">Default Primary</span>
              </div>
              
              <div className="space-y-1 mb-8">
                <p className="text-white/50 text-xs uppercase font-bold tracking-widest">Card Number</p>
                <div className="text-2xl font-mono tracking-widest flex items-center gap-4">
                  <span>••••</span>
                  <span>••••</span>
                  <span>••••</span>
                  <span>4242</span>
                </div>
              </div>
              
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Cardholder Name</p>
                  <p className="font-bold tracking-tight">MARCUS THORNE</p>
                </div>
                <div>
                  <p className="text-white/50 text-[10px] uppercase font-bold tracking-widest text-right">Expires</p>
                  <p className="font-bold tracking-tight">12/28</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Other Methods */}
          <div className="bg-surface rounded-2xl p-6 border border-outline-variant/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-surface-container-high p-3 rounded-xl">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05 1.95-3.08 1.95-1.09 0-1.45-.69-2.73-.69-1.28 0-1.63.66-2.69.69-1.06.03-2.27-1.12-3.15-2.39C3.59 17.21 2.2 13.06 4.14 10.22c.98-1.44 2.45-2.34 4.01-2.37 1.18-.03 2.31.81 3.08.81.75 0 2.14-.97 3.53-.84 1.48.06 2.84.62 3.68 1.84-2.95 1.75-2.48 5.75.44 6.94-1.32 3.73-4.04 7.64-1.83 3.68zM12.03 7.25c-.16-2.12 1.6-4.12 3.84-4.25.35 2.25-1.78 4.28-3.84 4.25z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <p className="font-bold">Apple Pay</p>
                <p className="text-xs text-secondary">Linked via Wallet</p>
              </div>
            </div>
            <button className="text-error font-bold text-sm min-h-[44px] px-2 rounded-md hover:bg-error/10 transition-colors">Remove</button>
          </div>

          <button className="w-full border-2 border-dashed border-outline-variant/50 hover:border-primary/50 hover:bg-primary/5 rounded-2xl py-6 flex flex-col items-center justify-center gap-2 transition-colors text-secondary hover:text-primary min-h-[48px]">
            <Plus size={24} />
            <span className="font-bold">Add Payment Method</span>
          </button>
        </div>

        <div className="lg:col-span-4 bg-surface-container-low rounded-3xl p-6 border border-outline-variant/10">
          <ShieldCheck size={32} className="text-[#34A853] mb-4" />
          <h3 className="font-bold text-lg mb-2">Secure Vault</h3>
          <p className="text-secondary text-sm leading-relaxed mb-6">
            Rentivo uses military-grade encryption to secure your financial data. 
            We do not store complete card numbers on our servers.
          </p>
          <div className="border-t border-surface-container pt-4">
             <h4 className="font-bold text-sm mb-4">Recent Transactions</h4>
             <div className="space-y-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-bold">Model S Plaid</p>
                    <p className="text-[10px] text-secondary">Oct 24 • RNT-88902A</p>
                  </div>
                  <p className="text-sm font-bold">$3,560.00</p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-bold text-secondary">Membership Fee</p>
                    <p className="text-[10px] text-secondary">Nov 1</p>
                  </div>
                  <p className="text-sm font-bold text-secondary">$1,200.00</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
