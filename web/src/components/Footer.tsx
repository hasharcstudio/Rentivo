import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-surface-container-highest bg-surface-container-lowest mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 lg:px-12 py-16 w-full leading-relaxed max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="text-xl font-black text-on-surface">RENTIVO</div>
          <p className="text-secondary max-w-xs text-sm">
            Redefining luxury car rentals through precision, speed, and premium service.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">About</h4>
          <ul className="space-y-3">
            <li><Link className="text-secondary text-sm hover:text-primary transition-colors min-h-[44px] flex items-center" href="/about">Our Story</Link></li>
            <li><Link className="text-secondary text-sm hover:text-primary transition-colors min-h-[44px] flex items-center" href="/careers">Careers</Link></li>
            <li><Link className="text-secondary text-sm hover:text-primary transition-colors min-h-[44px] flex items-center" href="/blog">Press Room</Link></li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Vehicles Info</h4>
          <ul className="space-y-3">
            <li><Link className="text-secondary text-sm hover:text-primary transition-colors min-h-[44px] flex items-center" href="/inventory?category=electric">Electric Fleet</Link></li>
            <li><Link className="text-secondary text-sm hover:text-primary transition-colors min-h-[44px] flex items-center" href="/safety">Safety Standard</Link></li>
            <li><Link className="text-secondary text-sm hover:text-primary transition-colors min-h-[44px] flex items-center" href="/charging">Charging Network</Link></li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">App Download</h4>
          <div className="flex flex-col gap-4">
            <button className="bg-on-surface text-background px-6 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform min-h-[44px]">
              <span className="material-symbols-outlined">ios</span>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold leading-none opacity-60">Download on the</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </button>
            <button className="bg-on-surface text-background px-6 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform min-h-[44px]">
              <span className="material-symbols-outlined">play_store_installed</span>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold leading-none opacity-60">Get it on</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      <div className="px-6 lg:px-12 py-8 border-t border-surface-container-highest text-center md:text-left bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary text-sm">© {new Date().getFullYear()} Rentivo. All rights reserved. Precision Engineering.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-secondary text-sm hover:text-primary">Privacy</Link>
            <Link href="/terms" className="text-secondary text-sm hover:text-primary">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
