export interface ExperienceEntry {
  id: string
  company: string
  role: string
  period: string
  location: string
  tenure: string
  bullets: string[]
  tags: string[]
}

export interface SkillCategory {
  category: string
  tags: string[]
}

export interface Achievement {
  icon: string
  title: string
  description: string
}

export interface Certification {
  icon: string
  name: string
  issuer: string
}

export interface ProjectMetric {
  label: string
  value: string
}

export interface ProjectEntry {
  id: string
  name: string
  company: string
  period: string
  emoji: string
  featured: boolean
  description: string
  highlights: string[]
  tech: string[]
  challenge: string
  decision: string
  result: string
  metrics: ProjectMetric[]
  architecture: string[]
}

export interface EducationEntry {
  degree: string
  institution: string
  period: string
}
