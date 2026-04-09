"use client";

import Image from "next/image";
import Link from "next/link";
import { BookingCalendar } from "@/components/BookingCalendar";
import { Reviews } from "@/components/Reviews";
import { Zap, ShieldCheck, Music, Wifi, Gauge, CalendarClock } from "lucide-react";

export default function CarDetailPage() {
  return (
    <main className="pt-8 pb-20 px-4 sm:px-6 md:px-8 max-w-[1600px] mx-auto w-full">
      {/* Hero & Booking Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left: Car Showcase */}
        <div className="lg:col-span-8 space-y-8 order-2 lg:order-1 mt-8 lg:mt-0">
          <div className="relative overflow-visible group">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl hidden md:block"></div>
            <div className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] rounded-[2rem] overflow-hidden bg-surface-container-low shadow-xl">
              <Image 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt="Tesla Model S Plaid" 
                fill
                priority
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf4jhyP0-6pKU9RpqX9OX8FNTMC44ErxobpPDCLKcYkq8rdwRo9aOoldmJydPnc8gGCRK6Gu7bhP9gfRLBxXkiMigZOZ6LTGcBmqNq0DvHQbUJ_JPuPuYdhzstdXZKEvBocoPOjzRjlLMLyohb5V6_mBabSyQ9Jvl3XpzYQcEPIdDX5NvkpmtW7B8CNY7BlrOAUeCFzIewF7tWHSsUT5YY5sB_rVebDtsXSuXCUXcx45NYnqyHZKJHHMYWspqKaws5SZvDWjRB5IZA"
              />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <h1 className="text-white font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mb-2">
                  Tesla Model S <span className="text-primary italic">Plaid</span>
                </h1>
                <p className="text-white/80 text-sm md:text-lg max-w-lg font-medium">Beyond Ludicrous. The quickest accelerating car in production today.</p>
              </div>
            </div>
          </div>
          
          {/* Spec HUD: Minimalist Chips */}
          <div className="flex flex-nowrap overflow-x-auto gap-4 pb-4 px-2 -mx-2 hide-scrollbar">
            <div className="flex-shrink-0 bg-surface-container text-on-surface px-6 md:px-8 py-4 md:py-6 rounded-[1.5rem] flex flex-col items-center justify-center min-w-[140px] md:min-w-[160px]">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-secondary mb-1">Acceleration</span>
              <span className="text-xl md:text-2xl font-black text-on-surface">1.99s</span>
              <span className="text-[9px] md:text-[10px] font-bold text-secondary">0-60 MPH</span>
            </div>
            <div className="flex-shrink-0 bg-surface-container text-on-surface px-6 md:px-8 py-4 md:py-6 rounded-[1.5rem] flex flex-col items-center justify-center min-w-[140px] md:min-w-[160px]">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-secondary mb-1">Peak Power</span>
              <span className="text-xl md:text-2xl font-black text-on-surface">1,020hp</span>
              <span className="text-[9px] md:text-[10px] font-bold text-secondary">TRI-MOTOR</span>
            </div>
            <div className="flex-shrink-0 bg-surface-container text-on-surface px-6 md:px-8 py-4 md:py-6 rounded-[1.5rem] flex flex-col items-center justify-center min-w-[140px] md:min-w-[160px]">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-secondary mb-1">Range</span>
              <span className="text-xl md:text-2xl font-black text-on-surface">396mi</span>
              <span className="text-[9px] md:text-[10px] font-bold text-secondary">EST. EPA</span>
            </div>
            <div className="flex-shrink-0 bg-surface-container text-on-surface px-6 md:px-8 py-4 md:py-6 rounded-[1.5rem] flex flex-col items-center justify-center min-w-[140px] md:min-w-[160px]">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-secondary mb-1">Quarter Mile</span>
              <span className="text-xl md:text-2xl font-black text-on-surface">9.23s</span>
              <span className="text-[9px] md:text-[10px] font-bold text-secondary">@155 MPH</span>
            </div>
          </div>
        </div>

        {/* Right: Booking Details Form Sidebar */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 order-1 lg:order-2">
          <div className="bg-surface p-6 md:p-8 rounded-[2rem] shadow-2xl relative overflow-hidden border border-outline-variant/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
            
            <h2 className="text-2xl font-black mb-8 tracking-tight flex items-center gap-2">
              <CalendarClock className="text-primary" />
              Booking Details
            </h2>
            
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-secondary px-2">Duration</label>
                <BookingCalendar />
              </div>

              {/* Price Summary */}
              <div className="pt-6 border-t border-surface-container">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-secondary font-medium">Daily Rate</span>
                  <span className="font-bold">$450.00</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-secondary font-medium">3 Days Rental</span>
                  <span className="font-bold">$1,350.00</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-secondary font-medium">Insurance &amp; Fees</span>
                  <span className="font-bold">$120.00</span>
                </div>
                <div className="flex justify-between items-end pt-4 border-t border-primary/10">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Total Price</span>
                    <div className="text-3xl md:text-4xl font-black text-on-surface leading-none mt-1">$1,470.00</div>
                  </div>
                  <span className="text-[10px] text-secondary opacity-60 font-bold pb-1 uppercase tracking-widest">All taxes included</span>
                </div>
              </div>
              
              <Link 
                href="/checkout?car=2"
                className="w-full min-h-[56px] mt-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-black text-lg tracking-tight shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Checkout Securely
                <Zap size={20} className="fill-current" />
              </Link>
            </form>
          </div>
        </div>
      </div>

      {/* Key Features Bento Grid */}
      <section className="mt-16 md:mt-24">
        <h2 className="text-3xl md:text-4xl font-black mb-10 tracking-tight text-center lg:text-left">
          Engineering <span className="text-primary italic">Highlights</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Card */}
          <div className="md:col-span-2 bg-surface rounded-[2rem] overflow-hidden group shadow-[0_4px_40px_rgba(0,0,0,0.02)]">
            <div className="h-64 relative overflow-hidden">
              <Image 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Tesla interior with Autopilot" 
                fill
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiNNaTQwUnS8K0YBvsy1hP03oUyI1Z3AnqC_zdkgAa3fRvHPq6dFuwDzJ08bQXx5PPmvyksPfdtrNVjmai5JhOp4VxLR-sQUSGCyy72HJO1zBepMttULy3GwhB6zINWrRo23QS-zrO_xxkdNi_D6-cd0j2nSPWObFY9yMw2LFe-pJ_5jwPy0E2N0t3nEqRaSVgqNXtBicInVXI_p_AZ2SFJ17MLWP11MQVY4H-l0mLO1dzf2k-TOeZFjghJEuwdkkT2suq7S1A5XY3"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center p-8 md:p-12">
                <h3 className="text-white text-3xl font-black mb-2">Autopilot & FSD</h3>
                <p className="text-white/70 max-w-sm font-medium">Full Self-Driving capability enables your car to steer, accelerate and brake automatically within its lane.</p>
              </div>
            </div>
          </div>
          
          {/* Tall Card */}
          <div className="bg-surface-container rounded-[2rem] p-8 flex flex-col justify-between shadow-sm">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <ShieldCheck className="text-white" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Safety First</h3>
              <p className="text-secondary text-sm leading-relaxed">Engineered from the ground up as an electric vehicle, Model S is designed for a 5-star safety rating.</p>
            </div>
          </div>
          
          {/* Small Grid Items */}
          <div className="bg-primary text-white rounded-[2rem] p-8 flex flex-col items-center text-center justify-center shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
            <Music size={40} className="mb-4 text-white/90" />
            <h3 className="text-xl font-bold mb-2">Studio Sound</h3>
            <p className="text-white/80 text-sm">22-speaker, 960-watt audio system with Active Road Noise Reduction.</p>
          </div>
          <div className="bg-surface rounded-[2rem] p-8 flex flex-col justify-center border border-outline-variant/10 shadow-[0_4px_40px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-3 mb-4">
              <Wifi size={24} className="text-primary" />
              <h3 className="font-bold text-xl">Over-the-Air</h3>
            </div>
            <p className="text-secondary text-sm">Regular software updates introduce new features and improve performance continuously.</p>
          </div>
          <div className="bg-surface rounded-[2rem] p-8 flex flex-col justify-center border border-outline-variant/10 shadow-[0_4px_40px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-3 mb-4">
              <Gauge size={24} className="text-primary" />
              <h3 className="font-bold text-xl">Dynamic Torque</h3>
            </div>
            <p className="text-secondary text-sm">Three high-performance motors with carbon-sleeved rotors maintain peak power curve.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mt-16 md:mt-24">
        <h2 className="text-3xl font-black mb-8 tracking-tight">Visual <span className="text-primary italic">Tour</span></h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="rounded-[1.5rem] overflow-hidden aspect-square relative cursor-pointer group">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIV8xbgCBNICRkfFwq7xq7fjIPmOO-EuV2H3i0Pc8lb6EUMFxxYccbTqtPTJPWrDDsGxzcQfG4sQhvfmHPWV-3Rm0cOWb9ccVbH7Q5dBKYyyPx8mYQDW4mzFSv1FC26szQjBnh0rTwUPXEweyS6PXZcQUa_fZSWgOG6bdCaLNZPobjT-gbRVQjnZ9i4TopInJYv2wYDYpgiRKxkDfMS9H9TwK4kUvW2jje-9nDO00HtIqGJsSCOsm7OMjvFNJg1ZPp3QWJBeBxSv41" 
              alt="Front headlight" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700" 
            />
          </div>
          <div className="rounded-[1.5rem] overflow-hidden aspect-square relative cursor-pointer group">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXjTPNV7Fo92F1UVGs9pOD3FvpxP0GSAhVyzsWDM_Hcc06T0ZF5Yj_D4d49GbfOlg_VHScDMGec0N24aKm82KrmCT5IuEofxpwPBisl8yWUTaZnlQ-cEl4AcDtbDj7voEmbMwwwCgWE5qFSUIWE-sX5ueIJkCrAA7Bq5euSHrbla7tY3G6NpXBIstHVQMxi4goUwER3bejwyjbdsUrvbm_7qxtuQIKSoBvp0_wJY340-fam6vgy48cwVHzmp07sDgZGY_QmI1Ck2hV" 
              alt="Rear view" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700" 
            />
          </div>
          <div className="rounded-[1.5rem] overflow-hidden aspect-square relative cursor-pointer group">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUw1KXS_kro_AiFL2OcPLUrYacTpVUr8RnF0Z4G8hBTddip_sFgjOECRKmTtprwz9d5L0Vv7PONkllzni9u4Bk_2c211eid4Q34a79GKVuimCMH1SJN3MuAxm0NWxyqE-omdsfX1DoMvluK-XxZUvRpa5R1zUAUeK_lnVgJPmUN9vdeUCaTw5wvKJqoFMsZPKFvNl-t7ZgvOBUP2ArPDKZQLeHj5TEmBsJNcsT5vvnfPXndZFvS6gJLBYV1i5U_smOuJPpPdcW-xuS" 
              alt="Interior Yoke steering" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700" 
            />
          </div>
          <div className="rounded-[1.5rem] overflow-hidden aspect-square relative cursor-pointer group">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw-r20-KERrOCN1PjDILkCiXnR1uq5mw8Qhtg2Gf-0FNDK0fTKZtMh2zFoa3RyHtGViSfYbP6PZ33cJqqFWKObAvf-baLNT4Cob2cW8OqsWeI_9phdsw48T-IQcZRs-tU5Wmsmgw1D_PZOXyPWovl0IkKs1fIVqz-XCVGpkwT8mb59d_702woMTvblsLvkqICsAYADH6d5BpFNzsKuQL_upa9QILuMx5k2edVvvtfNWA1jfufjMYmXy34FJJXFowTSnqWadp2YJqFf" 
              alt="Side profile" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700" 
            />
          </div>
        </div>
      </section>

      {/* Reviews & Ratings Section */}
      <Reviews />
    </main>
  );
}
