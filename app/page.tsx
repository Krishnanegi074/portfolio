import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Work } from "@/components/work"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Contact, SiteFooter } from "@/components/contact"

export default function Page() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <Work />
      <About />
      <Experience />
      <Contact />
      <SiteFooter />
    </main>
  )
}
