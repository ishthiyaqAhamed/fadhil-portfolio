import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";

export function generateStaticParams() {
  return portfolioData.blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = portfolioData.blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.gemName} — ${post.title} | Fadhil Zakwan .`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = portfolioData.blogPosts.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const post = portfolioData.blogPosts[index];
  const nextPost =
    portfolioData.blogPosts[(index + 1) % portfolioData.blogPosts.length];

  return (
    <>
      <Navbar isSubpage />
      <main className="flex-1 bg-white text-[#0d0d0d] pt-28 sm:pt-36 pb-20 px-5 sm:px-8 lg:px-12">
        <article className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-neutral-600 hover:text-[#0d0d0d] transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Rare Gemstone Essays</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">
            <span className="rounded-full bg-[#0d0d0d] text-white px-3 py-1">
              {post.gemName}
            </span>
            <span>{post.category}</span>
            <span>&bull;</span>
            <span>{post.date}</span>
            <span>&bull;</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="mt-4 font-display font-extrabold tracking-[-0.035em] text-[clamp(2.2rem,5vw,3.75rem)] leading-[1.02]">
            {post.title}
          </h1>

          <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-9 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-lg">
            <Image
              src={post.image}
              alt={`${post.gemName} specimen`}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>

          {/* Gemological Technical Specification Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                Species
              </p>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-[#0d0d0d]">
                {post.specs.mineralSpecies}
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                Origin
              </p>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-[#0d0d0d]">
                {post.specs.origin}
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                Refractive Index
              </p>
              <p className="mt-1 font-mono text-xs sm:text-sm font-semibold text-[#0d0d0d]">
                {post.specs.refractiveIndex}
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                Hardness
              </p>
              <p className="mt-1 font-mono text-xs sm:text-sm font-semibold text-[#0d0d0d]">
                {post.specs.hardness}
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                Rarity
              </p>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-[#0d0d0d]">
                {post.specs.rarityNote}
              </p>
            </div>
          </div>

          {/* Overview & Concept Split */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-2xl bg-[#0b0b0b] text-white p-7 sm:p-8">
            <div>
              <h2 className="flex items-center gap-2 font-display text-base font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Gemological Overview</span>
              </h2>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                {post.overview}
              </p>
            </div>
            <div>
              <h2 className="flex items-center gap-2 font-display text-base font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Cut &amp; Optical Concept</span>
              </h2>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                {post.designConcept}
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-6 text-base sm:text-[17px] leading-[1.82] text-[#222222]">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              href="/#contact"
              className="rounded-full border border-[#0d0d0d] px-6 py-2.5 text-sm font-semibold hover:bg-[#0d0d0d] hover:text-white transition-colors"
            >
              Inquire About This Specimen
            </Link>

            <Link
              href={`/blog/${nextPost.slug}`}
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#0d0d0d]"
            >
              <span>Next: {nextPost.gemName}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
