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
      setScrolled(window.scrollY > 24);
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Primary Navigation"
        className={`pointer-events-auto mx-auto max-w-6xl rounded-full border transition-all duration-300 ${
          scrolled
            ? "border-[#141414]/85 bg-white/92 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            : "border-[#141414]/75 bg-white/85 backdrop-blur-sm"
        } px-3.5 sm:px-5 py-2 flex items-center justify-between gap-4`}
      >
        {/* Brand Monogram */}
        <Link
          href="/"
          className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-[#0d0d0d] pl-2 hover:opacity-75 transition-opacity"
        >
          FZ <span className="text-teal-700">.</span>
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
                    isActive
                      ? "text-[#0d0d0d]"
                      : "text-[#262626]/75 hover:text-[#0d0d0d]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-teal-600"
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
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#0d0d0d] text-white text-[11px] lg:text-xs font-semibold tracking-[0.08em] px-5 py-2.5 hover:bg-teal-800 transition-colors"
            >
              GET IN TOUCH
            </Link>
          </motion.div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0d0d0d] text-white hover:bg-[#262626] transition-colors"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto md:hidden mx-auto max-w-6xl mt-2.5 rounded-3xl border border-[#141414]/80 bg-white/95 backdrop-blur-lg shadow-xl p-5"
          >
            <ul className="flex flex-col gap-1">
              {portfolioData.navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={resolveHref(item.href)}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold tracking-[0.08em] text-[#0d0d0d] hover:bg-[#f4f4f4] transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-neutral-400">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-neutral-200">
              <Link
                href={resolveHref("#contact")}
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-[#0d0d0d] text-white text-xs font-semibold tracking-[0.1em] py-3.5 hover:bg-[#262626] transition-colors"
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

