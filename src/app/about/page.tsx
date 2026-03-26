"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { aboutPage } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease },
});

export default function AboutPage() {
  const { hero, bio, story, why, philosophy, values, credentials, poem, cta } = aboutPage;
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
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(2.2rem, 5vw, 3.6rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              {hero.headline}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-xl">{hero.subheadline}</p>
          </motion.div>
        </div>
      </section>

      {/* BIO */}
      <section className="section-padding bg-sand-100">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            {/* Portrait column */}
            <motion.div {...reveal()} className="lg:sticky lg:top-28 self-start">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(44,30,20,0.14)] max-w-sm">
                <Image
                  src="/pictures/Headshot.JPG"
                  alt="Jason Shreve — Peak Performance Coach"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-5 max-w-sm">
                {bio.stats.map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl p-4 text-center border border-sand-300">
                    <div className="text-xl font-bold text-clay-500" style={{ fontFamily: "var(--font-heading)" }}>{s.value}</div>
                    <div className="text-[10px] text-stone-500 leading-snug mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bio text */}
            <div>
              <motion.div {...reveal(0.08)}>
                <span className="section-eyebrow mb-4 block">{bio.headline}</span>
              </motion.div>
              <div className="flex flex-col gap-5">
                {bio.paragraphs.map((p, i) => (
                  <motion.p key={i} {...reveal(0.1 + i * 0.06)} className="text-stone-600 text-base md:text-[17px] leading-[1.85]">
                    {p}
                  </motion.p>
                ))}
              </div>
              {/* Coaching session image inline */}
              <motion.div {...reveal(0.3)} className="mt-10 relative aspect-video rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(44,30,20,0.1)]">
                <Image
                  src="/pictures/coaching-session.jpg"
                  alt="Jason in a coaching session"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* MY STORY */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div {...reveal()}>
              <span className="section-eyebrow mb-4 block">{story.eyebrow}</span>
              <h2 className="text-stone-900 mb-8"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
                {story.headline}
              </h2>
              <div className="flex flex-col gap-5 mb-10">
                {story.paragraphs.map((p, i) => (
                  <p key={i} className="text-stone-600 text-base leading-[1.85]">{p}</p>
                ))}
              </div>
              {/* Pull quote */}
              <blockquote className="relative bg-sand-50 rounded-3xl p-8 border border-sand-300">
                <div className="absolute -top-4 left-6 w-8 h-8 bg-clay-500 rounded-full flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                </div>
                <p className="text-stone-700 text-xl italic font-light leading-relaxed">{story.pullQuote}</p>
                <div className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-clay-400">Jason Shreve</div>
              </blockquote>
            </motion.div>

            {/* Right column — two images stacked */}
            <motion.div {...reveal(0.12)} className="flex flex-col gap-5">
              {/* Puppet on strings — "breaking free from what holds us back" */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(44,30,20,0.12)]">
                <Image
                  src="/pictures/puppet-strings.webp"
                  alt="Breaking free from invisible weight"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-semibold leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                    &ldquo;Your strength isn&apos;t defined by what you carry,<br />but by what you choose to put down.&rdquo;
                  </p>
                </div>
              </div>
              {/* Serene lake — clarity/calm */}
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(44,30,20,0.1)]">
                <Image
                  src="/pictures/lake-valley.webp"
                  alt="Clarity and calm — the destination"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-900/30 to-transparent" />
                <p className="absolute bottom-4 left-5 text-white/80 text-xs italic">&ldquo;Clarity is a superpower.&rdquo;</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MY WHY */}
      <section className="section-padding-sm bg-sand-100">
        <div className="container-narrow text-center">
          <motion.div {...reveal()}>
            <span className="section-eyebrow mb-5 block justify-center">{why.eyebrow}</span>
            <blockquote className="text-stone-800 text-2xl md:text-3xl font-light italic leading-relaxed"
              style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}>
              &ldquo;{why.quote}&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY PILLARS */}
      <section className="section-padding bg-sand-200">
        <div className="container-wide">
          <motion.div className="mb-12" {...reveal()}>
            <span className="section-eyebrow mb-3 block">{philosophy.eyebrow}</span>
            <h2 className="text-stone-900 max-w-xl"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", letterSpacing: "-0.03em" }}>
              {philosophy.headline}
            </h2>
            <p className="text-stone-500 text-base mt-4 max-w-2xl leading-relaxed">{philosophy.intro}</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-start">
            {/* Lens image — "seeing clearly" */}
            <motion.div {...reveal()} className="relative aspect-square rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(44,30,20,0.12)] lg:sticky lg:top-28">
              <Image
                src="/pictures/focus-lens.webp"
                alt="Focus and clarity through a lens"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-white text-sm italic">&ldquo;Clarity is a superpower. Presence is the doorway.&rdquo;</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {philosophy.pillars.map((pillar, i) => (
                <motion.div key={pillar.number} {...reveal(i * 0.07)}
                  className="bg-white rounded-2xl p-7 border border-sand-300 shadow-[0_2px_12px_rgba(44,30,20,0.05)]">
                  <div className="text-xs font-bold text-clay-400 mb-2 tracking-widest" style={{ fontFamily: "var(--font-heading)" }}>{pillar.number}</div>
                  <h4 className="text-stone-900 font-bold text-base mb-3" style={{ fontFamily: "var(--font-heading)" }}>{pillar.title}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <motion.div className="text-center mb-12" {...reveal()}>
            <span className="section-eyebrow mb-3 block justify-center">{values.eyebrow}</span>
            <h2 className="text-stone-900"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", letterSpacing: "-0.03em" }}>
              {values.headline}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.items.map((v, i) => (
              <motion.div key={v.title} {...reveal(i * 0.05)}
                className="group bg-sand-50 hover:bg-white border border-sand-300 hover:border-clay-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_6px_24px_rgba(161,92,56,0.08)]">
                <div className="w-8 h-8 rounded-xl bg-clay-50 flex items-center justify-center mb-4 group-hover:bg-clay-500 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-clay-400 group-hover:bg-white transition-colors duration-300" />
                </div>
                <h4 className="text-stone-900 font-bold text-sm mb-2" style={{ fontFamily: "var(--font-heading)" }}>{v.title}</h4>
                <p className="text-stone-500 text-xs leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="section-padding-sm bg-sand-100">
        <div className="container-wide">
          <motion.div className="text-center mb-10" {...reveal()}>
            <span className="section-eyebrow mb-3 block justify-center">Certifications</span>
            <h2 className="text-stone-800" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.5rem", letterSpacing: "-0.02em" }}>
              Validated by the best tools in the field.
            </h2>
          </motion.div>
          <motion.div className="flex flex-wrap justify-center gap-4" {...reveal(0.1)}>
            {credentials.map((cred) => (
              <div key={cred.label}
                className="flex flex-col items-center gap-2 bg-white border border-sand-200 rounded-2xl px-5 py-5 text-center w-36 shadow-sm">
                {cred.badge ? (
                  <div className="relative w-16 h-16 shrink-0">
                    <Image src={cred.badge} alt={cred.label} fill className="object-contain" />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-clay-50 border border-clay-100 flex items-center justify-center shrink-0">
                    <span className="text-clay-400 text-xs font-bold leading-tight text-center px-1">High‑Flow</span>
                  </div>
                )}
                <div className="text-xs font-semibold text-stone-800 leading-snug">{cred.label}</div>
                <div className="text-[10px] text-stone-400">{cred.org}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* POEM */}
      <section className="section-padding overflow-hidden" style={{ background: "#F5F0E8" }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-start">
            <motion.div {...reveal()}>
              <span className="section-eyebrow mb-4 block">{poem.eyebrow}</span>
              <h2 className="text-stone-900 mb-1" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.5rem" }}>{poem.headline}</h2>
              <p className="text-stone-400 text-sm italic mb-10">— {poem.author}</p>
              <div className="flex flex-col gap-6 mb-10">
                {poem.stanzas.map((stanza, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    {stanza.map((line, j) => (
                      <p key={j} className="text-stone-600 text-base italic leading-[1.85]">{line}</p>
                    ))}
                  </div>
                ))}
              </div>
              <div className="border-l-4 border-clay-300 pl-6">
                <p className="text-stone-600 text-base leading-[1.85]">{poem.reflection}</p>
              </div>
            </motion.div>
            {/* Lake image — serene, forward-looking */}
            <motion.div {...reveal(0.12)} className="lg:sticky lg:top-28">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(44,30,20,0.12)]">
                <Image
                  src="/pictures/lake-valley.webp"
                  alt="A calm valley lake — clarity awaiting"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sand-200">
        <div className="container-wide">
          <motion.div className="relative bg-blue-900 rounded-3xl overflow-hidden px-8 py-14 md:px-14 text-center" {...reveal()}>
            {/* Headshot right side */}
            <div className="absolute right-0 top-0 bottom-0 w-64 hidden xl:block overflow-hidden rounded-r-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C2A3A] to-transparent z-10" />
              <Image src="/pictures/headshot-fern.jpg" alt="" fill className="object-cover object-top opacity-60" aria-hidden />
            </div>
            <div aria-hidden className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
            <div className="relative z-10 max-w-xl mx-auto">
              <h2 className="text-white mb-3"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", letterSpacing: "-0.03em" }}>
                {cta.headline}
              </h2>
              <p className="text-white/55 text-base leading-relaxed mb-8">{cta.body}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href={cta.primary.href}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-clay-500 text-white text-sm font-semibold hover:bg-clay-600 transition-all duration-200">
                  {cta.primary.label}
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
