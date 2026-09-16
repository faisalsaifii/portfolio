import { PROFILE } from "@/data/portfolio";
import { Magnetic, Reveal, RevealWords } from "@/components/motion-primitives";
import { SectionLabel } from "@/components/section-label";

const LINKS = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { label: "GitHub", value: "@faisalsaifii", href: PROFILE.github },
  { label: "LinkedIn", value: "in/faisalsaifii", href: PROFILE.linkedin },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden px-6 py-32 md:px-10 md:py-44"
    >
      <div className="relative mx-auto w-full max-w-[80rem]">
        <SectionLabel index="06" title="Contact" />

        <h2 className="mt-14 display-xl text-[clamp(2.4rem,9vw,7rem)]">
          <RevealWords text="Let's build" />
          <br />
          <span className="text-primary">
            <RevealWords text="something good." delay={0.1} />
          </span>
        </h2>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-lg text-[15px] leading-relaxed text-muted-foreground md:text-base">
            Open to product engineering roles, freelance builds and
            collaborations. Drop a line — I reply to everything.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <Magnetic className="mt-12 inline-block">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-4 rounded-full border border-primary/40 bg-primary/10 px-8 py-4 font-display text-lg tracking-tight text-primary transition-colors duration-500 hover:bg-primary hover:text-primary-foreground"
            >
              Start a conversation
              <span aria-hidden>→</span>
            </a>
          </Magnetic>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden border-y border-border bg-border sm:grid-cols-3">
          {LINKS.map((l, i) => (
            <Reveal key={l.label} delay={i * 0.07} className="bg-background">
              <a
                href={l.href}
                target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex h-full flex-col gap-3 p-7 transition-colors duration-500 hover:bg-surface"
              >
                <span className="eyebrow">{l.label}</span>
                <span className="break-all font-mono text-[13px] text-foreground/90 transition-colors group-hover:text-primary">
                  {l.value}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
