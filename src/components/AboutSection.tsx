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

const EMERALD_CUT_CLIP =
  "polygon(10% 0%, 90% 0%, 100% 8%, 100% 92%, 90% 100%, 10% 100%, 0% 92%, 0% 8%)";

export default function AboutSection() {
  const frameRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [7, -7]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 180,
    damping: 22,
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
      {/* Left Half: Clean White Backdrop with Same-Size Creative Faceted Portrait Image Only */}
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
          className="relative z-10 w-full max-w-[390px] sm:max-w-[420px] group drop-shadow-[0_24px_48px_rgba(0,0,0,0.12)]"
        >
          {/* Subtle Light Offset Faceted Silhouette */}
          <div
            aria-hidden="true"
            style={{ clipPath: EMERALD_CUT_CLIP }}
            className="absolute -inset-3 translate-x-3 translate-y-3 bg-teal-600/[0.06] border border-teal-700/15 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"
          />

          {/* Main Emerald-Cut Photograph Only */}
          <div
            style={{ clipPath: EMERALD_CUT_CLIP }}
            className="relative aspect-[4/4.9] w-full overflow-hidden bg-neutral-100"
          >
            <Image
              src={portfolioData.profile.aboutImage}
              alt="Fadhil Zakwan inspecting rare gemstones at exhibition"
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              priority
            />

            {/* Specular Light Sweep on Hover */}
            <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
          </div>
        </motion.div>
      </div>

      {/* Right Half: White Canvas with Bio & Social Icons Pill */}
      <div className="relative bg-white text-[#0d0d0d] flex flex-col justify-between px-6 sm:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] diagonal-corner-light-br"
        />

        <div className="relative z-10 my-auto max-w-lg">
          <FadeUp>
            <h2 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.75rem,5.2vw,4.5rem)] leading-[0.94] text-[#0d0d0d]">
              <span className="block">Hi, I’m</span>
              <span className="block">Fadhil</span>
              <span className="block">Zakwan</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.12} className="mt-7 sm:mt-8 space-y-4">
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
