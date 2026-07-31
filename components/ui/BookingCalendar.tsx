"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from "lucide-react";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function BookingCalendar() {
  const router = useRouter();
  
  // Basic state for the calendar
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  
  // We'll generate a simple 2-week calendar starting from today
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    // Only show next 14 days
    for (let i = 1; i <= 14; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      dates.push(d);
    }
    return dates;
  };
  
  const dates = generateDates();
  
  // Hardcoded slots for demonstration (10 AM to 5 PM, 30 min intervals)
  const timeSlots = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM"
  ];

  const handleBooking = () => {
    if (selectedDate && selectedSlot) {
      const dateStr = selectedDate.toLocaleDateString("en-IN", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric"
      });
      // Route to checkout with URL params
      router.push(`/checkout?date=${encodeURIComponent(dateStr)}&time=${encodeURIComponent(selectedSlot)}`);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-8 bg-white dark:bg-[#1C1512] rounded-3xl p-6 sm:p-8 shadow-xl border border-accent-brown/10 dark:border-primary-beige/10">
      
      {/* Left Side - Calendar */}
      <div>
        <div className="flex items-center gap-2 mb-6 text-accent-maroon dark:text-primary-beige">
          <CalendarIcon size={20} />
          <h3 className="font-heading font-bold text-lg">Select Date</h3>
        </div>
        
        <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-accent-brown/50 dark:text-primary-beige/50 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
            <div key={day}>{day}</div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {/* Empty slots for alignment if the first day doesn't start on Sunday */}
          {Array.from({ length: dates[0].getDay() }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          
          {dates.map((date, i) => {
            const isSelected = selectedDate?.toDateString() === date.toDateString();
            return (
              <button
                key={i}
                onClick={() => {
                  setSelectedDate(date);
                  setSelectedSlot(null); // Reset time when date changes
                }}
                className={`
                  aspect-square rounded-full flex items-center justify-center text-sm transition-all
                  ${isSelected 
                    ? "bg-accent-maroon text-white font-bold shadow-md transform scale-110" 
                    : "hover:bg-accent-maroon/10 dark:hover:bg-primary-beige/10 text-neutral-dark dark:text-primary-beige"}
                `}
              >
                {date.getDate()}
              </button>
            )
          })}
        </div>
      </div>
      
      {/* Right Side - Time Slots */}
      <div>
        <div className="flex items-center gap-2 mb-6 text-accent-maroon dark:text-primary-beige">
          <Clock size={20} />
          <h3 className="font-heading font-bold text-lg">
            {selectedDate 
              ? selectedDate.toLocaleDateString("en-IN", { weekday: 'short', month: 'short', day: 'numeric' })
              : "Select a date first"}
          </h3>
        </div>
        
        {selectedDate ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {timeSlots.map((slot) => {
              const isSelected = selectedSlot === slot;
              return (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`
                    py-2 px-3 rounded-lg text-sm transition-all border
                    ${isSelected
                      ? "bg-accent-maroon border-accent-maroon text-white shadow-md font-bold"
                      : "border-accent-maroon/20 hover:border-accent-maroon/50 text-neutral-dark dark:text-primary-beige/90 dark:border-primary-beige/20 dark:hover:border-primary-beige/50"}
                  `}
                >
                  {slot}
                </button>
              )
            })}
          </div>
        ) : (
          <div className="h-full min-h-[200px] flex items-center justify-center border-2 border-dashed border-accent-maroon/10 dark:border-primary-beige/10 rounded-2xl">
            <p className="text-sm text-accent-brown/60 dark:text-primary-beige/50 text-center px-6">
              Please select a date from the calendar to view available time slots.
            </p>
          </div>
        )}
      </div>
      
      {/* Checkout Footer */}
      {selectedDate && selectedSlot && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 pt-6 mt-2 border-t border-accent-maroon/10 dark:border-primary-beige/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="text-sm text-accent-brown/70 dark:text-primary-beige/60">Selected Slot:</p>
            <p className="font-bold text-neutral-dark dark:text-primary-beige">
              {selectedDate.toLocaleDateString("en-IN", { weekday: 'long', month: 'long', day: 'numeric' })} at {selectedSlot}
            </p>
          </div>
          <Button onClick={handleBooking}>
            Proceed to Checkout
          </Button>
        </motion.div>
      )}
    </div>
  );
}
