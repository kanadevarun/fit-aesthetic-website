"use client";

// ============================================================
// About — Storytelling section with timeline
// ============================================================

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Target, Sparkles, Quote } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerChild, fadeInLeft, fadeInRight } from "@/lib/animations";


export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        tag="About"
        title="Meet Dr. Akanksha Tiwari"
        subtitle="A fitness coach dedicated to making sustainable, realistic health transformations accessible to everyone."
      />

      {/* Two-column layout */}
      <div className="grid grid-cols-2 gap-4 sm:gap-12 lg:gap-16 items-center">
        {/* Left — Image / Visual */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className="relative"
        >
          <div className="relative mx-auto w-full max-w-[140px] sm:max-w-md">
            {/* Background decoration */}
            <div className="absolute -inset-2 sm:-inset-4 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-accent-maroon/5 to-accent-brown/5 blur-lg sm:blur-xl" />

            {/* Main portrait photo */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-3xl shadow-xl" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/images/about-photo.jpeg"
                alt="Dr. Akanksha Tiwari — Fitness Coach & Nutrition Expert"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 90vw, 448px"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/40 via-transparent to-transparent" />
            </div>

            {/* Floating accent photo — bottom right */}
            <div className="absolute -bottom-2 -right-2 sm:-bottom-5 sm:-right-5 h-12 w-12 sm:h-32 sm:w-32 overflow-hidden rounded-lg sm:rounded-2xl border-2 sm:border-4 border-white shadow-xl dark:border-neutral-dark">
              <Image
                src="/images/about-accent.jpeg"
                alt="Dr. Akanksha Tiwari close-up"
                fill
                className="object-cover object-top"
                sizes="144px"
              />
            </div>

            {/* Values pill */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 flex items-center gap-1 sm:gap-2 rounded-full bg-white/90 px-2 sm:px-4 py-1 sm:py-2 shadow-lg backdrop-blur-sm dark:bg-neutral-dark/90">
              <Heart className="h-2 w-2 sm:h-4 sm:w-4 text-accent-maroon" />
              <span className="text-[6px] sm:text-xs font-bold text-neutral-dark dark:text-primary-beige">Passion &amp; Results</span>
            </div>
          </div>
        </motion.div>

        {/* Right — Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={staggerChild}>
            <h3 className="font-heading text-[12px] sm:text-2xl font-bold text-neutral-dark dark:text-primary-beige md:text-3xl leading-tight">
              My Mission: Making Fitness{" "}
              <span className="gradient-text">Simple & Sustainable</span>
            </h3>
          </motion.div>

          <motion.p
            variants={staggerChild}
            className="mt-2 sm:mt-5 text-[8px] sm:text-base leading-snug sm:leading-relaxed text-accent-brown/70 dark:text-primary-beige/60"
          >
            I believe fitness should not feel like punishment. It should be something you look forward to — 
            a part of your lifestyle that makes you feel strong, confident, and full of energy. My approach 
            is rooted in science, not fads. No extreme diets. No unsustainable routines. Just real, honest 
            guidance that works for your body and your life.
          </motion.p>

          <motion.p
            variants={staggerChild}
            className="mt-2 sm:mt-4 text-[8px] sm:text-base leading-snug sm:leading-relaxed text-accent-brown/70 dark:text-primary-beige/60"
          >
            Having guided 500+ individuals — from complete beginners to busy professionals — I understand 
            that every body is different, every schedule is different, and every goal is personal. That&apos;s 
            why every plan I create is as unique as the person following it.
          </motion.p>

          {/* Philosophy Tags */}
          <motion.div
            variants={staggerChild}
            className="mt-3 sm:mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-1 sm:gap-3"
          >
            {[
              "Beginner Friendly",
              "Science-Based",
              "Lifestyle Focused",
              "Long-Term Results",
            ].map((title) => (
              <div
                key={title}
                className="inline-flex items-center rounded-full bg-accent-maroon/5 dark:bg-primary-beige/5 px-2 sm:px-4 py-1 sm:py-2 border border-accent-maroon/20 dark:border-primary-beige/20 shadow-sm"
              >
                <span className="text-[6px] sm:text-sm font-semibold text-accent-maroon dark:text-primary-beige">
                  {title}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Quote Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInLeft}
        className="mt-20 rounded-3xl bg-gradient-to-br from-accent-maroon to-accent-brown p-8 text-center shadow-xl sm:p-12"
      >
        <Quote className="mx-auto mb-4 h-8 w-8 text-white/40" />
        <blockquote className="font-heading text-xl font-bold leading-relaxed text-white sm:text-2xl md:text-3xl">
          &ldquo;Fitness is not about being better than someone else. It&apos;s about being better
          than you used to be.&rdquo;
        </blockquote>
        <p className="mt-4 text-sm font-medium text-white/60">
          — Dr. Akanksha Tiwari
        </p>
      </motion.div>


    </SectionWrapper>
  );
}
