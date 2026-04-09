"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Clock } from "lucide-react";

export default function BookingsPage() {
  const upcomingBookings = [
    {
      id: "RNT-88902A",
      car: "Porsche 911 GT3 RS",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCADN3Shnf-5Bbb0yj-pAVVBcHSATfUKrR9f6vjMFfz1jtIubJyjw5ESmD6ZbBA04VBbeJUk_l3XvOqtTeJwSBmEkTOrBXoGEICHi2FZyoQyacrpgyGAOMFnpu4IeWl0IJvXw1EY1SmEJx-5_iv8sQvvCvLxUgVUVZSN6QI8Jueogh5PHKR8_AN2C7HQYTNnYSAX0V4F4-FBV0GkiQDM-_tUW6dDPx3P1Th3H5tyohQmw4u45LxUEh7hYgv40NNSoI7PMZYuXm7lzu6",
      status: "Upcoming",
      pickup: "Oct 24, 2024",
      return: "Oct 28, 2024",
      location: "Miami Flagship Showroom",
      price: "$3,560.00"
    }
  ];

  const pastBookings = [
    {
      id: "RNT-34091B",
      car: "Tesla Model S Plaid",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZit5sMrZabyQ4MmnVi72cv34r46raIqp8SR1qAFnfdnnKkcrxCoIGwOmRmdvTOr7AfkpLdDlYyyC6BzP_Cz25reJHfpYuq9DGle-AncIWat8BCNPAgo9VkS_FmwwrcrV2YF1f9s8LM93thSZS5MX5zxh6Nj4_1f-UxCqJ0cKUh7pwoOF2HVA31M2EFl_rldxvpcWH75gF6BAl_kqpO_oEj0hlWEqGDfgdz-5tD3qN5CrlcgNQi1kWQqBQ2NnhaKVHFUXLvVvxc6Jt",
      status: "Completed",
      pickup: "Aug 10, 2024",
      return: "Aug 12, 2024",
      location: "SF Intl Airport Delivery",
      price: "$900.00"
    }
  ];

  return (
    <div className="w-full">
      <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black mb-2">My Bookings</h1>
          <p className="text-secondary">View and manage your active and past reservations.</p>
        </div>
        <Link href="/inventory" className="bg-surface-container-high text-on-surface font-bold px-6 py-3 rounded-xl hover:bg-surface-container min-h-[48px] flex items-center justify-center gap-2">
          New Booking <ArrowRight size={18} />
        </Link>
      </header>

      <div className="space-y-12">
        {/* Upcoming Section */}
        <div>
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Upcoming Trips
          </h3>
          
          <div className="space-y-6">
            {upcomingBookings.map(booking => (
              <div key={booking.id} className="bg-surface rounded-[2rem] p-4 sm:p-6 border border-outline-variant/20 shadow-[0_4px_40px_rgba(0,0,0,0.02)] flex flex-col lg:flex-row gap-6 hover:shadow-md transition-shadow">
                <div className="relative w-full lg:w-64 aspect-[16/10] rounded-xl overflow-hidden bg-surface-container-low shrink-0">
                  <Image 
                    src={booking.image} 
                    alt={booking.car}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-on-surface text-background text-[10px] uppercase font-black px-2 py-1 rounded">
                    {booking.status}
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-between p-2">
                  <div className="flex flex-col md:flex-row md:justify-between items-start mb-4 gap-4">
                    <div>
                      <span className="text-[10px] text-secondary font-bold uppercase tracking-widest">{booking.id}</span>
                      <h4 className="text-2xl font-bold text-on-surface mt-1">{booking.car}</h4>
                    </div>
                    <div className="bg-primary/10 text-primary font-black px-4 py-2 rounded-lg text-lg">
                      {booking.price}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto border-t border-surface-container pt-4">
                    <div className="flex items-start gap-3">
                      <Calendar size={18} className="text-secondary mt-0.5" />
                      <div>
                        <div className="text-[10px] uppercase font-bold tracking-widest text-secondary">Duration</div>
                        <div className="font-medium text-sm mt-0.5">{booking.pickup} — {booking.return}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-secondary mt-0.5" />
                      <div>
                        <div className="text-[10px] uppercase font-bold tracking-widest text-secondary">Pickup Location</div>
                        <div className="font-medium text-sm mt-0.5">{booking.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Section */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-secondary">Past Trips</h3>
          
          <div className="space-y-6 opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-500">
            {pastBookings.map(booking => (
              <div key={booking.id} className="bg-surface rounded-[2rem] p-4 sm:p-6 border border-outline-variant/10 flex flex-col lg:flex-row gap-6">
                <div className="relative w-full lg:w-48 aspect-[16/10] rounded-xl overflow-hidden bg-surface-container-low shrink-0">
                  <Image 
                    src={booking.image} 
                    alt={booking.car}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex flex-col md:flex-row md:justify-between items-start mb-2 gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-on-surface">{booking.car}</h4>
                      <div className="font-medium text-sm text-secondary mt-1">{booking.pickup} — {booking.return}</div>
                    </div>
                    <div className="font-bold text-on-surface">
                      {booking.price}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-surface-container flex justify-between items-center">
                    <span className="text-secondary text-sm font-bold uppercase tracking-widest">Completed</span>
                    <button className="text-primary text-sm font-bold hover:underline min-h-[44px]">Rent Again</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
