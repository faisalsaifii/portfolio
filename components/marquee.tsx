"use client";

import { motion, useReducedMotion } from "motion/react";

const ITEMS = [
  "Product Engineering",
  "React",
  "TypeScript",
  "Haskell",
  "Design Systems",
  "AI Tooling",
  "Payments at Scale",
  "Rust",
  "Observability",
  "Open Source",
];

export function Marquee() {
  const reduced = useReducedMotion();
  const row = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-border py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <motion.div
        className="flex w-max items-center gap-10 whitespace-nowrap"
        animate={reduced ? { x: "0%" } : { x: ["0%", "-50%"] }}
        transition={{ duration: 38, ease: "linear", repeat: Infinity }}
      >
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="font-display text-2xl tracking-tight text-muted-foreground/60 md:text-3xl">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
