"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import HeroMountainBackground from "./HeroMountainBackground";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen w-full bg-[#0b2017] text-white flex flex-col items-center justify-center overflow-hidden px-5 sm:px-8 pt-28 pb-20"
    >
      {/* Animated Green Mountain Landscape & Moving Clouds Background */}
      <HeroMountainBackground />

      <div className="relative z-10 max-w-6xl mx-auto w-full text-center flex flex-col items-center">
        {/* Main Display Name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold uppercase tracking-[-0.03em] text-white text-[clamp(2.55rem,8.4vw,6.25rem)] leading-[0.98] drop-shadow-[0_6px_28px_rgba(0,0,0,0.4)]"
        >
          FADHIL ZAKWAN <span className="text-emerald-300">.</span>
        </motion.h1>

        {/* Tracked Role Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18, letterSpacing: "0.28em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.52em" }}
          transition={{ duration: 0.8, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 sm:mt-7 font-display font-bold uppercase text-sm sm:text-xl md:text-2xl text-emerald-100/95 pl-[0.52em] drop-shadow-[0_3px_14px_rgba(0,0,0,0.45)]"
        >
          {portfolioData.profile.role}
        </motion.p>

        {/* Hero Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/blog"
              className="group inline-flex w-full sm:w-auto min-w-[205px] items-center justify-center gap-2 rounded-2xl bg-white text-[#0d0d0d] px-8 py-4 text-[15px] font-semibold tracking-tight shadow-[0_14px_34px_rgba(0,0,0,0.3)] hover:bg-emerald-50 transition-colors"
            >
              <span>Explore my Blog</span>
              <ArrowDownRight className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto"
          >
            <a
              href={portfolioData.profile.cvUrl}
              download={portfolioData.profile.cvFileName}
              className="group inline-flex w-full sm:w-auto min-w-[205px] items-center justify-center gap-2 rounded-2xl border border-white/40 bg-white/15 backdrop-blur-xl text-white px-8 py-4 text-[15px] font-medium tracking-tight shadow-[0_10px_28px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.35)] hover:bg-white/25 hover:border-white/60 transition-all"
            >
              <span>Download CV</span>
              <Download className="w-4 h-4 opacity-85 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

