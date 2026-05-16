"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink, Users, Eye, Video } from "lucide-react";
import { YoutubeIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { staggerContainer, staggerChild, fadeInUp } from "@/lib/animations";
import { youtubeVideos, siteConfig } from "@/data/siteData";

export default function YouTubeSection() {
  return (
    <SectionWrapper id="youtube">
      <SectionHeading tag="YouTube & Social" title="Watch, Learn & Get Inspired" subtitle="Free fitness content, workout tutorials, and nutrition advice. Join our growing community." />

      {/* Social Stats */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { icon: Users, value: 50, suffix: "K+", label: "Subscribers" },
          { icon: Eye, value: 2, suffix: "M+", label: "Total Views" },
          { icon: Video, value: 120, suffix: "+", label: "Videos" },
          { icon: Users, value: 25, suffix: "K+", label: "Followers" },
        ].map((stat) => (
          <div key={stat.label} className="card-premium flex flex-col items-center rounded-2xl p-5 text-center">
            <stat.icon className="mb-2 h-5 w-5 text-accent-maroon dark:text-primary-beige/70" />
            <span className="text-2xl font-bold text-neutral-dark dark:text-primary-beige font-heading">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-xs text-accent-brown/50 dark:text-primary-beige/40">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Video Cards */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {youtubeVideos.map((video) => (
          <motion.div key={video.title} variants={staggerChild} className="group card-premium overflow-hidden rounded-2xl">
            <div className="relative h-44 overflow-hidden bg-gradient-to-br from-accent-maroon/80 to-accent-brown/80">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-1 h-6 w-6 text-accent-maroon" />
                </div>
              </div>
              <span className="absolute bottom-2 right-2 rounded-md bg-black/70 px-2 py-0.5 text-xs font-medium text-white">{video.duration}</span>
            </div>
            <div className="p-4">
              <h3 className="mb-1 text-sm font-bold leading-snug text-neutral-dark dark:text-primary-beige line-clamp-2 group-hover:text-accent-maroon transition-colors">{video.title}</h3>
              <p className="text-xs text-accent-brown/50 dark:text-primary-beige/40">{video.views}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Instagram + Subscribe CTA Row */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Instagram Section */}
        <div className="card-premium overflow-hidden rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
              <InstagramIcon size={20} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-neutral-dark dark:text-primary-beige">@fitaesthetic</p>
              <p className="text-xs text-accent-brown/50 dark:text-primary-beige/40">Daily tips, reels & motivation</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-primary-beige to-accent-maroon/10 dark:from-neutral-dark dark:to-accent-brown/10" />
            ))}
          </div>
          <Button href={siteConfig.social.instagram} variant="outline" size="sm" className="mt-4 w-full" icon={<ExternalLink size={14} />} iconPosition="right">
            Follow on Instagram
          </Button>
        </div>

        {/* YouTube Subscribe CTA */}
        <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-accent-maroon to-accent-brown p-8 text-center shadow-xl sm:p-10 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
          <div className="relative">
            <YoutubeIcon size={48} className="mx-auto mb-4 text-white/90" />
            <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl font-heading">Subscribe for Free Content</h3>
            <p className="mb-6 max-w-sm text-sm text-white/70">Weekly workout tutorials, diet tips, and real transformation stories. Join 50,000+ subscribers.</p>
            <Button href={siteConfig.social.youtube} variant="secondary" size="lg" icon={<Play size={16} />}>Subscribe on YouTube</Button>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
