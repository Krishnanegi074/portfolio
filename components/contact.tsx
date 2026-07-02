import { profile } from "@/lib/portfolio-data"
import { ResumeButton } from "@/components/resume-button"

const socials = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
  { label: "LinkedIn", value: "krishna-negi", href: profile.linkedin, external: true },
  { label: "Behance", value: "Krishnaneg6865", href: profile.behance, external: true },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-ink px-6 py-32 text-paper">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-paper/15 px-4 py-1.5 text-[12px] font-medium text-paper/70">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for new projects
        </div>
        <h2 className="mb-6 font-display text-[clamp(2.75rem,6vw,4.75rem)] font-normal leading-[1.05] tracking-tight text-balance">
          Let&apos;s build something
          <br />
          worth remembering
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-[17px] leading-relaxed text-paper/60 text-pretty">
          Open to Senior, Lead, and Staff Designer roles on product-led teams. Remote-friendly, based in
          Noida / Delhi-NCR, and open to relocation for the right team.
        </p>

        <div className="mb-16 flex flex-wrap items-center justify-center gap-4">
          <ResumeButton className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent-dark">
            Let&apos;s talk
          </ResumeButton>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-paper/25 px-8 py-3.5 text-sm font-medium text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
          >
            Email me
          </a>
        </div>

        <div className="mx-auto grid max-w-2xl gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 sm:grid-cols-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noreferrer" : undefined}
              className="group flex flex-col items-center gap-1.5 bg-ink px-6 py-7 transition-colors hover:bg-paper/[0.04]"
            >
              <span className="text-[11px] font-medium uppercase tracking-[2px] text-accent">
                {s.label}
                {s.external ? " ↗" : ""}
              </span>
              <span className="text-sm text-paper/70 transition-colors group-hover:text-paper">
                {s.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-paper px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-[13px] text-muted sm:flex-row">
        <span className="font-display text-base text-ink">{profile.name}</span>
        <span className="text-center">
          {profile.role} · {profile.location}
        </span>
        <span>© {new Date().getFullYear()} · All rights reserved</span>
      </div>
    </footer>
  )
}
