"use client";

import { Heart } from "lucide-react";
import { YoutubeIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { navLinks, siteConfig } from "@/data/siteData";

const socialLinks = [
  { icon: YoutubeIcon, href: siteConfig.social.youtube, label: "YouTube" },
  { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: TwitterIcon, href: siteConfig.social.twitter, label: "Twitter" },
  { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-accent-maroon/5 bg-gradient-to-b from-primary-offwhite to-primary-beige/30 dark:border-primary-beige/5 dark:from-[#1A1412] dark:to-[#151010]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-2 sm:mb-4">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-accent-maroon to-accent-brown shadow-md">
                <span className="text-sm sm:text-lg font-bold text-white font-heading">FA</span>
              </div>
              <div>
                <p className="text-[11px] sm:text-sm font-bold tracking-wide text-neutral-dark dark:text-primary-beige">{siteConfig.tagline}</p>
                <p className="text-[8px] sm:text-[10px] tracking-widest text-accent-brown/60 dark:text-primary-beige/40 uppercase">by {siteConfig.name}</p>
              </div>
            </div>
            <p className="mb-3 sm:mb-6 max-w-sm text-[9px] sm:text-sm leading-snug sm:leading-relaxed text-accent-brown/60 dark:text-primary-beige/50">
              Helping real people build sustainable fitness, confidence, and a healthier lifestyle through personalized, science-based guidance.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-6 w-6 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-accent-maroon/5 text-accent-brown/60 transition-all hover:bg-accent-maroon/10 hover:text-accent-maroon dark:bg-primary-beige/5 dark:text-primary-beige/50 dark:hover:bg-primary-beige/10 dark:hover:text-primary-beige">
                  <s.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="mb-2 sm:mb-4 text-[10px] sm:text-sm font-bold uppercase tracking-widest text-neutral-dark dark:text-primary-beige">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2.5">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[9px] sm:text-sm text-accent-brown/60 transition-colors hover:text-accent-maroon dark:text-primary-beige/50 dark:hover:text-primary-beige">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div className="col-span-1">
            <h4 className="mb-2 sm:mb-4 text-[10px] sm:text-sm font-bold uppercase tracking-widest text-neutral-dark dark:text-primary-beige">Resources</h4>
            <ul className="space-y-1 sm:space-y-2.5">
              {navLinks.slice(5).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[9px] sm:text-sm text-accent-brown/60 transition-colors hover:text-accent-maroon dark:text-primary-beige/50 dark:hover:text-primary-beige">{link.label}</a>
                </li>
              ))}
              <li><a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="text-[9px] sm:text-sm text-accent-brown/60 transition-colors hover:text-accent-maroon dark:text-primary-beige/50 dark:hover:text-primary-beige">YouTube Channel</a></li>
              <li><a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[9px] sm:text-sm text-accent-brown/60 transition-colors hover:text-accent-maroon dark:text-primary-beige/50 dark:hover:text-primary-beige">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        {/* Quote */}
        <div className="hidden sm:block mt-12 rounded-2xl bg-gradient-to-r from-accent-maroon/5 to-accent-brown/5 p-6 text-center dark:from-accent-maroon/10 dark:to-accent-brown/10">
          <p className="font-heading text-base italic text-accent-brown/60 dark:text-primary-beige/50 sm:text-lg">
            &ldquo;Your body can stand almost anything. It&apos;s your mind that you have to convince.&rdquo;
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-10 flex flex-col items-center justify-between gap-1 sm:gap-4 border-t border-accent-maroon/5 pt-4 sm:pt-8 text-center sm:flex-row dark:border-primary-beige/5">
          <p className="text-[8px] sm:text-xs text-accent-brown/40 dark:text-primary-beige/30">
            © {new Date().getFullYear()} {siteConfig.tagline} by {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-[8px] sm:text-xs text-accent-brown/40 dark:text-primary-beige/30">
            Made with <Heart className="w-2 h-2 sm:w-3 sm:h-3 text-accent-maroon" /> for a healthier world
          </p>
        </div>
      </div>
    </footer>
  );
}
