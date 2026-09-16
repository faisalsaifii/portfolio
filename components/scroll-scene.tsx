import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Wraps a page section and cross-fades it against its neighbours as it scrolls
 * through the viewport, so adjacent sections hand off instead of stacking as
 * isolated blocks.
 *
 * Scroll-linked motion is disabled entirely for `prefers-reduced-motion` and on
 * mobile (where continuous scroll-driven repaints are the main jank source).
 */
export function ScrollScene({
  children,
  className,
  seam = true,
}: {
  children: ReactNode;
  className?: string;
  /** Render a soft gradient seam at the top edge instead of a hard border. */
  seam?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  // Stay static until hydrated so SSR and client markup agree.
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const still = !hydrated || reduced || isMobile;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
    restDelta: 0.001,
  });

  const opacity = useTransform(smooth, [0, 0.22, 0.78, 1], [0.25, 1, 1, 0.25]);
  const y = useTransform(smooth, [0, 0.22, 0.78, 1], [40, 0, 0, -40]);
  const scale = useTransform(smooth, [0, 0.22, 0.78, 1], [0.985, 1, 1, 0.985]);

  return (
    <motion.div
      ref={ref}
      className={`relative ${className ?? ""}`}
      style={
        still ? {} : { opacity, y, scale, willChange: "opacity, transform" }
      }
    >
      {seam ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[oklch(1_0_0/8%)] to-transparent"
        />
      ) : null}
      {children}
    </motion.div>
  );
}
