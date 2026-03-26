import { type ReactNode } from "react";

type Theme = "white" | "light" | "warm" | "dark" | "navy";

interface SectionProps {
  children: ReactNode;
  theme?: Theme;
  className?: string;
  id?: string;
}

const themes: Record<Theme, string> = {
  white: "bg-white",
  light: "bg-[#f8faff]",
  warm: "bg-[#f7f5f0]",
  dark: "bg-[#050d1f]",
  navy: "bg-[#0b1f4f]",
};

export function Section({ children, theme = "white", className = "", id }: SectionProps) {
  return (
    <section
      id={id}
      className={["section-padding", themes[theme], className].filter(Boolean).join(" ")}
    >
      <div className="container-wide">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  body?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  headline,
  body,
  align = "center",
  dark = false,
  className = "",
}: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div
      className={[
        "mb-12 md:mb-16",
        centered ? "text-center max-w-2xl mx-auto" : "max-w-xl",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow && (
        <span
          className={[
            "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full mb-4",
            dark
              ? "bg-white/10 text-[#93c5fd]"
              : "bg-[#eef2ff] text-[#1e3a8a]",
          ].join(" ")}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={[
          "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4",
          dark ? "text-white" : "text-[#0b1f4f]",
        ].join(" ")}
      >
        {headline}
      </h2>
      {body && (
        <p
          className={[
            "text-base md:text-lg leading-relaxed",
            dark ? "text-white/60" : "text-[#6b7280]",
          ].join(" ")}
        >
          {body}
        </p>
      )}
    </div>
  );
}
