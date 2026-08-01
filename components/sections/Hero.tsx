"use client";

// ============================================================
// Hero — Premium hero section with animated elements
// ============================================================

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Users, Trophy, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { fadeInRight, staggerContainer, staggerChild } from "@/lib/animations";
import { siteConfig } from "@/data/siteData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-16 pb-8 md:pt-32 md:pb-24"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Large gradient orb */}
        <motion.div
          className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent-maroon/[0.04] blur-3xl dark:bg-accent-maroon/[0.08]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full bg-primary-beige/60 blur-3xl dark:bg-accent-brown/10"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating decorative shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 h-3 w-3 rounded-full bg-accent-maroon/20"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 h-2 w-2 rounded-full bg-accent-brown/20"
          animate={{ y: [0, -15, 0], x: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 h-4 w-4 rounded-full bg-accent-maroon/10"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Sparkle dots */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-accent-maroon/20 dark:bg-primary-beige/20"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 18}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between gap-3 sm:gap-8 lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Left Column — Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-1/2 lg:w-auto text-left"
          >
            {/* Badge */}
            <motion.div variants={staggerChild} className="mb-2 sm:mb-6">
              <span className="inline-flex items-center gap-1 sm:gap-2 rounded-full border border-accent-maroon/15 bg-white/60 px-2 sm:px-4 py-1 sm:py-2 text-[8px] sm:text-xs font-semibold tracking-widest text-accent-maroon shadow-sm backdrop-blur-sm dark:border-primary-beige/15 dark:bg-neutral-dark/40 dark:text-primary-beige">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                NEW CLIENTS
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={staggerChild}
              className="font-heading text-xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-neutral-dark lg:text-[3.5rem] xl:text-6xl dark:text-primary-beige"
            >
              Helping You Build{" "}
              <span className="gradient-text">Sustainable Fitness</span>
              {" "}& Confidence.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={staggerChild}
              className="mt-2 sm:mt-6 max-w-xl text-[10px] sm:text-base leading-relaxed text-accent-brown/70 md:text-xl lg:mx-0 dark:text-primary-beige/60"
            >
              Personalized fitness guidance, realistic diet strategies, and
              sustainable transformation plans designed for real people.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerChild}
              className="mt-4 sm:mt-8 flex flex-col xl:flex-row flex-wrap justify-start gap-2 sm:gap-4"
            >
              <Button
                href="/consultation"
                size="sm"
                icon={<ArrowRight size={14} />}
                iconPosition="right"
                className="text-[10px] sm:text-sm md:px-8 md:py-4 md:text-lg"
              >
                Book Consultation
              </Button>
              <Button
                href={siteConfig.social.youtube}
                variant="outline"
                size="sm"
                icon={<Play size={14} />}
                className="text-[10px] sm:text-sm md:px-8 md:py-4 md:text-lg"
              >
                Watch on YouTube
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={staggerChild}
              className="mt-4 sm:mt-8 hidden sm:flex flex-wrap items-center justify-start gap-4 lg:gap-6"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-accent-maroon/20 to-accent-brown/30 dark:border-neutral-dark"
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium text-accent-brown/70 dark:text-primary-beige/60">
                  500+ Happy Clients
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 text-sm font-medium text-accent-brown/70 dark:text-primary-beige/60">
                  4.9/5 Rating
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — Visual */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            className="relative flex w-1/2 lg:w-auto items-center justify-end lg:justify-center"
          >
            {/* Main image with premium frame */}
            <div className="relative">
              {/* Background glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-maroon/10 to-accent-brown/10 blur-2xl" />

              {/* Image container */}
              <div className="relative h-[180px] w-[140px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl sm:h-[400px] sm:w-[320px] lg:h-[500px] lg:w-[390px]">
                <Image
                  src="/images/hero-photo.jpeg"
                  alt="Dr. Akanksha Tiwari — Fitness Coach"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 320px, 390px"
                />
                {/* Subtle top gradient for readability */}
                <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-neutral-dark/50 to-transparent" />
                {/* Name label at top */}
                <div className="absolute top-2 sm:top-4 inset-x-2 sm:inset-x-4 text-center">
                  <p className="text-[10px] sm:text-sm font-heading font-bold text-white tracking-wide drop-shadow-md">
                    Dr. Akanksha Tiwari
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/80 drop-shadow-sm">
                    Fitness Coach &amp; Wellness Expert
                  </p>
                </div>
              </div>

              {/* Floating stats card — top right */}
              <motion.div
                className="absolute -top-4 -right-4 hidden sm:flex rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-sm sm:-right-8 dark:bg-neutral-dark/90"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30">
                    <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-accent-brown/60 dark:text-primary-beige/50">Success Rate</p>
                    <p className="text-lg font-bold text-neutral-dark dark:text-primary-beige">95%</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating testimonial card — bottom left */}
              <motion.div
                className="absolute -bottom-4 -left-4 hidden sm:block max-w-[200px] rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-sm sm:-left-8 dark:bg-neutral-dark/90"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs leading-relaxed text-accent-brown/70 dark:text-primary-beige/60">
                  &ldquo;Life-changing guidance! Lost 12kg in 4 months.&rdquo;
                </p>
                <p className="mt-2 text-[10px] font-semibold text-accent-maroon dark:text-primary-beige">
                  — Priya M.
                </p>
              </motion.div>

              {/* Floating badge — top left */}
              <motion.div
                className="absolute top-8 -left-4 rounded-xl bg-gradient-to-br from-accent-maroon to-accent-brown p-3 shadow-lg sm:-left-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Users className="h-5 w-5 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-2 gap-4 max-w-2xl mx-auto lg:mt-28 sm:gap-6"
        >
          {[
            { icon: Trophy, value: 95, suffix: "%", label: "Satisfaction Rate" },
            { icon: Star, value: 6, suffix: "+", label: "Years Experience" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerChild}
              className="card-premium rounded-2xl p-4 sm:p-6 text-center"
            >
              <stat.icon className="mx-auto mb-2 sm:mb-3 h-5 w-5 sm:h-6 sm:w-6 text-accent-maroon dark:text-primary-beige/80" />
              <div className="text-2xl sm:text-3xl font-bold text-neutral-dark dark:text-primary-beige font-heading">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-sm text-accent-brown/60 dark:text-primary-beige/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
