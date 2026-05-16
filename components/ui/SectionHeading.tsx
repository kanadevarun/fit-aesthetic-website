"use client";

// ============================================================
// SectionHeading — Consistent heading with optional subtitle
// ============================================================

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
    >
      {tag && (
        <span className="mb-3 inline-block rounded-full bg-accent-maroon/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-maroon dark:bg-accent-maroon/20 dark:text-primary-beige">
          {tag}
        </span>
      )}
      <h2
        className={`font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl ${
          light
            ? "text-primary-offwhite"
            : "text-neutral-dark dark:text-primary-beige"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            light
              ? "text-primary-beige/80"
              : "text-accent-brown/70 dark:text-primary-beige/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
