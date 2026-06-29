import { profile } from "@/lib/portfolio-data"

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

export function SiteNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex h-15 items-center justify-between border-b border-border bg-paper/90 px-8 backdrop-blur-md">
      <a
        href="#"
        className="font-display text-lg font-medium tracking-tight text-ink"
      >
        {profile.name}
      </a>
      <ul className="hidden gap-8 md:flex">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href={`mailto:${profile.email}`}
        className="rounded bg-ink px-5 py-2 text-[13px] font-medium text-paper transition-colors hover:bg-accent-dark"
      >
        Hire me
      </a>
    </nav>
  )
}
