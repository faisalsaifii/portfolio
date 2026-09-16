import { Reveal } from "./motion-primitives";

export function SectionLabel({
  index,
  title,
  align = "left",
}: {
  index: string;
  title: string;
  align?: "left" | "right";
}) {
  return (
    <Reveal>
      <div
        className={`flex items-center gap-4 ${align === "right" ? "flex-row-reverse text-right" : ""}`}
      >
        <span className="font-mono text-[11px] tracking-[0.2em] text-primary">
          {index}
        </span>
        <span className="eyebrow">{title}</span>
        <span className="h-px flex-1 bg-border" />
      </div>
    </Reveal>
  );
}
