"use client";

// ============================================================
// Services — Premium animated service cards
// ============================================================

import { motion } from "framer-motion";
import {
  Dumbbell,
  TrendingDown,
  Zap,
  Apple,
  Calendar,
  Video,
  Heart,
  ArrowRight,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerChild } from "@/lib/animations";
import { services } from "@/data/siteData";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Dumbbell,
  TrendingDown,
  Zap,
  Apple,
  Calendar,
  Video,
  Heart,
};

export default function Services() {
  return (
    <SectionWrapper
      id="services"
      bgClassName="bg-gradient-to-b from-primary-offwhite to-neutral-cream dark:from-[#1A1412] dark:to-[#221A16]"
    >
      <SectionHeading
        tag="Services"
        title="How I Can Help You"
        subtitle="Comprehensive fitness and wellness services designed to meet you where you are and take you where you want to be."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] || Dumbbell;
          return (
            <motion.div
              key={service.title}
              variants={staggerChild}
              className="group relative overflow-hidden rounded-2xl bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 dark:bg-neutral-dark/50 dark:hover:bg-neutral-dark/70 border border-transparent hover:border-accent-maroon/10 dark:hover:border-primary-beige/10"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent-maroon/0 to-accent-brown/0 opacity-0 transition-opacity duration-500 group-hover:from-accent-maroon/5 group-hover:to-accent-brown/5 group-hover:opacity-100" />

              <div className="relative">
                {/* Icon */}
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <Icon
                    className="h-6 w-6 transition-colors duration-300"
                    style={{ color: service.color }}
                  />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-bold text-neutral-dark dark:text-primary-beige">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-accent-brown/60 dark:text-primary-beige/50">
                  {service.description}
                </p>

                {/* Learn More */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-maroon transition-colors hover:text-accent-brown dark:text-primary-beige/80 dark:hover:text-primary-beige"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              {/* Subtle corner decoration */}
              <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br from-accent-maroon/[0.03] to-accent-brown/[0.03] transition-all duration-500 group-hover:from-accent-maroon/[0.06] group-hover:to-accent-brown/[0.06] group-hover:scale-150" />
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
