"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { servicesPage } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease },
});

const toolImages: Record<string, string> = {
  "hogan":                 "/pictures/Badges-pics/Hogan.png",
  "leadership-circle":     "/pictures/Badges-pics/Leadership-circle.png",
  "eq":                    "/pictures/Badges-pics/EQ-i-2.0.png",
  "ddi":                   "/pictures/Badges-pics/DDI.png",
  "crucial-conversations": "/pictures/Badges-pics/crucial-learning.png",
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
      className={`transition-transform duration-300 shrink-0 ${open ? "rotate-180" : ""}`}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function SubAccordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-sand-200 rounded-xl overflow-hidden">
      <button onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 bg-sand-50 hover:bg-sand-100 transition-colors text-left gap-4">
        <span className="text-sm font-semibold text-stone-700" style={{ fontFamily: "var(--font-heading)" }}>{title}</span>
        <Chevron open={open} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease }}>
            <div className="px-5 py-5 bg-white">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesPage() {
  const { hero, items, tools, toolsSection } = servicesPage;
  const [openService, setOpenService] = useState<string | null>(null);
  const [openTool, setOpenTool] = useState<string | null>(null);

  return (
    <>
      {/* HERO */}
      <section className="relative hero-bg pt-36 pb-20 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
            <span className="section-eyebrow text-gold-500 mb-5 block">{hero.eyebrow}</span>
            <h1 className="text-white mb-5 max-w-2xl"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(2rem,5vw,3.2rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              {hero.headline}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-lg">{hero.subheadline}</p>
          </motion.div>
        </div>
      </section>

      {/* SERVICE ACCORDIONS */}
      <section className="section-padding bg-sand-100">
        <div className="container-wide flex flex-col gap-3">
          {items.map((svc, i) => {
            const isOpen = openService === svc.slug;
            return (

              <motion.div key={svc.slug} {...reveal(i * 0.05)}
                className="bg-white rounded-2xl border border-sand-200 overflow-hidden shadow-[0_2px_16px_rgba(44,30,20,0.05)]">

                {/* Header */}
                <button onClick={() => setOpenService(isOpen ? null : svc.slug)}
                  className="w-full flex items-center gap-5 p-5 sm:p-6 text-left hover:bg-sand-50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-clay-400 mb-1">{svc.subtitle}</div>
                    <h2 className="text-stone-900 leading-snug mb-1.5"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
                      {svc.title}
                    </h2>
                    <p className="text-stone-500 text-sm leading-snug line-clamp-2">{svc.overview}</p>
                  </div>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-clay-500 text-white" : "bg-sand-100 text-stone-400"}`}>
                    <Chevron open={isOpen} />
                  </div>
                </button>

                {/* Expanded body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease }}>
                      <div className="border-t border-sand-200">

                        {/* Quote */}
                        <div className="bg-clay-50 border-b border-clay-100 px-6 py-5 flex items-start gap-3">
                          <svg className="text-clay-300 shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                          </svg>
                          <div>
                            <p className="text-clay-700 text-sm italic leading-relaxed">{svc.quote}</p>
                            <p className="text-clay-400 text-xs font-semibold mt-2">— {svc.quoteAuthor}</p>
                          </div>
                        </div>

                        {/* Sub-accordions */}
                        <div className="p-5 sm:p-6 flex flex-col gap-3">

                          <SubAccordion title="What You'll Experience">
                            <div className="grid sm:grid-cols-2 gap-4">
                              {svc.features.map((f) => (
                                <div key={f.title} className="flex gap-3">
                                  <div className="mt-0.5 w-5 h-5 rounded-full bg-clay-50 border border-clay-200 flex items-center justify-center shrink-0">
                                    <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#A15C38" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-stone-800 mb-0.5">{f.title}</div>
                                    <p className="text-xs text-stone-500 leading-relaxed">{f.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </SubAccordion>

                          <SubAccordion title="Who It's For & What's Included">
                            <div className="grid sm:grid-cols-2 gap-6">
                              <div>
                                <div className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 mb-3">Who It&apos;s For</div>
                                <ul className="flex flex-col gap-2">
                                  {svc.whoFor.map((w) => (
                                    <li key={w} className="flex items-start gap-2 text-sm text-stone-600">
                                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-clay-400 shrink-0" />{w}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <div className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 mb-3">What&apos;s Included</div>
                                <ul className="flex flex-col gap-2">
                                  {svc.includes.map((inc) => (
                                    <li key={inc} className="flex items-start gap-2 text-sm text-stone-600">
                                      <span className="mt-0.5 w-4 h-4 rounded-full bg-clay-50 border border-clay-200 flex items-center justify-center shrink-0">
                                        <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#A15C38" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                                      </span>
                                      {inc}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </SubAccordion>

                          {"topics" in svc && svc.topics && (
                            <SubAccordion title={svc.slug === "workshops" ? "Workshop Topic Examples" : "Breakout Session Topics"}>
                              <div className="flex flex-wrap gap-2">
                                {svc.topics.map((t) => (
                                  <span key={t} className="px-3 py-1.5 rounded-full bg-sand-100 border border-sand-300 text-xs text-stone-600 font-medium">{t}</span>
                                ))}
                              </div>
                            </SubAccordion>
                          )}

                          {"tagline" in svc && svc.tagline && (
                            <p className="text-clay-500 text-xs italic border-l-2 border-clay-300 pl-3 leading-relaxed">
                              &ldquo;{svc.tagline}&rdquo; — Jason Shreve
                            </p>
                          )}

                          <div className="flex flex-wrap gap-3 pt-1">
                            <Link href={svc.cta.href}
                              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-clay-500 text-white text-sm font-semibold hover:bg-clay-600 transition-all duration-200">
                              {svc.cta.label}
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </Link>
                            <Link href={`/services/${svc.slug}`}
                              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-sand-300 text-stone-600 text-sm font-medium hover:border-clay-300 hover:bg-sand-50 transition-all duration-200">
                              Full Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ASSESSMENTS & TOOLS */}
      <section id="tools" className="section-padding bg-sand-200">
        <div className="container-wide">
          <motion.div className="text-center mb-10" {...reveal()}>
            <span className="section-eyebrow mb-4 block justify-center">{toolsSection.eyebrow}</span>
            <h2 className="text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.6rem,3vw,2.2rem)", letterSpacing: "-0.03em" }}>
              {toolsSection.headline}
            </h2>
            <p className="text-stone-500 text-base max-w-xl mx-auto leading-relaxed">{toolsSection.subheadline}</p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {tools.map((tool, i) => {
              const isOpen = openTool === tool.slug;
              const img = toolImages[tool.slug];
              return (
                <motion.div key={tool.slug} {...reveal(i * 0.04)}
                  className="bg-white rounded-2xl border border-sand-200 overflow-hidden shadow-[0_2px_12px_rgba(44,30,20,0.05)]">

                  <button onClick={() => setOpenTool(isOpen ? null : tool.slug)}
                    className="w-full flex items-center gap-5 p-5 sm:p-6 text-left hover:bg-sand-50 transition-colors">
                    {img && (
                      <div className="relative w-14 h-14 shrink-0">
                        <Image src={img} alt={tool.title} fill className="object-contain" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-clay-400 mb-1">{tool.subtitle}</div>
                      <h3 className="text-stone-900 leading-snug mb-1"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem" }}>
                        {tool.title}
                      </h3>
                      <p className="text-stone-500 text-sm leading-snug line-clamp-2">{tool.overview}</p>
                    </div>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-clay-500 text-white" : "bg-sand-100 text-stone-400"}`}>
                      <Chevron open={isOpen} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease }}>
                        <div className="border-t border-sand-200 p-5 sm:p-6 flex flex-col gap-4">
                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {tool.components.map((c) => (
                              <div key={c.name} className="bg-sand-50 border border-sand-200 rounded-xl p-4">
                                <div className="text-xs font-semibold text-stone-700 mb-1.5">{c.name}</div>
                                <p className="text-xs text-stone-500 leading-relaxed">{c.description}</p>
                              </div>
                            ))}
                          </div>
                          <div className="bg-clay-50 border border-clay-100 rounded-xl px-5 py-4">
                            <div className="text-[10px] font-semibold uppercase tracking-widest text-clay-400 mb-1.5">Why Use It</div>
                            <p className="text-sm text-clay-700 leading-relaxed">{tool.why}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section-padding-sm bg-sand-100">
        <div className="container-narrow text-center">
          <motion.div {...reveal()}>
            <h2 className="text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.5rem,3vw,2rem)", letterSpacing: "-0.03em" }}>
              Not sure which service fits?
            </h2>
            <p className="text-stone-500 text-base mb-6">Start with a free conversation. We&apos;ll figure it out together.</p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-clay-500 text-white text-sm font-semibold hover:bg-clay-600 transition-all duration-200">
              Book a Free Call
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
