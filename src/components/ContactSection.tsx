"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";
import { LinkedInIcon } from "./SocialIcons";
import { portfolioData } from "@/data/portfolio";
import { FadeUp, StaggerContainer, StaggerItem } from "./MotionPrimitives";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Clipboard API might be unavailable in restricted frames
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Unable to send message right now.");
      }

      setStatus("success");
      setFeedback("Thank you! Your message has been sent. I will reply within 24 hours.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setFeedback(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  const contactCards = [
    {
      id: "email",
      label: "EMAIL INQUIRIES",
      value: portfolioData.contact.email,
      href: `mailto:${portfolioData.contact.email}`,
      icon: Mail,
      copyable: true,
      iconStyle: "bg-teal-50 border-teal-200 text-teal-700",
    },
    {
      id: "phone",
      label: "DIRECT PHONE",
      value: portfolioData.contact.phone,
      href: `tel:${portfolioData.contact.phone.replace(/\s+/g, "")}`,
      icon: Phone,
      copyable: true,
      iconStyle: "bg-blue-50 border-blue-200 text-blue-700",
    },
    {
      id: "location",
      label: "LOCATION",
      value: portfolioData.contact.location,
      href: null,
      icon: MapPin,
      copyable: false,
      iconStyle: "bg-amber-50 border-amber-200 text-amber-700",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: portfolioData.contact.linkedinHandle,
      href: portfolioData.socials.linkedin,
      icon: LinkedInIcon,
      copyable: false,
      iconStyle: "bg-[#0A66C2]/10 border-[#0A66C2]/25 text-[#0A66C2]",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full bg-white text-[#0d0d0d] py-16 sm:py-24 px-5 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
        {/* Left Column: Contact Heading & 4 Clean Light Cards */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto lg:mx-0">
            <FadeUp>
              <h2 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.75rem,5vw,4rem)] leading-[0.98] text-[#0d0d0d]">
                Contact
              </h2>
            </FadeUp>

            <StaggerContainer className="mt-9 sm:mt-11 flex flex-col gap-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                const isCopied = copiedField === card.id;

                return (
                  <StaggerItem key={card.id}>
                    <div className="group flex items-center justify-between gap-3 rounded-2xl bg-neutral-50 text-[#0d0d0d] px-4 py-3.5 border border-neutral-200 hover:border-[#0d0d0d]/40 hover:bg-neutral-100/70 transition-colors">
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className={`shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center transition-colors ${card.iconStyle}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-mono text-[10px] tracking-[0.14em] text-neutral-500">
                            {card.label}
                          </p>
                          {card.href ? (
                            <a
                              href={card.href}
                              target={card.id === "linkedin" ? "_blank" : undefined}
                              rel={card.id === "linkedin" ? "noopener noreferrer" : undefined}
                              className="block truncate text-sm font-semibold text-[#0d0d0d] hover:underline underline-offset-4 mt-0.5"
                            >
                              {card.value}
                            </a>
                          ) : (
                            <p className="truncate text-sm font-semibold text-[#0d0d0d] mt-0.5">
                              {card.value}
                            </p>
                          )}
                        </div>
                      </div>

                      {card.copyable && (
                        <button
                          type="button"
                          onClick={() => handleCopy(card.id, card.value)}
                          aria-label={`Copy ${card.label}`}
                          className="shrink-0 p-2 rounded-lg text-neutral-500 hover:text-[#0d0d0d] hover:bg-neutral-200/70 transition-colors cursor-pointer"
                        >
                          {isCopied ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>

        {/* Right Column: Light Direct Message Form */}
        <div className="lg:col-span-7 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-2xl rounded-2xl border border-neutral-200 bg-white p-6 sm:p-9 shadow-[0_14px_45px_rgba(0,0,0,0.06)]"
          >
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#0d0d0d]">
              Direct Message
            </h3>
            <p className="mt-1.5 text-sm text-neutral-500">
              Send a message and I will reply within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-700 mb-2"
                  >
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="e.g. John Doe"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-[#0d0d0d] placeholder:text-neutral-400 focus:border-[#0d0d0d] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-700 mb-2"
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="e.g. john@enterprise.com"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-[#0d0d0d] placeholder:text-neutral-400 focus:border-[#0d0d0d] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-700 mb-2"
                >
                  SUBJECT
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, subject: e.target.value }))
                  }
                  placeholder="Product Inquiry / Role Offer / Consultation"
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-[#0d0d0d] placeholder:text-neutral-400 focus:border-[#0d0d0d] focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-700 mb-2"
                >
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  placeholder="Detail your requirements, project scope, or opportunity..."
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-[#0d0d0d] placeholder:text-neutral-400 focus:border-[#0d0d0d] focus:bg-white focus:outline-none transition-colors resize-y"
                />
              </div>

              {feedback && (
                <div
                  role="status"
                  className={`flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm ${
                    status === "success"
                      ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
                      : "bg-red-50 border border-red-200 text-red-700"
                  }`}
                >
                  {status === "success" && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                  <span>{feedback}</span>
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0d0d0d] text-white py-3.5 px-6 text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase hover:bg-teal-800 disabled:opacity-60 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{status === "submitting" ? "SENDING..." : "SEND MESSAGE"}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
