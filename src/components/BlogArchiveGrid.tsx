"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { type BlogPost } from "@/data/portfolio";
import { FadeUp } from "./MotionPrimitives";

const TOPIC_TABS: Array<"All" | BlogPost["topicGroup"]> = [
  "All",
  "Rare Gemstones",
  "Markets & GIA",
  "Sri Lanka & Mining",
  "Cut & History",
];

export default function BlogArchiveGrid({ posts }: { posts: BlogPost[] }) {
  const [selectedTopic, setSelectedTopic] =
    useState<"All" | BlogPost["topicGroup"]>("All");

  const filtered =
    selectedTopic === "All"
      ? posts
      : posts.filter((post) => post.topicGroup === selectedTopic);

  return (
    <div className="mt-14">
      {/* Interactive Topic Filter Bar */}
      <div className="flex flex-wrap items-center gap-2.5 mb-8">
        {TOPIC_TABS.map((topic) => {
          const active = selectedTopic === topic;
          const count =
            topic === "All"
              ? posts.length
              : posts.filter((p) => p.topicGroup === topic).length;

          return (
            <button
              key={topic}
              type="button"
              onClick={() => setSelectedTopic(topic)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-tight transition-colors cursor-pointer ${
                active
                  ? "bg-teal-800 text-white shadow-xs"
                  : "border border-neutral-300 bg-white text-neutral-700 hover:border-teal-700 hover:text-teal-800"
              }`}
            >
              <span>{topic}</span>
              <span
                className={`font-mono text-[10px] px-1.5 py-0.5 rounded-full ${
                  active ? "bg-white/20 text-white" : "bg-neutral-100 text-neutral-600"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Filtered Essays Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filtered.map((post, idx) => (
          <FadeUp key={post.slug} delay={0.04 * idx}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col h-full rounded-2xl border border-neutral-200 bg-white overflow-hidden hover:border-teal-700 hover:shadow-[0_14px_34px_rgba(15,118,110,0.09)] transition-all duration-300"
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
                  <h3 className="mt-2.5 font-display text-xl font-bold tracking-tight text-[#0d0d0d] group-hover:text-teal-800 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-md bg-teal-50 border border-teal-100 px-2.5 py-1 font-mono text-[11px] text-teal-900">
                      {post.topicGroup}
                    </span>
                    <span className="rounded-md bg-neutral-100 px-2.5 py-1 font-mono text-[11px] text-neutral-700">
                      {post.specs.hardness}
                    </span>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.1em] text-[#0d0d0d]">
                  <span>{post.date}</span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-teal-800">
                    Read Monograph <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}

