"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

function CloudCluster({ variant = "a" }: { variant?: "a" | "b" }) {
  const offset = variant === "b" ? 12 : 0;
  return (
    <div className="relative w-full h-full">
      {/* Main sunlit cloud bank */}
      <div
        className="absolute rounded-full bg-white/85 blur-3xl"
        style={{
          left: `${6 + offset}%`,
          top: "14%",
          width: "30%",
          height: "56%",
        }}
      />
      <div
        className="absolute rounded-full bg-white/90 blur-2xl"
        style={{
          left: `${18 + offset}%`,
          top: "4%",
          width: "22%",
          height: "62%",
        }}
      />
      <div
        className="absolute rounded-full bg-emerald-50/75 blur-3xl"
        style={{
          left: `${36}%`,
          top: "22%",
          width: "28%",
          height: "54%",
        }}
      />
      {/* Secondary drifting cloud billow */}
      <div
        className="absolute rounded-full bg-white/80 blur-3xl"
        style={{
          left: `${58 - offset * 0.4}%`,
          top: "8%",
          width: "26%",
          height: "58%",
        }}
      />
      <div
        className="absolute rounded-full bg-white/75 blur-2xl"
        style={{
          left: `${72}%`,
          top: "18%",
          width: "24%",
          height: "52%",
        }}
      />
      {/* Lower trailing mist ribbon */}
      <div
        className="absolute rounded-full bg-white/65 blur-3xl"
        style={{
          left: "12%",
          top: "42%",
          width: "42%",
          height: "44%",
        }}
      />
      <div
        className="absolute rounded-full bg-white/65 blur-3xl"
        style={{
          left: "54%",
          top: "38%",
          width: "40%",
          height: "46%",
        }}
      />
    </div>
  );
}

export default function HeroMountainBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const onPointerMove = (e: PointerEvent) => {
      const nx = e.clientX / (window.innerWidth || 1) - 0.5;
      const ny = e.clientY / (window.innerHeight || 1) - 0.5;
      setPointer({ x: nx, y: ny });
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [prefersReducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none bg-[#0b2017]"
    >
      {/* Lush Green Mountain Photograph with subtle breathing zoom & pointer depth */}
      <motion.div
        className="absolute inset-[-3%] will-change-transform"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [1.02, 1.075, 1.02],
                x: pointer.x * -14,
                y: pointer.y * -10,
              }
        }
        transition={{
          scale: { duration: 42, repeat: Infinity, ease: "easeInOut" },
          x: { type: "spring", stiffness: 45, damping: 24, mass: 0.8 },
          y: { type: "spring", stiffness: 45, damping: 24, mass: 0.8 },
        }}
      >
        <Image
          src="/images/hero-mountain.jpg"
          alt="Misty lush green mountain valley under drifting clouds"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_58%] brightness-[0.94] contrast-[1.06] saturate-[1.12]"
        />
      </motion.div>

      {/* Atmospheric emerald-slate depth glaze for crisp typography & glassy nav contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8, 25, 18, 0.42) 0%, rgba(11, 32, 23, 0.28) 44%, rgba(6, 20, 14, 0.22) 76%, rgba(6, 20, 14, 0) 100%)",
        }}
      />

      {/* Layer 1: High-altitude soft sunlit cumulus drift (Left -> Right, Seamless 2x loop) */}
      <div className="absolute inset-x-0 top-[-2%] h-[46%] overflow-hidden opacity-45 mix-blend-screen">
        <motion.div
          className="flex h-full w-[200%] will-change-transform"
          animate={
            prefersReducedMotion ? undefined : { x: ["-50%", "0%"] }
          }
          transition={{
            duration: 72,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="h-full w-1/2 shrink-0">
            <CloudCluster variant="a" />
          </div>
          <div className="h-full w-1/2 shrink-0">
            <CloudCluster variant="a" />
          </div>
        </motion.div>
      </div>

      {/* Layer 2: Mid-valley rolling mountain cloud bank (Right -> Left, Seamless 2x loop) */}
      <div className="absolute inset-x-0 top-[24%] h-[50%] overflow-hidden opacity-50 mix-blend-screen">
        <motion.div
          className="flex h-full w-[200%] will-change-transform"
          animate={
            prefersReducedMotion
              ? undefined
              : { x: ["0%", "-50%"], y: [0, -10, 0] }
          }
          transition={{
            x: { duration: 48, repeat: Infinity, ease: "linear" },
            y: { duration: 16, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="h-full w-1/2 shrink-0">
            <CloudCluster variant="b" />
          </div>
          <div className="h-full w-1/2 shrink-0">
            <CloudCluster variant="b" />
          </div>
        </motion.div>
      </div>

      {/* Layer 3: Fast foreground valley mist wisps (Left -> Right, Seamless 2x loop) */}
      <div className="absolute inset-x-0 bottom-[6%] h-[40%] overflow-hidden opacity-35 mix-blend-screen">
        <motion.div
          className="flex h-full w-[200%] will-change-transform"
          animate={
            prefersReducedMotion
              ? undefined
              : { x: ["-50%", "0%"], y: [0, 8, 0] }
          }
          transition={{
            x: { duration: 34, repeat: Infinity, ease: "linear" },
            y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="h-full w-1/2 shrink-0">
            <CloudCluster variant="a" />
          </div>
          <div className="h-full w-1/2 shrink-0">
            <CloudCluster variant="a" />
          </div>
        </motion.div>
      </div>

      {/* Center soft radial contrast halo behind headline & CTAs */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 68% 46% at 50% 45%, rgba(7, 24, 17, 0.38) 0%, rgba(7, 24, 17, 0.12) 54%, rgba(7, 24, 17, 0) 100%)",
        }}
      />

      {/* Smooth Bottom Atmospheric Mist Dissolve into White About Section */}
      <div
        className="absolute inset-x-0 bottom-0 h-[36%] sm:h-[34%]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.12) 26%, rgba(255,255,255,0.44) 55%, rgba(255,255,255,0.82) 78%, rgba(255,255,255,0.97) 93%, #ffffff 100%)",
        }}
      />
    </div>
  );
}

