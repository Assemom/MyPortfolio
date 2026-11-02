import type { PortfolioData } from "@/types"

export const portfolioData: PortfolioData = {
  personal: {
    name: "Assem Omar",
    firstName: "Assem",
    lastName: "Omar",
    titles: [
      "Full-Stack .NET Engineer",
      "Angular Frontend Dev",
      "AI Integration Builder",
      "Clean Architecture Fanatic",
    ],
    bio: "Full-Stack Software Engineer shipping real client work from conception to production — 2 live freelance deployments, 8+ projects built. Clean Architecture, SOLID, and honest engineering. B.Sc. CS (GPA 3.5, top 5) and ITI 9-month Full-Stack .NET graduate.",
    photoUrl: "/images/profile.jpg",
    cvUrl: "/AssemOmarCv.pdf",
  },

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  stats: [
    { value: "2", label: "Live Client Deployments" },
    { value: "8", label: "Projects Built", suffix: "+" },
    { value: "30", label: "REST APIs Designed", suffix: "+" },
    { value: "Top 5", label: "Ranked in My CS Department" },
  ],

  experience: [
    {
      year: "Jun 2026 — Present",
      title: "Full-Stack Software Engineer",
      company: "Excellent Protection Company",
      description:
        "Full-time role — designing a full-stack HR management application (Angular + ASP.NET Core Web API on SQL Server/EF Core) that automates overtime, break-time, and attendance tracking, translating HR requirements into shipped features with business stakeholders.",
      tags: ["Angular", "ASP.NET Core", "EF Core", "SQL Server"],
    },
    {
      year: "2026",
      title: "Freelance API Developer",
      company: "Arab River Medical · armegypt.com",
      description:
        "Shipped a production 3-tier ASP.NET Core (.NET 10) Web API — 15+ endpoints across catalogs, leads, and partner portals; Hangfire background jobs, Geo-IP analytics, MailKit email, rate limiting, FluentValidation, Swagger docs, Docker.",
      tags: [".NET 10", "Hangfire", "JWT", "Geo-IP", "Docker"],
    },
    {
      year: "2026",
      title: "Freelance Backend Developer",
      company: "TranslateXable · translexable.io",
      description:
        "Delivered a live paying client's backend — credit-based translation system with Paymob payments, JWT + role-based access, admin & blog modules, Swagger documentation, Dockerized for cloud handoff through iterative client feedback.",
      tags: [".NET", "Paymob", "JWT", "RBAC", "Docker"],
    },
    {
      year: "Jun 2024 — Dec 2024",
      title: "MERN Stack Intern",
      company: "DEPI",
      description:
        "Built full-stack applications with React, Node.js, Express, and MongoDB — dashboards, task-management tools, e-commerce features, and a Gemini AI chatbot.",
      tags: ["React", "Node.js", "MongoDB", "Gemini API"],
    },
    {
      year: "Jul 2023 — Sep 2023",
      title: "RPA Automation Engineer Intern",
      company: "Raya Information Technology",
      description:
        "Designed UiPath Orchestrator workflows for data extraction, validation, and report automation — cutting manual processing time by an estimated 40%.",
      tags: ["UiPath", "RPA", "Automation"],
    },
  ],

  education: [
    {
      year: "Oct 2025 — Jun 2026",
      degree: "Full-Stack .NET Professional Program",
      school: "ITI · Information Technology Institute",
      description:
        "9-month professional track (BI-Infused CRM) — ASP.NET Core, SQL Server, enterprise architecture, and production engineering. Team project: NileChain, an AI-powered agri-supply-chain marketplace, shipped live.",
      tags: [".NET", "Clean Architecture", "CQRS", "CRM"],
    },
    {
      year: "Oct 2021 — Jun 2025",
      degree: "B.Sc. Computer Science & AI",
      school: "Benha University · Faculty of CS & AI",
      description:
        "GPA 3.5/4.0 (Very Good) — ranked 5th in the Information Systems department. Graduation project: TravelNest — led the backend, designing 30+ REST APIs with AI-powered recommendations.",
      tags: ["GPA 3.5/4.0", "Top 5", "CS", "AI"],
    },
  ],

  projects: [
    {
      title: "NileChain — AI-Powered Marketplace",
      description:
        "ITI team project connecting Egyptian farms and factories through AI crop matching, digital contracts, and escrow milestone payments. Clean Architecture, JWT auth, and role-based dashboards shipped end-to-end across backend and Angular frontend.",
      tags: ["ASP.NET Core 10", "Angular 21", "EF Core", "SQL Server", "Docker"],
      featured: true,
      category: "Full-Stack",
      gradient: "from-cyan-500/20 to-violet-600/20",
      liveUrl: "https://nilechain-frontend.vercel.app/landing",
      githubUrl: "https://github.com/NileChain",
    },
    {
      title: "Arab River Medical API",
      description:
        "Production freelance API for a medical logistics platform — JWT auth, Hangfire scheduling, Geo-IP tracking, MailKit email, and rate limiting, containerized and deployed live.",
      tags: [".NET 10", "Hangfire", "JWT", "Geo-IP"],
      featured: true,
      category: "Backend",
      gradient: "from-emerald-500/20 to-cyan-600/20",
      liveUrl: "https://armegypt.com",
    },
    {
      title: "TranslateXable Backend",
      description:
        "Live paying client — a credit-based translation platform backend with Paymob gateway, JWT + RBAC, admin and blog modules, full Swagger docs, and Docker deployment.",
      tags: [".NET", "Paymob", "Docker", "Swagger"],
      featured: false,
      category: "Backend",
      gradient: "from-violet-500/20 to-pink-600/20",
      liveUrl: "https://www.translexable.io/en",
    },
    {
      title: "Sport Club Management System",
      description:
        "Multi-role (Admin/Coach/Member) club platform — subscriptions, pitch bookings, and coach management on a normalized SQL Server schema with EF Core, Generic Repository, Unit of Work, and Angular route guards.",
      tags: ["ASP.NET Core", "Angular", "EF Core", "SQL Server", "JWT"],
      featured: false,
      category: "Full-Stack",
      gradient: "from-blue-500/20 to-violet-600/20",
      githubUrl: "https://github.com/Assemom/Full-Stack-Project",
    },
    {
      title: "School Management API",
      description:
        "REST API with 30+ endpoints on a 6-layer Clean Architecture and CQRS (MediatR) — JWT + RBAC, multi-language localization, and an xUnit-tested service layer.",
      tags: ["Clean Architecture", "CQRS", "MediatR", "JWT", "xUnit"],
      featured: false,
      category: "Backend",
      gradient: "from-orange-500/20 to-red-600/20",
      githubUrl: "https://github.com/Assemom/School-Project-Clean-Architecture",
    },
    {
      title: "AdvancedChat — Real-Time Messaging",
      description:
        "Real-time platform with public, private, and group chat on persistent SQL Server history — SignalR presence, ASP.NET Identity auth, and role-based group access.",
      tags: ["SignalR", "ASP.NET MVC", "Identity", "SQL Server"],
      featured: false,
      category: "Full-Stack",
      gradient: "from-cyan-500/20 to-blue-600/20",
      githubUrl: "https://github.com/Assemom/AdvancedChatApp",
    },
    {
      title: "RAG System — Document Q&A",
      description:
        "Full retrieval-augmented generation pipeline — ingestion, chunking, OpenAI embeddings, and vector search over 100+ chunks — exposed through a REST /ask endpoint with context-restricted answers.",
      tags: ["Python", "OpenAI", "ChromaDB", "Vector Search"],
      featured: false,
      category: "AI / ML",
      gradient: "from-pink-500/20 to-rose-600/20",
      githubUrl: "https://github.com/Assemom/Rag-System",
    },
    {
      title: "TravelNest Agency System",
      description:
        "Graduation project — led the backend for a 6-person travel agency platform: 30+ REST APIs for authentication, bookings, and trip management with AI-powered recommendations.",
      tags: ["ASP.NET Core", "Angular", "Docker", "AI"],
      featured: false,
      category: "Full-Stack",
      gradient: "from-yellow-500/20 to-cyan-600/20",
      githubUrl: "https://github.com/Assemom/TravelNest-GraduationProject",
    },
  ],

  skills: [
    {
      category: "Backend",
      skills: ["C#", "ASP.NET Core", "EF Core", "SignalR", "Node.js", "Express", "Spring Boot"],
      color: "#00F5D4",
    },
    {
      category: "Frontend",
      skills: ["Angular", "React", "TypeScript", "Tailwind", "Redux", "Chart.js"],
      color: "#7B61FF",
    },
    {
      category: "Databases",
      skills: ["SQL Server", "PostgreSQL", "MongoDB", "EF Core", "LINQ"],
      color: "#FF4D6D",
    },
    {
      category: "Architecture",
      skills: ["Clean Arch", "CQRS", "SOLID", "Design Patterns", "REST", "Microservices"],
      color: "#FFB347",
    },
    {
      category: "AI / ML",
      skills: ["RAG", "OpenAI API", "Gemini API", "ChromaDB", "Vector Search"],
      color: "#00D4AA",
    },
    {
      category: "DevOps",
      skills: ["Docker", "Git", "CI/CD", "Azure", "Swagger", "xUnit"],
      color: "#5B9BD5",
    },
  ],

  socials: [
    { label: "GitHub", url: "https://github.com/Assemom", icon: "SiGithub" },
    { label: "LinkedIn", url: "https://linkedin.com/in/assem-omar1", icon: "SiLinkedin" },
    { label: "LeetCode", url: "https://leetcode.com/u/assemomar202/", icon: "SiLeetcode" },
  ],

  contact: {
    email: "assemomar202@gmail.com",
    phone: "+20 109 691 7704",
    linkedin: "https://linkedin.com/in/assem-omar1",
    github: "https://github.com/Assemom",
  },
}
