import { SKILLS } from "@/data/portfolio";
import { Reveal, RevealWords } from "./motion-primitives";
import { SectionLabel } from "./section-label";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 px-6 py-28 md:px-10 md:py-40"
    >
      <div className="relative mx-auto w-full max-w-[80rem]">
        <SectionLabel index="04" title="Skills" />

        <h2 className="mt-12 display-xl text-[clamp(2rem,5vw,3.6rem)]">
          <RevealWords text="The toolkit." />
        </h2>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.06} className="h-full">
              <div className="h-full rounded-xl border border-border bg-background/80 p-7 md:p-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg tracking-tight">
                    {group.group}
                  </h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-3 py-1.5 text-[12.5px] text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
