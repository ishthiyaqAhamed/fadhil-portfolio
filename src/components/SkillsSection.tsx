"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "./MotionPrimitives";

const CAPABILITY_ACCENTS = [
  { dot: "bg-emerald-400", border: "hover:border-emerald-400/40" },
  { dot: "bg-sky-400", border: "hover:border-sky-400/40" },
  { dot: "bg-amber-400", border: "hover:border-amber-400/40" },
  { dot: "bg-violet-400", border: "hover:border-violet-400/40" },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#0b0b0b] text-white py-20 sm:py-28 px-5 sm:px-8 lg:px-12 overflow-hidden"
    >
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
        className="pointer-events-none absolute top-12 right-12 w-72 h-72 rounded-full bg-teal-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 left-12 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Stacked Display Title */}
        <FadeUp>
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-teal-400 mb-3">
            Core Disciplines
          </span>
          <h2 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.7rem,6vw,4.75rem)] leading-[0.94] text-white">
            <span className="block">Personal</span>
            <span className="block">Capabilities</span>
          </h2>
        </FadeUp>

        {/* 2x2 Capabilities Grid */}
        <StaggerContainer className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10 sm:gap-y-12">
          {portfolioData.capabilities.map((cap, idx) => {
            const accent = CAPABILITY_ACCENTS[idx % CAPABILITY_ACCENTS.length];
            return (
              <StaggerItem
                key={cap.title}
                className={`group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7 hover:bg-white/[0.04] transition-all duration-300 ${accent.border}`}
              >
                <h3 className="flex items-center gap-3 font-display text-lg sm:text-xl font-bold tracking-tight text-white">
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${accent.dot} group-hover:scale-150 transition-transform`}
                  />
                  <span>{cap.title}</span>
                </h3>
                <p className="mt-3 pl-5 text-sm sm:text-[15px] leading-[1.7] text-neutral-300">
                  {cap.description}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
