"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { 
  MapPin, Calendar, Repeat, ArrowRight, Settings, Fuel, Users, Zap, Search as SearchIcon
} from "lucide-react";
import { cars } from "@/data/cars";

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const location = searchParams.get('location') || "";
  const pickup = searchParams.get('pickup') || "";
  const returnDate = searchParams.get('return') || "";

  const results = location 
    ? cars.filter(c => c.location.toLowerCase().includes(location.toLowerCase()) || c.name.toLowerCase().includes(location.toLowerCase()))
    : cars;

  return (
    <main className="w-full px-4 sm:px-6 md:px-8 max-w-[1600px] mx-auto pb-20 pt-8">
      {/* Search Header */}
      <div className="bg-surface p-6 md:p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 mb-12">
        <h1 className="text-2xl md:text-3xl font-black mb-6">Search Results</h1>
        
        <form className="flex flex-col lg:flex-row gap-4" action="/search">
          <div className="flex-1 space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-secondary px-2">Location</label>
            <div className="flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-xl focus-within:bg-surface focus-within:ring-1 focus-within:ring-primary/20 transition-all">
              <MapPin className="text-primary" size={20} />
              <input name="location" defaultValue={location} className="bg-transparent border-none outline-none w-full font-medium text-on-surface" placeholder="Where to?" type="text" />
            </div>
          </div>
          
          <div className="flex-1 space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-secondary px-2">Pick-up</label>
            <div className="flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-xl focus-within:bg-surface focus-within:ring-1 focus-within:ring-primary/20 transition-all">
              <Calendar className="text-primary" size={20} />
              <input aria-label="Pick-up date" name="pickup" defaultValue={pickup} className="bg-transparent border-none outline-none w-full font-medium text-on-surface appearance-none" type="date" />
            </div>
          </div>
          
          <div className="flex-1 space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-secondary px-2">Return</label>
            <div className="flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-xl focus-within:bg-surface focus-within:ring-1 focus-within:ring-primary/20 transition-all">
              <Repeat className="text-primary" size={20} />
              <input aria-label="Return date" name="return" defaultValue={returnDate} className="bg-transparent border-none outline-none w-full font-medium text-on-surface appearance-none" type="date" />
            </div>
          </div>
          
          <div className="flex-none flex items-end">
            <button className="bg-primary text-white w-full lg:w-auto px-8 py-3.5 rounded-xl font-black text-lg hover:scale-105 transition-transform min-h-[48px] shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
              <SearchIcon size={20} /> Update
            </button>
          </div>
        </form>
      </div>

      <div className="mb-8 flex justify-between items-end border-b border-surface-container pb-4">
        <div>
          <h2 className="text-xl font-bold">
            {location ? `Available Vehicles near "${location}"` : "All Available Vehicles"}
          </h2>
          <p className="text-secondary text-sm">Showing {results.length} matches for your dates.</p>
        </div>
      </div>

      {/* Results Grid - Similar to Inventory but simplified */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {results.map((car) => (
          <div key={car.id} className="group flex flex-col bg-surface rounded-[2rem] border border-outline-variant/10 overflow-hidden shadow-sm hover:shadow-[0_4px_40px_rgba(0,0,0,0.04)] transition-all">
            <Link href={`/fleet/${car.id}`} className="block relative aspect-[16/10] bg-surface-container-low">
              <Image 
                src={car.image}
                alt={car.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {car.badge && (
                <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-lg z-10 text-on-background">
                  <span className="text-[10px] font-black uppercase tracking-tighter">{car.badge}</span>
                </div>
              )}
            </Link>
            
            <div className="p-6 flex flex-col flex-grow">
              <Link href={`/fleet/${car.id}`}>
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{car.name}</h2>
              </Link>
              <div className="flex flex-wrap gap-2 text-secondary text-xs mb-6">
                <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded">
                  <Settings size={12} /> {car.transmission}
                </div>
                <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded">
                  {car.fuel.includes("hp") || car.fuel === "Electric" ? <Zap size={12} /> : <Fuel size={12} />} {car.fuel}
                </div>
                <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded">
                  <Users size={12} /> {car.seats} Seats
                </div>
              </div>
              
              <div className="mt-auto flex justify-between items-center pt-4 border-t border-surface-container">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-0.5">Per day</span>
                  <span className="text-2xl font-black text-on-surface">${car.price}</span>
                </div>
                <Link href={`/checkout?car=${car.id}`} className="bg-primary text-white py-2 px-6 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-sm">
                  Book <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center font-bold text-xl animate-pulse">Loading search...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}
