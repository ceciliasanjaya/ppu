"use client";

import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-[10px] transition-all duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#1e3a8a] text-white shadow-[0_2px_12px_rgba(30,58,138,0.35)] hover:bg-[#162b73] hover:shadow-[0_4px_20px_rgba(30,58,138,0.45)] active:scale-[0.98]",
  secondary:
    "bg-white text-[#0b1f4f] border border-[#e5e7eb] shadow-sm hover:bg-[#f8faff] hover:border-[#93c5fd] active:scale-[0.98]",
  ghost:
    "text-[#1e3a8a] hover:bg-[#eef2ff] active:scale-[0.98]",
  outline:
    "border border-white/30 text-white hover:bg-white/10 active:scale-[0.98]",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-7 py-3.5",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
