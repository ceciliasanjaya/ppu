"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { contactPage, siteConfig } from "@/lib/content";

const InlineWidget = dynamic(
  () => import("react-calendly").then((m) => ({ default: m.InlineWidget })),
  { ssr: false }
);

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease },
});

export default function ContactPage() {
  const { hero } = contactPage;
  return (
    <>
      {/* HERO */}
      <section className="relative hero-bg pt-36 pb-16 overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-[38%] hidden lg:block pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C2A3A] via-[#1C2A3A]/50 to-transparent z-10" />
          <Image src="/pictures/headshot-serious.jpg" alt="" fill className="object-cover object-top opacity-70" aria-hidden />
        </div>
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}
            className="max-w-lg">
            <span className="section-eyebrow text-gold-500 mb-5 block">{hero.eyebrow}</span>
            <h1 className="text-white mb-5"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              {hero.headline}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">{hero.subheadline}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-sand-100">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 lg:gap-14 items-start">

            {/* Left: Jason + quick contacts */}
            <motion.div {...reveal()} className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(44,30,20,0.1)]">
                <Image src="/pictures/Headshot.JPG" alt="Jason Shreve" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-heading)" }}>Jason Shreve</div>
                  <div className="text-white/60 text-xs">Certified High-Flow Coach</div>
                </div>
              </div>

              <a href={`mailto:${siteConfig.contact.email}`}
                className="group bg-white rounded-2xl border border-sand-300 p-4 hover:border-clay-200 hover:shadow-[0_6px_24px_rgba(161,92,56,0.08)] transition-all duration-300 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-clay-50 flex items-center justify-center text-clay-500 shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-0.5">Email</div>
                  <p className="text-stone-600 text-sm group-hover:text-clay-500 transition-colors whitespace-nowrap">{siteConfig.contact.email}</p>
                </div>
              </a>

              <a href={`tel:${siteConfig.contact.phone}`}
                className="group bg-white rounded-2xl border border-sand-300 p-4 hover:border-clay-200 hover:shadow-[0_6px_24px_rgba(161,92,56,0.08)] transition-all duration-300 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-clay-50 flex items-center justify-center text-clay-500 shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/></svg>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-0.5">Phone</div>
                  <p className="text-stone-600 text-sm group-hover:text-clay-500 transition-colors">{siteConfig.contact.phone}</p>
                </div>
              </a>

              <div className="bg-clay-50 rounded-2xl border border-clay-100 p-5">
                <h4 className="text-sm font-bold text-clay-700 mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>Free Discovery Call</h4>
                <p className="text-clay-600 text-sm leading-relaxed">50 minutes. No pressure. Just clarity on what&apos;s possible for you.</p>
              </div>
            </motion.div>

            {/* Right: Calendly embed */}
            <motion.div {...reveal(0.1)}>
              <div className="bg-white rounded-3xl border border-sand-200 overflow-hidden shadow-[0_4px_24px_rgba(44,30,20,0.06)]">
                <div className="px-8 pt-7 pb-2 border-b border-sand-100">
                  <h2 className="text-stone-900 font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>
                    Book a Session
                  </h2>
                  <p className="text-stone-400 text-sm mt-1">Choose the session type that fits your goals.</p>
                </div>
                <InlineWidget
                  url="https://calendly.com/j-shreve-peakperformanceunleashed"
                  styles={{ height: "700px", width: "100%" }}
                  pageSettings={{
                    backgroundColor: "ffffff",
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: "A15C38",
                    textColor: "2E2E2C",
                  }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
