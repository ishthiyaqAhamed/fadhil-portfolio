"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "./SocialIcons";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const socialButtons = [
    {
      name: "Instagram",
      href: portfolioData.socials.instagram,
      icon: InstagramIcon,
      accent: "hover:border-[#E1306C] hover:bg-[#E1306C] hover:text-white text-[#E1306C]",
    },
    {
      name: "Facebook",
      href: portfolioData.socials.facebook,
      icon: FacebookIcon,
      accent: "hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white text-[#1877F2]",
    },
    {
      name: "LinkedIn",
      href: portfolioData.socials.linkedin,
      icon: LinkedInIcon,
      accent: "hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white text-[#0A66C2]",
    },
    {
      name: "WhatsApp",
      href: portfolioData.socials.whatsapp,
      icon: WhatsAppIcon,
      accent: "hover:border-[#16A34A] hover:bg-[#16A34A] hover:text-white text-[#16A34A]",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full m-0 p-0 bg-white text-[#0d0d0d] border-t border-neutral-200 overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 pt-10 sm:pt-12 pb-8 sm:pb-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 sm:gap-10">
          {/* Brand Summary */}
          <div>
            <Link
              href="/"
              className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0d0d0d]"
            >
              FZ <span className="text-teal-700">.</span>
            </Link>
            <p className="mt-2 text-sm text-neutral-600 max-w-sm">
              {portfolioData.profile.fullName} — Gemologist &amp; Visual Storyteller.
              Precision clarity, curated aesthetics.
            </p>
          </div>

          {/* Required Social Buttons: Instagram, Facebook, LinkedIn, WhatsApp */}
          <div className="flex flex-wrap items-center gap-3">
            {socialButtons.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`group inline-flex items-center gap-2.5 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold transition-colors duration-300 shadow-xs ${social.accent}`}
                >
                  <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span className="text-[#0d0d0d] group-hover:text-white transition-colors">
                    {social.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Bar Flush to Viewport Edge */}
      <div className="w-full bg-neutral-50 border-t border-neutral-200 px-6 sm:px-10 lg:px-16 xl:px-20 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2 text-xs font-semibold tracking-[0.08em] text-neutral-600 uppercase">
          {portfolioData.navLinks.map((link) => (
            <Link
              key={link.label}
              href={`/${link.href}`}
              className="hover:text-[#0d0d0d] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} {portfolioData.profile.fullName}. All
            rights reserved.
          </p>
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.94 }}
            className="w-9 h-9 rounded-full bg-teal-700 text-white flex items-center justify-center hover:bg-teal-800 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

