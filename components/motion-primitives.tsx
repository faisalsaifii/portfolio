"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-12% 0px -8% 0px" }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Word-by-word masked reveal for headlines. */
export function RevealWords({
  text,
  className,
  wordClassName,
  delay = 0,
  onLoad = false,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  onLoad?: boolean;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: delay } },
  };
  const child: Variants = {
    hidden: reduced ? { opacity: 0 } : { y: "110%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.9, ease: EASE },
    },
  };

  const animateProps = onLoad
    ? { animate: "show" as const }
    : {
        whileInView: "show" as const,
        viewport: { once: true, margin: "-10%" },
      };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      {...animateProps}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block overflow-hidden align-bottom pb-[0.08em]"
        >
          <motion.span
            className={`inline-block ${wordClassName ?? ""}`}
            variants={child}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Button/link that leans toward the pointer. */
export function Magnetic({
  children,
  strength = 0.28,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      onPointerMove={(e) => {
        const el = e.currentTarget as HTMLElement;
        const r = el.getBoundingClientRect();
        el.style.transform = `translate3d(${(e.clientX - r.left - r.width / 2) * strength}px, ${
          (e.clientY - r.top - r.height / 2) * strength
        }px, 0)`;
      }}
      onPointerLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translate3d(0,0,0)";
      }}
      style={{ transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)" }}
    >
      {children}
    </motion.div>
  );
}
