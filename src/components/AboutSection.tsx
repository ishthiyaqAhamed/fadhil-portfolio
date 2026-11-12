"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FadeUp } from "./MotionPrimitives";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./SocialIcons";

export default function AboutSection() {
  const frameRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [4, -4]), {
    stiffness: 180,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 180,
    damping: 24,
  });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="about"
      className="relative w-full bg-white grid grid-cols-1 lg:grid-cols-2 min-h-[680px] lg:min-h-[760px] overflow-hidden"
    >
      {/* Left Half: Clean White Backdrop with Editorial Gallery-Framed Portrait */}
      <div className="relative bg-white flex items-center justify-center px-6 sm:px-12 lg:px-14 py-16 sm:py-20 lg:py-24 overflow-hidden">
        <motion.div
          ref={frameRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            perspective: 1000,
            rotateX,
            rotateY,
          }}
          className="relative z-10 w-full max-w-[390px] sm:max-w-[420px] group"
        >
          {/* Minimal Architectural Offset Hairline Accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 translate-x-3.5 translate-y-3.5 rounded-[28px] border border-teal-700/20 transition-transform duration-500 ease-out group-hover:translate-x-4.5 group-hover:translate-y-4.5"
          />

          {/* Clean Museum-Matted Rounded Portrait Frame */}
          <div className="relative rounded-[28px] bg-white p-2 sm:p-2.5 shadow-[0_24px_60px_-14px_rgba(13,13,13,0.18)] ring-1 ring-black/8">
            <div className="relative aspect-[4/4.9] w-full overflow-hidden rounded-[20px] bg-neutral-100">
              <Image
                src={portfolioData.profile.aboutImage}
                alt="Fadhil Zakwan inspecting rare gemstones at exhibition"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                priority
              />

              {/* Subtle Hover Sheen */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Half: White Canvas with Bio & Social Icons Pill */}
      <div className="relative bg-white text-[#0d0d0d] flex flex-col justify-between px-6 sm:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] diagonal-corner-light-br"
        />

        <div className="relative z-10 my-auto max-w-xl">
          <FadeUp>
            <h2 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.15rem,4.1vw,3.85rem)] leading-[1.02] text-[#0d0d0d]">
              <span className="block">Hi, I’m</span>
              <span className="block whitespace-nowrap">Fadhil Zakwan</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.12} className="mt-7 sm:mt-8 space-y-4 max-w-lg">
            <p className="text-[15px] sm:text-base leading-[1.7] text-[#262626] font-normal">
              {portfolioData.profile.aboutBio}
            </p>
            <p className="text-[15px] sm:text-base leading-[1.7] text-[#404040] font-normal">
              {portfolioData.profile.aboutBioSecondary}
            </p>
          </FadeUp>
        </div>

        {/* Bottom-Right Social Icons Pill */}
        <FadeUp delay={0.2} className="relative z-10 mt-12 flex justify-start sm:justify-end">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#1a1a1a]/25 bg-neutral-50/90 px-3 py-1.5 text-[#111111] shadow-xs">
            <motion.a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              whileHover={{ scale: 1.12, y: -1 }}
              whileTap={{ scale: 0.94 }}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors duration-200"
            >
              <LinkedInIcon className="w-4 h-4" />
            </motion.a>
            <motion.a
              href={portfolioData.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              whileHover={{ scale: 1.12, y: -1 }}
              whileTap={{ scale: 0.94 }}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors duration-200"
            >
              <FacebookIcon className="w-4 h-4" />
            </motion.a>
            <motion.a
              href={portfolioData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              whileHover={{ scale: 1.12, y: -1 }}
              whileTap={{ scale: 0.94 }}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-colors duration-200"
            >
              <InstagramIcon className="w-4 h-4" />
            </motion.a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
