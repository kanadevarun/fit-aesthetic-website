"use client";

// ============================================================
// FitnessTips — Blog / tips section with modern article cards
// ============================================================

import { motion } from "framer-motion";
import { Clock, ArrowUpRight, BookOpen } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerChild } from "@/lib/animations";
import { fitnessTips } from "@/data/siteData";

const categoryColors: Record<string, string> = {
  Nutrition: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Fat Loss": "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
  "Muscle Gain": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Training: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Beginner: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  Education: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
};

export default function FitnessTips() {
  return (
    <SectionWrapper
      id="tips"
      bgClassName="bg-gradient-to-b from-neutral-cream to-primary-offwhite dark:from-[#221A16] dark:to-[#1A1412]"
    >
      <SectionHeading
        tag="Fitness Tips"
        title="Knowledge Is Power"
        subtitle="Free evidence-based fitness and nutrition articles to help you make informed decisions about your health."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {/* Featured Article — First item */}
        <motion.article
          variants={staggerChild}
          className="group card-premium overflow-hidden rounded-2xl sm:col-span-2 lg:row-span-2"
        >
          {/* Header visual */}
          <div className="relative h-48 bg-gradient-to-br from-accent-maroon to-accent-brown p-6 lg:h-64">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
            </div>
            <div className="relative flex h-full flex-col justify-end">
              <span
                className={`mb-3 w-fit rounded-full px-3 py-1 text-[10px] font-semibold ${
                  categoryColors[fitnessTips[0].category] || "bg-white/20 text-white"
                }`}
              >
                {fitnessTips[0].category}
              </span>
              <h3 className="text-xl font-bold text-white sm:text-2xl font-heading">
                {fitnessTips[0].title}
              </h3>
            </div>
          </div>
          <div className="p-6">
            <p className="mb-4 text-sm leading-relaxed text-accent-brown/70 dark:text-primary-beige/60">
              {fitnessTips[0].excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-accent-brown/50 dark:text-primary-beige/40">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {fitnessTips[0].readTime}
                </span>
                <span>{fitnessTips[0].date}</span>
              </div>
              <a
                href="#"
                className="flex items-center gap-1 text-sm font-semibold text-accent-maroon transition-colors hover:text-accent-brown dark:text-primary-beige/80"
              >
                Read
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.article>

        {/* Remaining Articles */}
        {fitnessTips.slice(1).map((tip) => (
          <motion.article
            key={tip.title}
            variants={staggerChild}
            className="group card-premium overflow-hidden rounded-2xl"
          >
            {/* Top bar accent */}
            <div className="h-1 bg-gradient-to-r from-accent-maroon to-accent-brown" />

            <div className="p-5">
              {/* Category tag */}
              <span
                className={`mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-semibold ${
                  categoryColors[tip.category] || "bg-gray-100 text-gray-600"
                }`}
              >
                {tip.category}
              </span>

              {/* Title */}
              <h3 className="mb-2 text-base font-bold leading-snug text-neutral-dark dark:text-primary-beige group-hover:text-accent-maroon dark:group-hover:text-primary-beige/90 transition-colors">
                {tip.title}
              </h3>

              {/* Excerpt */}
              <p className="mb-4 text-sm leading-relaxed text-accent-brown/60 dark:text-primary-beige/50 line-clamp-2">
                {tip.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-accent-brown/50 dark:text-primary-beige/40">
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {tip.readTime}
                  </span>
                </div>
                <a
                  href="#"
                  className="flex items-center gap-1 text-xs font-semibold text-accent-maroon transition-colors hover:text-accent-brown dark:text-primary-beige/70"
                >
                  Read
                  <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
