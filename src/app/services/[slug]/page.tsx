"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { servicesPage } from "@/lib/content";

const heroBg: Record<string, string> = {
  "executive-coaching": "/pictures/Background-pics/exec-background.png",
  "high-flow-coaching": "/pictures/Background-pics/high-flow-background.png",
  "team-development": "/pictures/Background-pics/team-background.png",
  "workshops": "/pictures/Background-pics/workshop-background.png",
};

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease },
});

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const svc = servicesPage.items.find((s) => s.slug === slug);
  if (!svc) notFound();

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative hero-bg pt-36 pb-20 overflow-hidden">
        {heroBg[slug] && (
          <>
            <Image
              src={heroBg[slug]}
              alt=""
              fill
              className="object-cover object-center"
              style={{ opacity: 0.28, filter: "blur(1px)" }}
              aria-hidden
              priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 via-blue-900/75 to-blue-900/50 z-1" />
          </>
        )}
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.04] z-2"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
            <Link href="/services"
              className="inline-flex items-center gap-1.5 text-white/50 hover:text-white/80 text-sm mb-6 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
              All Services
            </Link>
            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-500 mb-3">{svc.subtitle}</div>
            <h1 className="text-white mb-5 max-w-2xl"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.4rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
              {svc.title}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-xl">{svc.overview}</p>
          </motion.div>
        </div>
      </section>

      {/* ── QUOTE ─────────────────────────────────────────────────────────── */}
      <section className="bg-clay-600 py-10">
        <div className="container-wide">
          <motion.div {...reveal()} className="flex items-start gap-4 max-w-3xl">
            <svg className="text-clay-300 shrink-0 mt-1" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
            </svg>
            <div>
              <p className="text-white text-lg leading-relaxed italic mb-3">{svc.quote}</p>
              <p className="text-clay-200 text-sm font-semibold">— {svc.quoteAuthor}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT YOU'LL EXPERIENCE ────────────────────────────────────────── */}
      <section className="section-padding bg-sand-100">
        <div className="container-wide">
          <motion.div {...reveal()} className="mb-10">
            <span className="section-eyebrow mb-3 block">What You&apos;ll Experience</span>
            <h2 className="text-stone-900 max-w-xl"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.03em" }}>
              A coaching experience built for real transformation.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {svc.features.map((f, i) => (
              <motion.div key={f.title} {...reveal(i * 0.07)}
                className="bg-white rounded-2xl border border-sand-200 p-7 shadow-[0_2px_16px_rgba(44,30,20,0.04)]">
                <div className="w-8 h-8 rounded-xl bg-clay-50 border border-clay-100 flex items-center justify-center mb-4 shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A15C38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </div>
                <h3 className="text-stone-900 font-bold text-base mb-2" style={{ fontFamily: "var(--font-heading)" }}>{f.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOPICS (optional) ─────────────────────────────────────────────── */}
      {"topics" in svc && svc.topics && (
        <section className="section-padding-sm bg-white border-y border-sand-200">
          <div className="container-wide">
            <motion.div {...reveal()}>
              <span className="section-eyebrow mb-4 block">
                {svc.slug === "workshops" ? "Workshop Topic Examples" : "Breakout Session Topics"}
              </span>
              <div className="flex flex-wrap gap-2.5">
                {svc.topics.map((t) => (
                  <span key={t}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-sand-100 border border-sand-300 text-sm text-stone-600 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── WHO IT'S FOR + INCLUDES ───────────────────────────────────────── */}
      <section className="section-padding bg-sand-200">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...reveal()} className="bg-white rounded-2xl border border-sand-200 p-8 shadow-[0_2px_16px_rgba(44,30,20,0.04)]">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400 mb-5">Who It&apos;s For</h3>
              <ul className="flex flex-col gap-3.5">
                {svc.whoFor.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-stone-700 text-sm leading-snug">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-clay-400 shrink-0" />
                    {w}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...reveal(0.08)} className="bg-white rounded-2xl border border-sand-200 p-8 shadow-[0_2px_16px_rgba(44,30,20,0.04)]">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400 mb-5">What&apos;s Included</h3>
              <ul className="flex flex-col gap-3.5">
                {svc.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-3 text-stone-700 text-sm leading-snug">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-clay-50 border border-clay-200 flex items-center justify-center shrink-0">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#A15C38" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    </span>
                    {inc}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── JASON'S TAGLINE ───────────────────────────────────────────────── */}
      {"tagline" in svc && svc.tagline && (
        <section className="py-12 bg-stone-900">
          <div className="container-wide text-center">
            <motion.p {...reveal()} className="text-white/70 text-lg italic">
              &ldquo;{svc.tagline}&rdquo;
            </motion.p>
            <p className="text-stone-500 text-sm mt-2">— Jason Shreve</p>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-sand-100">
        <div className="container-narrow text-center">
          <motion.div {...reveal()}>
            <h2 className="text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.03em" }}>
              Ready to get started?
            </h2>
            <p className="text-stone-500 text-base mb-8">Book a free discovery call and let&apos;s find the right fit together.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={svc.cta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-clay-500 text-white text-sm font-semibold hover:bg-clay-600 transition-all duration-200 shadow-[0_4px_20px_rgba(161,92,56,0.3)]">
                {svc.cta.label}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-sand-400 text-stone-600 text-sm font-semibold hover:bg-white hover:border-clay-300 transition-all duration-200">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
