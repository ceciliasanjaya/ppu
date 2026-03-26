"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { homePage } from "@/lib/content";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease },
});

const arcColors: Record<string, { dot: string; bg: string; text: string; border: string }> = {
  clay:  { dot: "bg-clay-500",  bg: "bg-clay-50",    text: "text-clay-600",  border: "border-clay-200"  },
  gold:  { dot: "bg-gold-500",  bg: "bg-gold-50",    text: "text-gold-600",  border: "border-gold-200"  },
  teal:  { dot: "bg-teal-500",  bg: "bg-[#EEF7F7]",  text: "text-teal-600",  border: "border-[#C0E4E3]" },
  blue:  { dot: "bg-blue-500",  bg: "bg-[#EEF3F8]",  text: "text-blue-600",  border: "border-blue-300"  },
};

export default function HomePage() {
  const { hero, philosophy, arc, services, testimonials: tl, credentials, cta } = homePage;
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-bg">
        <div aria-hidden className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 60% 40%, rgba(161,92,56,0.18) 0%, transparent 70%)" }} />
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        {/* Watermark logo — left of title on desktop, top-center on mobile */}
        <div
          aria-hidden
          className="absolute top-20 left-1/2 -translate-x-1/2 w-48 h-48 md:top-[44%] md:-translate-y-1/2 md:left-4 md:translate-x-0 md:w-80 md:h-80 lg:w-105 lg:h-105 pointer-events-none select-none"
          style={{ opacity: 0.22, filter: "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(10deg)" }}
        >
          <Image
            src="/pictures/ppu-logo-backgroundless.png"
            alt=""
            fill
            className="object-contain"
            sizes="(max-width: 768px) 192px, (max-width: 1024px) 320px, 420px"
          />
        </div>

        {/* Jason's headshot — right side, desktop only */}
        <div className="absolute right-0 bottom-0 top-0 hidden lg:block w-[42%] pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C2A3A] via-[#1C2A3A]/60 to-transparent z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1C2A3A] to-transparent z-10" />
          <Image
            src="/pictures/Headshot.JPG"
            alt="Jason Shreve — Peak Performance Coach"
            fill
            className="object-cover object-top"
            priority
            loading="eager"
            sizes="42vw"
          />
        </div>

        <div className="container-wide relative z-10 pt-28 pb-20">
          <div className="max-w-[52%] lg:max-w-[48%]">
            <motion.span className="section-eyebrow text-gold-500 mb-6 block"
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
              {hero.eyebrow}
            </motion.span>
            <motion.h1 className="text-white mb-6 whitespace-pre-line"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(2.4rem, 5vw, 3.8rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1, ease }}>
              {hero.headline}
            </motion.h1>
            <motion.p className="text-white/70 text-lg leading-relaxed max-w-lg mb-10"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.22, ease }}>
              {hero.subheadline}
            </motion.p>
            <motion.div className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.34, ease }}>
              <Link href={hero.primaryCta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-clay-500 text-white hover:bg-clay-600 transition-all duration-200 shadow-[0_4px_20px_rgba(161,92,56,0.4)]">
                {hero.primaryCta.label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href={hero.secondaryCta.href}
                className="inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-sm text-white border border-white/25 hover:bg-white/10 transition-all duration-200">
                {hero.secondaryCta.label}
              </Link>
            </motion.div>
            <motion.p className="mt-10 text-white/35 text-sm italic"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.55, ease }}>
              &ldquo;{hero.tagline}&rdquo;
            </motion.p>
          </div>
        </div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
            <div className="w-1 h-1.5 rounded-full bg-white/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── PHILOSOPHY ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-sand-100 overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...reveal()}>
              <span className="section-eyebrow mb-4 block">{philosophy.eyebrow}</span>
              <h2 className="text-stone-900 mb-6"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
                {philosophy.headline}
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">{philosophy.body}</p>
              <blockquote className="text-stone-700 text-lg italic font-light border-l-4 border-clay-400 pl-5" style={{ lineHeight: 1.7 }}>
                &ldquo;{philosophy.pullQuote}&rdquo;
              </blockquote>
            </motion.div>
            {/* Rowing team — perfect flow/sync metaphor */}
            <motion.div {...reveal(0.1)} className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(44,30,20,0.15)]">
                <Image
                  src="/pictures/rowing team.webp"
                  alt="Team working in perfect synchrony — a flow state metaphor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white/80 text-xs italic">"When a team finds flow, the whole becomes greater than the sum of its parts."</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HIGH-FLOW PERFORMANCE ARC ───────────────────────────────────── */}
      <section className="section-padding bg-sand-200">
        <div className="container-wide">
          <motion.div className="text-center mb-14" {...reveal()}>
            <span className="section-eyebrow mb-4 block justify-center">{arc.eyebrow}</span>
            <h2 className="text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", letterSpacing: "-0.03em" }}>
              {arc.headline}
            </h2>
            <p className="text-stone-500 text-base max-w-lg mx-auto">{arc.intro}</p>
          </motion.div>
          <div className="relative">
            <div aria-hidden className="hidden lg:block absolute top-[3.25rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-clay-200 via-gold-200 to-clay-200" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4">
              {arc.stages.map((stage, i) => {
                const c = arcColors[stage.color] ?? arcColors.clay;
                return (
                  <motion.div key={stage.number} {...reveal(i * 0.08)}
                    className={`relative bg-white rounded-2xl border ${c.border} p-6 shadow-[0_2px_16px_rgba(44,30,20,0.06)]`}>
                    <div className={`w-10 h-10 rounded-full ${c.bg} ${c.text} flex items-center justify-center mb-4 text-xs font-bold tracking-wide`}
                      style={{ fontFamily: "var(--font-heading)" }}>
                      {stage.number}
                    </div>
                    <div className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${c.text} mb-1`}>{stage.label}</div>
                    <h4 className="text-sm font-bold text-stone-800 mb-2 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>{stage.title}</h4>
                    <p className="text-xs text-stone-500 leading-relaxed mb-3">{stage.description}</p>
                    <div className={`inline-flex items-center gap-1.5 text-[10px] font-semibold ${c.text} ${c.bg} px-2.5 py-1 rounded-full`}>
                      <span className={`w-1 h-1 rounded-full ${c.dot}`} />
                      {stage.outcome}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <motion.div className="mb-12" {...reveal()}>
            <span className="section-eyebrow mb-3 block">{services.eyebrow}</span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-stone-900 max-w-lg"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", letterSpacing: "-0.03em" }}>
                {services.headline}
              </h2>
              <p className="text-stone-500 text-sm max-w-xs leading-relaxed">{services.body}</p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.items.map((svc, i) => (
              <motion.div key={svc.slug} {...reveal(i * 0.06)}>
                <Link href={svc.href}
                  className="group flex flex-col h-full bg-sand-50 hover:bg-white border border-sand-300 hover:border-clay-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(161,92,56,0.1)] card-lift">
                  <ServiceImage slug={svc.slug} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-clay-400 mb-2">{svc.subtitle}</div>
                    <h3 className="text-stone-900 font-bold text-base mb-3 leading-snug group-hover:text-clay-600 transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}>{svc.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed flex-1">{svc.description}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-clay-500 text-xs font-semibold group-hover:gap-2.5 transition-all duration-200">
                      Learn more
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-sand-100 overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Images */}
            <motion.div {...reveal()} className="relative h-[420px] lg:h-[480px]">
              {/* Main portrait */}
              <div className="absolute left-0 top-0 w-[68%] h-full rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(44,30,20,0.14)]">
                <Image src="/pictures/Headshot.JPG" alt="Jason Shreve" fill className="object-cover object-top" />
              </div>
              {/* Inset — coaching session */}
              <div className="absolute right-0 bottom-8 w-[44%] h-[55%] rounded-2xl overflow-hidden shadow-[0_12px_36px_rgba(44,30,20,0.16)] border-4 border-sand-100">
                <Image src="/pictures/blurry guy in train station.webp" alt="In motion" fill className="object-cover" />
              </div>
              {/* PPU brand badge */}
              <div className="absolute -bottom-2 left-4 bg-white rounded-2xl shadow-[0_4px_20px_rgba(44,30,20,0.1)] p-4 flex items-center gap-3">
                <Image src="/pictures/ppu-logo.jpg" alt="PPU" width={36} height={36} className="rounded-lg" />
                <div>
                  <div className="text-xs font-bold text-stone-800" style={{ fontFamily: "var(--font-heading)" }}>30+ Years</div>
                  <div className="text-[10px] text-stone-400">Leadership Experience</div>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div {...reveal(0.1)}>
              <span className="section-eyebrow mb-4 block">Meet Jason Shreve</span>
              <h2 className="text-stone-900 mb-5"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
                Science-backed coaching rooted in flow, neuroscience, and behavioral psychology.
              </h2>
              <p className="text-stone-600 text-base leading-[1.85] mb-5">
                I&apos;m a Certified High-Flow, Peak Performance Coach with 30 years of experience in leadership development, organizational effectiveness, and executive coaching. My work blends neuroscience, flow science, and practical leadership execution.
              </p>
              <p className="text-stone-600 text-base leading-[1.85] mb-8">
                My coaching is grounded in a simple belief: peak performance becomes effortless when we strip away the noise, heal what&apos;s been holding us back, and reconnect to our deepest sense of purpose.
              </p>
              <Link href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-clay-500 text-white text-sm font-semibold hover:bg-clay-600 transition-all duration-200">
                My Story
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
      <TestimonialCarousel eyebrow={tl.eyebrow} headline={tl.headline} items={tl.items} />

      {/* ── CREDENTIALS ─────────────────────────────────────────────────── */}
      <section className="section-padding-sm bg-sand-100 overflow-hidden">
        <motion.div className="text-center mb-12" {...reveal()}>
          <span className="section-eyebrow mb-3 block justify-center">{credentials.eyebrow}</span>
          <h2 className="text-stone-800"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.5rem", letterSpacing: "-0.02em" }}>
            {credentials.headline}
          </h2>
        </motion.div>

        {/* Marquee track — duplicated for seamless loop */}
        <div className="relative">
          {/* fade edges */}
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
            style={{ background: "linear-gradient(to right, var(--color-sand-100), transparent)" }} />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
            style={{ background: "linear-gradient(to left, var(--color-sand-100), transparent)" }} />

          <div className="flex" style={{ animation: "marquee 36s linear infinite" }}>
            {[...credentials.items, ...credentials.items].map((cred, i) => (
              <div
                key={`${cred.label}-${i}`}
                className="flex flex-col items-center gap-4 bg-white border border-sand-200 rounded-3xl px-8 py-8 text-center shadow-sm shrink-0 mx-4"
                style={{ width: "220px" }}
              >
                {cred.badge ? (
                  <div className="relative shrink-0" style={{ width: 120, height: 120 }}>
                    <Image src={cred.badge} alt={cred.label} fill className="object-contain" />
                  </div>
                ) : (
                  <div className="rounded-full bg-clay-50 border border-clay-100 flex items-center justify-center shrink-0" style={{ width: 120, height: 120 }}>
                    <span className="text-clay-400 text-sm font-bold leading-tight text-center px-3">High‑Flow</span>
                  </div>
                )}
                <div className="text-sm font-semibold text-stone-800 leading-snug">{cred.label}</div>
                <div className="text-xs text-stone-400">{cred.org}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-sand-200">
        <div className="container-wide">
          <motion.div className="relative bg-blue-900 rounded-3xl overflow-hidden px-8 py-16 md:px-16 md:py-20" {...reveal()}>
            <div aria-hidden className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(circle, #D8A24A, transparent)" }} />
            <div aria-hidden className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
            {/* Journal image — subtle right accent */}
            <div className="absolute right-0 bottom-0 w-72 h-full hidden xl:block overflow-hidden rounded-r-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C2A3A] to-[#1C2A3A]/30 z-10" />
              <Image src="/pictures/ppu-journal.jpg" alt="" fill className="object-cover object-left opacity-40" aria-hidden />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-white mb-3"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
                  {cta.headline}
                </h2>
                <p className="text-white/55 text-base leading-relaxed">{cta.body}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link href={cta.primary.href}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-clay-500 text-white text-sm font-semibold hover:bg-clay-600 transition-all duration-200 shadow-[0_4px_20px_rgba(161,92,56,0.35)]">
                  {cta.primary.label}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link href={cta.secondary.href}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white/20 text-white/80 text-sm font-medium hover:bg-white/10 transition-all duration-200">
                  {cta.secondary.label}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// Per-service image thumbnails
function ServiceImage({ slug }: { slug: string }) {
  const map: Record<string, { src: string; alt: string }> = {
    "high-flow-coaching":   { src: "/pictures/coaching-outdoor.webp",    alt: "1:1 coaching session" },
    "executive-coaching":   { src: "/pictures/coaching-session.jpg",      alt: "Executive coaching" },
    "team-development":     { src: "/pictures/team-working.webp",          alt: "Team development" },
    "assessments":          { src: "/pictures/focus-lens.webp",            alt: "Clarity and focus" },
    "keynotes":             { src: "/pictures/exec presenter.webp",        alt: "Executive presenting" },
  };
  const img = map[slug];
  if (!img) return null;
  return (
    <div className="relative h-44 w-full overflow-hidden">
      <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-sand-50/80 to-transparent" />
    </div>
  );
}
