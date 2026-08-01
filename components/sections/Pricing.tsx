"use client";

// ============================================================
// Pricing — 4-tier pricing section with checkout modal
// ============================================================

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerChild, fadeInUp } from "@/lib/animations";
import { pricingPlans, siteConfig } from "@/data/siteData";
import { useRouter } from "next/navigation";

type Plan = (typeof pricingPlans)[number];

export default function Pricing() {
  const router = useRouter();

  return (
    <SectionWrapper id="pricing">
      <SectionHeading
        tag="Pricing"
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that fits your journey — no hidden fees, no lock-ins. Every plan is built around your unique goals."
      />

      {/* Cards Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4 lg:items-start"
      >
        {pricingPlans.map((plan) => (
          <motion.div
            key={plan.id}
            variants={staggerChild}
            className={`relative flex flex-col rounded-2xl sm:rounded-3xl p-3 sm:p-6 transition-all duration-500 ${
              plan.highlighted
                ? "bg-gradient-to-b from-accent-maroon to-accent-brown text-white shadow-xl sm:shadow-2xl ring-2 ring-accent-maroon/40 lg:scale-[1.04] lg:-translate-y-2"
                : "card-premium"
            }`}
          >
            {/* Badge */}
            {plan.badge && (
              <span
                className={`absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 sm:gap-1.5 rounded-full px-2 py-0.5 sm:px-3 sm:py-1 text-[8px] sm:text-[11px] font-bold uppercase tracking-widest shadow-md whitespace-nowrap ${
                  plan.highlighted
                    ? "bg-amber-400 text-neutral-dark"
                    : "bg-accent-maroon text-white"
                }`}
              >
                {plan.highlighted ? <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5" /> : <Zap className="w-2 h-2 sm:w-2.5 sm:h-2.5" />}
                {plan.badge}
              </span>
            )}

            {/* Plan Title */}
            <h3
              className={`mt-1 sm:mt-2 text-[11px] sm:text-base font-bold tracking-tight leading-tight ${
                plan.highlighted
                  ? "text-white"
                  : "text-neutral-dark dark:text-primary-beige"
              }`}
            >
              {plan.title}
            </h3>

            {/* Price */}
            <div className="mt-2 sm:mt-4 flex items-end gap-1">
              <span
                className={`text-lg sm:text-2xl font-bold ${
                  plan.highlighted
                    ? "text-white/70"
                    : "text-accent-brown/70 dark:text-primary-beige/50"
                }`}
              >
                {plan.currency}
              </span>
              <span
                className={`font-heading text-2xl sm:text-5xl font-extrabold leading-none ${
                  plan.highlighted
                    ? "text-white"
                    : "text-neutral-dark dark:text-primary-beige"
                }`}
              >
                {plan.price.toLocaleString("en-IN")}
              </span>
            </div>
            <span
              className={`mt-0.5 sm:mt-1 text-[9px] sm:text-xs font-medium ${
                plan.highlighted
                  ? "text-white/60"
                  : "text-accent-brown/50 dark:text-primary-beige/40"
              }`}
            >
              {plan.duration}
            </span>

            {/* Description */}
            <p
              className={`mt-2 sm:mt-4 text-[9px] sm:text-sm leading-snug sm:leading-relaxed ${
                plan.highlighted
                  ? "text-white/75"
                  : "text-accent-brown/60 dark:text-primary-beige/50"
              }`}
            >
              {plan.description}
            </p>

            {/* Divider */}
            <div
              className={`my-3 sm:my-5 h-px ${
                plan.highlighted
                  ? "bg-white/15"
                  : "bg-accent-maroon/8 dark:bg-primary-beige/8"
              }`}
            />

            {/* Features */}
            <ul className="flex flex-col gap-1.5 sm:gap-2.5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-1.5 sm:gap-2.5">
                  <span
                    className={`mt-0.5 sm:mt-0.5 flex h-3 w-3 sm:h-4 sm:w-4 shrink-0 items-center justify-center rounded-full ${
                      plan.highlighted
                        ? "bg-white/20 text-white"
                        : "bg-accent-maroon/10 text-accent-maroon dark:bg-primary-beige/10 dark:text-primary-beige"
                    }`}
                  >
                    <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5" strokeWidth={3} />
                  </span>
                  <span
                    className={`text-[8px] sm:text-[13px] leading-tight sm:leading-relaxed ${
                      plan.highlighted
                        ? feature.startsWith("Save")
                          ? "font-semibold text-amber-300"
                          : "text-white/80"
                        : "text-accent-brown/70 dark:text-primary-beige/60"
                    }`}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button — opens checkout modal */}
            <div className="mt-auto pt-4 sm:pt-6">
              <button
                onClick={() => {
                  router.push(`/consultation?plan=${plan.id}`);
                }}
                className={`flex w-full cursor-pointer items-center justify-center gap-1 sm:gap-2 rounded-full py-2 sm:py-3.5 text-[9px] sm:text-sm font-bold shadow-md transition-all duration-300 active:scale-[0.97] ${
                  plan.highlighted
                    ? "bg-white text-accent-maroon hover:shadow-xl hover:brightness-95"
                    : "border-2 border-accent-maroon/25 bg-transparent text-accent-maroon hover:bg-accent-maroon hover:text-white dark:border-primary-beige/25 dark:text-primary-beige dark:hover:bg-primary-beige dark:hover:text-neutral-dark"
                }`}
              >
                {plan.highlighted && <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />}
                {plan.cta}
                <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Trust note */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mt-10 text-center text-sm text-accent-brown/50 dark:text-primary-beige/40"
      >
        🔒 &nbsp;Secure &amp; confidential. Reach out on{" "}
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent-maroon underline-offset-2 hover:underline dark:text-primary-beige/70"
        >
          WhatsApp
        </a>{" "}
        to book or ask questions — usually replies within a few hours.
      </motion.p>

    </SectionWrapper>
  );
}
