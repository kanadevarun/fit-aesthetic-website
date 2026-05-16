"use client";

// ============================================================
// SectionWrapper — Reusable animated section container
// ============================================================

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  bgClassName?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  bgClassName = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`section-padding relative overflow-hidden ${bgClassName}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeInUp}
        className={`mx-auto max-w-7xl ${className}`}
      >
        {children}
      </motion.div>
    </section>
  );
}
