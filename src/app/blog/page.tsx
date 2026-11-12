import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogArchiveGrid from "@/components/BlogArchiveGrid";
import { portfolioData } from "@/data/portfolio";
import { FadeUp, SparkIcon } from "@/components/MotionPrimitives";

export const metadata = {
  title: "Gemology Journal & Monographs — Fadhil Zakwan .",
  description:
    "Explore rare gemstone monographs, Chinafort gem market field notes, GIA grading science, Sri Lankan gemstone districts, cutting & polishing, and artisanal gem mining.",
};

export default function BlogIndexPage() {
  const gem = portfolioData.featuredGemBlog;
  const featuredPost =
    portfolioData.blogPosts.find(
      (p) => p.slug === "chinafort-gem-market-beruwala"
    ) ?? portfolioData.blogPosts[0];

  return (
    <>
      <Navbar isSubpage />
      <main className="min-h-screen bg-white text-[#0d0d0d] pt-28 sm:pt-36 pb-20 px-5 sm:px-8 lg:px-12 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 w-[340px] h-[340px] diagonal-corner-light-tl"
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeUp>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-neutral-600 hover:text-[#0d0d0d] transition-colors mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Portfolio</span>
            </Link>

            <div className="flex items-center gap-2.5 text-[#0d0d0d] mb-3">
              <SparkIcon className="w-5 h-5 text-teal-700" />
              <span className="font-display text-sm font-bold tracking-tight">
                Personal Blog &amp; Gemology Monographs
              </span>
            </div>

            <h1 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.96]">
              Gemology Journal
            </h1>
            <p className="mt-4 max-w-2xl text-base text-neutral-600 leading-relaxed">
              {gem.intro}
            </p>
          </FadeUp>

          {/* Featured Presentation Card */}
          <FadeUp
            delay={0.1}
            className="mt-12 rounded-3xl bg-[#0b0b0b] text-white overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-black/10 shadow-xl"
          >
            <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[340px]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between gap-6">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal-400">
                  Featured Field Dispatch
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {featuredPost.title}
                </h2>
                <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>
              <div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[#0d0d0d] px-6 py-3 text-sm font-semibold hover:bg-teal-400 transition-colors"
                >
                  <span>Read {featuredPost.gemName} Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeUp>

          {/* Filterable All Essays Grid */}
          <BlogArchiveGrid posts={portfolioData.blogPosts} />
        </div>
      </main>
      <Footer />
    </>
  );
}
