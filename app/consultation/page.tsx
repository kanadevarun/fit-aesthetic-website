import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BookingCalendar from "@/components/ui/BookingCalendar";

export const metadata = {
  title: "Consultation Call | Fit Aesthetic",
  description: "Book a 20-minute 1-on-1 consultation call with Dr. Akanksha Tiwari for personalized guidance.",
};

export default function ConsultationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 bg-primary-offwhite dark:bg-neutral-dark">
        <div className="container-custom mx-auto">
          
          <div className="max-w-6xl mx-auto">
            {/* Product Header */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16 mt-8">
              {/* Image Side */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/about-photo.jpeg"
                  alt="Consultation with Dr. Akanksha Tiwari"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Details Side */}
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-neutral-dark dark:text-primary-beige mb-4">
                  Consultation Call
                </h1>
                
                <p className="text-lg md:text-xl font-semibold text-accent-maroon dark:text-primary-beige/80 mb-6">
                  ₹899.00 <span className="text-sm font-normal text-accent-brown/60 dark:text-primary-beige/50 mx-2">|</span> 20 min <span className="text-sm font-normal text-accent-brown/60 dark:text-primary-beige/50 mx-2">|</span> On Call
                </p>
                
                <div className="prose prose-lg dark:prose-invert prose-p:text-accent-brown/80 dark:prose-p:text-primary-beige/70 mb-8">
                  <p>
                    <strong>Consultation Call with Dr. Akanksha for query solving and Personal Guidance.</strong>
                  </p>
                  <p className="text-sm">
                    <em>(Does not include any specific Diet or Workout Plans. In case plans are required, charges will be applied separately.)</em>
                  </p>
                  <p>
                    Lots of questions, confusion, and doubts? That's right, the human body is complex and so is keeping it fit. But don't worry, all you need is proper guidance.
                  </p>
                  <ul className="text-sm space-y-2 mt-4 text-accent-brown/70 dark:text-primary-beige/60">
                    <li>✓ Direct 1-on-1 call (Voice/Video)</li>
                    <li>✓ Personalized advice on your current routine</li>
                    <li>✓ Clarity on diet macros and nutrition</li>
                    <li>✓ Form correction and workout tips</li>
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
              
              <BookingCalendar />
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
