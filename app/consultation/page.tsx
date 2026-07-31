"use client";

import { Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
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
      {/* Product Header */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16 mt-8">
        {/* Image Side */}
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
          <Image 
            src="/images/about-photo.jpeg"
            alt={selectedPlan.title}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Details Side */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral-dark dark:text-primary-beige mb-4">
            {selectedPlan.title}
          </h1>
          
          <p className="text-lg md:text-xl font-semibold text-accent-maroon dark:text-primary-beige/80 mb-6">
            {selectedPlan.currency}{selectedPlan.price.toLocaleString("en-IN")} <span className="text-sm font-normal text-accent-brown/60 dark:text-primary-beige/50 mx-2">|</span> {selectedPlan.duration} <span className="text-sm font-normal text-accent-brown/60 dark:text-primary-beige/50 mx-2">|</span> On Call
          </p>
          
          <div className="prose prose-lg dark:prose-invert prose-p:text-accent-brown/80 dark:prose-p:text-primary-beige/70 mb-8">
            <p>
              <strong>{selectedPlan.description}</strong>
            </p>
            <ul className="text-sm space-y-2 mt-4 text-accent-brown/70 dark:text-primary-beige/60">
              {selectedPlan.features.map((feature, idx) => (
                <li key={idx}>✓ {feature}</li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
      
      {/* Calendar Booking Section */}
      <div id="booking-section" className="scroll-mt-32">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold text-neutral-dark dark:text-primary-beige">Select your slot</h2>
          <p className="text-accent-brown/70 dark:text-primary-beige/60 mt-3 max-w-2xl mx-auto">
            Choose a date and time that works best for you. Please note that all times are in IST.
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
