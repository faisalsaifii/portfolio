import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { NAV_LINKS, PROFILE } from "@/data/portfolio";

function scrollToId(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    mass: 0.3,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`mx-auto flex items-center justify-between px-6 transition-all duration-500 md:px-10 ${
            scrolled
              ? "h-14 border-b border-border bg-background/72 backdrop-blur-xl backdrop-saturate-150"
              : "h-20 border-b border-transparent"
          }`}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-baseline gap-2 font-display text-base font-medium tracking-tight"
          >
            <span>{PROFILE.short}</span>
            <span className="text-primary transition-transform duration-500 group-hover:translate-x-0.5">
              .
            </span>
          </button>

          <nav className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToId(l.id)}
                className={`link-underline text-[13px] tracking-tight transition-colors ${
                  active === l.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </button>
            ))}
            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-full border border-primary/35 bg-primary/8 px-4 py-1.5 text-[13px] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Let's talk
            </a>
          </nav>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span className="h-px w-5 bg-foreground" />
            <span className="h-px w-3.5 self-center bg-foreground ml-[6px]" />
          </button>
        </div>
        <motion.div
          className="h-px origin-left bg-primary/70"
          style={{ scaleX: progress }}
        />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[65] flex flex-col bg-background md:hidden"
            initial={{ clipPath: "circle(0% at 92% 5%)" }}
            animate={{ clipPath: "circle(140% at 92% 5%)" }}
            exit={{ clipPath: "circle(0% at 92% 5%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex h-20 items-center justify-between px-6">
              <span className="font-display text-base">
                {PROFILE.short}
                <span className="text-primary">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="relative h-9 w-9"
              >
                <span className="absolute left-2 top-1/2 h-px w-5 rotate-45 bg-foreground" />
                <span className="absolute left-2 top-1/2 h-px w-5 -rotate-45 bg-foreground" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-6 pb-24">
              {NAV_LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.18 + i * 0.07,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => scrollToId(l.id), 380);
                  }}
                  className="flex items-baseline gap-4 border-b border-border py-4 text-left font-display text-4xl tracking-tight"
                >
                  <span className="font-mono text-[11px] text-muted-foreground">
                    0{i + 1}
                  </span>
                  {l.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                href={`mailto:${PROFILE.email}`}
                className="mt-8 font-mono text-xs tracking-wide text-primary"
              >
                {PROFILE.email}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
