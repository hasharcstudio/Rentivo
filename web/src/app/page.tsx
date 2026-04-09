import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Repeat, Verified, Car, PhoneCall, Route } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-6 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-container-low to-background -z-10"></div>
        
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12 md:mt-20">
          <div className="z-10 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-on-surface mb-6">
              DRIVE THE <span className="text-primary italic">FUTURE.</span>
            </h1>
            <p className="text-secondary text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
              Experience the precision of electric performance. Rent the latest Tesla models and luxury vehicles with seamless digital booking.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-6">
              <Link href="/inventory" className="w-full sm:w-auto bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 min-h-[44px]">
                Explore Fleet <ArrowRight size={20} />
              </Link>
              
              <div className="flex -space-x-3 items-center">
                <div className="w-12 h-12 rounded-full border-4 border-surface overflow-hidden bg-surface-container relative">
                  <Image fill alt="Driver" className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQDqEzrgFlWMmOZ71YkfC4tUCZjKw06d0ElBoIIJkGAmyywz1YXU_ArqcO0qMr78pObZTcrlS9QKcFOnxRdNubZdRBh1VvbROpygpV3KS88-fht3XPuSB_QOvDc1qJzn7ZVflBSjHpjGVyMbOFSUIiStSWogPMuXlQJ_fTrj18QpqKca3lz1Tc9HiOffr-qyI020khbPf2GL_fCntE3jsygZnYXIadRggT9wCpp_u56GHpgq04wYBPwtgK2fGXjcLriZgClsafzo09" />
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-surface overflow-hidden bg-surface-container relative">
                  <Image fill alt="Customer" className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9ThW8Rm2ykVd6slxdNxxWTF5jD03iUk1BmUoFlldMCYrxs90QKPfMFcBoJFLS3D2tZ71_mCe__4Y9Lbr_L0w3HrUHeqAKCOVpF0WXzMBIi8wWQRzVjOqcjInWVYx7PHB3Q6bezc2xHt39qOsk61Ld6w_nRQ-9u7HQr2JWRhUn_x8fvuYcFAfLkUj7yWwZY1bcN7eKTIe2H9U4Y7wkN1EKryPWZuyr2hpcjMvWbZ29it958WkBSWmBZpd0uBVQWWxBZ2VhtsjGUdte" />
                </div>
                <div className="pl-6 text-sm font-bold text-on-surface">
                  4.9/5 <span className="text-secondary font-medium">from 2k+ reviews</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative mt-12 lg:mt-0 flex justify-center">
            <div className="relative w-[120%] lg:w-[150%] aspect-[4/3] lg:aspect-[16/9] -mr-8 lg:-mr-32 drop-shadow-2xl translate-x-4 lg:translate-x-12 hover:-translate-x-2 transition-transform duration-700 ease-out rounded-[2rem] overflow-hidden ml-4 lg:ml-0">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc6NRfput1VVasB43EBC7tFY-a94rzxFcfmhhel9ehyxRKyoZq4XlwafcUAwYDIwleg9cVhxL8fw_6cTMFRXFJdzi3VjrYsk0f8I1iz3orO4EBTz1ksoi-2U0kDsonCkp2np5JHO2mqLmSXY7_mVVfTkIMarQ7s9dEOZaiBjDqruWM1uosekUCu6kQZ1jBQMtwDE6PMxoKTnF8BBXPs49xjDdRXR6XubWWXIDN39WUl6tzeSTM8T7_vt2PqXoD1lr9D0Z-TqEFagtB" 
                alt="Sleek red Tesla Model S" 
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute md:-bottom-6 md:-left-6 bottom-0 left-0 glass-panel p-4 md:p-6 rounded-2xl shadow-xl border border-white/20 z-20">
              <div className="text-primary font-black text-xl md:text-2xl">0-60 MPH</div>
              <div className="text-on-surface text-3xl md:text-4xl font-bold">1.99s</div>
              <div className="text-secondary text-[10px] md:text-xs uppercase tracking-widest mt-1">Plaid Performance</div>
            </div>
          </div>
        </div>

        {/* Search Bar Floating */}
        <div className="max-w-6xl w-full mt-24 relative z-20">
          <form action="/search" className="bg-surface p-4 md:p-6 lg:p-8 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row gap-4 lg:gap-6 items-end border border-outline-variant/10">
            <div className="flex-1 w-full space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-secondary px-2">Location</label>
              <div className="flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-xl focus-within:bg-surface focus-within:ring-1 focus-within:ring-primary/20 transition-all border border-transparent min-h-[44px]">
                <MapPin className="text-primary" size={20} />
                <input name="location" className="bg-transparent border-none outline-none w-full font-medium text-on-surface" placeholder="Where to?" type="text" />
              </div>
            </div>
            
            <div className="flex-1 w-full space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-secondary px-2">Pick-up</label>
              <div className="flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-xl focus-within:bg-surface focus-within:ring-1 focus-within:ring-primary/20 transition-all border border-transparent min-h-[44px]">
                <Calendar className="text-primary" size={20} />
                <input aria-label="Pick-up date" name="pickup" className="bg-transparent border-none outline-none w-full font-medium text-on-surface appearance-none" type="date" />
              </div>
            </div>
            
            <div className="flex-1 w-full space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-secondary px-2">Return</label>
              <div className="flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-xl focus-within:bg-surface focus-within:ring-1 focus-within:ring-primary/20 transition-all border border-transparent min-h-[44px]">
                <Repeat className="text-primary" size={20} />
                <input aria-label="Return date" name="return" className="bg-transparent border-none outline-none w-full font-medium text-on-surface appearance-none" type="date" />
              </div>
            </div>
            
            <button className="bg-primary text-white w-full lg:w-auto px-10 py-3.5 rounded-xl font-black text-lg hover:bg-primary-container transition-colors min-h-[48px] shadow-lg shadow-primary/20">
              SEARCH
            </button>
          </form>
        </div>
      </section>

      {/* Partner Bar */}
      <section className="py-12 md:py-16 bg-surface-container-highest/30 overflow-hidden border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-secondary mb-8 opacity-70">Our Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-black tracking-tighter">VOLTS</span>
            <span className="text-2xl font-black italic">AutoTech</span>
            <span className="text-2xl font-black tracking-widest">LUXE</span>
            <span className="text-2xl font-black tracking-tighter">GRID</span>
            <span className="text-2xl font-black border-2 border-on-background px-3 py-1 tracking-widest">NOMAD</span>
          </div>
        </div>
      </section>

      {/* Facts in Numbers */}
      <section className="py-24 md:py-32 bg-background overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="space-y-2 group cursor-default">
              <div className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface group-hover:text-primary transition-colors">540<span className="text-primary">+</span></div>
              <p className="text-secondary font-bold uppercase tracking-widest text-[10px] md:text-xs">Luxury Cars</p>
            </div>
            <div className="space-y-2 group cursor-default">
              <div className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface group-hover:text-primary transition-colors">20<span className="text-primary">k</span></div>
              <p className="text-secondary font-bold uppercase tracking-widest text-[10px] md:text-xs">Active Clients</p>
            </div>
            <div className="space-y-2 group cursor-default">
              <div className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface group-hover:text-primary transition-colors">150<span className="text-primary">+</span></div>
              <p className="text-secondary font-bold uppercase tracking-widest text-[10px] md:text-xs">Global Hubs</p>
            </div>
            <div className="space-y-2 group cursor-default">
              <div className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface group-hover:text-primary transition-colors">12</div>
              <p className="text-secondary font-bold uppercase tracking-widest text-[10px] md:text-xs">Years Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 md:py-32 bg-surface-container-low md:rounded-[4rem] rounded-3xl mx-4 md:mx-6 mb-24 md:mb-32 relative shadow-[0_4px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface">Seamless Journey</h2>
            <p className="text-secondary mt-4 max-w-lg mx-auto">Three simple steps to your premium driving experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 relative">
            <div className="relative z-10 space-y-6 bg-surface md:bg-transparent p-8 md:p-0 rounded-3xl">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-xl shadow-primary/20">01</div>
              <h3 className="text-xl md:text-2xl font-bold">Select Vehicle</h3>
              <p className="text-secondary leading-relaxed">Choose from our curated collection of high-performance EVs and luxury sedans tailored to your taste.</p>
            </div>
            
            <div className="relative z-10 space-y-6 bg-surface md:bg-transparent p-8 md:p-0 rounded-3xl">
              <div className="w-16 h-16 bg-surface-container-highest text-on-surface rounded-2xl flex items-center justify-center text-2xl font-black">02</div>
              <h3 className="text-xl md:text-2xl font-bold">Confirm Booking</h3>
              <p className="text-secondary leading-relaxed">Swift digital verification and secure payment process. No hidden fees, just pure transparency.</p>
            </div>
            
            <div className="relative z-10 space-y-6 bg-surface md:bg-transparent p-8 md:p-0 rounded-3xl">
              <div className="w-16 h-16 bg-surface-container-highest text-on-surface rounded-2xl flex items-center justify-center text-2xl font-black">03</div>
              <h3 className="text-xl md:text-2xl font-bold">Enjoy the Road</h3>
              <p className="text-secondary leading-relaxed">Pick up your car or have it delivered to your doorstep. The future of mobility is now in your hands.</p>
            </div>
            
            {/* Decorative Line (Desktop Only) */}
            <div className="hidden md:block absolute top-8 left-1/4 right-[25%] h-0.5 border-t-2 border-dashed border-outline-variant/30 -z-0"></div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative w-full aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO9SpB9tR07uUXC3dupY9BHraa8-_1EYkRUMZMIyI2bC6OnqQ4JqQbzhO1Py0lih01MbRqD0YhFhe31aX99p6CAmSxeRH8pMzSIs1OWgxubET9zduO0IsFaDTk8km4Vta-sYCor0VzCp-D6OUQ0oRnsqqHSme8sFz40-fiGV6zg2CFjgPHLtgGkGOwppkPBtEEKO9yBAul_nIN0EuREDzemkecssxqSfygqcgFBhhESEk2UBSmshNqqR1PB69fFgzcSdKHbJSTuPZh" 
                alt="Luxury car interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-on-surface text-background p-6 md:p-8 rounded-3xl max-w-[280px] shadow-2xl z-20">
              <Verified className="text-primary mb-4" size={32} />
              <p className="font-bold text-sm md:text-lg leading-snug">The easiest rental experience I&apos;ve had in 20 years of travel</p>
              <p className="text-secondary mt-4 text-[10px] md:text-xs font-bold uppercase tracking-widest">— Marcus Thorne, CEO</p>
            </div>
          </div>
          
          <div className="space-y-10 order-1 lg:order-2">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">We offer the <br/><span className="text-primary italic">best experience.</span></h2>
              <p className="text-secondary text-lg leading-relaxed">We don&apos;t just rent cars; we provide a gateway to premium automotive culture and sustainable luxury.</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Car className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-2">Premium Electric Fleet</h4>
                  <p className="text-secondary leading-relaxed">Access the full Tesla range and emerging luxury EV brands exclusively.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <PhoneCall className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-2">Concierge Support</h4>
                  <p className="text-secondary leading-relaxed">24/7 dedicated support for any road assistance or vehicle inquiries.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Route className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-2">Unlimited Freedom</h4>
                  <p className="text-secondary leading-relaxed">Transparent pricing with no mileage limits on select luxury models.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-6 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-on-surface p-8 md:p-16 lg:p-24 text-center">
          <div className="absolute inset-0 opacity-30 mix-blend-overlay">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNcamMPG7dODgIkwNjCWfDnOrTLhaR3awyISr9r6s6Olw-Oxu85CFs48zfCmYvDnjMRCdxffEHolVsfhSQ7P6wSkuurfqhfcGgQO9k6YH1mDFxauStBcN41mD8-hTTmDQs2SdM_szMxJQEJ3F_XcDrWFEpXWtJOUnwgO-Y6pFCAe1TRqoh6i2Ofe7S0XMCJZ0yerj4I-wvBeJs0ZeMOWiBufMTiiFWQ0OlRDU-36iXP8asO0xZcLl5Rs1WY90JNj41T9X4hRCBc2p7" 
              alt="Night road"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-6 lg:mb-8 text-background">EXPERIENCE THE ROAD <br className="hidden md:block"/> LIKE NEVER BEFORE.</h2>
            <p className="text-surface-dim text-lg md:text-xl mb-10 max-w-xl">Ready to take the wheel? Join thousands of premium drivers today.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
              <Link href="/inventory" className="w-full sm:w-auto min-h-[44px] bg-primary text-white px-8 py-4 rounded-xl font-black text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(188,0,10,0.4)] flex justify-center items-center">
                Book Your Ride
              </Link>
              <Link href="/membership" className="w-full sm:w-auto min-h-[44px] bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-black text-lg hover:bg-white/20 transition-all flex justify-center items-center">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
