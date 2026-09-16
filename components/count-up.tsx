import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/** Animates the numeric part of a value like "70%" or "2+" when scrolled into view. */
export function CountUp({
  value,
  duration = 1.4,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduced = useReducedMotion();

  const parsed = value.match(/^(\d+)(.*)$/);
  const hasNumber = Boolean(parsed);
  const target = parsed ? Number(parsed[1]) : 0;
  const suffix = parsed ? parsed[2] : value;

  const [n, setN] = useState(hasNumber ? 0 : target);

  useEffect(() => {
    if (!hasNumber || !inView) return;
    if (reduced) {
      setN(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, reduced, hasNumber]);

  return (
    <span ref={ref} className="tabular-nums">
      {hasNumber ? `${n}${suffix}` : value}
    </span>
  );
}
