"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";

export default function BlogPage() {
  const featuredPost = {
    title: "The Silent Revolution: Why Elite VIPs Are Switching to Electric Performance",
    category: "Industry Insights",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbsY2tWJ8Vv7Uwxp4zbBDPnOTcRf0MVjrSy7uumYtnPHHGE0G3uzF2fAsfvqefA3HYH3y0Dv43tMrP5lkZ9MUFWsVdNvke0UAXxIWIjJKBZ5Bbef3_FBZlzVJFU2Kg5KwxB-D2Dj0Q8Bek5azlubGb3NqAxJhnsylBzdcOwa6ZqAwj0hwtvjVYue6mkvuab05hhl3Eg7na0PiZE__NzVXfXOQgMQ0tI0ltFGwRRlF62S0KqC2YtbyRZnrv0HKdx8fOiSCsSx4E1q6g",
    excerpt: "From tech moguls to Hollywood elites, the subtle roar of a V8 is being replaced by the sheer, instantaneous torque of modern electric supercars.",
    author: "Elena Rossi",
    time: "5 min read",
    slug: "silent-revolution-electric"
  };

  const genericPosts = [
    {
      id: 1,
      title: "Mastering the Autobahn: A Porsche GT3 RS Diary",
      category: "Experiences",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCADN3Shnf-5Bbb0yj-pAVVBcHSATfUKrR9f6vjMFfz1jtIubJyjw5ESmD6ZbBA04VBbeJUk_l3XvOqtTeJwSBmEkTOrBXoGEICHi2FZyoQyacrpgyGAOMFnpu4IeWl0IJvXw1EY1SmEJx-5_iv8sQvvCvLxUgVUVZSN6QI8Jueogh5PHKR8_AN2C7HQYTNnYSAX0V4F4-FBV0GkiQDM-_tUW6dDPx3P1Th3H5tyohQmw4u45LxUEh7hYgv40NNSoI7PMZYuXm7lzu6",
      time: "8 min read"
    },
    {
      id: 2,
      title: "The Ultimate Guide to Driving the Pacific Coast Highway in Luxury",
      category: "Travel",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIV8xbgCBNICRkfFwq7xq7fjIPmOO-EuV2H3i0Pc8lb6EUMFxxYccbTqtPTJPWrDDsGxzcQfG4sQhvfmHPWV-3Rm0cOWb9ccVbH7Q5dBKYyyPx8mYQDW4mzFSv1FC26szQjBnh0rTwUPXEweyS6PXZcQUa_fZSWgOG6bdCaLNZPobjT-gbRVQjnZ9i4TopInJYv2wYDYpgiRKxkDfMS9H9TwK4kUvW2jje-9nDO00HtIqGJsSCOsm7OMjvFNJg1ZPp3QWJBeBxSv41",
      time: "6 min read"
    },
    {
      id: 3,
      title: "Behind the Wheel: Tesla Model S Plaid Acceleration Tested",
      category: "Reviews",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZit5sMrZabyQ4MmnVi72cv34r46raIqp8SR1qAFnfdnnKkcrxCoIGwOmRmdvTOr7AfkpLdDlYyyC6BzP_Cz25reJHfpYuq9DGle-AncIWat8BCNPAgo9VkS_FmwwrcrV2YF1f9s8LM93thSZS5MX5zxh6Nj4_1f-UxCqJ0cKUh7pwoOF2HVA31M2EFl_rldxvpcWH75gF6BAl_kqpO_oEj0hlWEqGDfgdz-5tD3qN5CrlcgNQi1kWQqBQ2NnhaKVHFUXLvVvxc6Jt",
      time: "4 min read"
    },
    {
      id: 4,
      title: "Why SUV Supremacy Continues in the Luxury Rental Market",
      category: "Trends",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0CeAFp5kPX5dkImCG2kM3epjxGKcYm_nJLbacZT6WdwidHrUN-pXvyczQ_4pDwx55OIt9OQ5ubFYG7KWdeeDgYBE9luiEe_BMQuisLromZjq8R61EnL17PEon_zyWrXihlKq3cGT5CZd7dJLuRjDZSc78WnPGBQeu_OTc7dlkUC-PHYL_lU4r_qWGpXZxO2ft70-CcNPB9no3lglaWtIfT6YhJQbvrfvR75zSC_l7aLWQest3TkDnYGVtA4m7NJvyeIhVhK0CGmVF",
      time: "5 min read"
    }
  ];

  return (
    <main className="w-full px-4 sm:px-6 md:px-8 max-w-[1600px] mx-auto pb-24 pt-8">
      <header className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">Editorial <span className="text-primary italic">Lounge.</span></h1>
        <p className="text-secondary max-w-2xl text-base md:text-lg leading-relaxed">
          The latest insights on luxury automotive culture, driving routes, and the shift towards premium electric performance.
        </p>
      </header>

      {/* Featured Post */}
      <Link href={`/blog/${featuredPost.slug}`} className="block group mb-20 relative rounded-[2rem] overflow-hidden bg-surface shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[600px]">
          <div className="relative h-[400px] lg:h-full overflow-hidden order-2 lg:order-1">
            <Image 
              src={featuredPost.image} 
              alt={featuredPost.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              priority
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-16 order-1 lg:order-2 bg-surface">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-primary mb-6 inline-block bg-primary/10 px-3 py-1 rounded-full w-fit">
              {featuredPost.category}
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight group-hover:text-primary transition-colors">
              {featuredPost.title}
            </h2>
            <p className="text-secondary text-lg leading-relaxed mb-10">
              {featuredPost.excerpt}
            </p>
            
            <div className="flex items-center justify-between border-t border-outline-variant/20 pt-6 mt-auto">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm font-bold text-on-surface">
                  <User size={16} className="text-secondary" /> {featuredPost.author}
                </div>
                <div className="flex items-center gap-2 text-sm text-secondary font-medium">
                  <Clock size={16} /> {featuredPost.time}
                </div>
              </div>
              <ArrowRight size={24} className="text-primary transform group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </Link>

      {/* Grid of Articles */}
      <div className="mb-12 flex justify-between items-end border-b border-surface-container-highest pb-6">
        <h2 className="text-3xl font-black tracking-tight">Latest Stories</h2>
        <div className="hidden md:flex gap-2">
          {["All", "Experiences", "Reviews", "Trends"].map((cat, i) => (
            <button key={cat} className={`text-sm font-bold px-4 py-2 rounded-lg transition-colors ${i === 0 ? "bg-primary text-white" : "text-secondary hover:bg-surface-container"}`}>{cat}</button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {genericPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="group flex flex-col">
            <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-surface-container-low mb-6">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-md z-10 text-on-background">
                <span className="text-[10px] font-black uppercase tracking-widest">{post.category}</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            
            <div className="flex items-center gap-2 text-xs text-secondary font-bold uppercase tracking-widest mt-auto pt-4">
              <Clock size={14} /> {post.time}
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="bg-surface-container-highest text-on-surface px-8 py-3 rounded-xl font-bold hover:bg-surface-container transition-colors min-h-[48px]">
          Load More Stories
        </button>
      </div>
    </main>
  );
}
