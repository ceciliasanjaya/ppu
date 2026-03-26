"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { nav } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const openDropdown = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/96 backdrop-blur-md shadow-[0_1px_0_0_rgba(44,30,20,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between gap-8" style={{ height: "4.5rem" }}>

          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center gap-2.5">
            <Image
              src="/pictures/ppu-logo-transparent.png"
              alt="Peak Performance Unleashed"
              width={48}
              height={48}
              className="shrink-0 object-contain"
              priority
              style={{ filter: solid ? "brightness(0) saturate(100%) invert(38%) sepia(40%) saturate(700%) hue-rotate(338deg)" : "brightness(0) invert(1)" }}
            />
            <span
              className={`hidden sm:block transition-colors duration-300 ${solid ? "text-stone-800" : "text-white"}`}
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1rem", letterSpacing: "-0.02em" }}
            >
              Peak Performance{" "}
              <span className="text-gold-500">Unleashed</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {nav.links.map((link) => {
              const active = isActive(link.href);
              const hasChildren = "children" in link && link.children;
              const isOpen = activeDropdown === link.label;
              const color = solid
                ? active ? "text-clay-500 font-semibold" : "text-[#555550] hover:text-clay-500"
                : active ? "text-white font-semibold" : "text-white/80 hover:text-white";

              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => hasChildren && openDropdown(link.label)}
                  onMouseLeave={() => hasChildren && closeDropdown()}
                >
                  {hasChildren ? (
                    <>
                      <button
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${color}`}
                        aria-expanded={isOpen}
                      >
                        {link.label}
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.18, ease }}
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-[0_8px_40px_rgba(44,30,20,0.12)] border border-sand-200 overflow-hidden"
                            onMouseEnter={() => openDropdown(link.label)}
                            onMouseLeave={closeDropdown}
                          >
                            <div className="py-2">
                              {link.children!.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-stone-700 hover:bg-sand-50 hover:text-clay-500 transition-all duration-150 group"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-sand-400 group-hover:bg-clay-500 transition-colors shrink-0" />
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${color}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href={nav.cta.href}
              className={`hidden sm:inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                solid
                  ? "bg-clay-500 text-white hover:bg-clay-600"
                  : "bg-white/15 text-white border border-white/30 hover:bg-white/25"
              }`}
            >
              {nav.cta.label}
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${solid ? "text-stone-800" : "text-white"}`}
              aria-label="Toggle menu"
            >
              <motion.svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <motion.line
                  x1="3" y1="6" x2="19" y2="6"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                  animate={mobileOpen ? { x2: 16, y2: 16, x1: 6, y1: 6, rotate: 45 } : {}}
                />
                <motion.line
                  x1="3" y1="11" x2="19" y2="11"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.line
                  x1="3" y1="16" x2="19" y2="16"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                  animate={mobileOpen ? { x1: 6, y1: 16, x2: 16, y2: 6 } : {}}
                />
              </motion.svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease }}
            className="lg:hidden bg-white border-t border-sand-200 overflow-hidden"
          >
            <div className="container-wide py-4 flex flex-col gap-1">
              {nav.links.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      isActive(link.href)
                        ? "text-clay-500 font-semibold bg-sand-50"
                        : "text-stone-700 hover:text-clay-500 hover:bg-sand-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {"children" in link && link.children && (
                    <div className="pl-5 mt-0.5 flex flex-col gap-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-stone-500 hover:text-clay-500 rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href={nav.cta.href}
                className="mt-3 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-clay-500 text-white text-sm font-semibold"
              >
                {nav.cta.label}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
