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

      {/* Transformation Cards Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {transformations.map((t, index) => (
          <motion.div
            key={t.name}
            variants={staggerChild}
            className="group card-premium overflow-hidden rounded-2xl"
          >
            {/* Before/After Visual Placeholder */}
            <div className="relative flex h-48 overflow-hidden">
              <div className="flex-1 bg-gradient-to-br from-neutral-gray/20 to-neutral-gray/10 flex items-center justify-center dark:from-accent-brown/20 dark:to-accent-brown/10">
                <div className="text-center">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent-brown/40 dark:text-primary-beige/30">
                    Before
                  </span>
                  <div className="mt-2 flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-accent-maroon/10 dark:bg-accent-maroon/20">
                    <span className="text-2xl font-bold text-accent-maroon/40 dark:text-primary-beige/40 font-heading">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent-maroon text-white shadow-lg">
                <ChevronRight size={14} />
              </div>
              <div className="flex-1 bg-gradient-to-br from-accent-maroon/10 to-accent-brown/10 flex items-center justify-center dark:from-accent-maroon/20 dark:to-accent-brown/20">
                <div className="text-center">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent-maroon/60 dark:text-primary-beige/50">
                    After
                  </span>
                  <div className="mt-2 flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-accent-maroon/20 dark:bg-accent-maroon/30">
                    <Award className="h-6 w-6 text-accent-maroon dark:text-primary-beige/60" />
                  </div>
                </div>
              </div>
              {/* Tag */}
              <span className="absolute right-3 top-3 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold text-accent-maroon backdrop-blur-sm dark:bg-neutral-dark/70 dark:text-primary-beige">
                {t.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="mb-2 flex items-center gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mb-3 text-sm leading-relaxed text-accent-brown/70 dark:text-primary-beige/60 line-clamp-3">
                &ldquo;{t.testimonial}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-neutral-dark dark:text-primary-beige">
                    {t.name}
                  </p>
                  <p className="text-xs text-accent-brown/50 dark:text-primary-beige/40">
                    {t.duration} • {t.weightLost}
                  </p>
                </div>
                <div className="rounded-lg bg-accent-maroon/10 px-3 py-1.5 text-xs font-bold text-accent-maroon dark:bg-accent-maroon/20 dark:text-primary-beige/80">
                  Age {t.age}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
