"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Users, Eye, Video, Play, PlayCircle } from "lucide-react";
import { YoutubeIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { staggerContainer, staggerChild, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import { youtubeVideos, siteConfig } from "@/data/siteData";

export default function YouTubeSection() {
  return (
    <SectionWrapper id="youtube" bgClassName="bg-white dark:bg-neutral-dark">
      <SectionHeading
        tag="YouTube & Social"
        title="Watch, Learn & Get Inspired"
        subtitle="Free fitness content, workout tutorials, and nutrition advice. Join our growing community."
      />

      {/* Social Stats */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mb-8 sm:mb-12 grid grid-cols-4 gap-2 sm:gap-4"
      >
        {[
          { icon: Users, value: 31, suffix: "K+", label: "Instagram Followers" },
          { icon: Eye, value: 2, suffix: "M+", label: "Total Views" },
          { icon: Video, value: 266, suffix: "+", label: "Videos" },
          { icon: Users, value: 13.4, suffix: "K+", label: "YT Subscribers" },
        ].map((stat) => (
          <div key={stat.label} className="card-premium flex flex-col items-center justify-center rounded-xl sm:rounded-2xl p-2 sm:p-5 text-center bg-primary-offwhite/50 dark:bg-[#1C1512]/50">
            <stat.icon className="mb-1 sm:mb-2 h-3 w-3 sm:h-5 sm:w-5 text-accent-maroon dark:text-primary-beige/70" />
            <span className="text-[10px] sm:text-2xl font-bold text-neutral-dark dark:text-primary-beige font-heading">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-[6px] sm:text-xs leading-tight text-accent-brown/50 dark:text-primary-beige/40">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Cards Row: Instagram & YouTube Profiles */}
      <div className="mb-12 grid grid-cols-2 gap-2 sm:gap-6 lg:grid-cols-2">
        {/* ── Instagram Profile Card ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className="flex flex-col justify-between overflow-hidden rounded-3xl border border-accent-maroon/10 bg-primary-offwhite shadow-xl dark:border-primary-beige/10 dark:bg-[#1C1512]"
        >
          {/* Instagram gradient top bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400" />

          <div className="flex flex-col h-full p-2 sm:p-8">
            <div>
              {/* Profile row */}
              <div className="flex items-center gap-1 sm:gap-4 mb-2 sm:mb-6">
                <div className="relative h-8 w-8 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-full ring-1 sm:ring-2 ring-offset-1 sm:ring-offset-2 ring-pink-400 dark:ring-offset-[#1C1512]">
                  <Image
                    src="/images/about-accent.jpeg"
                    alt="@thefitaesthetic_ Instagram"
                    fill
                    className="object-cover object-top"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-0.5 sm:gap-1.5">
                    <p className="text-[8px] sm:text-base font-bold text-neutral-dark dark:text-primary-beige truncate">thefitaesthetic_</p>
                    <svg className="h-2.5 w-2.5 sm:h-4 sm:w-4 shrink-0 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5l-4-4 1.41-1.41L10 13.67l6.59-6.59L18 8.5l-8 8z"/>
                    </svg>
                  </div>
                  <p className="text-[5px] sm:text-xs text-accent-brown/60 dark:text-primary-beige/40">Dr. Akanksha Tiwari · Pharm D</p>
                </div>
                <div className="flex h-5 w-5 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-md sm:rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 shadow-sm sm:shadow-md">
                  <InstagramIcon className="w-2.5 h-2.5 sm:w-[18px] sm:h-[18px] text-white" />
                </div>
              </div>

              {/* Stats row */}
              <div className="mb-2 sm:mb-6 flex divide-x divide-accent-maroon/10 rounded-lg sm:rounded-2xl bg-white/60 dark:bg-white/5 dark:divide-primary-beige/10">
                {[
                  { value: "31K", label: "Followers" },
                  { value: "551", label: "Following" },
                  { value: "500+", label: "Posts" },
                ].map((s) => (
                  <div key={s.label} className="flex-1 py-1 sm:py-4 text-center">
                    <p className="text-[10px] sm:text-lg font-bold text-neutral-dark dark:text-primary-beige font-heading">{s.value}</p>
                    <p className="text-[4px] sm:text-[11px] uppercase tracking-wider text-accent-brown/50 dark:text-primary-beige/40">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Bio */}
              <div className="mb-3 sm:mb-8 space-y-0.5 sm:space-y-2 text-[6px] sm:text-sm leading-tight sm:leading-relaxed text-accent-brown/80 dark:text-primary-beige/70">
                <p className="flex items-center gap-1 sm:gap-2"><span className="text-[8px] sm:text-lg">🏋️‍♀️</span> Fitness | Lifestyle | Motivation</p>
                <p className="flex items-center gap-1 sm:gap-2"><span className="text-[8px] sm:text-lg">👩‍⚕️</span> Pharm D</p>
                <p className="flex items-center gap-1 sm:gap-2 font-medium text-accent-maroon dark:text-primary-beige"><span className="text-[8px] sm:text-lg">📩</span> DM for customized diet plan & Paid coaching</p>
              </div>
            </div>

            {/* Follow CTA */}
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex w-full items-center justify-center gap-1 sm:gap-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 py-1.5 sm:py-3.5 text-[7px] sm:text-sm font-bold text-white shadow-sm sm:shadow-md transition-all hover:shadow-lg hover:brightness-105 active:scale-[0.98]"
            >
              <InstagramIcon className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
              Follow @thefitaesthetic_
              <ExternalLink className="w-2 h-2 sm:w-[14px] sm:h-[14px] opacity-70" />
            </a>
          </div>
        </motion.div>

        {/* ── YouTube Channel Card ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
          className="flex flex-col justify-between overflow-hidden rounded-3xl bg-[#0f0f0f] shadow-2xl"
        >
          {/* YouTube-style channel banner */}
          <div className="relative h-12 sm:h-28 w-full shrink-0 overflow-hidden bg-gradient-to-br from-accent-maroon via-[#8B2020] to-[#3D1010]">
            <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute bottom-0 left-0 h-24 w-48 rounded-full bg-accent-maroon/30 blur-3xl" />
            <div className="absolute top-0 inset-x-0 h-1 bg-[#FF0000]" />
          </div>

          <div className="flex flex-col h-full px-2 pb-2 sm:px-8 sm:pb-8">
            <div>
              {/* Avatar overlapping banner */}
              <div className="relative -mt-4 sm:-mt-10 mb-2 sm:mb-5 flex items-end gap-1.5 sm:gap-4">
                <div className="relative h-8 w-8 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-full border-2 sm:border-4 border-[#0f0f0f] shadow-md sm:shadow-xl bg-[#0f0f0f]">
                  <Image
                    src="/images/hero-photo.jpeg"
                    alt="TheFitAesthetic YouTube"
                    fill
                    className="object-cover object-top"
                    sizes="80px"
                  />
                </div>
                <div className="pb-0.5 sm:pb-1">
                  <div className="flex items-center gap-0.5 sm:gap-1.5">
                    <h4 className="text-[9px] sm:text-lg font-bold leading-tight text-white">TheFitAesthetic</h4>
                    <svg className="h-2.5 w-2.5 sm:h-4 sm:w-4 text-[#aaa]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5l-4-4 1.41-1.41L10 13.67l6.59-6.59L18 8.5l-8 8z"/>
                    </svg>
                  </div>
                  <p className="text-[5px] sm:text-sm text-white/50">@TheFitAesthetic</p>
                </div>
              </div>

              {/* Channel stats */}
              <div className="mb-2 sm:mb-6 flex gap-1 sm:gap-3">
                {[
                  { value: "13.4K+", label: "Subscribers" },
                  { value: "2M+", label: "Views" },
                  { value: "266+", label: "Videos" },
                ].map((s) => (
                  <div key={s.label} className="flex-1 rounded-lg sm:rounded-2xl bg-white/5 py-1 sm:py-4 text-center">
                    <p className="text-[10px] sm:text-lg font-bold text-white font-heading">{s.value}</p>
                    <p className="text-[4px] sm:text-[11px] uppercase tracking-wider text-white/40">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mb-3 sm:mb-8 space-y-0.5 sm:space-y-2 text-[6px] sm:text-sm leading-tight sm:leading-relaxed text-white/70">
                <p className="flex items-center gap-1 sm:gap-2"><span className="text-[8px] sm:text-lg">🧬</span> Science-based fitness & nutrition tips</p>
                <p className="flex items-center gap-1 sm:gap-2"><span className="text-[8px] sm:text-lg">💪</span> Fat loss, muscle gain, Indian diet plans</p>
                <p className="flex items-center gap-1 sm:gap-2"><span className="text-[8px] sm:text-lg">🎥</span> Weekly workout tutorials & real stories</p>
              </div>
            </div>

            {/* Subscribe button */}
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex w-full items-center justify-center gap-1 sm:gap-2 rounded-full bg-[#FF0000] py-1.5 sm:py-3.5 text-[7px] sm:text-sm font-bold text-white shadow-sm sm:shadow-lg shadow-red-900/30 transition-all hover:bg-[#cc0000] hover:shadow-xl active:scale-[0.98]"
            >
              <YoutubeIcon className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
              Subscribe on YouTube
            </a>
          </div>
        </motion.div>
      </div>

      {/* Real YouTube Video Embeds Grid */}
      <div>
        <div className="mb-6 flex items-center gap-2">
          <PlayCircle className="text-accent-maroon dark:text-primary-beige" size={24} />
          <h3 className="font-heading text-2xl font-bold text-neutral-dark dark:text-primary-beige">
            Latest Videos
          </h3>
        </div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-2 sm:gap-6 md:grid-cols-2"
        >
          {youtubeVideos.map((video) => (
            <motion.div
              key={video.id}
              variants={staggerChild}
              className="overflow-hidden rounded-xl sm:rounded-2xl bg-primary-offwhite shadow-lg dark:bg-[#1C1512]"
            >
              {/* iframe Container to maintain 16:9 aspect ratio */}
              <div className="relative w-full overflow-hidden pt-[56.25%]">
                <iframe
                  className="absolute inset-0 h-full w-full border-0"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-2 sm:p-4">
                <h4 className="text-[9px] sm:text-base font-bold leading-tight sm:leading-normal text-neutral-dark line-clamp-2 dark:text-primary-beige">{video.title}</h4>
                <p className="mt-0.5 sm:mt-1 text-[7px] sm:text-xs text-accent-brown/60 dark:text-primary-beige/50">
                  {video.views} · {video.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
