"use client";

// ============================================================
// CheckoutModal — Premium WhatsApp-based checkout flow
// ============================================================

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Check,
  MessageCircle,
  Mail,
  Copy,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/siteData";

interface PricingPlan {
  id: string;
  title: string;
  price: number;
  currency: string;
  duration: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge: string | null;
}

interface CheckoutModalProps {
  plan: PricingPlan | null;
  onClose: () => void;
}

export default function CheckoutModal({ plan, onClose }: CheckoutModalProps) {
  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (plan) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [plan, handleKeyDown]);

  // Build pre-filled WhatsApp message
  const whatsappMessage = plan
    ? encodeURIComponent(
        `Hi Dr. Akanksha!\n\nI'd like to enroll in the *${plan.title}* (${plan.currency}${plan.price.toLocaleString("en-IN")} ${plan.duration}).\n\nCould you please share the payment details to get started?`
      )
    : "";

  const whatsappUrl = `https://wa.me/918302235979?text=${whatsappMessage}`;
  const emailSubject = plan
    ? encodeURIComponent(`Enrollment: ${plan.title} — Fit Aesthetic`)
    : "";
  const emailBody = plan
    ? encodeURIComponent(
        `Hi Dr. Akanksha,\n\nI'm interested in enrolling in the ${plan.title} (${plan.currency}${plan.price.toLocaleString("en-IN")} ${plan.duration}).\n\nPlease share the payment details.\n\nThank you!`
      )
    : "";

  const copyPlanDetails = () => {
    if (!plan) return;
    const text = `Plan: ${plan.title}\nPrice: ${plan.currency}${plan.price.toLocaleString("en-IN")} ${plan.duration}\nContact: ${siteConfig.email}`;
    navigator.clipboard.writeText(text);
  };

  return (
    <AnimatePresence>
      {plan && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-neutral-dark/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed inset-x-4 bottom-0 top-[5vh] z-[70] mx-auto flex max-w-lg flex-col overflow-hidden rounded-t-3xl bg-primary-offwhite shadow-2xl dark:bg-[#1C1512] sm:inset-x-auto sm:left-1/2 sm:right-auto sm:top-1/2 sm:h-auto sm:max-h-[90vh] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-3xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="checkout-title"
          >
            {/* Gradient top strip */}
            <div className="h-1.5 w-full shrink-0 bg-gradient-to-r from-accent-maroon via-accent-brown to-accent-maroon" />

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto">
              {/* Header */}
              <div className="flex items-start justify-between p-6 pb-0">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-maroon/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent-maroon dark:bg-primary-beige/10 dark:text-primary-beige">
                    <Sparkles size={10} />
                    Get Started
                  </span>
                  <h2
                    id="checkout-title"
                    className="mt-2 font-heading text-xl font-bold text-neutral-dark dark:text-primary-beige sm:text-2xl"
                  >
                    {plan.title}
                  </h2>
                  <p className="mt-0.5 text-sm text-accent-brown/60 dark:text-primary-beige/50">
                    {plan.description}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="ml-4 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-maroon/5 text-accent-brown/60 transition-colors hover:bg-accent-maroon/10 hover:text-accent-maroon dark:bg-primary-beige/5 dark:text-primary-beige/50 dark:hover:bg-primary-beige/10 dark:hover:text-primary-beige"
                  aria-label="Close checkout"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 space-y-5">
                {/* Price summary card */}
                <div className="flex items-center justify-between rounded-2xl bg-gradient-to-br from-accent-maroon to-accent-brown p-5 text-white shadow-lg">
                  <div>
                    <p className="text-xs font-medium text-white/60 uppercase tracking-widest">
                      Total Amount
                    </p>
                    <p className="mt-0.5 font-heading text-4xl font-extrabold">
                      {plan.currency}
                      {plan.price.toLocaleString("en-IN")}
                    </p>
                    <p className="mt-0.5 text-xs text-white/60">{plan.duration}</p>
                  </div>
                  {plan.badge && (
                    <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-neutral-dark">
                      {plan.badge}
                    </span>
                  )}
                </div>

                {/* Features recap */}
                <div className="rounded-2xl border border-accent-maroon/8 bg-white/60 p-4 dark:border-primary-beige/8 dark:bg-white/5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent-brown/50 dark:text-primary-beige/40">
                    What's included
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {plan.features.slice(0, 6).map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-maroon/10 text-accent-maroon dark:bg-primary-beige/10 dark:text-primary-beige">
                          <Check size={9} strokeWidth={3} />
                        </span>
                        <span className="text-xs text-accent-brown/70 dark:text-primary-beige/60">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How it works */}
                <div className="rounded-2xl bg-primary-beige/40 p-4 dark:bg-accent-maroon/10">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent-brown/50 dark:text-primary-beige/40">
                    How it works
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {[
                      { step: "1", text: "Click \"Pay Now via WhatsApp\" below" },
                      { step: "2", text: "Dr. Akanksha will reply with payment details" },
                      { step: "3", text: "Pay & receive your personalized plan within 48 hrs" },
                    ].map((s) => (
                      <div key={s.step} className="flex items-center gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-maroon text-[11px] font-bold text-white">
                          {s.step}
                        </span>
                        <span className="text-xs text-accent-brown/70 dark:text-primary-beige/60">
                          {s.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {[
                    { icon: ShieldCheck, text: "100% Secure" },
                    { icon: Clock, text: "Reply within 2 hrs" },
                    { icon: MessageCircle, text: "WhatsApp support" },
                  ].map((b) => (
                    <div
                      key={b.text}
                      className="flex items-center gap-1.5 text-xs text-accent-brown/50 dark:text-primary-beige/40"
                    >
                      <b.icon size={13} className="text-accent-maroon dark:text-primary-beige/60" />
                      {b.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky footer CTA */}
            <div className="shrink-0 space-y-3 border-t border-accent-maroon/8 bg-primary-offwhite p-5 dark:border-primary-beige/8 dark:bg-[#1C1512] sm:pb-6">
              {/* Primary — WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-green-500 to-green-600 py-4 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all hover:shadow-xl hover:brightness-105 active:scale-[0.98]"
              >
                <MessageCircle size={18} />
                Pay Now via WhatsApp
                <ArrowRight size={15} className="opacity-70" />
              </a>

              {/* Secondary row */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`mailto:${siteConfig.email}?subject=${emailSubject}&body=${emailBody}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-accent-maroon/20 bg-white/60 py-3 text-xs font-semibold text-accent-brown transition-colors hover:bg-accent-maroon/5 hover:text-accent-maroon dark:border-primary-beige/15 dark:bg-white/5 dark:text-primary-beige/70 dark:hover:bg-primary-beige/5 dark:hover:text-primary-beige"
                >
                  <Mail size={14} />
                  Email Instead
                </a>
                <button
                  onClick={copyPlanDetails}
                  className="flex items-center justify-center gap-2 rounded-full border border-accent-maroon/20 bg-white/60 py-3 text-xs font-semibold text-accent-brown transition-colors hover:bg-accent-maroon/5 hover:text-accent-maroon dark:border-primary-beige/15 dark:bg-white/5 dark:text-primary-beige/70 dark:hover:bg-primary-beige/5 dark:hover:text-primary-beige"
                >
                  <Copy size={14} />
                  Copy Details
                </button>
              </div>

              <p className="text-center text-[11px] text-accent-brown/40 dark:text-primary-beige/30">
                By proceeding you agree to our terms. Your info is 100% confidential.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
