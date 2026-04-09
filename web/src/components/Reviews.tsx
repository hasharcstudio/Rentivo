"use client";

import { Star, ThumbsUp, Medal } from "lucide-react";
import Image from "next/image";

export function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Alexander Pierce",
      role: "Kinetic Black Member",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQDqEzrgFlWMmOZ71YkfC4tUCZjKw06d0ElBoIIJkGAmyywz1YXU_ArqcO0qMr78pObZTcrlS9QKcFOnxRdNubZdRBh1VvbROpygpV3KS88-fht3XPuSB_QOvDc1qJzn7ZVflBSjHpjGVyMbOFSUIiStSWogPMuXlQJ_fTrj18QpqKca3lz1Tc9HiOffr-qyI020khbPf2GL_fCntE3jsygZnYXIadRggT9wCpp_u56GHpgq04wYBPwtgK2fGXjcLriZgClsafzo09",
      rating: 5,
      date: "2 weeks ago",
      text: "The delivery experience was flawless. The car was spotless and fully charged. Acceleration on this machine is truly terrifying in the best possible way.",
      likes: 12,
    },
    {
      id: 2,
      name: "Sophia Martinez",
      role: "First-time Renter",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9ThW8Rm2ykVd6slxdNxxWTF5jD03iUk1BmUoFlldMCYrxs90QKPfMFcBoJFLS3D2tZ71_mCe__4Y9Lbr_L0w3HrUHeqAKCOVpF0WXzMBIi8wWQRzVjOqcjInWVYx7PHB3Q6bezc2xHt39qOsk61Ld6w_nRQ-9u7HQr2JWRhUn_x8fvuYcFAfLkUj7yWwZY1bcN7eKTIe2H9U4Y7wkN1EKryPWZuyr2hpcjMvWbZ29it958WkBSWmBZpd0uBVQWWxBZ2VhtsjGUdte",
      rating: 5,
      date: "1 month ago",
      text: "I was hesitant about the Plaid, but the concierge team walked me through every feature. An unforgettable weekend cruising down the PCH.",
      likes: 8,
    },
    {
      id: 3,
      name: "James Thorne",
      role: "Kinetic Gold Member",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQG54jU446zKzK50oWqI1q3LwZq0q2d_9U0pA1i8Y_Yh6O_I_yTqG_q2WjJkVw_rR-t9E",
      rating: 4,
      date: "2 months ago",
      text: "Incredible vehicle. The Yoke steering wheel takes getting used to, but the tech integration and the premium interior are industry-leading.",
      likes: 4,
    }
  ];

  return (
    <div className="w-full mt-24 max-w-5xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-surface-container-highest pb-8">
        <div>
          <h2 className="text-3xl font-black tracking-tight mb-2">Driver Experiences</h2>
          <p className="text-secondary font-medium">Real feedback from Kinetic Concierge members.</p>
        </div>
        
        <div className="mt-8 md:mt-0 flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-5xl font-black text-on-surface leading-none">4.9</span>
            <span className="text-xs uppercase font-bold tracking-widest text-secondary mt-1">Out of 5 Stars</span>
          </div>
          <div className="h-16 w-px bg-surface-container-highest"></div>
          <div className="flex flex-col gap-1">
            <div className="flex text-primary">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
            <span className="text-xs font-bold text-secondary">Based on 142 reviews</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-surface p-8 rounded-2xl border border-outline-variant/10 flex flex-col hover:-translate-y-1 transition-transform shadow-[0_4px_40px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-surface-container">
                <Image src={review.avatar} alt={review.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold leading-tight flex items-center gap-1">
                  {review.name}
                  {review.role.includes("Member") && <Medal size={14} className="text-primary" />}
                </h4>
                <span className="text-[10px] uppercase font-bold tracking-widest text-secondary">{review.role}</span>
              </div>
            </div>
            
            <div className="flex text-primary mb-4 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} stroke={i < review.rating ? "currentColor" : "currentColor"} className={i >= review.rating ? "text-surface-container-highest" : ""} />
              ))}
            </div>
            
            <p className="text-on-surface/80 text-sm leading-relaxed mb-6 flex-grow">"{review.text}"</p>
            
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-surface-container-highest">
              <span className="text-xs font-bold text-secondary">{review.date}</span>
              <button className="flex items-center gap-1 text-xs font-bold text-secondary hover:text-primary transition-colors min-h-[44px] px-2 rounded-md hover:bg-surface-container">
                <ThumbsUp size={14} /> {review.likes}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="bg-surface-container-highest text-on-surface px-8 py-3 rounded-xl font-bold hover:bg-surface-container transition-colors min-h-[48px]">
          Load More Reviews
        </button>
      </div>
    </div>
  );
}
