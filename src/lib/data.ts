import type { PortfolioData } from "@/types"

export const portfolioData: PortfolioData = {
  personal: {
    name: "Assem Omar",
    firstName: "Assem",
    lastName: "Omar",
    titles: [
      ".NET Backend Engineer",
      "Angular Frontend Dev",
      "AI Integration Builder",
      "Clean Architecture Fanatic",
    ],
    bio: "I build production APIs and SPAs that ship to real clients. 7 projects deep, 2 freelance deployments live. I like clean architecture, fast feedback loops, and hard problems.",
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
    { value: "3", label: "Years Coding", suffix: "+" },
    { value: "5", label: "Freelance Clients", suffix: "+" },
    { value: "Many", label: "Projects Shipped" },
    { value: "Top 5", label: "In My College Degree" },
  ],

  experience: [
    {
      year: "2026",
      title: "Freelance Full-Stack Engineer",
      company: "Arab River Medical",
      description:
        "Built 15+ JWT-authenticated API endpoints, Hangfire job scheduling, Geo-IP location services, and MailKit email integration for a medical logistics platform.",
      tags: [".NET", "Hangfire", "JWT", "Geo-IP", "MailKit"],
    },
    {
      year: "2026",
      title: "Freelance Backend Engineer",
      company: "TranslateXable",
      description:
        "Designed and implemented a credit-based payment system with Paymob integration, Docker containerization, and comprehensive API documentation.",
      tags: [".NET", "Paymob", "Docker", "Swagger"],
    },
    {
      year: "2024",
      title: "MERN Intern",
      company: "DEPI",
      description:
        "Developed full-stack applications with React, Node.js, Express, and MongoDB. Integrated Gemini AI API for intelligent features.",
      tags: ["React", "Node.js", "MongoDB", "Gemini API"],
    },
    {
      year: "2023",
      title: "RPA Engineer Intern",
      company: "Raya IT",
      description:
        "Automated business processes using UiPath Orchestrator, achieving 40% time reduction in document processing workflows.",
      tags: ["UiPath", "RPA", "Automation"],
    },
  ],

  education: [
    {
      year: "2025",
      degree: "Full-Stack .NET Diploma",
      school: "ITI (Information Technology Institute)",
      description:
        "Intensive program covering Clean Architecture, CQRS pattern, and Enterprise CRM development with modern .NET stack.",
      tags: [".NET", "Clean Architecture", "CQRS", "CRM"],
    },
    {
      year: "2021",
      degree: "B.Sc. Computer Science & AI",
      school: "Benha University",
      description:
        "Graduated with GPA 3.5/4.0 — ranked 5th in department. Strong foundation in algorithms, data structures, and artificial intelligence.",
      tags: ["CS", "AI", "Algorithms"],
    },
  ],

  projects: [
    {
      title: "Arab River Medical API",
      description:
        "Production freelance API for medical logistics — JWT auth, Hangfire scheduling, Geo-IP tracking, and MailKit email delivery.",
      tags: [".NET 10", "Hangfire", "JWT", "Geo-IP"],
      featured: false,
      category: "Backend",
      gradient: "from-emerald-500/20 to-cyan-600/20",
      liveUrl: "https://github.com/Assemom",
    },
    {
      title: "TranslateXable Backend",
      description:
        "Freelance payment-integrated backend with credit system, Paymob gateway, and Docker deployment with Swagger docs.",
      tags: [".NET", "Paymob", "Docker", "Swagger"],
      featured: false,
      category: "Backend",
      gradient: "from-violet-500/20 to-pink-600/20",
      liveUrl: "https://github.com/Assemom",
    },
    {
      title: "TravelNest Agency System",
      description:
        "Graduation project — full-stack travel agency management system with AI-powered recommendations. Led a team of 4 developers.",
      tags: ["ASP.NET Core", "Angular", "Docker", "AI"],
      featured: false,
      category: "Full-Stack",
      gradient: "from-cyan-500/20 to-violet-600/20",
      githubUrl: "https://github.com/Assemom",
    },
    {
      title: "School Management API",
      description:
        "Clean Architecture + CQRS + MediatR implementation for a school management system with JWT-based authentication.",
      tags: ["Clean Architecture", "CQRS", "MediatR", "JWT"],
      featured: false,
      category: "Backend",
      gradient: "from-orange-500/20 to-red-600/20",
      githubUrl: "https://github.com/Assemom",
    },
    {
      title: "RAG System — Document Q&A",
      description:
        "Retrieval-Augmented Generation system for document question-answering using vector search and LLM integration.",
      tags: ["Node.js", "OpenAI", "ChromaDB", "Vector Search"],
      featured: false,
      category: "AI / ML",
      gradient: "from-blue-500/20 to-cyan-600/20",
      githubUrl: "https://github.com/Assemom",
    },
    {
      title: "AI Chatbot",
      description:
        "Multi-modal AI assistant with GPT-4o, DALL-E image generation, and text-to-speech capabilities — built with vanilla JS.",
      tags: ["Vanilla JS", "GPT-4o", "DALL-E", "TTS"],
      featured: false,
      category: "AI / ML",
      gradient: "from-pink-500/20 to-rose-600/20",
      githubUrl: "https://github.com/Assemom",
    },
  ],

  skills: [
    {
      category: "Backend",
      skills: ["C#", "ASP.NET Core", "Node.js", "Express", "Spring Boot"],
      color: "#00F5D4",
    },
    {
      category: "Frontend",
      skills: ["Angular", "React", "TypeScript", "Tailwind", "Redux"],
      color: "#7B61FF",
    },
    {
      category: "Databases",
      skills: ["SQL Server", "PostgreSQL", "MongoDB", "EF Core", "LINQ"],
      color: "#FF4D6D",
    },
    {
      category: "Architecture",
      skills: ["Clean Arch", "CQRS", "SOLID", "REST", "Microservices"],
      color: "#FFB347",
    },
    {
      category: "AI / ML",
      skills: ["RAG", "OpenAI API", "Gemini", "ChromaDB", "Vector Search"],
      color: "#00D4AA",
    },
    {
      category: "DevOps",
      skills: ["Docker", "Git", "CI/CD", "Linux", "Swagger"],
      color: "#5B9BD5",
    },
  ],

  socials: [
    { label: "GitHub", url: "https://github.com/Assemom", icon: "SiGithub" },
    { label: "LinkedIn", url: "https://linkedin.com/in/assem-omar1", icon: "SiLinkedin" },
  ],

  contact: {
    email: "assemomar202@gmail.com",
    phone: "+20 109 691 7704",
    linkedin: "https://linkedin.com/in/assem-omar1",
    github: "https://github.com/Assemom",
  },
}
