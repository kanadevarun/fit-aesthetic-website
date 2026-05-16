"use client";

// ============================================================
// About — Storytelling section with timeline
// ============================================================

import { motion } from "framer-motion";
import { Heart, Target, Sparkles, Quote } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerChild, fadeInLeft, fadeInRight } from "@/lib/animations";
import { timeline } from "@/data/siteData";

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        tag="About"
        title="Meet Dr. Akanksha Tiwari"
        subtitle="A fitness coach dedicated to making sustainable, realistic health transformations accessible to everyone."
      />

      {/* Two-column layout */}
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left — Image / Visual */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className="relative"
        >
          <div className="relative mx-auto max-w-md">
            {/* Background decoration */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-maroon/5 to-accent-brown/5 blur-xl" />

            {/* Image placeholder */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-beige to-white p-12 shadow-xl dark:from-neutral-dark dark:to-accent-brown/10">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-accent-maroon to-accent-brown shadow-lg">
                  <span className="text-5xl font-bold text-white font-heading">AT</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-neutral-dark dark:text-primary-beige">
                  Dr. Akanksha Tiwari
                </h3>
                <p className="mt-2 text-sm text-accent-brown/60 dark:text-primary-beige/50">
                  Fitness Coach • Nutrition Expert • Wellness Advocate
                </p>

                {/* Values */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { icon: Heart, label: "Passion" },
                    { icon: Target, label: "Focus" },
                    { icon: Sparkles, label: "Results" },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-maroon/10 dark:bg-accent-maroon/20">
                        <item.icon className="h-5 w-5 text-accent-maroon dark:text-primary-beige/80" />
                      </div>
                      <p className="text-xs font-medium text-accent-brown/60 dark:text-primary-beige/50">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
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
            <h3 className="font-heading text-2xl font-bold text-neutral-dark dark:text-primary-beige sm:text-3xl">
              My Mission: Making Fitness{" "}
              <span className="gradient-text">Simple & Sustainable</span>
            </h3>
          </motion.div>

          <motion.p
            variants={staggerChild}
            className="mt-5 text-base leading-relaxed text-accent-brown/70 dark:text-primary-beige/60"
          >
            I believe fitness should not feel like punishment. It should be something you look forward to — 
            a part of your lifestyle that makes you feel strong, confident, and full of energy. My approach 
            is rooted in science, not fads. No extreme diets. No unsustainable routines. Just real, honest 
            guidance that works for your body and your life.
          </motion.p>

          <motion.p
            variants={staggerChild}
            className="mt-4 text-base leading-relaxed text-accent-brown/70 dark:text-primary-beige/60"
          >
            Having guided 500+ individuals — from complete beginners to busy professionals — I understand 
            that every body is different, every schedule is different, and every goal is personal. That&apos;s 
            why every plan I create is as unique as the person following it.
          </motion.p>

          {/* Philosophy Cards */}
          <motion.div
            variants={staggerChild}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {[
              {
                title: "Beginner Friendly",
                desc: "Start wherever you are. No judgment, no pressure — just structured support.",
              },
              {
                title: "Science-Based",
                desc: "Evidence-backed nutrition and training protocols that actually work.",
              },
              {
                title: "Lifestyle Focused",
                desc: "Plans that fit your life, not the other way around.",
              },
              {
                title: "Long-Term Results",
                desc: "Build habits that last a lifetime, not just a season.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="card-premium rounded-xl p-4"
              >
                <h4 className="text-sm font-semibold text-accent-maroon dark:text-primary-beige">
                  {card.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-accent-brown/60 dark:text-primary-beige/50">
                  {card.desc}
                </p>
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

      {/* Timeline */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mt-20"
      >
        <h3 className="mb-10 text-center font-heading text-2xl font-bold text-neutral-dark dark:text-primary-beige">
          The Journey So Far
        </h3>
        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-accent-maroon/20 via-accent-maroon/40 to-accent-maroon/10 md:left-1/2 md:-translate-x-px" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              variants={staggerChild}
              className={`relative mb-8 flex items-start gap-6 md:gap-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 top-1 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                <div className="h-3 w-3 rounded-full bg-accent-maroon shadow-md" />
                <div className="absolute h-6 w-6 rounded-full bg-accent-maroon/20 animate-ping" />
              </div>

              {/* Content */}
              <div
                className={`ml-10 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}
              >
                <span className="text-xs font-bold tracking-widest text-accent-maroon dark:text-primary-beige/70">
                  {item.year}
                </span>
                <h4 className="mt-1 text-lg font-bold text-neutral-dark dark:text-primary-beige">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm text-accent-brown/60 dark:text-primary-beige/50">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
