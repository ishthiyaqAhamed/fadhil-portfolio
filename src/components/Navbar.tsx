"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Navbar({ isSubpage = false }: { isSubpage?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      // Transition from crystal-over-mountain glass to frosted light glass as user nears section 2
      const threshold = isSubpage ? 16 : Math.max(120, window.innerHeight * 0.65);
      setScrolled(window.scrollY > threshold);

      if (!isSubpage) {
        const ids = ["about", "education", "skills", "career", "blog", "contact"];
        let current = "";
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 180) current = `#${id}`;
          }
        }
        setActiveSection(current);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isSubpage]);

  const resolveHref = (href: string) => (isSubpage ? `/${href}` : href);

  // Over the hero mountain landscape: transparent crystal glass with white ink
  // Over scrolled page sections / subpages: frosted white crystal glass with dark ink
  const overHero = !isSubpage && !scrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Primary Navigation"
        className={`relative pointer-events-auto mx-auto max-w-6xl rounded-full border backdrop-blur-2xl backdrop-saturate-150 transition-all duration-500 px-3.5 sm:px-5 py-2 flex items-center justify-between gap-4 ${
          overHero
            ? "border-white/35 bg-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.24),inset_0_1px_1px_rgba(255,255,255,0.45)]"
            : "border-black/10 ring-1 ring-white/70 bg-white/70 shadow-[0_12px_36px_rgba(0,0,0,0.09),inset_0_1px_1px_rgba(255,255,255,0.85)]"
        }`}
      >
        {/* Specular top glass highlight */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent ${
            overHero ? "via-white/80" : "via-white"
          } to-transparent`}
        />

        {/* Brand Monogram */}
        <Link
          href="/"
          className={`font-display text-lg sm:text-xl font-extrabold tracking-tight pl-2 hover:opacity-80 transition-colors ${
            overHero ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]" : "text-[#0d0d0d]"
          }`}
        >
          FZ{" "}
          <span className={overHero ? "text-emerald-300" : "text-teal-700"}>
            .
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-8">
          {portfolioData.navLinks.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <li key={item.label}>
                <Link
                  href={resolveHref(item.href)}
                  className={`relative text-[12px] lg:text-[13px] font-bold tracking-[0.07em] transition-colors duration-200 py-1 ${
                    overHero
                      ? isActive
                        ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
                        : "text-white/85 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
                      : isActive
                      ? "text-[#0d0d0d]"
                      : "text-[#262626]/75 hover:text-[#0d0d0d]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                        overHero
                          ? "bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.9)]"
                          : "bg-teal-600"
                      }`}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right CTA + Mobile Toggle */}
        <div className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href={resolveHref("#contact")}
              className={`hidden sm:inline-flex items-center justify-center rounded-full text-[11px] lg:text-xs font-semibold tracking-[0.08em] px-5 py-2.5 transition-all ${
                overHero
                  ? "bg-white/22 hover:bg-white/35 text-white border border-white/45 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]"
                  : "bg-[#0d0d0d] text-white hover:bg-teal-800 shadow-[0_4px_14px_rgba(0,0,0,0.12)]"
              }`}
            >
              GET IN TOUCH
            </Link>
          </motion.div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
              overHero
                ? "bg-white/20 border border-white/40 text-white hover:bg-white/30 backdrop-blur-md"
                : "bg-[#0d0d0d] text-white hover:bg-[#262626]"
            }`}
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Glassy Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={`pointer-events-auto md:hidden mx-auto max-w-6xl mt-2.5 rounded-3xl border backdrop-blur-2xl backdrop-saturate-150 p-5 shadow-2xl ${
              overHero
                ? "border-white/35 bg-[#0e261c]/70 text-white shadow-[0_20px_50px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.3)]"
                : "border-black/10 ring-1 ring-white/70 bg-white/85 text-[#0d0d0d]"
            }`}
          >
            <ul className="flex flex-col gap-1">
              {portfolioData.navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={resolveHref(item.href)}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold tracking-[0.08em] transition-colors ${
                      overHero
                        ? "text-white hover:bg-white/12"
                        : "text-[#0d0d0d] hover:bg-black/5"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className={overHero ? "text-xs text-emerald-300" : "text-xs text-neutral-400"}>
                      ↗
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className={`mt-4 pt-3 border-t ${overHero ? "border-white/15" : "border-neutral-200/70"}`}>
              <Link
                href={resolveHref("#contact")}
                onClick={() => setMobileOpen(false)}
                className={`flex w-full items-center justify-center rounded-full text-xs font-semibold tracking-[0.1em] py-3.5 transition-colors ${
                  overHero
                    ? "bg-white text-[#0d0d0d] hover:bg-emerald-50"
                    : "bg-[#0d0d0d] text-white hover:bg-teal-800"
                }`}
              >
                GET IN TOUCH
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
