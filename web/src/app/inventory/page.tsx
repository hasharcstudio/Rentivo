"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Search, MapPin, SlidersHorizontal, ChevronRight, X, 
  Settings, Fuel, Users, Zap, Gauge, ArrowRight
} from "lucide-react";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cars } from "@/data/cars";

export default function InventoryPage() {
  const [isAuthenticated] = useState(() => {
    return typeof window !== "undefined" && sessionStorage.getItem("rentivo_authenticated") === "true";
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Filter States
  const [searchLocation, setSearchLocation] = useState("");
  const [priceRange, setPriceRange] = useState(35000);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const CARS_PER_PAGE = 6;



  const toggleCategory = (cat: string) => {
    setCurrentPage(1);
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const resetFilters = () => {
    setSearchLocation("");
    setPriceRange(35000);
    setSelectedCategories([]);
    setCurrentPage(1);
  };

  const categoriesList = useMemo(() => Array.from(new Set(cars.map(c => c.type))), []);

  // Derived filtered cars
  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      const matchesLocation = searchLocation === "" || car.location.toLowerCase().includes(searchLocation.toLowerCase());
      const matchesPrice = car.price <= priceRange;
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(car.type);
      
      return matchesLocation && matchesPrice && matchesCategory;
    });
  }, [searchLocation, priceRange, selectedCategories]);

  const totalPages = Math.ceil(filteredCars.length / CARS_PER_PAGE);
  const paginatedCars = filteredCars.slice((currentPage - 1) * CARS_PER_PAGE, currentPage * CARS_PER_PAGE);

  const renderFilterPanel = () => (
    <div className="space-y-10 p-6 lg:p-0">
      <div className="flex justify-between items-center lg:hidden mb-6">
        <h2 className="text-xl font-bold">Filters</h2>
        <button 
          aria-label="Close filters"
          className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-lg bg-surface-container hover:bg-surface-container-high" 
          onClick={() => setMobileFiltersOpen(false)}
        >
          <X size={20} />
        </button>
      </div>

      <div>
        <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-6 flex justify-between items-center">
          Location
          {searchLocation && <span className="text-secondary normal-case text-[10px]">Filtering...</span>}
        </h3>
        <div className="relative">
          <input 
            className="w-full bg-surface-container-low border border-transparent rounded-lg py-4 pl-4 pr-12 outline-none focus:bg-surface focus:ring-1 focus:ring-primary/20 transition-all text-on-surface min-h-[44px]" 
            placeholder="Search city (e.g. Dhaka)" 
            type="text"
            value={searchLocation}
            onChange={(e) => {
              setSearchLocation(e.target.value);
              setCurrentPage(1);
            }}
          />
          <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary" size={20} />
        </div>
      </div>

      <div>
        <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-6">Car Categories</h3>
        <div className="space-y-4">
          {categoriesList.map((cat) => (
            <label key={cat} className="flex items-center justify-between group cursor-pointer min-h-[24px]">
              <span className="text-on-surface font-medium group-hover:text-primary transition-colors">{cat}</span>
              <input 
                checked={selectedCategories.includes(cat)} 
                onChange={() => toggleCategory(cat)}
                className="rounded border-outline/30 text-primary focus:ring-primary h-5 w-5 bg-surface cursor-pointer" 
                type="checkbox"
              />
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-6 flex justify-between items-center">
          Max Price Range
          <span className="text-on-surface bg-surface-container px-2 py-1 rounded max-w-fit">${priceRange}/day</span>
        </h3>
        <input 
          aria-label="Filter by maximum price per day"
          className="w-full accent-primary h-1.5 bg-surface-container-highest rounded-full appearance-none cursor-pointer" 
          type="range"
          min={250}
          max={35000}
          step={250}
          value={priceRange}
          onChange={(e) => {
            setPriceRange(Number(e.target.value));
            setCurrentPage(1);
          }}
        />
        <div className="flex justify-between mt-4 text-sm font-bold text-secondary">
          <span>$250</span>
          <span>$35,000</span>
        </div>
      </div>

      <button 
        onClick={resetFilters}
        className="w-full py-4 bg-surface-container-highest text-on-surface font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-100 min-h-[48px]"
      >
        Reset Filters
      </button>
    </div>
  );

  return (
    <main className="w-full px-4 sm:px-6 md:px-8 max-w-[1600px] mx-auto pb-20 pt-8">
      {/* Editorial Header */}
      <header className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">Precision <span className="text-primary italic">Inventory.</span></h1>
        <p className="text-secondary max-w-2xl text-base md:text-lg leading-relaxed">
          Experience the pinnacle of automotive engineering. From high-performance supercars to sustainable luxury in Dhaka and beyond, our fleet is curated for those who demand excellence on every mile.
        </p>
      </header>
      
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-8">
        <button 
          onClick={() => setMobileFiltersOpen(true)}
          className="w-full bg-surface-container-low border border-outline-variant/20 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-on-surface min-h-[48px]"
        >
          <SlidersHorizontal size={20} />
          Show Filters {selectedCategories.length > 0 && `(${selectedCategories.length})`}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-80 shrink-0">
          <div className="sticky top-32">
            {renderFilterPanel()}
          </div>
        </aside>

        {/* Mobile Filter Drawer */}
        <AnimatePresence>
          {mobileFiltersOpen && (
            <motion.div 
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              className="fixed inset-y-0 left-0 z-50 w-full max-w-sm bg-background shadow-2xl overflow-y-auto lg:hidden pt-6"
            >
              {renderFilterPanel()}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Mobile Filter Backdrop */}
        <AnimatePresence>
          {mobileFiltersOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFiltersOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
            />
          )}
        </AnimatePresence>

        {/* Inventory Grid */}
        <section className="flex-grow">
          {filteredCars.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
               <div className="w-24 h-24 bg-surface-container-highest rounded-full flex items-center justify-center mb-6">
                 <Search size={40} className="text-secondary opacity-50" />
               </div>
               <h3 className="text-2xl font-bold mb-2">No vehicles found</h3>
               <p className="text-secondary max-w-md">We couldn&apos;t find any cars matching your current filters. Try adjusting your price range, location, or categories.</p>
               <button onClick={resetFilters} className="mt-8 text-primary font-bold hover:underline">Clear all filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16">
              <AnimatePresence mode="popLayout">
                {paginatedCars.map((car) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    key={car.id} 
                    className="group relative flex flex-col"
                  >
                    <Link href={`/fleet/${car.id}`} className="block relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-surface-container-low mb-6">
                      <Image 
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {car.badge && (
                        <div className="absolute top-4 left-4 glass-panel px-4 py-2 rounded-lg z-10 text-on-background">
                          <span className="text-[10px] sm:text-xs font-black uppercase tracking-tighter">{car.badge}</span>
                        </div>
                      )}
                      
                      {/* Location Badge */}
                      <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-md z-10 text-on-background flex items-center gap-1">
                        <MapPin size={12} className="text-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">{car.location}</span>
                      </div>
                    </Link>
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 flex-grow mb-6">
                      <div>
                        <Link href={`/fleet/${car.id}`}>
                          <h2 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{car.name}</h2>
                        </Link>
                        <div className="flex flex-wrap gap-2 text-secondary text-xs sm:text-sm">
                          <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded">
                            <Settings size={14} /> {car.transmission}
                          </div>
                          <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded">
                            {car.fuel.includes("hp") || car.fuel === "Electric" || car.fuel === "Hybrid" ? <Zap size={14} /> : <Fuel size={14} />} {car.fuel}
                          </div>
                          <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded">
                            <Users size={14} /> {car.seats}
                          </div>
                        </div>
                      </div>
                      <div className="sm:text-right">
                        <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-1">Per day</span>
                        <span className="text-xl sm:text-2xl font-black text-primary border-b-2 border-primary/20 pb-1">${car.price}</span>
                      </div>
                    </div>
                    
                    {/* Book Now Button aligned at the bottom */}
                    <Link
                      href={isAuthenticated ? `/checkout?car=${car.id}` : `/sign-in?redirect=${encodeURIComponent(`/checkout?car=${car.id}`)}`}
                      className="mt-auto w-full min-h-[48px] bg-surface-container-highest hover:bg-gradient-to-br hover:from-primary hover:to-primary-container text-on-surface hover:text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all group-hover:shadow-lg group-hover:shadow-primary/20"
                    >
                      Book Now
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-20 flex justify-center gap-3">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button 
                  key={i}
                  onClick={() => {
                    setCurrentPage(i + 1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`w-12 h-12 flex items-center justify-center rounded-xl font-bold min-h-[48px] min-w-[48px] transition-colors ${
                    currentPage === i + 1 
                      ? "bg-primary text-white" 
                      : "bg-surface-container-low text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button 
                aria-label="Next page"
                onClick={() => {
                    setCurrentPage(prev => Math.min(prev + 1, totalPages));
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                disabled={currentPage === totalPages}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface font-bold hover:bg-surface-container-high transition-colors min-h-[48px] min-w-[48px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
