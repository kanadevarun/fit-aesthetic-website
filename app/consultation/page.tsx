"use client";

import { Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Check, Sparkles, Clock, Video } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BookingCalendar from "@/components/ui/BookingCalendar";
import { pricingPlans } from "@/data/siteData";

function ConsultationContent() {
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan") || "consultation";
  
  const selectedPlan = pricingPlans.find(p => p.id === planId) || pricingPlans.find(p => p.id === "consultation")!;

  return (
    <div className="max-w-6xl mx-auto">
      {/* Premium Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20 mt-8 items-center">
        {/* Image Side with Glow & Float */}
        <div className="relative order-2 lg:order-1 flex justify-center">
          {/* Decorative background blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-accent-maroon/20 dark:bg-primary-beige/10 blur-3xl rounded-full animate-pulse opacity-70" />
          
          <div className="relative w-full max-w-[440px] aspect-[4/5] max-h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/20 dark:ring-white/10 glow-maroon lg:animate-float">
            <Image 
              src="/images/about-photo.jpeg"
              alt={selectedPlan.title}
              fill
              className="object-cover"
              priority
            />
            {/* Glassmorphism overlay for the bottom info */}
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="flex items-center justify-center gap-2 text-white font-medium">
                <Video size={18} className="text-primary-beige" />
                <span>1-on-1 Personalized Session</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Details Side */}
        <div className="flex flex-col justify-center order-1 lg:order-2">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent-maroon/10 dark:bg-primary-beige/10 text-accent-maroon dark:text-primary-beige font-semibold text-sm w-fit mb-6 shadow-sm border border-accent-maroon/10 dark:border-primary-beige/10">
            <Sparkles size={14} />
            <span>Premium Booking</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-heading font-extrabold text-neutral-dark dark:text-primary-beige mb-6 leading-tight tracking-tight">
            {selectedPlan.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-lg font-semibold text-accent-maroon dark:text-primary-beige/90 mb-8">
            <span className="text-3xl font-heading font-bold text-neutral-dark dark:text-white">
              {selectedPlan.currency}{selectedPlan.price.toLocaleString("en-IN")}
            </span>
            <div className="h-6 w-px bg-accent-brown/20 dark:bg-primary-beige/20" />
            <div className="flex items-center gap-1.5">
              <Clock size={18} />
              <span>{selectedPlan.duration}</span>
            </div>
          </div>
          
          <p className="text-lg text-accent-brown/80 dark:text-primary-beige/70 mb-8 leading-relaxed">
            {selectedPlan.description}
          </p>
          
          <div className="bg-white/50 dark:bg-[#1C1512]/50 p-6 rounded-2xl border border-accent-brown/10 dark:border-primary-beige/10">
            <h3 className="font-bold text-neutral-dark dark:text-primary-beige mb-4 text-sm uppercase tracking-widest opacity-80">
              What's Included
            </h3>
            <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
              {selectedPlan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-accent-maroon/10 dark:bg-primary-beige/10 flex items-center justify-center text-accent-maroon dark:text-primary-beige">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-accent-brown/90 dark:text-primary-beige/80">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Calendar Booking Section */}
      <div id="booking-section" className="scroll-mt-32 pt-12 border-t border-accent-brown/10 dark:border-primary-beige/10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-extrabold text-neutral-dark dark:text-primary-beige">
            Select your slot
          </h2>
          <p className="text-accent-brown/70 dark:text-primary-beige/60 mt-4 max-w-xl mx-auto text-lg">
            Choose a date and time that works best for you. Please note that all times are displayed in your local timezone (IST).
          </p>
        </div>
        
        {/* Pass the planId down to the calendar so it can pass it to checkout */}
        <BookingCalendar planId={planId} />
      </div>
    </div>
  );
}

export default function ConsultationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 bg-primary-offwhite dark:bg-neutral-dark">
        <div className="container-custom mx-auto">
          <Suspense fallback={<div className="h-96 flex items-center justify-center text-accent-brown/50">Loading plan...</div>}>
            <ConsultationContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
