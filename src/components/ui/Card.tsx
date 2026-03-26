import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  bordered?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddings = {
  sm: "p-5",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className = "",
  hover = false,
  bordered = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={[
        "rounded-2xl bg-white",
        "shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08),0_1px_4px_-1px_rgba(0,0,0,0.04)]",
        bordered ? "border border-[#e5e7eb]" : "",
        hover
          ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-4px_rgba(30,58,138,0.12),0_4px_12px_-2px_rgba(0,0,0,0.08)]"
          : "",
        paddings[padding],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

interface SectionBadgeProps {
  children: ReactNode;
  className?: string;
}

export function SectionBadge({ children, className = "" }: SectionBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#1e3a8a] bg-[#eef2ff] px-3.5 py-1.5 rounded-full ${className}`}
    >
      {children}
    </span>
  );
}
