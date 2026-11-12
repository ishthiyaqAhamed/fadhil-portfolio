import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";
import { FadeUp, SparkIcon } from "@/components/MotionPrimitives";

export const metadata = {
  title: "Rare Gemstones & Monographs — Fadhil Zakwan .",
  description:
    "Explore rare gemstone monographs covering Paraíba Tourmaline, Padparadscha Sapphire, Color-Change Alexandrite, Tanzanite, and Corundum/Beryl optics.",
};

export default function BlogIndexPage() {
  const gem = portfolioData.featuredGemBlog;
  const featuredPost = portfolioData.blogPosts[2];

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
              <SparkIcon className="w-5 h-5" />
              <span className="font-display text-sm font-bold tracking-tight">
                Personal Blog &amp; Rare Gemstone Monographs
              </span>
            </div>

            <h1 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.96]">
              Blogs About Gem
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
                src={gem.image}
                alt="Featured faceted rare gemstone presentation"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between gap-6">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                  Featured Monograph
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
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[#0d0d0d] px-6 py-3 text-sm font-semibold hover:bg-neutral-200 transition-colors"
                >
                  <span>Read {featuredPost.gemName} Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeUp>

          {/* All Rare Gemstone Essays Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {portfolioData.blogPosts.map((post, idx) => (
              <FadeUp key={post.slug} delay={0.05 * idx}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full rounded-2xl border border-neutral-200 bg-white overflow-hidden hover:border-[#0d0d0d] hover:shadow-[0_14px_34px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={post.image}
                      alt={post.gemName}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-white/92 backdrop-blur-sm px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0d0d0d]">
                      {post.gemName}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                        <span>{post.specs.origin}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="mt-2.5 font-display text-xl font-bold tracking-tight text-[#0d0d0d] group-hover:underline underline-offset-4">
                        {post.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-md bg-neutral-100 px-2.5 py-1 font-mono text-[11px] text-neutral-700">
                          RI {post.specs.refractiveIndex}
                        </span>
                        <span className="rounded-md bg-neutral-100 px-2.5 py-1 font-mono text-[11px] text-neutral-700">
                          {post.specs.hardness}
                        </span>
                      </div>
                    </div>
                    <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.1em] text-[#0d0d0d]">
                      <span>{post.date}</span>
                      <span className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        Read Monograph <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
