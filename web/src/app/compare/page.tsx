"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { cars as allCars } from "@/data/cars";

export default function ComparePage() {
  // Pick two flagship vehicles for the comparison showcase
  const [isAuthenticated] = useState(() => {
    return typeof window !== "undefined" && sessionStorage.getItem("rentivo_authenticated") === "true";
  });

  const bugatti = allCars.find(c => c.id === 7)!;
  const rimac = allCars.find(c => c.id === 11)!;

  const cars = [
    {
      id: bugatti.id,
      name: bugatti.name,
      image: bugatti.image,
      price: `$${bugatti.price.toLocaleString()} / day`,
      specs: {
        engine: "8.0L Quad-Turbo W16",
        power: "1,578 hp",
        acceleration: "2.3s (0-60)",
        topSpeed: "304 mph",
        range: "8.5 mpg (Est)",
        seats: "2",
        autopilot: false,
      }
    },
    {
      id: rimac.id,
      name: rimac.name,
      image: rimac.image,
      price: `$${rimac.price.toLocaleString()} / day`,
      specs: {
        engine: "Quad Electric Motors",
        power: "1,914 hp",
        acceleration: "1.85s (0-60)",
        topSpeed: "258 mph",
        range: "340 miles",
        seats: "2",
        autopilot: true,
      }
    }
  ];

  return (
    <main className="w-full px-4 sm:px-6 md:px-8 max-w-[1600px] mx-auto pb-20 pt-8">
      <header className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6">Head to <span className="text-primary italic">Head.</span></h1>
        <p className="text-secondary text-lg leading-relaxed">
          Compare elite performance vehicles side-by-side to find the perfect drive for your journey.
        </p>
      </header>

      <div className="bg-surface rounded-[2rem] border border-outline-variant/10 shadow-2xl overflow-hidden overflow-x-auto">
        <table className="w-full text-left min-w-[800px]">
          <thead>
            <tr>
              <th className="p-8 w-1/4 align-bottom">
                <button className="bg-surface-container hover:bg-surface-container-high text-on-surface text-sm font-bold px-6 py-3 rounded-xl transition-colors min-h-[44px]">Change Vehicles</button>
              </th>
              {cars.map(car => (
                <th key={car.id} className="p-8 w-[37.5%] border-l border-surface-container">
                  <div className="relative aspect-[16/10] bg-surface-container-low rounded-[1.5rem] overflow-hidden mb-6 group">
                    <Image src={car.image} alt={car.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h2 className="text-2xl font-black mb-2">{car.name}</h2>
                  <p className="text-primary font-bold text-xl mb-6">{car.price}</p>
                  <Link
                    href={isAuthenticated ? `/checkout?car=${car.id}` : `/sign-in?redirect=${encodeURIComponent(`/checkout?car=${car.id}`)}`}
                    className="block w-full bg-surface-container hover:bg-gradient-to-r hover:from-primary hover:to-primary-container hover:text-white text-on-surface text-center py-4 rounded-xl font-bold transition-all shadow-sm"
                  >
                    Book Now
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container bg-surface-bright">
            <tr>
              <td className="p-6 text-[10px] uppercase font-bold tracking-widest text-secondary">Powertrain</td>
              {cars.map(car => (
                <td key={car.id} className="p-6 font-medium border-l border-surface-container">{car.specs.engine}</td>
              ))}
            </tr>
            <tr>
              <td className="p-6 text-[10px] uppercase font-bold tracking-widest text-secondary">Output</td>
              {cars.map(car => (
                <td key={car.id} className="p-6 font-black text-lg border-l border-surface-container">{car.specs.power}</td>
              ))}
            </tr>
            <tr>
              <td className="p-6 text-[10px] uppercase font-bold tracking-widest text-secondary">0-60 MPH</td>
              {cars.map(car => (
                <td key={car.id} className="p-6 font-medium border-l border-surface-container">{car.specs.acceleration}</td>
              ))}
            </tr>
            <tr>
              <td className="p-6 text-[10px] uppercase font-bold tracking-widest text-secondary">Top Speed</td>
              {cars.map(car => (
                <td key={car.id} className="p-6 font-medium border-l border-surface-container">{car.specs.topSpeed}</td>
              ))}
            </tr>
            <tr>
              <td className="p-6 text-[10px] uppercase font-bold tracking-widest text-secondary">Range / Efficiency</td>
              {cars.map(car => (
                <td key={car.id} className="p-6 font-medium border-l border-surface-container">{car.specs.range}</td>
              ))}
            </tr>
            <tr>
              <td className="p-6 text-[10px] uppercase font-bold tracking-widest text-secondary">Capacity</td>
              {cars.map(car => (
                <td key={car.id} className="p-6 font-medium border-l border-surface-container">{car.specs.seats} Passengers</td>
              ))}
            </tr>
            <tr>
              <td className="p-6 text-[10px] uppercase font-bold tracking-widest text-secondary">Autopilot Options</td>
              {cars.map(car => (
                <td key={car.id} className="p-6 font-medium border-l border-surface-container">
                  {car.specs.autopilot ? <Check className="text-primary" size={24} /> : <X className="text-secondary opacity-50" size={24} />}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
