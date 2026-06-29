import { profile } from "@/lib/portfolio-data"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-cream px-8 py-28 text-center">
      <div className="mx-auto max-w-xl">
        <div className="mb-3 text-[11px] font-medium uppercase tracking-[2.5px] text-accent">
          Get in touch
        </div>
        <h2 className="mb-6 font-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-tight tracking-tight">
          Open to new opportunities
        </h2>
        <p className="mb-10 text-[17px] leading-relaxed text-muted">
          Looking for Senior and Staff Designer roles in product-led teams. Remote-friendly or Noida /
          Delhi-NCR. Open to relocation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded border-[1.5px] border-ink bg-ink px-7 py-3 text-sm font-medium text-paper transition-colors hover:border-accent-dark hover:bg-accent-dark"
          >
            Email me
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded border-[1.5px] border-ink/25 px-7 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            LinkedIn ↗
          </a>
          <a
            href={profile.behance}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded border-[1.5px] border-ink/25 px-7 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Behance ↗
          </a>
        </div>
        <div className="mt-6 text-[13px] text-muted">{profile.phone}</div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-8 py-7 text-center text-[13px] text-muted">
      © 2026 {profile.name} · {profile.role} · {profile.location}
    </footer>
  )
}
