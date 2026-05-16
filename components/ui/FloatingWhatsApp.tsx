"use client";

// ============================================================
// FloatingWhatsApp — Fixed WhatsApp CTA button
// ============================================================

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg transition-shadow hover:shadow-xl sm:h-16 sm:w-16"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.5, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="sm:h-7 sm:w-7" />

      {/* Ping animation */}
      <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-green-400" />
      </span>
    </motion.a>
  );
}
