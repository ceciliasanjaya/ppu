"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogPage, BlogNode } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease },
});

const categoryColors: Record<string, string> = {
  "Flow Science": "bg-clay-50 text-clay-600",
  "Performance": "bg-gold-50 text-gold-600",
  "Neuroscience": "bg-[#EEF3F8] text-blue-600",
  "Leadership": "bg-[#EEF7F7] text-teal-600",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderNode(node: BlogNode, i: number) {
  switch (node.type) {
    case "h2":
      return (
        <h2 key={i} className="text-stone-900 font-bold mt-10 mb-4"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", letterSpacing: "-0.02em" }}>
          {node.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="text-stone-800 font-semibold mt-7 mb-3"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1rem, 2vw, 1.15rem)" }}>
          {node.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-stone-600 leading-relaxed mb-5 text-base">
          {node.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mb-5 flex flex-col gap-2.5 pl-1">
          {node.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-stone-600 text-base leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-clay-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "blockquote":
      return (
        <blockquote key={i} className="my-8 pl-5 border-l-[3px] border-clay-300">
          <p className="text-stone-700 text-base italic leading-relaxed mb-2"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            &ldquo;{node.text}&rdquo;
          </p>
          {node.attribution && (
            <cite className="text-stone-400 text-sm not-italic">— {node.attribution}</cite>
          )}
        </blockquote>
      );
    default:
      return null;
  }
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const idx = blogPage.posts.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();
  const post = blogPage.posts[idx];
  const prev = idx > 0 ? blogPage.posts[idx - 1] : null;
  const next = idx < blogPage.posts.length - 1 ? blogPage.posts[idx + 1] : null;

  return (
    <>
      {/* HERO */}
      <section className="relative hero-bg pt-36 pb-16 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="container-narrow relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
            <Link href="/blog"
              className="inline-flex items-center gap-1.5 text-white/50 hover:text-white/80 text-sm mb-6 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
              All Articles
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className={`text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-sand-100 text-stone-500"}`}>
                {post.category}
              </span>
              <span className="text-white/40 text-xs">{post.readTime}</span>
            </div>
            <h1 className="text-white mb-5"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              {post.title}
            </h1>
            <p className="text-white/50 text-sm">{formatDate(post.date)}</p>
          </motion.div>
        </div>
      </section>

      {/* COVER IMAGE */}
      <div className="container-narrow pt-8 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(44,30,20,0.12)]"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, 720px"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
        </motion.div>
      </div>

      {/* HERO QUOTE */}
      <section className="bg-clay-600 py-10">
        <div className="container-narrow">
          <motion.div {...reveal()} className="flex items-start gap-4">
            <svg className="text-clay-300 shrink-0 mt-1" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
            </svg>
            <div>
              <p className="text-white text-lg leading-relaxed italic mb-3">{post.heroQuote}</p>
              <p className="text-clay-200 text-sm font-semibold">— Jason Shreve</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <motion.div {...reveal()}>
            {post.inspired && (
              <p className="text-stone-400 text-sm italic mb-8 pb-8 border-b border-sand-200">
                {post.inspired}
              </p>
            )}
            <div>{post.body.map((node, i) => renderNode(node, i))}</div>
          </motion.div>
        </div>
      </section>

      {/* AUTHOR + CTA */}
      <section className="section-padding bg-sand-100 border-t border-sand-200">
        <div className="container-narrow">
          <motion.div {...reveal()} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-10 mb-10 border-b border-sand-200">
            <div className="w-14 h-14 rounded-full bg-clay-100 border-2 border-clay-200 flex items-center justify-center shrink-0">
              <span className="text-clay-600 font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>JS</span>
            </div>
            <div>
              <div className="text-stone-800 font-semibold text-sm" style={{ fontFamily: "var(--font-heading)" }}>Jason Shreve</div>
              <div className="text-stone-400 text-xs mt-0.5">Certified High-Flow Peak Performance Coach</div>
            </div>
          </motion.div>
          <motion.div {...reveal(0.1)} className="text-center">
            <h3 className="text-stone-900 font-bold mb-2"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)", letterSpacing: "-0.02em" }}>
              Ready to experience flow for yourself?
            </h3>
            <p className="text-stone-500 text-sm mb-7">Book a free discovery call and explore what&apos;s possible.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-clay-500 text-white text-sm font-semibold hover:bg-clay-600 transition-all duration-200 shadow-[0_4px_20px_rgba(161,92,56,0.3)]">
                Book a Free Call
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/blog"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-sand-400 text-stone-600 text-sm font-semibold hover:bg-white hover:border-clay-300 transition-all duration-200">
                More Articles
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PREV / NEXT NAV */}
      <nav className="border-t border-sand-200 bg-white">
        <div className="container-narrow">
          <div className="grid grid-cols-2 divide-x divide-sand-200">
            {/* Previous */}
            <div>
              {prev ? (
                <Link href={`/blog/${prev.slug}`}
                  className="group flex flex-col gap-1.5 px-6 py-6 hover:bg-sand-50 transition-colors duration-200">
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-stone-400 group-hover:text-clay-500 transition-colors">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
                    Previous
                  </span>
                  <span className="text-stone-700 text-sm font-semibold leading-snug group-hover:text-clay-600 transition-colors line-clamp-2"
                    style={{ fontFamily: "var(--font-heading)" }}>
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <div className="px-6 py-6" />
              )}
            </div>

            {/* Next */}
            <div>
              {next ? (
                <Link href={`/blog/${next.slug}`}
                  className="group flex flex-col items-end gap-1.5 px-6 py-6 hover:bg-sand-50 transition-colors duration-200">
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-stone-400 group-hover:text-clay-500 transition-colors">
                    Next
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                  <span className="text-stone-700 text-sm font-semibold leading-snug group-hover:text-clay-600 transition-colors text-right line-clamp-2"
                    style={{ fontFamily: "var(--font-heading)" }}>
                    {next.title}
                  </span>
                </Link>
              ) : (
                <div className="px-6 py-6" />
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
