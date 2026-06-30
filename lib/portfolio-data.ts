export const profile = {
  name: "Krishna Negi",
  role: "Senior Product Designer",
  email: "krishnanegi074@gmail.com",
  phone: "+91 99105 97223",
  linkedin: "https://www.linkedin.com/in/krishna-negi-20485315b/",
  behance: "https://www.behance.net/Krishnaneg6865",
  location: "Noida, India",
}

export const stats = [
  { num: "8+", label: "Years experience" },
  { num: "35%", label: "Task time reduction" },
  { num: "40%", label: "Faster design-to-dev" },
  { num: "95%", label: "Client satisfaction" },
]

export type Project = {
  tag: string
  title: string
  description: string
  metrics: { value: string; label: string }[]
  dark?: boolean
  href: string
}

export const projects: Project[] = [
  {
    tag: "Conversational UX · AI",
    title: "Hey Alpha — AI Avatar Check-in",
    description:
      "Designed end-to-end conversational UX including personas, journey maps, motion UI, and interaction design for an AI-driven guest experience platform.",
    metrics: [
      { value: "+30%", label: "Check-in efficiency" },
      { value: "+18%", label: "Guest satisfaction" },
    ],
    dark: true,
    href: "https://www.heyalpha.io/",
  },
  {
    tag: "Enterprise UX · HR App",
    title: "JLL Attendance App",
    description:
      "Redesigned profile management, attendance marking, and leave workflows for a large enterprise workforce. Reduced task time and error rates significantly.",
    metrics: [
      { value: "−35%", label: "Task time" },
      { value: "−22%", label: "Error rate" },
    ],
    href: "https://www.figma.com/design/xO9HMAQmmyVi50oXO5eAfw/JLL-App?node-id=0-1&t=nUJOcAneTxdg5NIJ-1",
  },
  {
    tag: "Learning Portal · B2B",
    title: "Suntory Learning Portal",
    description:
      "Designed a learning management platform for one of the world's largest beverage companies. Improved content discoverability and reduced publishing effort across teams.",
    metrics: [
      { value: "+40%", label: "Discoverability" },
      { value: "−25%", label: "Publishing effort" },
    ],
    href: "https://www.behance.net/Krishnaneg6865",
  },
  {
    tag: "Fintech · Mobile UX",
    title: "NYE App — RapiPay Fintech",
    description:
      "Led UX and visual design for a fintech product at Mantra Labs. Designed complex transactional flows with a focus on trust, clarity, and mobile-first accessibility.",
    metrics: [
      { value: "Fintech", label: "Domain" },
      { value: "Mobile", label: "Platform" },
    ],
    dark: true,
    href: "https://www.behance.net/Krishnaneg6865",
  },
  {
    tag: "Insurance · Enterprise SaaS",
    title: "SBI General Insurance",
    description:
      "Led UX vision and strategy for a large-scale insurance SaaS product at Mantra Labs. Mapped complex multiscreen flows and built reusable component architectures aligned with business and engineering roadmaps.",
    metrics: [
      { value: "Insurance", label: "Domain" },
      { value: "Enterprise", label: "SaaS" },
    ],
    href: "https://xd.adobe.com/view/d53d10bf-6c7a-4c44-b7e6-28ef09f1c4b4-806e/",
  },
  {
    tag: "Dashboard · Price Automation",
    title: "Pace Industries",
    description:
      "Designed a price automation dashboard with data-dense layouts, clear information hierarchy, and streamlined workflows for enterprise operations teams.",
    metrics: [
      { value: "Dashboard", label: "Design" },
      { value: "Automation", label: "Domain" },
    ],
    dark: true,
    href: "https://www.behance.net/gallery/231975103/Dashboard-Design-for-Price-Automation",
  },
]

export const skillGroups = [
  {
    label: "Core design skills",
    items: [
      "Product Design",
      "UX Research",
      "Design Systems",
      "0→1 Products",
      "Conversational UX",
      "AI UX",
      "Motion Design",
      "Mobile-first UX",
      "SaaS Interfaces",
      "Usability Testing",
      "Dev Handoff",
    ],
  },
  {
    label: "Tools",
    items: [
      "Figma",
      "After Effects",
      "Principle",
      "Framer",
      "Maze",
      "Amplitude",
      "Protopie",
      "Adobe XD",
      "Sketch",
      "Miro",
      "Jira",
      "Notion",
    ],
  },
  {
    label: "Platforms",
    items: ["Android", "iOS", "Web", "B2B SaaS", "SharePoint", "Enterprise"],
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    role: "Senior Product Designer",
    company: "Digitaiken · Noida",
    period: "Aug 2022 – Present",
    bullets: [
      "Designed end-to-end conversational UX for Hey Alpha (AI avatar) — improving check-in efficiency by 30% and guest satisfaction by 18%.",
      "Ran usability testing with 40+ users; insights reduced drop-offs by 25% and improved task completion rates.",
      "Built a motion design system (timing, easing, state specs, dev-ready assets) ensuring 100% cross-platform consistency.",
      "Redesigned JLL Attendance App workflows — reduced task time by 35% and errors by 22%.",
      "Delivered Learning Portal and SharePoint templates for Suntory and Diageo — improving content discoverability by 40% and cutting publishing effort by 25%.",
      "Prototyped Hikinjo (internal concierge concept), validated with 150+ testers, saving ~20 mins/day per user.",
      "Accelerated design-to-dev cycles by 40% using Figma, After Effects, Principle, and Framer.",
    ],
  },
  {
    role: "Senior Product Designer",
    company: "Mantra Labs · Bangalore",
    period: "Oct 2021 – Aug 2022",
    bullets: [
      "Led UX and visual design for SBI General Insurance, Pace Industries (Manipal Hospital), and the NYE App (RapiPay Fintech).",
      "Defined UX strategy and system architecture — mapped complex multiscreen flows and built reusable component frameworks.",
      "Communicated design intent via storyboards, interactive prototypes, and annotated specs to stakeholders and engineering teams.",
      "Boosted user engagement by 25% on JLL Attendance App through improved interaction patterns.",
      "Improved design delivery time by 20% using reusable components and documentation standards.",
      "Led team to 95% client satisfaction across design projects.",
    ],
  },
  {
    role: "UI/UX & Motion Designer",
    company: "iAugmentor Labs · Gurgaon",
    period: "Jan 2018 – Oct 2021",
    bullets: [
      "Designed an end-to-end e-learning platform — increased engagement by 30% through improved navigation and micro-interactions.",
      "Built interactive prototypes, storyboards, and process flows presented to stakeholder and engineering teams.",
      "Partnered with product and BA teams to translate roadmaps into prioritised design deliverables.",
      "Created annotated handoffs and collaborated closely with engineering for accurate implementation.",
    ],
  },
]
