"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { PROJECTS, type Project } from "@/data/portfolio";
import { Reveal, RevealWords } from "./motion-primitives";
import { SectionLabel } from "./section-label";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const flip = index % 2 === 1;

  return (
    <a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noreferrer"
      data-cursor="view"
      className="group grid items-center gap-8 py-10 md:grid-cols-12 md:gap-14 md:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`md:col-span-7 ${flip ? "md:order-2 md:col-start-6" : ""}`}
      >
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.img
              src={project.image}
              alt={`${project.name} — screenshot`}
              width={1440}
              height={810}
              loading="lazy"
              decoding="async"
              style={{ y: imgY }}
              className="aspect-[16/10] w-full scale-[1.12] object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.18]"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-40" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 transition-all duration-700 group-hover:ring-primary/30" />
        </div>
      </motion.div>

      <div
        className={`md:col-span-5 ${flip ? "md:order-1 md:col-start-1 md:row-start-1" : ""}`}
      >
        <Reveal delay={0.1}>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{project.category}</span>
            <span className="h-px w-6 bg-border" />
            <span>{project.year}</span>
          </div>
          <h3 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
            <span className="link-underline inline-block">{project.name}</span>
          </h3>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border px-3 py-1 text-[11.5px] text-muted-foreground transition-colors duration-500 group-hover:border-primary/25 group-hover:text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <span className="mt-7 inline-flex items-center gap-2 text-sm text-primary">
            Visit live site
            <svg
              width="13"
              height="13"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <path
                d="M3 11L11 3M11 3H4.5M11 3v6.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Reveal>
      </div>
    </a>
  );
}

export function Work() {
  return (
    <section
      id="work"
      className="relative scroll-mt-24 px-6 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto w-full max-w-[80rem]">
        <SectionLabel index="02" title="Selected Work" />
        <h2 className="mt-10 display-xl text-[clamp(2rem,5vw,4rem)]">
          <RevealWords text="Things I've shipped." />
        </h2>

        <div className="mt-6 divide-y divide-border">
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
