"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import { siteConfig } from "@/data/siteData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const text = `Hi Dr. Akanksha!\n\nI'm reaching out from your website.\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n${formData.phone ? `*Phone:* ${formData.phone}\n` : ""}*Goal:* ${formData.goal}\n\n*Message:* ${formData.message}`;
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/918302235979?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <SectionWrapper id="contact">
      <SectionHeading tag="Contact" title="Ready to Start Your Journey?" subtitle="Take the first step toward a healthier, stronger, and more confident you. Let's connect." />

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Contact Info */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft} className="lg:col-span-2 space-y-6">
          <div className="card-premium rounded-2xl p-6 sm:p-8">
            <h3 className="mb-6 text-xl font-bold text-neutral-dark dark:text-primary-beige font-heading">Get In Touch</h3>
            <div className="space-y-5">
              {[
                { icon: MessageCircle, label: "WhatsApp", value: "Chat Now", href: siteConfig.whatsapp, color: "text-green-600" },
                { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, color: "text-accent-maroon" },
                { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}`, color: "text-accent-brown" },
                { icon: MapPin, label: "Location", value: "India (Online Worldwide)", href: "#", color: "text-amber-600" },
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-accent-maroon/5 dark:hover:bg-primary-beige/5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent-maroon/10 dark:bg-accent-maroon/20">
                    <item.icon className={`h-5 w-5 ${item.color} dark:text-primary-beige/70`} />
                  </div>
                  <div>
                    <p className="text-xs text-accent-brown/50 dark:text-primary-beige/40">{item.label}</p>
                    <p className="text-sm font-semibold text-neutral-dark dark:text-primary-beige">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-6 text-center shadow-lg">
            <MessageCircle className="mx-auto mb-3 h-8 w-8 text-white" />
            <h4 className="mb-2 text-lg font-bold text-white">Prefer WhatsApp?</h4>
            <p className="mb-4 text-sm text-white/80">Get a quick response. Most queries answered within 2 hours.</p>
            <Button href={siteConfig.whatsapp} variant="secondary" size="md" className="bg-white text-green-600 hover:bg-white/90">Chat on WhatsApp</Button>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight} className="lg:col-span-3">
          <div className="card-premium rounded-2xl p-6 sm:p-8">
            <h3 className="mb-6 text-xl font-bold text-neutral-dark dark:text-primary-beige font-heading">Send a Message</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-accent-brown/70 dark:text-primary-beige/60">Full Name</label>
                  <input id="contact-name" name="name" value={formData.name} onChange={handleChange} required type="text" placeholder="Your name" className="w-full rounded-xl border border-accent-maroon/10 bg-primary-offwhite/50 px-4 py-3 text-sm text-neutral-dark placeholder:text-accent-brown/30 transition-colors focus:border-accent-maroon/30 focus:outline-none focus:ring-2 focus:ring-accent-maroon/10 dark:border-primary-beige/10 dark:bg-neutral-dark/30 dark:text-primary-beige dark:placeholder:text-primary-beige/20" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-accent-brown/70 dark:text-primary-beige/60">Email</label>
                  <input id="contact-email" name="email" value={formData.email} onChange={handleChange} required type="email" placeholder="your@email.com" className="w-full rounded-xl border border-accent-maroon/10 bg-primary-offwhite/50 px-4 py-3 text-sm text-neutral-dark placeholder:text-accent-brown/30 transition-colors focus:border-accent-maroon/30 focus:outline-none focus:ring-2 focus:ring-accent-maroon/10 dark:border-primary-beige/10 dark:bg-neutral-dark/30 dark:text-primary-beige dark:placeholder:text-primary-beige/20" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-accent-brown/70 dark:text-primary-beige/60">Phone (optional)</label>
                <input id="contact-phone" name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 XXXXX XXXXX" className="w-full rounded-xl border border-accent-maroon/10 bg-primary-offwhite/50 px-4 py-3 text-sm text-neutral-dark placeholder:text-accent-brown/30 transition-colors focus:border-accent-maroon/30 focus:outline-none focus:ring-2 focus:ring-accent-maroon/10 dark:border-primary-beige/10 dark:bg-neutral-dark/30 dark:text-primary-beige dark:placeholder:text-primary-beige/20" />
              </div>
              <div>
                <label htmlFor="contact-goal" className="mb-1.5 block text-sm font-medium text-accent-brown/70 dark:text-primary-beige/60">Your Fitness Goal</label>
                <select id="contact-goal" name="goal" value={formData.goal} onChange={handleChange} required className="w-full rounded-xl border border-accent-maroon/10 bg-primary-offwhite/50 px-4 py-3 text-sm text-neutral-dark transition-colors focus:border-accent-maroon/30 focus:outline-none focus:ring-2 focus:ring-accent-maroon/10 dark:border-primary-beige/10 dark:bg-neutral-dark/30 dark:text-primary-beige">
                  <option value="">Select a goal</option>
                  <option value="Fat Loss">Fat Loss</option>
                  <option value="Muscle Gain">Muscle Gain</option>
                  <option value="General Fitness">General Fitness</option>
                  <option value="Diet Planning">Diet Planning</option>
                  <option value="Lifestyle Coaching">Lifestyle Coaching</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-accent-brown/70 dark:text-primary-beige/60">Message</label>
                <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Tell me about your goals, current fitness level, and any questions you have..." className="w-full resize-none rounded-xl border border-accent-maroon/10 bg-primary-offwhite/50 px-4 py-3 text-sm text-neutral-dark placeholder:text-accent-brown/30 transition-colors focus:border-accent-maroon/30 focus:outline-none focus:ring-2 focus:ring-accent-maroon/10 dark:border-primary-beige/10 dark:bg-neutral-dark/30 dark:text-primary-beige dark:placeholder:text-primary-beige/20" />
              </div>
              <Button type="submit" size="lg" className="w-full" icon={<Send size={16} />} iconPosition="right">Send via WhatsApp</Button>
            </form>
            <p className="mt-4 text-center text-xs text-accent-brown/40 dark:text-primary-beige/30">Your information is 100% confidential. I typically respond within 2-3 hours.</p>
          </div>
        </motion.div>
      </div>

      {/* Motivational closing */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-16 text-center">
        <p className="font-heading text-2xl font-bold text-neutral-dark dark:text-primary-beige sm:text-3xl">&ldquo;The best time to start was yesterday. The second best time is <span className="gradient-text">now</span>.&rdquo;</p>
      </motion.div>
    </SectionWrapper>
  );
}
