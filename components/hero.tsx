import { profile, stats } from "@/lib/portfolio-data"

export function Hero() {
  return (
    <header className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-8 pb-16 pt-28">
      <div className="mb-6 flex items-center gap-2.5 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        Senior Product Designer · Open to new roles
      </div>

      <h1 className="mb-8 max-w-3xl text-balance font-display text-[clamp(2.8rem,6vw,5.2rem)] font-normal leading-[1.08] tracking-tight">
        8 years designing products that <em className="italic text-accent">scale</em> with precision
      </h1>

      <p className="mb-12 max-w-xl text-lg leading-relaxed text-muted">
        I specialise in end-to-end product design — from 0→1 SaaS and fintech platforms to mobile-first
        consumer apps used by millions.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded border-[1.5px] border-ink bg-ink px-7 py-3 text-sm font-medium text-paper transition-colors hover:border-accent-dark hover:bg-accent-dark"
        >
          View work ↓
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded border-[1.5px] border-ink/25 px-7 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
        >
          Get in touch ↗
        </a>
      </div>

      <dl className="mt-20 flex flex-wrap gap-14 border-t border-border pt-12">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block font-display text-[2.2rem] font-normal leading-none tracking-tight">
                {stat.num}
              </span>
              <span className="mt-1 block text-xs uppercase tracking-wide text-muted">
                {stat.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </header>
  )
}
