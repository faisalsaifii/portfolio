export const PROFILE = {
  name: "Faisal Saifi",
  short: "Faisal",
  role: "Software Engineer",
  email: "faisalsaifi0202@gmail.com",
  github: "https://github.com/faisalsaifii",
  linkedin: "https://linkedin.com/in/faisalsaifii",
  company: "Juspay Technologies",
  companyUrl: "https://juspay.io",
  summary:
    "Software Engineer with 3+ years shipping production-grade systems at scale. I work at the intersection of clean architecture and impactful user experience — from AI chatbots to payment dashboards processing millions of transactions.",
};

export const STATS = [
  { value: "3+", label: "Years shipping production systems" },
  { value: "70%", label: "Integration effort automated at Juspay" },
  { value: "6", label: "Products designed, built and launched" },
  { value: "1", label: "Hackathon won — Hack n Crack" },
];

export const DISCIPLINES = [
  { title: "Frontend", items: "React, Next.js, TypeScript" },
  { title: "Backend", items: "Python, Flask, Node.js" },
  { title: "Database", items: "PostgreSQL, MongoDB, MySQL" },
  { title: "DevOps", items: "Jenkins, Docker, Nix" },
];

export type Project = {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  year: string;
  category: string;
  url: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "billable",
    name: "Billable",
    description:
      "Desktop accounting software for freelancers and small businesses — invoices, ledgers and reports in a native-feeling app.",
    tags: ["Svelte", "Tauri", "Rust"],
    year: "2024",
    category: "Desktop App",
    url: "https://billable.faisalsaifi.com",
    image: "/projects/billable.jpg",
  },
  {
    slug: "intech",
    name: "Intech Circuits",
    description:
      "Corporate landing page and PCB ordering flow for a manufacturing company. Drove a 50% increase in company reach.",
    tags: ["Next.js", "Supabase", "Tailwind"],
    year: "2022",
    category: "Corporate",
    url: "https://intechcircuits.com/",
    image: "/projects/intech.jpg",
  },
  {
    slug: "devmeet",
    name: "DevMeet",
    description:
      "Coding interview platform pairing live video conferencing with a collaborative in-browser IDE. Hackathon winner.",
    tags: ["WebRTC", "IDE", "React"],
    year: "2023",
    category: "Platform",
    url: "https://devmeet.faisalsaifi.com/",
    image: "/projects/devmeet.png",
  },
  {
    slug: "hungy",
    name: "Hungy",
    description:
      "Social media and food ordering web app that blends community feeds with a seamless delivery checkout.",
    tags: ["Full Stack", "Food Tech", "React"],
    year: "2023",
    category: "Social",
    url: "https://hungy.faisalsaifi.com/",
    image: "/projects/hungy.png",
  },
  {
    slug: "posters",
    name: "Posters",
    description:
      "E-commerce storefront for digital posters and templates, built around a design-forward browsing experience.",
    tags: ["Next.js", "E-Commerce", "Digital Products"],
    year: "2023",
    category: "Commerce",
    url: "https://posters.faisalsaifi.com/",
    image: "/projects/posters.jpg",
  },
  {
    slug: "rapid-typer",
    name: "Rapid Typer",
    description:
      "Typing speed test with real-time WPM tracking, accuracy analytics and competitive runs.",
    tags: ["JavaScript", "Web App", "Realtime"],
    year: "2022",
    category: "Tool",
    url: "https://faisalsaifii.github.io/rapid-typer",
    image: "/projects/rapidtyper.jpg",
  },
];

export type Role = {
  title: string;
  org: string;
  period: string;
  stack: string;
  points: string[];
};

export const EXPERIENCE: Role[] = [
  {
    title: "Software Engineer",
    org: "Juspay Technologies",
    period: "Jul 2023 — Present",
    stack:
      "Python, Flask, PostgreSQL, React, Haskell, Rescript, Jenkins, Nix, JavaScript, TypeScript, Rescript",
    points: [
      "Automated integration processes by 70% across multiple product teams",
      "Built Juspay Genius — an AI chatbot resolving merchant queries with zero human intervention",
      "Developed the Onboarding Assistant, Feature Marketplace and AI Dashboard",
      "Created the Business Observability Dashboard and Credentials Management System",
    ],
  },
  {
    title: "Full Stack Developer",
    org: "Intech Circuits",
    period: "Aug 2022 — Jan 2023",
    stack: "Next.js, TypeScript, Tailwind CSS, Supabase",
    points: [
      "Increased company reach by 50% through landing page development",
      "Developed 'Get Your PCB' — an online ordering platform for customers",
    ],
  },
  {
    title: "Open Source Contributor",
    org: "GitHub",
    period: "Aug 2022 — Present",
    stack: "Various technologies",
    points: [
      "Contributed to Supabase — the open source Backend as a Service platform",
      "Built Juspay Remote Development — deploy to host via SSH with NixOS",
    ],
  },
  {
    title: "Freelance Developer",
    org: "Fiverr",
    period: "Aug 2023 — Dec 2023",
    stack: "Python, Flask, React, TypeScript",
    points: [
      "Built Slack apps and landing pages from scratch",
      "Improved existing client applications and interfaces",
    ],
  },
];

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Figma",
      "Rescript",
    ],
  },
  {
    group: "Backend",
    items: [
      "Haskell",
      "Node.js",
      "Express.js",
      "Flask",
      "Python",
      "C++",
      "Spring Boot",
      "REST APIs",
    ],
  },
  { group: "Mobile", items: ["React Native", "Flutter"] },
  {
    group: "Database",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Firestore",
      "Supabase",
      "Firebase",
    ],
  },
  {
    group: "DevOps",
    items: [
      "Jenkins",
      "Docker",
      "Nix",
      "GitHub Actions",
      "Git",
      "Selenium",
      "Bitbucket",
      "GitLab",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech — Information Technology",
    school: "Inderprastha Engineering College",
    period: "Sept 2020 — June 2024",
    note: "Won the Hack n Crack Hackathon with DevMeet",
    url: "https://www.ipec.org.in",
  },
  {
    degree: "10+2 (PCM)",
    school: "Bharti Public School",
    period: "2008 — 2020",
    note: "Won the school website development contest",
    url: "https://bps.edu.in",
  },
];

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
