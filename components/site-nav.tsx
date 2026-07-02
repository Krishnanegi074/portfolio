"use client"

import { profile } from "@/lib/portfolio-data"

const RESUME_URL = "/Krishna-Negi-Resume.pdf"

function handleResume() {
  // Open the resume in a new tab for viewing
  window.open(RESUME_URL, "_blank", "noopener,noreferrer")
  // Trigger a download of the same file
  const link = document.createElement("a")
  link.href = RESUME_URL
  link.download = "Krishna-Negi-Resume.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

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
      <button
        type="button"
        onClick={handleResume}
        className="rounded bg-ink px-5 py-2 text-[13px] font-medium text-paper transition-colors hover:bg-accent-dark"
      >
        Hire me
      </button>
    </nav>
  )
}
