"use client";

// ============================================================
// Transformations — Trust-building testimonials & stories
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Award } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerChild, fadeInUp } from "@/lib/animations";
import { transformations } from "@/data/siteData";

export default function Transformations() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % transformations.length);
  const prev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + transformations.length) % transformations.length
    );

  const active = transformations[activeIndex];

  return (
    <SectionWrapper id="transformations">
      <SectionHeading
        tag="Transformations"
        title="Real People, Real Results"
        subtitle="Every transformation tells a unique story of dedication, consistency, and the right guidance. Here are some of ours."
      />

      {/* Featured Testimonial Carousel */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative mx-auto mb-16 max-w-4xl"
      >
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-accent-maroon to-accent-brown p-8 shadow-2xl sm:p-12">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
          </div>

          <div className="relative">
            <Quote className="mb-4 h-8 w-8 text-white/30" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Testimonial */}
                <blockquote className="text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl font-heading">
                  &ldquo;{active.testimonial}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-lg font-bold text-white">
                    {active.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{active.name}</p>
                    <p className="text-sm text-white/60">
                      Age {active.age} • {active.duration} •{" "}
                      {active.weightLost}
                    </p>
                  </div>
                  <span className="ml-auto rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                    {active.tag}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {transformations.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-8 bg-white"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>


    </SectionWrapper>
  );
}
