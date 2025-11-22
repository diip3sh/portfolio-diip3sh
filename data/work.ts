import type { WorkItem } from "@/lib/types/work-type";

export const works: WorkItem[] = [
  {
    id: 1,
    company: "Portdex",
    position: "Frontend Engineer",
    badge: "Blockchain Technology | AI Marketplace",
    date: "March 2025 – Present",
    image: ["/images/portdex-dashboard.png", "/images/portdex-auth.png", ""],
    description: [
      "Integrated advanced AI SDKs with Model Context Protocols into Next.js applications to enhance product functionality and user experience.",
      "Built secure and responsive user interfaces for blockchain-based panels using React, TypeScript, and Docker.",
      "Implemented Azure Entra ID authentication to ensure seamless and secure user access across platforms.",
    ],
    link: [
      {
        title: "Company Website",
        link: "https://portdex.ai",
      },
      {
        title: "GitHub Profile",
        link: "https://github.com/pilladipesh33",
      },
      {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/pilladipesh",
      },
    ],
  },
  {
    id: 2,
    company: "Freelance",
    position: "Frontend Developer",
    badge: "E-Commerce | FinTech",
    date: "August 2024 – December 2024",
    image: [
      "/images/ecommerce-platform.png",
      "/images/stripe-integration.png",
      "/images/backendlessdb-dashboard.png",
    ],
    description: [
      "Developed a fully responsive e-commerce platform with React and TailwindCSS, improving dealer engagement by 30%.",
      "Integrated Stripe SDK for automated payments, reducing transaction times by 45%.",
      "Built a scalable backend with BackendLessDB for managing invoices, customer data, and payment workflows.",
    ],
    link: [
      {
        title: "Live Demo",
        link: "#",
      },
      {
        title: "GitHub Repository",
        link: "https://github.com/pilladipesh33",
      },
      {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/pilladipesh",
      },
    ],
  },
  {
    id: 3,
    company: "Meon Technologies",
    position: "React Native Developer",
    badge: "Mobile Development",
    date: "August 2023 – December 2023",
    image: ["/images/meon-app.png", "/images/meon-dashboard.png"],
    description: [
      "Developed mobile features and interfaces using React Native, ensuring smooth cross-platform performance and scalability.",
    ],
    link: [
      {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/pilladipesh",
      },
      {
        title: "GitHub Profile",
        link: "https://github.com/pilladipesh33",
      },
    ],
  },
  {
    id: 4,
    company: "Emids",
    position: "Software Engineer",
    badge: "Healthcare Technology",
    date: "February 2022 – July 2023",
    image: [
      "/images/emids-app.png",
      "/images/emids-dashboard.png",
      "/images/nodejs-dashboard.png",
    ],
    description: [
      "Built a malnutrition detection app for newborns, cutting detection time by 40%.",
      "Developed an asynchronous data-transfer tracking system with REST APIs, improving efficiency by 20%.",
      "Optimised offline data storage using Node.js, React, and PostgreSQL for reliable healthcare data management.",
    ],
    link: [
      {
        title: "Company Website",
        link: "https://www.emids.com",
      },
      {
        title: "GitHub Profile",
        link: "https://github.com/pilladipesh33",
      },
    ],
  },
  {
    id: 5,
    company: "BridgeLabz",
    position: "React Native Developer",
    badge: "Startup Accelerator",
    date: "August 2021 – February 2022",
    image: ["/images/bridgelabz-app.png", "/images/bridgelabz-dashboard.png"],
    description: [
      "Contributed to mobile app projects under the BridgeLabz innovation programme, focusing on React Native component design and state management.",
    ],
    link: [
      {
        title: "Company Website",
        link: "https://www.bridgelabz.com",
      },
      {
        title: "GitHub Profile",
        link: "https://github.com/pilladipesh33",
      },
    ],
  },
];
