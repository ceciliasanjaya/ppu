"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initial: string;
}

interface Props {
  eyebrow: string;
  headline: string;
  items: Testimonial[];
}

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function TestimonialCarousel({ eyebrow, headline, items }: Props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback(
    (next: number) => {
      const bounded = (next + items.length) % items.length;
      setDirection(next > index || (index === items.length - 1 && next === 0) ? 1 : -1);
      setIndex(bounded);
    },
    [index, items.length]
  );

  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  // Auto-rotate
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => go(index + 1), 5000);
    return () => clearTimeout(id);
  }, [index, paused, go]);

  // Swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const current = items[index];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
  };

  return (
    <section
      className="section-padding bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="container-narrow">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-eyebrow mb-3 block justify-center">{eyebrow}</span>
          <h2 className="text-stone-900"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.4rem)", letterSpacing: "-0.03em" }}>
            {headline}
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative flex flex-col items-center gap-8">

          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-10 h-10 rounded-full border border-sand-300 bg-white hover:border-clay-300 hover:bg-clay-50 hover:text-clay-500 text-stone-400 flex items-center justify-center transition-all duration-200 z-10 shadow-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Quote block — fixed height so section never resizes */}
          <div className="w-full relative overflow-hidden" style={{ height: "28rem" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease }}
                className="absolute inset-0 flex flex-col items-center text-center px-6 lg:px-12"
              >
                {/* Large open-quote */}
                <div className="text-clay-200 mb-4 leading-none select-none"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "5rem", lineHeight: 1 }}>
                  &ldquo;
                </div>

                <p className="text-stone-700 leading-relaxed mb-8"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(1.05rem, 2vw, 1.25rem)", fontStyle: "italic", maxWidth: "680px" }}>
                  {current.quote}
                </p>

                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-clay-100 border-2 border-clay-200 flex items-center justify-center mb-3 shadow-sm">
                  <span className="text-clay-600 font-bold text-base" style={{ fontFamily: "var(--font-heading)" }}>
                    {current.initial}
                  </span>
                </div>

                {/* Name + role */}
                <div className="text-sm font-semibold text-stone-800" style={{ fontFamily: "var(--font-heading)" }}>
                  {current.name}
                </div>
                {current.role && (
                  <div className="text-xs text-stone-400 mt-0.5">{current.role}</div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-10 h-10 rounded-full border border-sand-300 bg-white hover:border-clay-300 hover:bg-clay-50 hover:text-clay-500 text-stone-400 flex items-center justify-center transition-all duration-200 z-10 shadow-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2 mt-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-5 h-2 bg-clay-500"
                    : "w-2 h-2 bg-sand-300 hover:bg-sand-400"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
