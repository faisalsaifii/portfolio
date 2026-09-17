"use client";

import { motion, useReducedMotion } from "motion/react";

import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Single page-level ambient layer: film grain, hairline glow halo, and
 * slow-drifting emerald glows that flow continuously behind every section.
 */
export function Ambient() {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const still = reduced || isMobile;

  const drift = (x: number[], y: number[], duration: number) =>
    still
      ? {}
      : {
          animate: { x, y },
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        };

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Top halo — spans the full page, never restarts per section */}
      <div className="halo absolute inset-0" />

      {/* Slow-drifting glow blobs */}
      <motion.div
        className="absolute -top-40 left-[8%] h-[38rem] w-[38rem] rounded-full opacity-50 blur-2xl md:blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.82 0.16 165 / 0.09), transparent 65%)",
        }}
        {...drift([0, 60, -30, 0], [0, 40, 10, 0], 34)}
      />
      <motion.div
        className="absolute right-[-6%] top-[45%] h-[34rem] w-[34rem] rounded-full opacity-40 blur-2xl md:blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.82 0.16 165 / 0.08), transparent 65%)",
        }}
        {...drift([0, -50, 20, 0], [0, -40, -10, 0], 42)}
      />
      {!isMobile && (
        <motion.div
          className="absolute bottom-[-12rem] left-[30%] h-[30rem] w-[30rem] rounded-full opacity-35 blur-2xl md:blur-3xl"
          style={{
            background:
              "radial-gradient(circle, oklch(0.82 0.16 165 / 0.07), transparent 65%)",
          }}
          {...drift([0, 40, -40, 0], [0, -30, 0, 0], 38)}
        />
      )}

      {/* Faint vertical hairline that threads the whole page */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[oklch(1_0_0/4%)] to-transparent" />

      {/* Film grain over everything */}
      <div className="grain" />
    </div>
  );
}
