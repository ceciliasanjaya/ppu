"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogPage } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease },
});

const categoryColors: Record<string, string> = {
  "Flow Science": "bg-clay-50 text-clay-600",
  "Performance":  "bg-gold-50 text-gold-600",
  "Neuroscience": "bg-[#EEF3F8] text-blue-600",
  "Leadership":   "bg-[#EEF7F7] text-teal-600",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const { hero, posts } = blogPage;
  return (
    <>
      <section className="relative hero-bg pt-36 pb-20 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
            <span className="section-eyebrow text-gold-500 mb-5 block">{hero.eyebrow}</span>
            <h1 className="text-white mb-5 max-w-2xl"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              {hero.headline}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-lg">{hero.subheadline}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-sand-100">
        <div className="container-wide">
          <div className="flex flex-col gap-6">
            {posts.map((post, i) => (
              <motion.article key={post.slug} {...reveal(i * 0.05)}>
                <Link href={`/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row bg-white rounded-2xl border border-sand-300 overflow-hidden hover:border-clay-200 hover:shadow-[0_8px_32px_rgba(161,92,56,0.08)] transition-all duration-300">

                  {/* Image — left side */}
                  <div className="relative w-full sm:w-64 md:w-72 lg:w-80 shrink-0 aspect-[16/9] sm:aspect-auto sm:min-h-[200px]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 320px"
                    />
                    {/* Subtle right-side fade on desktop */}
                    <div className="hidden sm:block absolute inset-y-0 right-0 w-8 bg-linear-to-l from-white/20 to-transparent" />
                  </div>

                  {/* Content — right side */}
                  <div className="flex flex-col flex-1 p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-sand-100 text-stone-500"}`}>
                        {post.category}
                      </span>
                      <span className="text-stone-400 text-xs">{post.readTime}</span>
                    </div>
                    <h2 className="text-stone-900 font-bold text-lg mb-2 leading-snug group-hover:text-clay-600 transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}>
                      {post.title}
                    </h2>
                    <p className="text-stone-500 text-sm leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-stone-400 text-xs">{formatDate(post.date)}</span>
                      <div className="flex items-center gap-1.5 text-clay-500 text-xs font-semibold group-hover:gap-2.5 transition-all duration-200">
                        Read article
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </div>
                  </div>

                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
