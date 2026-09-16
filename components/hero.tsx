import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useScroll,
  useTransform,
} from "motion/react";
import { PROFILE } from "@/data/portfolio";
import { useIsMobile } from "@/hooks/use-mobile";
import { Magnetic, RevealWords } from "@/components/motion-primitives";

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const still = reduced || isMobile;
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.4);
  const sx = useSpring(mx, { stiffness: 60, damping: 22 });
  const sy = useSpring(my, { stiffness: 60, damping: 22 });

  const glowX = useTransform(sx, (v) => `${v * 100}%`);
  const glowY = useTransform(sy, (v) => `${v * 100}%`);
  const driftX = useTransform(sx, [0, 1], [18, -18]);
  const driftY = useTransform(sy, [0, 1], [12, -12]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const lift = useTransform(scrollYProgress, [0, 1], [0, -80]);

  useEffect(() => {
    if (still) return;
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, still]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-20 pt-32 md:px-10"
    >
      {/* Background layers */}
      <motion.div
        className="absolute inset-0 hairline-grid"
        style={still ? {} : { x: driftX, y: driftY }}
      />
      <motion.div
        className="pointer-events-none absolute -inset-40 hidden md:block"
        style={{
          background: `radial-gradient(380px circle at ${"var(--gx)"} ${"var(--gy)"}, oklch(0.82 0.16 165 / 0.10), transparent 70%)`,
          // @ts-expect-error custom props
          "--gx": glowX,
          "--gy": glowY,
        }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.5] blur-3xl"
        style={{
          x: driftX,
          y: driftY,
          background:
            "radial-gradient(circle, oklch(0.82 0.16 165 / 0.10), transparent 62%)",
        }}
      />

      <motion.div
        className="relative mx-auto w-full max-w-[80rem]"
        style={still ? {} : { opacity: fade, y: lift }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          <span className="eyebrow">Product Engineer · Bengaluru, India</span>
        </motion.div>

        <h1 className="display-xl text-[clamp(2.9rem,10.5vw,10.5rem)]">
          <span className="block text-foreground">
            <RevealWords text="Faisal Saifi" onLoad delay={0.3} />
          </span>
          <span className="mt-1 block text-muted-foreground/55">
            <RevealWords text="builds the web" onLoad delay={0.42} />
          </span>
          <span className="mt-1 block text-muted-foreground/55">
            <RevealWords text="that ships." onLoad delay={0.54} />
          </span>
        </h1>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-xl text-balance text-[15px] leading-relaxed text-muted-foreground md:col-span-7 md:text-base"
          >
            I craft high-performance web applications with React, Haskell,
            PostgreSQL and modern DevOps. Currently building payment products at{" "}
            <a
              href={PROFILE.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-foreground"
            >
              Juspay Technologies
            </a>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.98,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-wrap items-center gap-3 md:col-span-5 md:justify-end"
          >
            <Magnetic>
              <button
                onClick={() =>
                  document
                    .getElementById("work")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View my work
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform duration-500 group-hover:translate-y-0.5"
                  >
                    <path
                      d="M7 1v12M7 13l5-5M7 13l-5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
              </button>
            </Magnetic>
            <Magnetic>
              <a
                href={`mailto:${PROFILE.email}`}
                className="group relative overflow-hidden rounded-full border border-border px-7 py-3.5 text-sm text-foreground transition-colors duration-500 hover:border-primary/50"
              >
                <span className="relative z-10">Contact me</span>
                <span className="absolute inset-0 origin-left scale-x-0 bg-primary/10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="h-12 w-px overflow-hidden bg-border">
          <motion.div
            className="h-4 w-px bg-primary"
            animate={{ y: [-16, 48] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
