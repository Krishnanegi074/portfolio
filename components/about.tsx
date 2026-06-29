import { profile, skillGroups } from "@/lib/portfolio-data"

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-ink px-8 py-28 text-paper">
      <div className="mx-auto grid max-w-5xl items-start gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <div className="mb-3 text-[11px] font-medium uppercase tracking-[2.5px] text-accent-light">
            About me
          </div>
          <h2 className="mb-12 font-display text-[clamp(2rem,4vw,3rem)] font-normal leading-tight tracking-tight text-paper">
            Clarity over decoration. Systems over screens.
          </h2>
          <div className="space-y-6 text-base leading-loose text-[#777]">
            <p>
              I&apos;m <strong className="font-medium text-paper">Krishna Negi</strong>, a Senior Product
              Designer with 8+ years of experience across SaaS, fintech, AI-driven products, and
              enterprise platforms. I lead end-to-end design — from early research to dev-ready handoffs.
            </p>
            <p>
              I specialise in{" "}
              <strong className="font-medium text-paper">scalable design systems, 0→1 product work,</strong>{" "}
              and turning complex business requirements into interfaces people actually understand and
              use. I&apos;ve worked with global brands including{" "}
              <strong className="font-medium text-paper">Suntory, Diageo, JLL, SBI,</strong> and{" "}
              <strong className="font-medium text-paper">Manipal Hospital.</strong>
            </p>
            <p>
              Currently based in {profile.location}. Open to{" "}
              <strong className="font-medium text-paper">Senior and Staff Designer roles</strong> — remote
              or in-office.
            </p>
          </div>
          <div className="mt-10">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded border-[1.5px] border-white/20 px-7 py-3 text-sm font-medium text-paper transition-colors hover:border-white/60"
            >
              Let&apos;s talk →
            </a>
          </div>
        </div>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <div className="mb-4 text-[11px] uppercase tracking-widest text-accent-light">
                {group.label}
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 px-3.5 py-1.5 text-[13px] text-white/55"
                  >
                    {item}
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
