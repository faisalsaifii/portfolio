import { EDUCATION } from "@/data/portfolio";
import { Reveal, RevealWords } from "./motion-primitives";
import { SectionLabel } from "./section-label";

export function Education() {
  return (
    <section
      id="education"
      className="relative scroll-mt-24 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto w-full max-w-[80rem]">
        <SectionLabel index="05" title="Education" />

        <h2 className="mt-12 display-xl text-[clamp(2rem,5vw,3.6rem)]">
          <RevealWords text="Foundations." />
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden border-y border-border bg-border md:grid-cols-2">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.08} className="bg-background">
              <a
                href={e.url}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col p-7 transition-colors duration-500 hover:bg-surface md:p-9"
              >
                <div className="font-mono text-[11px] tracking-[0.18em] text-primary">
                  {e.period}
                </div>
                <h3 className="mt-4 font-display text-xl tracking-tight md:text-2xl">
                  {e.degree}
                </h3>
                <div className="mt-2 text-sm text-muted-foreground">
                  <span className="link-underline">{e.school}</span>
                </div>
                <p className="mt-6 text-[14px] leading-relaxed text-muted-foreground/80">
                  {e.note}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
