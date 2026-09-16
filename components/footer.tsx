import { PROFILE } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border px-6 py-10 md:px-10">
      <div className="mx-auto flex w-full max-w-[80rem] flex-col gap-4 text-[12.5px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {year} {PROFILE.name}. Built with care.
        </span>
        <div className="flex items-center gap-6">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="link-underline hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
