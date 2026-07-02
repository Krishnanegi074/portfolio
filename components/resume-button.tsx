"use client"

const RESUME_URL = "/Krishna-Negi-Resume.pdf"

export function ResumeButton({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  function showResume() {
    window.open(RESUME_URL, "_blank", "noopener,noreferrer")
  }

  return (
    <button type="button" onClick={showResume} className={className}>
      {children}
    </button>
  )
}
