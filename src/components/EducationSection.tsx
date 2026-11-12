"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "./MotionPrimitives";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative w-full bg-white text-[#0d0d0d] py-16 sm:py-24 px-5 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Signature Diagonal Hairlines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] diagonal-corner-light-tl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] diagonal-corner-light-br"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Top Wide Architectural Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-[210px] sm:h-[290px] lg:h-[330px] overflow-hidden bg-neutral-100 mb-12 sm:mb-16 group"
        >
          <Image
            src={portfolioData.profile.studiesBanner}
            alt="Architectural symmetry representing academic studies"
            fill
            sizes="(max-width: 1200px) 100vw, 1152px"
            className="object-cover grayscale contrast-115 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </motion.div>

        {/* Bottom 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Title + Intro */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <FadeUp>
              <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2.4rem,4.6vw,3.75rem)] leading-[1.02] text-[#0d0d0d]">
                My Studies
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="mt-5 text-[15px] leading-[1.7] text-[#333333] max-w-md">
                {portfolioData.profile.studiesIntro}
              </p>
            </FadeUp>
          </div>

          {/* Right Column: 3 Studies Timeline Entries */}
          <StaggerContainer className="lg:col-span-7 flex flex-col gap-8 sm:gap-9 lg:pl-8">
            {portfolioData.studies.map((study) => (
              <StaggerItem
                key={study.institution}
                className="group border-b border-neutral-200/80 pb-6 last:border-b-0 last:pb-0"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="flex items-center gap-2.5 font-display text-base sm:text-lg font-bold tracking-tight text-[#0d0d0d]">
                    <span className="inline-block w-2 h-2 rounded-full bg-teal-600 group-hover:scale-125 transition-transform" />
                    <span>{study.institution}</span>
                  </h3>
                  <span className="rounded-full bg-teal-50 border border-teal-200/80 px-3 py-0.5 font-mono text-xs text-teal-800 tracking-tight">
                    {study.period}
                  </span>
                </div>
                <p className="mt-2 pl-4 text-sm sm:text-[15px] leading-[1.65] text-[#404040]">
                  {study.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

