"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { workshopsPage } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease },
});

export default function WorkshopsPage() {
  const { hero, topics, otherTopics, differentiators, process, cta } = workshopsPage;
  return (
    <>
      {/* HERO — exec presenter as background */}
      <section className="relative pt-36 pb-24 overflow-hidden min-h-[55vh] flex items-end">
        <div className="absolute inset-0">
          <Image src="/pictures/exec presenter.webp" alt="" fill className="object-cover object-top" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/75 via-stone-900/60 to-stone-900/80" />
        </div>
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
            <span className="section-eyebrow text-gold-500 mb-5 block">{hero.eyebrow}</span>
            <h1 className="text-white mb-5 max-w-2xl"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              {hero.headline}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg">{hero.subheadline}</p>
          </motion.div>
        </div>
      </section>

      {/* Core topics + team image */}
      <section className="section-padding bg-sand-100">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-16 items-start">
            <div>
              <motion.div className="mb-8" {...reveal()}>
                <h2 className="text-stone-900" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", letterSpacing: "-0.03em" }}>
                  {topics.headline}
                </h2>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {topics.items.map((t, i) => (
                  <motion.div key={t.title} {...reveal(i * 0.05)}
                    className="bg-white rounded-2xl border border-sand-300 p-5 hover:border-clay-200 hover:shadow-[0_6px_24px_rgba(161,92,56,0.08)] transition-all duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-clay-400 mb-3" />
                    <h4 className="text-stone-900 font-bold text-sm mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>{t.title}</h4>
                    <p className="text-stone-500 text-xs leading-relaxed">{t.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Team working image */}
            <motion.div {...reveal(0.1)} className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(44,30,20,0.12)]">
                <Image src="/pictures/team-working.webp" alt="Team collaborating in an open workspace" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
                <p className="absolute bottom-5 left-5 right-5 text-white text-xs italic">&ldquo;High flow, low drama — that&apos;s the goal.&rdquo;</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What sets it apart */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <motion.div className="mb-10" {...reveal()}>
            <h2 className="text-stone-900" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", letterSpacing: "-0.03em" }}>
              What sets these workshops apart.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {differentiators.map((d, i) => (
              <motion.div key={d.title} {...reveal(i * 0.06)} className="bg-sand-50 rounded-2xl border border-sand-300 p-6">
                <div className="w-8 h-8 rounded-xl bg-clay-50 border border-clay-100 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-clay-400" />
                </div>
                <h4 className="text-stone-800 font-bold text-sm mb-2" style={{ fontFamily: "var(--font-heading)" }}>{d.title}</h4>
                <p className="text-stone-500 text-xs leading-relaxed">{d.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-sand-200">
        <div className="container-wide">
          <motion.div className="mb-10" {...reveal()}>
            <h2 className="text-stone-900" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", letterSpacing: "-0.03em" }}>
              How it works.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {process.map((step, i) => (
              <motion.div key={step.number} {...reveal(i * 0.07)} className="bg-white rounded-2xl border border-sand-300 p-7">
                <div className="text-2xl font-bold text-clay-200 mb-4" style={{ fontFamily: "var(--font-heading)" }}>{step.number}</div>
                <h4 className="text-stone-900 font-bold text-base mb-2" style={{ fontFamily: "var(--font-heading)" }}>{step.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other topics */}
      <section className="section-padding-sm bg-white">
        <div className="container-wide">
          <motion.h3 {...reveal()} className="text-stone-700 font-semibold text-base mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Other topics available on request
          </motion.h3>
          <motion.div className="flex flex-wrap gap-2.5" {...reveal(0.08)}>
            {otherTopics.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full bg-sand-50 border border-sand-300 text-stone-600 text-sm hover:border-clay-200 hover:bg-clay-50 hover:text-clay-600 transition-all duration-200 cursor-default">
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-sand-100">
        <div className="container-narrow text-center">
          <motion.div {...reveal()}>
            <h2 className="text-stone-900 mb-3" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.03em" }}>
              {cta.headline}
            </h2>
            <p className="text-stone-500 text-base mb-6">{cta.body}</p>
            <Link href={cta.primary.href}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-clay-500 text-white text-sm font-semibold hover:bg-clay-600 transition-all duration-200">
              {cta.primary.label}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
