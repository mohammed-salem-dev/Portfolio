// ─────────────────────────────────────────────────────────────
// portfolioData.js  —  single source of truth
// ─────────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Mohammed Salem",
  tagline: "Full-Stack Developer",
  email: "mo7d.salem@gmail.com",
  phone: "+90 536 923 2604",
  location: "Istanbul, Türkiye",
  github: "https://github.com/mohammed-salem-dev",
  linkedin: "https://www.linkedin.com/in/mohammed-salem-70ba69326/",
  profileImage:
    "https://cdn.abacus.ai/images/408fc053-b9ae-4902-bfa0-6af5390ae738.png",
};

export const aboutText = `I am a final year Software Engineering student at Haliç University in Istanbul, Türkiye, with experience in full-stack web development. I have completed internship and freelance projects building scalable applications with modern technologies like React, Next.js, Node.js, and PostgreSQL. Additionally, I have experience in academic research, co-authoring three conference papers in areas such as machine learning and network modeling.`;

// ── Skills ────────────────────────────────────────────────────
// Used by Skills.jsx via `skillCategories`
export const skillCategories = [
  {
    name: "Languages",
    icon: "",
    skills: ["C++", "JavaScript", "TypeScript"],
  },
  {
    name: "Frontend",
    icon: "",
    skills: ["React", "Next.js", "HTML/CSS", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: "",
    skills: ["Node.js", "REST APIs", "SQL", "PostgreSQL"],
  },
  { name: "Tools", icon: "", skills: ["Cursor AI", "Git", "GitHub"] },
  {
    name: "AI & Data",
    icon: "",
    skills: ["Data Analysis", "Machine Learning Concepts"],
  },
];

// ── Projects ──────────────────────────────────────────────────
// Used by Projects.jsx via `projects`
export const projects = [
  {
    id: "supportdesk",
    title: "SupportDesk",
    description:
      "Ticketing web application with role-based access control. Built as a freelance project — Demo version, not real customer data.",
    year: "2025",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth",
      "Prisma",
      "PostgreSQL",
    ],
    githubLink: "https://github.com/mohammed-salem-dev",
    liveLink: null,
    screenshots: [
      {
        path: "/images/supportdesk/1.png",
        description: "SupportDesk dashboard",
        type: "desktop",
      },
      {
        path: "/images/supportdesk/2.png",
        description: "Ticket management view",
        type: "desktop",
      },
      {
        path: "/images/supportdesk/3.png",
        description: "Analytics overview",
        type: "desktop",
      },
    ],
  },
  {
    id: "yachtdrop",
    title: "YachtDrop",
    description:
      "Mobile-first web app for yacht supply ordering with a clean UX flow. Built during a Hackathon.",
    year: "2025",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
    ],
    githubLink: "https://github.com/mohammed-salem-dev/Hackathon-Yachtdrop",
    liveLink: null,
    screenshots: [
      {
        path: "/images/yachtdrop/1.png",
        description: "YachtDrop home screen",
        type: "mobile",
      },
      {
        path: "/images/yachtdrop/2.png",
        description: "Supply ordering flow",
        type: "mobile",
      },
      {
        path: "/images/yachtdrop/3.png",
        description: "Product listing page",
        type: "mobile",
      },
      {
        path: "/images/yachtdrop/4.png",
        description: "Order confirmation view",
        type: "mobile",
      },
    ],
  },
  {
    id: "inventory",
    title: "Inventory Management System",
    description:
      "Full-stack system for tracking and managing inventory. Built during my internship at Ultimate Solutions.",
    year: "2025",
    technologies: ["React", "Node.js", "REST API", "JavaScript", "CSS"],
    githubLink: "https://github.com/mohammed-salem-dev",
    liveLink: null,
    screenshots: [
      {
        path: "/images/inventory/1.png",
        description: "Inventory dashboard",
        type: "desktop",
      },
      {
        path: "/images/inventory/2.png",
        description: "Product management",
        type: "desktop",
      },
      {
        path: "/images/inventory/3.png",
        description: "Reports & analytics",
        type: "desktop",
      },
    ],
  },
  {
    id: "techreview",
    title: "Tech Review Website",
    description:
      "Responsive website for technology product reviews. Built as a university course project.",
    year: "2024",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/mohammed-salem-dev",
    liveLink: null,
    screenshots: [
      {
        path: "/images/techreview/1.png",
        description: "Homepage",
        type: "desktop",
      },
      {
        path: "/images/techreview/2.png",
        description: "Review page",
        type: "desktop",
      },
      {
        path: "/images/techreview/3.png",
        description: "Product detail",
        type: "desktop",
      },
    ],
  },
];

// ── Research ──────────────────────────────────────────────────
// Used by Research.jsx via `research`
export const research = [
  {
    title:
      "Enhanced Machine Learning–Based Detection of Deserialization Vulnerabilities in Malicious Network Traffic",
    conference:
      "16th International Conference on Computing, Communication and Networking Technologies (ICCCNT 2025)",
    status: "Under Publication",
    year: "2025",
    certificateImage: "/certificates/deserialization.png",
    publicationLink: null,
  },
  {
    title:
      "An Explainable Hybrid Machine Learning Approach for Early Diabetes Prediction: Comprehensive Feature Engineering and Multi-Model Analysis",
    conference:
      "International Conference on Data Technologies and Digital Economy (ICDTDE 2025)",
    status: "Published",
    year: "2025",
    certificateImage: "/certificates/diabetes.png",
    publicationLink: "https://link.springer.com/book/9783032285232",
  },
  {
    title:
      "Long-Term IEEE 802.15.4 Propagation Modeling in Millet Fields Using Machine Learning",
    conference:
      "International Conference on Computational Intelligence, Algorithms and Applications (ICCIAA 2026)",
    status: "Under Publication",
    year: "2026",
    certificateImage: "/certificates/Millet.png",
    publicationLink: null,
  },
];

// ── Experience ────────────────────────────────────────────────
// Used by Experience.jsx via `experiences`
export const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Ultimate Solutions",
    period: "June 2025 – August 2025",
    location: "Istanbul, Türkiye",
    description: null,
    responsibilities: [
      "Developed a full-stack Inventory Management System with frontend and backend functionality",
      "Worked with relational databases to store, retrieve, and manage structured data efficiently",
      "Collaborated with senior developers to implement best practices in software design",
    ],
    technologies: ["React", "Node.js", "REST API", "SQL", "JavaScript"],
  },
  {
    title: "Contract Full-Stack Developer",
    company: "Freelance",
    period: "January 2025 – May 2025",
    location: null,
    description: null,
    responsibilities: [
      "Developed a comprehensive support desk web application for a client",
      "Implemented role-based authentication (admin/agent/customer) with secure login",
      "Built responsive UI with React and integrated PostgreSQL database for ticket management",
      "Delivered project on time meeting all client requirements and specifications",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
  },
];
