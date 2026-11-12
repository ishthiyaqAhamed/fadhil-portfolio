"use client";

import React from "react";
import Image from "next/image";

export default function HeroMountainBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none bg-[#17332a]"
    >
      {/* Clear Emerald Mountain Vista with Subtle Breathing Motion */}
      <div className="absolute inset-[-2%] animate-mountain-breathe">
        <Image
          src="/images/hero-mountain.jpg"
          alt="Lush green mountain peaks under clear alpine sky"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_52%] brightness-[0.94] contrast-[1.04] saturate-[1.1]"
        />
      </div>

      {/* Subtle Cool-Emerald Sky Depth Overlay for Cloud & Text Separation */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11, 30, 34, 0.34) 0%, rgba(12, 34, 28, 0.22) 48%, rgba(12, 34, 28, 0) 82%)",
        }}
      />

      {/* Layer 1: High-Altitude Towering Cumulus Clouds Drifting Horizontally Left -> Right */}
      <div className="absolute inset-x-0 top-[2%] h-[42%] overflow-hidden opacity-90">
        <div className="flex h-full w-[200%] animate-cloud-slow">
          <div
            className="h-full w-1/2 shrink-0 bg-no-repeat"
            style={{
              backgroundImage: "url('/images/clouds-upper.png')",
              backgroundSize: "100% 100%",
            }}
          />
          <div
            className="h-full w-1/2 shrink-0 bg-no-repeat"
            style={{
              backgroundImage: "url('/images/clouds-upper.png')",
              backgroundSize: "100% 100%",
            }}
          />
        </div>
      </div>

      {/* Layer 2: Mid-Ridge Mountain Clouds Gliding Across the Peaks (Faster Parallax) */}
      <div className="absolute inset-x-0 top-[22%] h-[38%] overflow-hidden opacity-80">
        <div className="flex h-full w-[200%] animate-cloud-medium">
          <div
            className="h-full w-1/2 shrink-0 bg-no-repeat"
            style={{
              backgroundImage: "url('/images/clouds-valley.png')",
              backgroundSize: "100% 100%",
            }}
          />
          <div
            className="h-full w-1/2 shrink-0 bg-no-repeat"
            style={{
              backgroundImage: "url('/images/clouds-valley.png')",
              backgroundSize: "100% 100%",
            }}
          />
        </div>
      </div>

      {/* Layer 3: Lower Green-Ridge Wispy Cloud Drift (Fastest Foreground Layer) */}
      <div className="absolute inset-x-0 top-[42%] h-[30%] overflow-hidden opacity-50">
        <div
          className="flex h-full w-[200%] animate-cloud-fast"
          style={{ animationDelay: "-6s" }}
        >
          <div
            className="h-full w-1/2 shrink-0 bg-no-repeat scale-y-[-1]"
            style={{
              backgroundImage: "url('/images/clouds-valley.png')",
              backgroundSize: "100% 100%",
            }}
          />
          <div
            className="h-full w-1/2 shrink-0 bg-no-repeat scale-y-[-1]"
            style={{
              backgroundImage: "url('/images/clouds-valley.png')",
              backgroundSize: "100% 100%",
            }}
          />
        </div>
      </div>

      {/* Center Soft Contrast Scrim Behind Title & Buttons */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 68% 46% at 50% 45%, rgba(8, 25, 22, 0.42) 0%, rgba(8, 25, 22, 0.14) 55%, rgba(8, 25, 22, 0) 100%)",
        }}
      />

      {/* Smooth Bottom Atmospheric Mist Dissolve into White About Section */}
      <div
        className="absolute inset-x-0 bottom-0 h-[36%] sm:h-[34%]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.14) 26%, rgba(255,255,255,0.46) 54%, rgba(255,255,255,0.84) 78%, rgba(255,255,255,0.97) 93%, #ffffff 100%)",
        }}
      />
    </div>
  );
}
