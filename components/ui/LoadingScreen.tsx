"use client";

// ============================================================
// LoadingScreen — Premium loading animation on initial load
// ============================================================

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary-offwhite dark:bg-neutral-dark"
        >
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-maroon to-accent-brown shadow-xl">
              <span className="text-3xl font-bold text-white font-heading">FA</span>
            </div>
          </motion.div>

          {/* Brand Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-8 text-lg font-bold tracking-widest text-neutral-dark dark:text-primary-beige"
          >
            FIT AESTHETIC
          </motion.p>

          {/* Loading bar */}
          <div className="h-0.5 w-48 overflow-hidden rounded-full bg-accent-maroon/10 dark:bg-primary-beige/10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-1/2 rounded-full bg-gradient-to-r from-accent-maroon to-accent-brown"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
