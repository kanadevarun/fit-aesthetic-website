"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const date = searchParams.get("date") || "No date selected";
  const time = searchParams.get("time") || "No time selected";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message with payment intent
    const text = `Hi Dr. Akanksha!\n\nI've booked a Consultation Call and completed the payment.\n\n*Booking Details:*\n*Slot:* ${date} at ${time}\n\n*My Details:*\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n\nI have attached the screenshot of my UPI payment of ₹899. Please confirm my slot!`;
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/918302235979?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      
      {/* Left Column: Form & Payment Info */}
      <div className="order-2 lg:order-1">
        <Link href="/consultation" className="inline-flex items-center gap-2 text-sm text-accent-brown/70 dark:text-primary-beige/70 hover:text-accent-maroon dark:hover:text-primary-beige mb-8 transition-colors">
          <ArrowLeft size={16} /> Return to Consultation
        </Link>
        
        <h2 className="text-2xl font-bold font-heading text-neutral-dark dark:text-primary-beige mb-6">Contact Information</h2>
        
        <form onSubmit={handleCheckout} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-accent-brown/70 dark:text-primary-beige/70 mb-1">Full Name *</label>
              <input 
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl border border-accent-brown/20 dark:border-primary-beige/20 bg-white/50 dark:bg-[#1C1512]/50 text-neutral-dark dark:text-primary-beige outline-none focus:border-accent-maroon dark:focus:border-primary-beige/50 transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-accent-brown/70 dark:text-primary-beige/70 mb-1">Email Address *</label>
              <input 
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-accent-brown/20 dark:border-primary-beige/20 bg-white/50 dark:bg-[#1C1512]/50 text-neutral-dark dark:text-primary-beige outline-none focus:border-accent-maroon dark:focus:border-primary-beige/50 transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-accent-brown/70 dark:text-primary-beige/70 mb-1">Phone Number *</label>
              <input 
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91"
                className="w-full px-4 py-3 rounded-xl border border-accent-brown/20 dark:border-primary-beige/20 bg-white/50 dark:bg-[#1C1512]/50 text-neutral-dark dark:text-primary-beige outline-none focus:border-accent-maroon dark:focus:border-primary-beige/50 transition-colors"
              />
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold font-heading text-neutral-dark dark:text-primary-beige mb-6">Payment</h2>
            <div className="bg-white dark:bg-[#1C1512] rounded-2xl p-6 shadow-md border border-accent-brown/10 dark:border-primary-beige/10">
              <p className="text-sm text-accent-brown/80 dark:text-primary-beige/70 mb-4">
                Please make the payment of <strong>₹899.00</strong> using any UPI app (GPay, PhonePe, Paytm).
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0 relative w-40 h-40 border border-accent-brown/20 dark:border-primary-beige/20 rounded-xl overflow-hidden bg-white p-2">
                  <Image 
                    src="/images/upi-scanner.jpeg" 
                    alt="UPI QR Code" 
                    fill 
                    className="object-contain p-2"
                  />
                </div>
                
                <div className="w-full">
                  <p className="text-xs text-accent-brown/60 dark:text-primary-beige/50 mb-1">UPI ID</p>
                  <div className="flex items-center justify-between bg-accent-brown/5 dark:bg-primary-beige/5 p-3 rounded-lg border border-accent-brown/10 dark:border-primary-beige/10 mb-4">
                    <span className="font-mono font-medium text-neutral-dark dark:text-primary-beige">8302235979@ptyes</span>
                    <button 
                      type="button"
                      onClick={() => navigator.clipboard.writeText("8302235979@ptyes")}
                      className="text-xs text-accent-maroon hover:underline font-bold"
                    >
                      COPY
                    </button>
                  </div>
                  
                  <div className="space-y-2 text-xs text-accent-brown/70 dark:text-primary-beige/60">
                    <div className="flex gap-2">
                      <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />
                      <p>Scan the QR code or copy the UPI ID</p>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />
                      <p>Complete the payment on your app</p>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />
                      <p>Click the button below to send confirmation via WhatsApp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-6">
            <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white shadow-xl shadow-green-600/20">
              I have paid — Send via WhatsApp
            </Button>
            <p className="text-center text-xs text-accent-brown/50 dark:text-primary-beige/40 mt-4">
              You will be redirected to WhatsApp to share your payment screenshot and confirm your slot.
            </p>
          </div>
        </form>
      </div>
      
      {/* Right Column: Order Summary */}
      <div className="order-1 lg:order-2">
        <div className="bg-white dark:bg-[#1C1512] rounded-3xl p-6 sm:p-8 shadow-xl border border-accent-brown/10 dark:border-primary-beige/10 sticky top-32">
          <h2 className="text-xl font-bold font-heading text-neutral-dark dark:text-primary-beige mb-6">Order Summary</h2>
          
          <div className="flex gap-4 pb-6 border-b border-accent-brown/10 dark:border-primary-beige/10">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-sm shrink-0">
              <Image 
                src="/images/about-photo.jpeg"
                alt="Consultation Call"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-neutral-dark dark:text-primary-beige">Consultation Call</h3>
              <p className="text-sm text-accent-brown/70 dark:text-primary-beige/60 mt-1">20 minutes • On Call</p>
              <p className="font-semibold text-accent-maroon dark:text-primary-beige mt-2">₹899.00</p>
            </div>
          </div>
          
          <div className="py-6 space-y-4 border-b border-accent-brown/10 dark:border-primary-beige/10 text-sm">
            <div className="flex justify-between">
              <span className="text-accent-brown/70 dark:text-primary-beige/60">Selected Date</span>
              <span className="font-medium text-neutral-dark dark:text-primary-beige text-right">{date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-accent-brown/70 dark:text-primary-beige/60">Selected Time</span>
              <span className="font-medium text-neutral-dark dark:text-primary-beige">{time}</span>
            </div>
          </div>
          
          <div className="pt-6 flex justify-between items-end">
            <span className="text-lg font-bold text-neutral-dark dark:text-primary-beige">Total</span>
            <span className="text-2xl font-bold text-accent-maroon dark:text-primary-beige">₹899.00</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-primary-offwhite dark:bg-neutral-dark/95">
      <div className="container-custom mx-auto">
        <Suspense fallback={<div className="h-96 flex items-center justify-center text-accent-brown/50">Loading checkout...</div>}>
          <CheckoutContent />
        </Suspense>
      </div>
    </main>
  );
}
