"use client";

import { motion } from "framer-motion";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  /** "light" renders on white/light backgrounds, "dark" renders on navy backgrounds */
  theme?: "light" | "dark";
}

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function ProcessSteps({ steps, theme = "light" }: ProcessStepsProps) {
  const dark = theme === "dark";

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {/* Connector line — desktop only */}
      <div
        aria-hidden
        className={[
          "hidden md:block absolute top-7 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px",
          dark
            ? "bg-gradient-to-r from-white/5 via-white/20 to-white/5"
            : "bg-gradient-to-r from-[#eef2ff] via-[#1e3a8a]/30 to-[#eef2ff]",
        ].join(" ")}
      />

      {steps.map((step, i) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: i * 0.1, ease }}
        >
          {/* Number chip */}
          <div
            className={[
              "relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5",
              dark
                ? "bg-white/10 border border-white/20"
                : "bg-[#1e3a8a] shadow-[0_4px_18px_rgba(30,58,138,0.25)]",
            ].join(" ")}
          >
            <span
              className={[
                "text-xl font-extrabold tracking-tighter",
                dark ? "text-white" : "text-white",
              ].join(" ")}
            >
              {step.number}
            </span>
          </div>

          <h4
            className={[
              "text-lg font-bold mb-2 tracking-tight",
              dark ? "text-white" : "text-[#0b1f4f]",
            ].join(" ")}
          >
            {step.title}
          </h4>
          <p
            className={[
              "text-sm leading-relaxed",
              dark ? "text-white/55" : "text-[#6b7280]",
            ].join(" ")}
          >
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
