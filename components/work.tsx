import { projects, type Project } from "@/lib/portfolio-data"

function Arrow({ className = "" }: { className?: string }) {
  return (
    <span
      className={`flex h-8.5 w-8.5 flex-shrink-0 items-center justify-center rounded-full border text-[15px] transition-colors ${className}`}
      aria-hidden="true"
    >
      ↗
    </span>
  )
}

function WorkCard({ project }: { project: Project }) {
  const dark = project.dark
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={`group flex min-h-[300px] flex-col justify-between border p-11 transition-colors ${
        dark
          ? "border-[#222] bg-[#111] text-paper hover:bg-[#161616]"
          : "border-border bg-cream text-ink hover:bg-cream-hover"
      }`}
    >
      <div>
        <div
          className={`mb-2.5 text-[11px] font-medium uppercase tracking-widest ${
            dark ? "text-accent-light" : "text-accent"
          }`}
        >
          {project.tag}
        </div>
        <h3 className="mb-3 font-display text-[1.55rem] font-normal leading-tight tracking-tight">
          {project.title}
        </h3>
        <p className={`text-sm leading-relaxed ${dark ? "text-[#888]" : "text-muted"}`}>
          {project.description}
        </p>
      </div>
      <div
        className={`mt-8 flex items-center justify-between border-t pt-5 ${
          dark ? "border-white/10" : "border-ink/10"
        }`}
      >
        <div className="flex gap-6">
          {project.metrics.map((m) => (
            <div key={m.label} className="text-xs text-muted">
              <strong
                className={`mb-px block text-[15px] font-medium ${dark ? "text-paper" : "text-ink"}`}
              >
                {m.value}
              </strong>
              {m.label}
            </div>
          ))}
        </div>
        <Arrow
          className={`${
            dark ? "border-white/15 text-paper" : "border-ink/15 text-ink"
          } group-hover:border-accent group-hover:bg-accent group-hover:text-paper`}
        />
      </div>
    </a>
  )
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl scroll-mt-20 px-8 pb-8 pt-24">
      <div className="mb-3 text-[11px] font-medium uppercase tracking-[2.5px] text-accent">
        Selected work
      </div>
      <h2 className="mb-12 font-display text-[clamp(2rem,4vw,3rem)] font-normal leading-tight tracking-tight">
        Projects built end-to-end
      </h2>

      <div className="grid gap-[1.5px] sm:grid-cols-2">
        {projects.map((project) => (
          <WorkCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
