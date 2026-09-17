"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<"default" | "link" | "view">(
    "default",
  );
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 320, damping: 30, mass: 0.5 });
  const ry = useSpring(y, { stiffness: 320, damping: 30, mass: 0.5 });

  useEffect(() => {
    const fine =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      if (t?.closest("[data-cursor='view']")) setVariant("view");
      else if (t?.closest("a, button, [role='button']")) setVariant("link");
      else setVariant("default");
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;

  const size = variant === "view" ? 84 : variant === "link" ? 46 : 26;

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] hidden md:block">
      <motion.div
        className="absolute left-0 top-0 rounded-full"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
      </motion.div>
      <motion.div
        className="absolute left-0 top-0 flex items-center justify-center rounded-full border border-primary/45"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: size,
          height: size,
          backgroundColor:
            variant === "view"
              ? "color-mix(in oklab, var(--primary) 90%, transparent)"
              : "rgba(0,0,0,0)",
          borderColor:
            variant === "view"
              ? "color-mix(in oklab, var(--primary) 90%, transparent)"
              : "color-mix(in oklab, var(--primary) 45%, transparent)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
      >
        {variant === "view" && (
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground">
            View
          </span>
        )}
      </motion.div>
    </div>
  );
}
