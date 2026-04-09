"use client";

import { Input } from "@/components/Input";
import { Send, MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="w-full px-4 sm:px-6 md:px-8 max-w-[1600px] mx-auto pb-24 pt-8">
      <header className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Phone size={32} />
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Connect with <span className="text-primary italic">Concierge.</span></h1>
        <p className="text-secondary text-lg md:text-xl leading-relaxed">
          Our dedicated luxury specialists are available 24/7 to assist with your pristine fleet reservations, specific vehicle requests, or membership inquiries.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 max-w-7xl mx-auto">
        {/* Contact Form */}
        <div className="bg-surface p-8 md:p-12 rounded-[2rem] shadow-2xl border border-outline-variant/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
          
          <h2 className="text-2xl md:text-3xl font-black mb-8">Send an Inquiry</h2>
          
          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="First Name" type="text" placeholder="James" required />
              <Input label="Last Name" type="text" placeholder="Bond" required />
            </div>
            
            <Input label="Email Address" type="email" placeholder="name@example.com" Icon={Mail} required />
            
            <Input label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" Icon={Phone} />
            
            <div className="space-y-1.5 w-full">
              <label className="text-[10px] font-bold uppercase tracking-widest text-secondary px-2">Message</label>
              <textarea 
                rows={5}
                className="w-full bg-surface-container-low text-on-surface font-medium border-0 rounded-lg p-4 outline-none focus:bg-surface focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                placeholder="How can we assist you with your premium experience?"
                required
              ></textarea>
            </div>
            
            <button className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 mt-4 min-h-[56px]">
              Send Message <Send size={20} />
            </button>
          </form>
        </div>

        {/* Global Hubs Info */}
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-black mb-6">Global Hubs</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start bg-surface-container rounded-[1.5rem] p-6">
                <div className="bg-surface p-3 rounded-xl shadow-sm"><MapPin className="text-primary" size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Los Angeles, CA</h4>
                  <p className="text-secondary text-sm mb-2">90210 Wilshire Blvd, Beverly Hills</p>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-primary">Flagship Showroom</div>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-surface-container rounded-[1.5rem] p-6">
                <div className="bg-surface p-3 rounded-xl shadow-sm"><MapPin className="text-primary" size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Miami, FL</h4>
                  <p className="text-secondary text-sm mb-2">400 Sunny Isles Blvd, North Miami Beach</p>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-primary">Coastal Fleet</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-black mb-6">Direct Lines</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface-container-low p-6 rounded-[1.5rem] border border-outline-variant/10">
                <Phone className="text-secondary mb-4" size={24} />
                <h4 className="font-bold mb-1">Reservations</h4>
                <p className="text-primary font-bold text-lg">+1 (800) 555-RENT</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-[1.5rem] border border-outline-variant/10">
                <Clock className="text-secondary mb-4" size={24} />
                <h4 className="font-bold mb-1">Roadside ASST</h4>
                <p className="text-primary font-bold text-lg">24/7 Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual Map/Brand Image */}
      <div className="w-full aspect-[21/9] md:aspect-[32/9] relative rounded-[2rem] overflow-hidden group">
        <Image 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQG54jU446zKzK50oWqI1q3LwZq0q2d_9U0pA1i8Y_Yh6O_I_yTqG_q2WjJkVw_rR-t9E" 
          alt="Night driving abstract"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8 md:p-12">
          <div className="text-white">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2">Wherever the road takes you.</h2>
            <p className="font-medium text-white/80">Premium service in over 150 elite destinations worldwide.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
