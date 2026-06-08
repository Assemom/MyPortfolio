export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
  suffix?: string
}

export interface Experience {
  year: string
  title: string
  company: string
  description: string
  tags?: string[]
}

export interface Education {
  year: string
  degree: string
  school: string
  description: string
  tags?: string[]
}

export interface Project {
  title: string
  description: string
  tags: string[]
  featured?: boolean
  category: string
  gradient: string
  githubUrl?: string
  liveUrl?: string
}

export interface SkillGroup {
  category: string
  skills: string[]
  color: string
}

export interface SocialLink {
  label: string
  url: string
  icon: string
}

export interface ContactInfo {
  email: string
  phone: string
  linkedin: string
  github: string
}

export interface PersonalInfo {
  name: string
  firstName: string
  lastName: string
  titles: string[]
  bio: string
  photoUrl: string
  cvUrl: string
}

export interface PortfolioData {
  personal: PersonalInfo
  navLinks: NavLink[]
  stats: Stat[]
  experience: Experience[]
  education: Education[]
  projects: Project[]
  skills: SkillGroup[]
  socials: SocialLink[]
  contact: ContactInfo
}
