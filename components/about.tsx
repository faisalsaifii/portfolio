import { DISCIPLINES, PROFILE, STATS } from "@/data/portfolio";
import { Reveal, RevealWords } from "@/components/motion-primitives";
import { CountUp } from "@/components/count-up";
import { SectionLabel } from "@/components/section-label";

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto w-full max-w-[80rem]">
        <SectionLabel index="01" title="About" />

        <div className="mt-14 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="display-xl text-[clamp(2rem,5vw,4rem)]">
              <RevealWords text="Building the future," />
              <br />
              <span className="text-muted-foreground/55">
                <RevealWords text="one commit at a time." />
              </span>
            </h2>
            <Reveal delay={0.15}>
              <p className="mt-9 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
                {PROFILE.summary}
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
                I care about the parts users never see — type safety, build
                pipelines, observability — because they're what make the parts
                users do see feel effortless.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {STATS.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={i * 0.08}
                  className="bg-background"
                >
                  <div className="group h-full p-6 transition-colors duration-500 hover:bg-surface md:p-7">
                    <div className="font-display text-4xl tracking-tight text-primary md:text-5xl">
                      <CountUp value={s.value} />
                    </div>
                    <div className="mt-3 text-[12.5px] leading-snug text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden border-y border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {DISCIPLINES.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.07} className="bg-background">
              <div className="group relative h-full px-1 py-8 sm:px-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/80">
                  {d.title}
                </div>
                <div className="mt-3 text-sm text-muted-foreground">
                  {d.items}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
