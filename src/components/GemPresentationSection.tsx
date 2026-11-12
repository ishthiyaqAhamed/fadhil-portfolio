"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { FadeUp, SparkIcon } from "./MotionPrimitives";

export default function GemPresentationSection() {
  const gem = portfolioData.featuredGemBlog;

  return (
    <section className="relative w-full bg-[#0b0b0b] text-white py-20 sm:py-24 px-5 sm:px-8 lg:px-12 overflow-hidden">
      {/* Signature Diagonal Hairlines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] diagonal-corner-dark-tl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] diagonal-corner-dark-br"
      />

      {/* Subtle Jewel Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[540px] h-[260px] rounded-full bg-teal-500/10 blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Top Tag */}
        <FadeUp className="flex items-center gap-2.5 text-white mb-5">
          <SparkIcon className="w-5 h-5 text-amber-400" />
          <span className="font-display text-sm sm:text-base font-bold tracking-tight text-amber-100">
            {gem.badge}
          </span>
        </FadeUp>

        {/* Top Header Row: Large Stacked Title + Right Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          <FadeUp className="lg:col-span-6">
            <h2 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.65rem,5.8vw,4.5rem)] leading-[0.94] text-white">
              <span className="block">{gem.titleLine1}</span>
              <span className="block">{gem.titleLine2}</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.12} className="lg:col-span-6 lg:pt-2">
            <p className="text-sm sm:text-[15px] leading-[1.7] text-neutral-300 max-w-lg lg:ml-auto">
              {gem.intro}
            </p>
          </FadeUp>
        </div>

        {/* Center Featured Gem Macro Image */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 sm:mt-12 mx-auto max-w-3xl relative aspect-[16/9] overflow-hidden bg-neutral-900 border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.65)] group"
        >
          <Image
            src={gem.image}
            alt="Macro faceted gemstone presentation"
            fill
            sizes="(max-width: 1024px) 100vw, 768px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </motion.div>

        {/* Bottom 3-Column Row: Project Overview | Design Concept | Explore More -> Button */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <FadeUp delay={0.08} className="md:col-span-4">
            <h3 className="flex items-center gap-2.5 font-display text-base sm:text-lg font-bold tracking-tight text-white">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>Project Overview</span>
            </h3>
            <p className="mt-2.5 text-sm leading-[1.68] text-neutral-300">
              {gem.projectOverview}
            </p>
          </FadeUp>

          <FadeUp delay={0.14} className="md:col-span-4">
            <h3 className="flex items-center gap-2.5 font-display text-base sm:text-lg font-bold tracking-tight text-white">
              <span className="inline-block w-2 h-2 rounded-full bg-sky-400" />
              <span>Design Concept</span>
            </h3>
            <p className="mt-2.5 text-sm leading-[1.68] text-neutral-300">
              {gem.designConcept}
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="md:col-span-4 flex md:justify-end">
            <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/blog"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white text-[#0d0d0d] px-8 py-3.5 text-sm font-semibold tracking-tight shadow-lg hover:bg-teal-400 hover:text-[#0b0b0b] transition-colors"
              >
                <span>Explore More</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

