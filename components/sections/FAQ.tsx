"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerChild } from "@/lib/animations";
import { faqs } from "@/data/siteData";

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <motion.div variants={staggerChild} className="card-premium overflow-hidden rounded-2xl">
      <button onClick={onClick} className="flex w-full items-center justify-between p-5 text-left sm:p-6" aria-expanded={isOpen}>
        <span className="pr-4 text-base font-semibold text-neutral-dark dark:text-primary-beige sm:text-lg">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
          <ChevronDown className="h-5 w-5 text-accent-maroon dark:text-primary-beige/70" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-accent-maroon/5 px-5 pb-5 pt-4 sm:px-6 sm:pb-6 dark:border-primary-beige/5">
              <p className="text-sm leading-relaxed text-accent-brown/70 dark:text-primary-beige/60">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faqs" bgClassName="bg-gradient-to-b from-primary-offwhite to-neutral-cream dark:from-[#1A1412] dark:to-[#221A16]">
      <SectionHeading tag="FAQs" title="Frequently Asked Questions" subtitle="Got questions? Here are answers to the most common ones. Still curious? Reach out directly." />
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} className="mx-auto max-w-3xl space-y-4">
        {faqs.map((faq, i) => (
          <FAQItem key={faq.question} question={faq.question} answer={faq.answer} isOpen={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? null : i)} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
