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
    role: "Freelance Product Designer",
    company: "Self Employed",
    period: "Sep 2025 – Present",
    bullets: [
      "Kartaar Valves — designed end-to-end website and e-commerce UX for an industrial valves manufacturer, including the product catalogue, online sales journey, and conversion-focused landing pages, enabling the business to sell digitally for the first time.",
      "Suntory — continued remote UX collaboration on learning platform updates, maintaining design consistency and delivering high-fidelity screens and interaction specs.",
      "Managed the full freelance design process independently — client briefing, wireframing, prototyping, and delivery across multiple concurrent projects.",
    ],
  },
  {
    role: "Senior Product Designer",
    company: "Digitaiken · Noida",
    period: "Aug 2022 – Aug 2025",
    bullets: [
      "Designed end-to-end conversational UX for Hey Alpha (AI avatar) — personas, journey maps, motion UI, and interaction design — improving check-in efficiency by 30% and guest satisfaction by 18%.",
      "Designed information architecture and UX for the Suntory Learning Portal — improving content discoverability by 40% and reducing publishing effort by 25%.",
      "Redesigned JLL Attendance App workflows for profile, attendance, and leave — reduced task time by 35% and error rate by 22%.",
      "Built a motion design system (timing, easing, state specs, dev-ready assets) ensuring 100% cross-platform consistency and 40% faster developer handoff.",
      "Prototyped Hikinjo (internal concierge concept), validated with 150+ testers, saving ~20 minutes per user.",
      "Delivered reusable Diageo SharePoint templates, improving content publishing efficiency by 25%.",
      "Ran usability testing with 40+ users; insights reduced drop-offs by 25% and improved task completion rates.",
    ],
  },
  {
    role: "Senior Product Designer",
    company: "Mantra Labs · Bangalore",
    period: "Oct 2021 – Aug 2022",
    bullets: [
      "Led UX strategy and interaction design for SBI General Insurance — mapped complex multiscreen flows and built a reusable component architecture.",
      "Designed enterprise SaaS workflows for Manipal Hospital — defined information architecture and usability-tested prototypes for clinical and admin users.",
      "Communicated design decisions via storyboards, annotated wireframes, and clickable prototypes to engineering and product stakeholders.",
      "Improved design delivery time by 20% using reusable components; achieved 95% client satisfaction across all design projects.",
    ],
  },
  {
    role: "UI/UX & Motion Designer",
    company: "iAugmentor Labs · Gurgaon",
    period: "Jan 2018 – Oct 2021",
    bullets: [
      "Led UX and visual design for the NYE App (RapiPay Fintech) — transactional flows with a focus on trust, accessibility, and mobile-first patterns.",
      "Designed an end-to-end e-learning platform and brand identity from scratch — increased learner engagement by 30% through improved navigation, micro-interactions, and content layout.",
      "Built interactive prototypes, storyboards, and process flows; produced annotated handoffs and collaborated with engineering for accurate implementation.",
      "Partnered with product managers and business analysts in an Agile/Scrum environment to translate roadmaps into prioritised design deliverables.",
    ],
  },
]

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  school: "Himalayan Garhwal University, Uttarakhand",
}
