"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "./MotionPrimitives";

const CAREER_ACCENTS = [
  "bg-teal-600",
  "bg-blue-600",
  "bg-amber-600",
  "bg-violet-600",
];

export default function CareerSection() {
  return (
    <section
      id="career"
      className="relative w-full bg-white text-[#0d0d0d] min-h-[640px] lg:min-h-[700px] overflow-hidden border-b border-neutral-100"
    >
      {/* Signature Diagonal Hairlines on Light Canvas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] diagonal-corner-light-tl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] diagonal-corner-light-br"
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 px-5 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-28 min-h-[640px] lg:min-h-[700px]">
        {/* Left Column: Career Experience Heading */}
        <div className="lg:col-span-5 flex items-center">
          <FadeUp>
            <span className="inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-teal-700 mb-3">
              Professional Journey
            </span>
            <h2 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.7rem,5.4vw,4.5rem)] leading-[0.94] text-[#0d0d0d]">
              <span className="block">Career</span>
              <span className="block">Experience</span>
            </h2>
          </FadeUp>
        </div>

        {/* Right Column: 4 Experience Items */}
        <div className="lg:col-span-7 flex items-center">
          <StaggerContainer className="w-full max-w-xl flex flex-col gap-6 sm:gap-7 lg:ml-auto">
            {portfolioData.careerExperience.map((item, idx) => (
              <StaggerItem
                key={item.title}
                className="group rounded-2xl border border-neutral-200/70 bg-neutral-50/60 p-5 sm:p-6 hover:border-teal-600/35 hover:bg-white hover:shadow-[0_10px_28px_rgba(15,118,110,0.06)] transition-all duration-300"
              >
                <h3 className="flex items-center gap-3 font-display text-lg sm:text-xl font-bold tracking-tight text-[#0d0d0d]">
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${
                      CAREER_ACCENTS[idx % CAREER_ACCENTS.length]
                    } group-hover:scale-150 transition-transform`}
                  />
                  <span>{item.title}</span>
                </h3>
                <p className="mt-2 pl-5 text-sm sm:text-[15px] leading-[1.68] text-[#3a3a3a]">
                  {item.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
