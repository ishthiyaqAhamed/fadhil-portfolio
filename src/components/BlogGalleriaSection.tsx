"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioData, type BlogPost } from "@/data/portfolio";
import { FadeUp, SparkIcon } from "./MotionPrimitives";

const GEM_DOT_COLORS: Record<string, string> = {
  "paraiba-tourmaline-electric-copper": "bg-cyan-500",
  "padparadscha-sapphire-lotus-hue": "bg-orange-500",
  "alexandrite-color-change-phenomenon": "bg-purple-500",
  "tanzanite-trichroic-zoisite": "bg-indigo-600",
  "corundum-and-beryl-refraction-triad": "bg-emerald-500",
};

function GalleriaCard({
  post,
  aspectClass,
  delay = 0,
}: {
  post: BlogPost;
  aspectClass: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`group relative block w-full overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-50 shadow-[0_14px_36px_rgba(0,0,0,0.08)] ${aspectClass}`}
      >
        <Image
          src={post.image}
          alt={`${post.gemName} — ${post.specs.origin}`}
          fill
          sizes="(max-width: 1024px) 50vw, 28vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Subtle Specimen Pill Tag always visible */}
        <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/92 backdrop-blur-sm border border-black/10 px-3 py-1 shadow-xs transition-opacity duration-300 group-hover:opacity-0">
          <span
            className={`w-2 h-2 rounded-full ${
              GEM_DOT_COLORS[post.slug] ?? "bg-teal-600"
            }`}
          />
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0d0d0d]">
            {post.gemName}
          </span>
        </div>

        {/* Rich Gemological Details Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/45 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
          <div className="flex items-center justify-between gap-2">
            <span className="rounded-full bg-white/15 backdrop-blur-sm px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-100">
              {post.specs.origin}
            </span>
            <span className="font-mono text-[10px] text-neutral-200">
              RI {post.specs.refractiveIndex}
            </span>
          </div>

          <div className="flex items-end justify-between gap-3 text-white">
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-300">
                {post.category} &bull; {post.specs.hardness}
              </span>
              <span className="mt-0.5 block font-display text-sm sm:text-[15px] font-bold leading-snug">
                {post.title}
              </span>
              <span className="mt-1 hidden sm:block text-[11px] text-neutral-300 line-clamp-2">
                {post.excerpt}
              </span>
            </div>
            <span className="shrink-0 w-8 h-8 rounded-full bg-white text-[#0d0d0d] flex items-center justify-center shadow-md">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function BlogGalleriaSection() {
  const posts = portfolioData.blogPosts;
  const topLeft = posts[0];
  const topCenter = posts[1];
  const rightTall = posts[2];
  const bottomLeft = posts[3];
  const bottomCenter = posts[4];

  return (
    <section
      id="blog"
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
        {/* Top-Left Personal Blog Tag */}
        <FadeUp className="flex items-center justify-between gap-4 text-[#0d0d0d] mb-8 lg:mb-6">
          <div className="flex items-center gap-2.5">
            <SparkIcon className="w-5 h-5 text-teal-700" />
            <span className="font-display text-sm sm:text-base font-bold tracking-tight">
              Personal Blog &bull; Rare Gemstones
            </span>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-teal-800 hover:text-teal-600 transition-colors"
          >
            <span>View All Monographs</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </FadeUp>

        {/* Desktop Editorial Collage Layout matching Screenshot 6 */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center min-h-[600px]">
          {/* Left Column (Paraiba Top + Tanzanite Bottom) */}
          <div className="col-span-4 flex flex-col justify-between gap-20">
            <GalleriaCard post={topLeft} aspectClass="aspect-[16/10]" delay={0.05} />
            <div className="w-[80%]">
              <GalleriaCard post={bottomLeft} aspectClass="aspect-[5/4]" delay={0.18} />
            </div>
          </div>

          {/* Center Column (Padparadscha Top + "Blog Galleria" Center + Triad Bottom) */}
          <div className="col-span-5 flex flex-col items-center justify-between gap-10">
            <div className="w-[68%]">
              <GalleriaCard post={topCenter} aspectClass="aspect-[4/3]" delay={0.1} />
            </div>

            <FadeUp className="py-3 text-center">
              <h2 className="font-display font-extrabold tracking-[-0.035em] text-[3.4rem] xl:text-[4rem] leading-[0.94] text-[#0d0d0d]">
                <span className="block">Blog</span>
                <span className="block">Galleria</span>
              </h2>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Click any specimen to read monograph
              </p>
            </FadeUp>

            <div className="w-[92%]">
              <GalleriaCard post={bottomCenter} aspectClass="aspect-[9/4.2]" delay={0.22} />
            </div>
          </div>

          {/* Right Column (Color-Change Alexandrite) */}
          <div className="col-span-3 flex items-center justify-end h-full">
            <div className="w-full">
              <GalleriaCard post={rightTall} aspectClass="aspect-[3/4.1]" delay={0.14} />
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Clean Responsive Grid */}
        <div className="lg:hidden">
          <FadeUp className="mb-8">
            <h2 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.6rem,9vw,3.75rem)] leading-[0.95] text-[#0d0d0d]">
              Blog Galleria
            </h2>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">
              Tap any rare gemstone to read its monograph
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {posts.map((post, idx) => (
              <div key={post.slug} className="flex flex-col">
                <GalleriaCard
                  post={post}
                  aspectClass="aspect-[4/3]"
                  delay={idx * 0.06}
                />
                <div className="mt-2.5 px-1">
                  <p className="font-display text-sm font-bold text-[#0d0d0d]">
                    {post.title}
                  </p>
                  <p className="font-mono text-[11px] text-neutral-500 mt-0.5">
                    {post.specs.origin} &bull; {post.specs.hardness}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
