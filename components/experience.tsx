import { EXPERIENCE } from "@/data/portfolio";
import { Reveal, RevealWords } from "./motion-primitives";
import { SectionLabel } from "./section-label";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto w-full max-w-[80rem]">
        <SectionLabel index="03" title="Experience" />

        <h2 className="mt-12 display-xl text-[clamp(2rem,5vw,3.6rem)]">
          <RevealWords text="Where I've shipped." />
        </h2>

        <div className="mt-16 border-t border-border">
          {EXPERIENCE.map((role, i) => (
            <Reveal key={`${role.org}-${role.title}`} delay={i * 0.05}>
              <article className="group grid gap-6 border-b border-border py-10 transition-colors duration-500 hover:bg-surface/40 md:grid-cols-12 md:gap-10 md:py-12">
                <div className="md:col-span-3">
                  <div className="font-mono text-[11px] tracking-[0.18em] text-primary">
                    {role.period}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {role.org}
                  </div>
                </div>

                <div className="md:col-span-9">
                  <h3 className="font-display text-2xl tracking-tight md:text-[1.75rem]">
                    {role.title}
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {role.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-[0.6em] h-px w-4 shrink-0 bg-primary/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 font-mono text-[11px] leading-relaxed text-muted-foreground/70">
                    {role.stack}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
