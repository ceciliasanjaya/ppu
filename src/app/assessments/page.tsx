"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { assessmentsPage } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease },
});

export default function AssessmentsPage() {
  const { hero, intro, tools, process, cta } = assessmentsPage;
  return (
    <>
      {/* HERO — lens image as background (clarity/focus) */}
      <section className="relative pt-36 pb-24 overflow-hidden min-h-[55vh] flex items-end">
        <div className="absolute inset-0">
          <Image src="/pictures/focus-lens.webp" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/55 to-stone-900/85" />
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

      <section className="section-padding bg-sand-100">
        <div className="container-wide">
          <motion.p {...reveal()} className="text-stone-600 text-lg leading-relaxed max-w-3xl mb-14">{intro}</motion.p>
          <div className="flex flex-col gap-6">
            {tools.map((tool, i) => (
              <motion.div key={tool.name} {...reveal(i * 0.07)}
                className="bg-white rounded-3xl border border-sand-300 p-8 shadow-[0_2px_12px_rgba(44,30,20,0.05)]">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
                  <div>
                    <h3 className="text-stone-900 font-bold text-lg mb-3" style={{ fontFamily: "var(--font-heading)" }}>{tool.name}</h3>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {tool.variants.map((v) => (
                        <span key={v} className="px-2.5 py-1 rounded-full bg-clay-50 border border-clay-100 text-clay-600 text-[11px] font-semibold">{v}</span>
                      ))}
                    </div>
                    <div className="text-[11px] text-stone-400 uppercase tracking-[0.1em] font-semibold">Best for</div>
                    <p className="text-stone-500 text-sm mt-1">{tool.bestFor}</p>
                  </div>
                  <p className="text-stone-600 text-sm leading-[1.85]">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process + coaching session image */}
      <section className="section-padding bg-sand-200">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-start">
            <div>
              <motion.div className="mb-10" {...reveal()}>
                <h2 className="text-stone-900" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", letterSpacing: "-0.03em" }}>
                  The process.
                </h2>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {process.map((step, i) => (
                  <motion.div key={step.number} {...reveal(i * 0.07)} className="bg-white rounded-2xl border border-sand-300 p-6">
                    <div className="text-2xl font-bold text-clay-200 mb-3" style={{ fontFamily: "var(--font-heading)" }}>{step.number}</div>
                    <h4 className="text-stone-900 font-bold text-sm mb-2" style={{ fontFamily: "var(--font-heading)" }}>{step.title}</h4>
                    <p className="text-stone-500 text-xs leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* PPU journal + coaching outdoor */}
            <motion.div {...reveal(0.1)} className="lg:sticky lg:top-28 flex flex-col gap-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(44,30,20,0.1)]">
                <Image src="/pictures/ppu-journal.jpg" alt="Peak Performance Unleashed notebook" fill className="object-cover" />
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(44,30,20,0.1)]">
                <Image src="/pictures/coaching-outdoor.webp" alt="Coaching conversation" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-white">
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
