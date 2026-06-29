import { experiences } from "@/lib/portfolio-data"

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-20 px-8 py-24">
      <div className="grid gap-12 md:grid-cols-[300px_1fr] md:gap-16">
        <div className="md:sticky md:top-20 md:self-start">
          <div className="mb-3 text-[11px] font-medium uppercase tracking-[2.5px] text-accent">
            Experience
          </div>
          <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3rem)] font-normal leading-tight tracking-tight">
            Where I&apos;ve built things
          </h2>
          <p className="text-sm leading-relaxed text-muted">
            8+ years across enterprise SaaS, fintech, AI products, and consumer apps — working with
            global brands and cross-functional teams.
          </p>
        </div>

        <div>
          {experiences.map((exp, i) => (
            <div
              key={exp.role + exp.company}
              className={`${
                i === experiences.length - 1 ? "" : "mb-12 border-b border-border pb-12"
              }`}
            >
              <div className="mb-3 flex flex-col justify-between gap-1 sm:flex-row sm:items-start sm:gap-4">
                <div>
                  <div className="font-display text-[1.3rem] font-normal tracking-tight">
                    {exp.role}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wide text-accent">
                    {exp.company}
                  </div>
                </div>
                <div className="flex-shrink-0 whitespace-nowrap pt-1 text-xs text-muted">
                  {exp.period}
                </div>
              </div>
              <ul className="mt-3 space-y-1">
                {exp.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="relative py-1.5 pl-5 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-1.5 before:text-xs before:text-accent before:content-['→']"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
