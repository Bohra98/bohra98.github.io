import type { SkillCategory } from './types'

export const skills: SkillCategory[] = [
  { category: 'Languages', tags: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'Bash'] },
  {
    category: 'Frontend',
    tags: ['React', 'Next.js', 'Redux', 'HTML', 'CSS', 'Webpack Module Federation', 'Vite'],
  },
  { category: 'Backend & APIs', tags: ['Node.js', 'Express', 'FastAPI', 'REST', 'GraphQL', 'WebSockets'] },
  {
    category: 'AI/ML Integration',
    tags: [
      'OpenAI API',
      'Gemini',
      'RAG',
      'Vector Databases',
      'Prompt Engineering',
      'Structured Outputs',
      'Embeddings',
      'Vision Models',
      'Text-to-Speech',
    ],
  },
  { category: 'Databases', tags: ['MongoDB', 'PostgreSQL', 'pgvector'] },
  {
    category: 'Cloud & DevOps',
    tags: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud (GKE)', 'GitHub Actions', 'Jenkins', 'CI/CD'],
  },
  { category: 'Tools', tags: ['Git', 'Linux', 'Postman', 'Jest', 'Cypress', 'Pytest'] },
]
