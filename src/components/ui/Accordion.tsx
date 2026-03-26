"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  /** Matches the parent section background */
  variant?: "white" | "light";
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  variant = "white",
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  const borderColor = variant === "light" ? "border-[#e8edf8]" : "border-[#efefef]";
  const hoverBg = variant === "light" ? "hover:bg-white/60" : "hover:bg-[#fafbff]";

  return (
    <div className={`border-b ${borderColor}`}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`group w-full flex items-center justify-between gap-4 py-5 text-left rounded-sm transition-colors duration-150 ${hoverBg} px-1 -mx-1`}
        aria-expanded={open}
      >
        <span
          className={[
            "text-base md:text-lg font-semibold tracking-tight transition-colors duration-150",
            open ? "text-[#1e3a8a]" : "text-[#0b1f4f] group-hover:text-[#1e3a8a]",
          ].join(" ")}
        >
          {title}
        </span>

        {/* Chevron */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[#eef2ff] text-[#1e3a8a]"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.span>
      </button>

      {/* Collapsible content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="pb-8 pt-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
