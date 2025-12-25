// import { AppWindow, Banknote, Gamepad2, Gpu, ShoppingBag, Smartphone, Sparkles } from "lucide-react";

import {
  Bitcoin01FreeIcons,
  Cash01FreeIcons,
  ProductLoadingFreeIcons,
  ShoppingBasket01FreeIcons,
  SmartPhone02FreeIcons,
  SparklesIcon,
  VideoConsoleFreeIcons,
} from "@hugeicons/core-free-icons";

export const homeSection1 = [
  {
    title: "Timezone",
    value: "UTC +2",
  },
  {
    title: "Location",
    value: "Worldwide",
  },
  {
    title: "Experience",
    value: "10+ years",
  },
  {
    title: "Languages",
    value: "English, Hindi",
  },
  {
    title: "Skillset",
    value: "Product, Design and Strategy",
  },
];

export const workExperience = [
  {
    company: "Portdex",
    date: "2025 - Present",
  },
  {
    company: "Freelance",
    date: "2024 - 2024",
  },
  {
    company: "Emids",
    date: "2023 - 2022",
  },
  {
    company: "Graduation",
    date: "2017 - 2021",
  },
];

export const whatIBuildData = [
  "Design Systems",
  "Web Apps",
  "Frontend Architecture",
  "Landing Pages",
  "UX to DX",
  "Interaction Design",
  "Refactors",
  "Design Tokens",
  "A11y Audits",
];

export const domainsData = [
  { label: "AI", logo: SparklesIcon },
  { label: "SaaS", logo: ProductLoadingFreeIcons },
  { label: "Fintech", logo: Cash01FreeIcons },
  { label: "Crypto", logo: Bitcoin01FreeIcons },
  { label: "Ecommerce", logo: ShoppingBasket01FreeIcons },
  { label: "Creators", logo: SmartPhone02FreeIcons },
  { label: "Gaming", logo: VideoConsoleFreeIcons },
];

export const stackData = [
  // Core
  { label: "JavaScript", logo: "/javascript.svg" },
  { label: "TypeScript", logo: "/typescript.svg" },
  { label: "Node.js", logo: "/nodejs.svg" },
  { label: "Bun", logo: "/bun.svg" },

  // Frameworks / UI
  { label: "React", logo: "/react.svg" },
  { label: "Next.js", logo: "/nextjs.svg" },
  { label: "Astro", logo: "/astro.svg" },
  { label: "Tailwind CSS", logo: "/tailwindcss.svg" },
  { label: "Radix UI", logo: "/radix-ui.svg" },
  { label: "shadcn/ui", logo: "/shadcn-ui.svg" },
  { label: "Motion", logo: "/motion.svg" },

  // Data / State
  { label: "TanStack", logo: "/tanstack.svg" },
  { label: "React Query", logo: "/reactquery.svg" },
  { label: "React Router", logo: "/reactrouter.svg" },
  { label: "Redux", logo: "/redux.svg" },

  // Infra / Storage
  { label: "Docker", logo: "/docker.svg" },
  { label: "Redis", logo: "/redis.svg" },
  { label: "MySQL", logo: "/mysql.svg" },

  // Tools
  { label: "Git", logo: "/git.svg" },
  { label: "Figma", logo: "/figma.svg" },
  // { label: "Vercel", logo: "/vercel.svg" },
  // { label: "Cursor", logo: "/cursor.svg" },
];

export const faqs = [
  {
    question:
      "How do you approach building user interfaces that balance design and engineering constraints?",
    answer:
      "I start by understanding the user goal and the design intent, then map that to a component-based system that’s realistic to build and scale. I collaborate early with design, question edge cases, and make trade-offs explicit—performance, accessibility, and maintainability usually guide final decisions.",
  },
  {
    question:
      "How do you ensure performance and accessibility in modern frontend applications?",
    answer:
      "I treat performance and accessibility as baseline requirements, not optimizations. That means semantic HTML, keyboard navigation, proper contrast, and testing with screen readers. On performance, I focus on bundle size, rendering behavior, and real user metrics rather than synthetic scores alone.",
  },
  {
    question:
      "What does your component architecture look like in a large codebase?",
    answer:
      "I favor small, composable components with clear responsibilities. Shared primitives live close to a design system, while product-specific components stay isolated. Strong typing, predictable state boundaries, and consistent naming conventions keep the system understandable as it grows.",
  },
  {
    question:
      "How do you collaborate with designers, product managers, and backend engineers?",
    answer:
      "I work best with tight feedback loops. I review designs early, flag technical risks before implementation, and keep communication async-friendly through docs and clear PRs. I also try to speak both design and engineering so decisions don’t get lost in translation.",
  },
  {
    question:
      "How do you stay current with frontend tools and evolving best practices?",
    answer:
      "I stay curious but selective. I follow core platform changes, read RFCs, and experiment in side projects before adopting anything at work. I’m cautious of hype—tools earn their place by solving real problems better than what we already have.",
  },
];
