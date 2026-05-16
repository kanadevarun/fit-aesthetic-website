"use client";

// ============================================================
// Navbar — Sticky transparent navbar with blur & mobile menu
// ============================================================

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks, siteConfig } from "@/data/siteData";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  const handleNavClick = () => setIsMobileOpen(false);

  return (
    <>
      <motion.header
        initial={false}
        animate={isScrolled ? "scrolled" : "transparent"}
        variants={{
          transparent: {
            backgroundColor: "rgba(250, 247, 242, 0)",
            boxShadow: "0 0 0 rgba(0,0,0,0)",
          },
          scrolled: {
            backgroundColor: "rgba(250, 247, 242, 0.85)",
            boxShadow: "0 4px 24px rgba(110, 59, 59, 0.06)",
          },
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-x-0 top-0 z-50 backdrop-blur-md dark:bg-neutral-dark/80"
        role="banner"
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-2" aria-label="Home">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-maroon to-accent-brown shadow-md transition-transform duration-300 group-hover:scale-105">
              <span className="text-lg font-bold text-white font-heading">FA</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold tracking-wide text-neutral-dark dark:text-primary-beige">
                {siteConfig.tagline}
              </p>
              <p className="text-[10px] tracking-widest text-accent-brown/60 dark:text-primary-beige/40 uppercase">
                by {siteConfig.name}
              </p>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-accent-brown/80 transition-colors hover:bg-accent-maroon/5 hover:text-accent-maroon dark:text-primary-beige/70 dark:hover:bg-primary-beige/5 dark:hover:text-primary-beige"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDark}
              className="flex h-9 w-9 items-center justify-center rounded-full text-accent-brown/60 transition-colors hover:bg-accent-maroon/5 hover:text-accent-maroon dark:text-primary-beige/60 dark:hover:bg-primary-beige/10 dark:hover:text-primary-beige"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button href="#contact" size="sm">
                Start Your Journey
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-accent-brown transition-colors hover:bg-accent-maroon/5 lg:hidden dark:text-primary-beige"
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-neutral-dark/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 flex h-full w-80 flex-col bg-primary-offwhite p-6 shadow-2xl dark:bg-neutral-dark lg:hidden"
            >
              {/* Close */}
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-maroon to-accent-brown">
                    <span className="text-sm font-bold text-white font-heading">FA</span>
                  </div>
                  <span className="text-sm font-bold text-neutral-dark dark:text-primary-beige">
                    {siteConfig.tagline}
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-accent-maroon/5 dark:hover:bg-primary-beige/5"
                  aria-label="Close menu"
                >
                  <X size={20} className="text-accent-brown dark:text-primary-beige" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="rounded-lg px-4 py-3 text-base font-medium text-accent-brown/80 transition-colors hover:bg-accent-maroon/5 hover:text-accent-maroon dark:text-primary-beige/70 dark:hover:bg-primary-beige/5 dark:hover:text-primary-beige"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-auto pt-6">
                <Button href="#contact" className="w-full" onClick={handleNavClick}>
                  Start Your Journey
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
