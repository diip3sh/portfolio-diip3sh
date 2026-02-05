export const work = [
  {
    id: "1",
    company: "Portdex",
    date: "Mar 2025 - Now",
    title: "Frontend Engineer",
    badge: "Full-Time",
    location: "Europe, Remote",
    url: "https://portdex.com",
    image: "https://i.ibb.co/ccvLVZ3g/image.png",
    description: [
      "Founding frontend engineer responsible for building and maintaining a production-grade multi-tenant fintech platform using Next.js 16, TypeScript, and PostgreSQL.",
      "Designed and implemented secure authentication, invitation, and role-based onboarding flows using AWS Cognito, Amplify, S3, and cryptographically secure tokens.",
      "Integrated blockchain-backed financial operations including mint, burn, transfer, and auctions via Iroha with real-time WebSocket updates, audit trails, and compliance-ready transaction history.",
      "Spearheaded development of an AI-powered marketplace and agent-based workflows, supporting 2,500+ agent services with real-time APIs, asset management, and streaming updates.",
      "Built reusable, accessible UI components and advanced dashboard experiences using TailwindCSS, Radix UI, Zustand, TanStack Query, and modern React patterns.",
      "Engineered enterprise-grade APIs with 40+ type-safe endpoints, caching, request deduplication, robust error handling, and socket-based event streaming.",
    ],
  },
  {
    id: "2",
    company: "Freelance",
    date: "Jul 2024 - Nov 2024",
    title: "Frontend Engineer",
    location: "AUS, Remote",
    image: "/logo.png",
    description: [
      "Built a full-stack e-commerce platform using React, BackendlessDB, and Stripe, automating dealer management and subscription payments.",
      "Improved dealer engagement by 30% and reduced transaction time by 45% through optimized UX and payment flows.",
      "Developed a fast, scalable frontend with React, TailwindCSS, and Zustand, paired with a serverless backend for improved performance and reliability.",
    ],
  },
  {
    id: "3",
    company: "Meon Technology",
    date: "Aug 2023 - Dec 2023",
    title: "React Native Engineer",
    badge: "Full-Time",
    location: "Noida, India",
    url: "https://meon.co.in/",
    image: "https://cdn-meon.b-cdn.net/static/meon/img/favicon.png",
    description: [
      "Developed a hybrid financial mobile application using React Native with secure payment gateway integration.",
      "Increased user transactions by 40% and improved retention by 25% through real-time feedback and seamless UX improvements.",
    ],
  },
  {
    id: "4",
    company: "Emids",
    date: "Feb 2022 - Jul 2023",
    title: "Software Engineer",
    badge: "Full-Time",
    location: "India, Remote",
    url: "https://www.emids.com/",
    image: "https://www.emids.com/wp-content/uploads/2021/12/emids_favicon_dark.png",
    description: [
      "Built and launched a malnutrition detection application using React Native, Firebase, and PostgreSQL.",
      "Streamlined 500+ newborn screenings per month, reduced detection time by 40%, enabled offline support, and improved user retention by 30%.",
    ],
  },
];

export type WorkSectionItem = {
  id: string;
  title: string;
  dataKey: string;
  description: string;
  fullDescription: string;
  images: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  role: string;
};

export const workSection: WorkSectionItem[] = [
  {
    id: "1",
    title: "Convertor",
    dataKey: "convertor",
    description: "A modern file conversion tool with real-time processing",
    fullDescription:
      "Convertor is a sleek, high-performance file conversion platform that supports 50+ formats. Built with a focus on speed and user experience, it handles everything from images to documents with drag-and-drop simplicity and real-time conversion progress tracking.",
    images: ["/work/1.png", "/work/2.png", "/work/3.png"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "FFmpeg", "AWS Lambda"],
    liveUrl: "https://convertor.example.com",
    githubUrl: "https://github.com/username/convertor",
    year: "2024",
    role: "Frontend Engineer",
  },
  {
    id: "2",
    title: "Vesper",
    dataKey: "vesper",
    description: "AI-powered task management for creative teams",
    fullDescription:
      "Vesper is an intelligent project management platform designed for creative agencies. It uses AI to automatically prioritize tasks, predict deadlines, and suggest optimal team allocations. The intuitive kanban-style interface combined with powerful automation makes project management effortless.",
    images: ["/work/4.png", "/work/5.png"],
    techStack: ["React", "Node.js", "PostgreSQL", "OpenAI", "Prisma"],
    liveUrl: "https://vesper.example.com",
    year: "2024",
    role: "Full Stack Developer",
  },
  {
    id: "3",
    title: "Ulejra Dashboard",
    dataKey: "ulejra",
    description: "Analytics dashboard for e-commerce platforms",
    fullDescription:
      "Ulejra Dashboard provides real-time analytics and insights for e-commerce businesses. It aggregates data from multiple sources including Shopify, WooCommerce, and custom stores to provide unified reporting, sales forecasting, and customer behavior analysis with beautiful, interactive visualizations.",
    images: ["/work/6.png", "/work/7.png", "/work/1.png"],
    techStack: ["Next.js", "D3.js", "GraphQL", "Redis", "Docker"],
    liveUrl: "https://ulejra.example.com",
    githubUrl: "https://github.com/username/ulejra",
    year: "2023",
    role: "Frontend Engineer",
  },
  {
    id: "4",
    title: "Portdex",
    dataKey: "portdex",
    description: "Multi-tenant fintech platform with blockchain integration",
    fullDescription:
      "Portdex is a production-grade multi-tenant fintech platform handling blockchain-backed financial operations. It supports real-time asset management, secure transactions, and compliance-ready audit trails. The platform processes thousands of transactions daily with enterprise-grade security.",
    images: ["/work/2.png", "/work/3.png"],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Iroha", "AWS Cognito", "WebSocket"],
    liveUrl: "https://portdex.com",
    year: "2025",
    role: "Founding Frontend Engineer",
  },
];
