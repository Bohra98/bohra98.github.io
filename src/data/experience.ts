import type { ExperienceEntry } from './types'

export const experience: ExperienceEntry[] = [
  {
    id: 'coforge',
    company: 'Coforge',
    role: 'Senior Software Engineer',
    period: 'Sep 2023 – Present',
    location: 'Bengaluru, India',
    tenure: '2+ years',
    bullets: [
      'Enabled 5 engineering teams to deploy independently, cutting deployment bottlenecks by 40%, by architecting a Webpack Module Federation micro-frontend platform.',
      'Cut GraphQL API latency by 30% by eliminating N+1 queries, optimizing PostgreSQL indexing, and introducing efficient query batching.',
      'Improved release quality by 35% and shortened regression cycles by 2 days by building automated CI/CD pipelines with Jest, Cypress, and GitHub Actions.',
      'Delivered scalable GraphQL APIs — audit trails, real-time notifications, business-critical automation — for enterprise CRM workflows, optimizing high-traffic backend services through parallel execution, async processing, and database tuning.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Hasura', 'PostgreSQL', 'GitHub Actions', 'Jest', 'Cypress', 'Docker'],
  },
  {
    id: 'tridhya',
    company: 'Tridhya Tech',
    role: 'Software Engineer (MERN)',
    period: 'Apr 2021 – Sep 2023',
    location: 'Ahmedabad, India',
    tenure: '2.5 years',
    bullets: [
      'Built enterprise insurance platform features using React, Node.js, MongoDB, and TypeScript, supporting large-scale business workflows.',
      'Enabled independent team deployments and improved engineering productivity by introducing Micro-Frontend architecture with Webpack Module Federation.',
      'Closed 35% of security vulnerabilities identified in internal audits by building a JWT/OAuth 2.0-based RBAC authentication system.',
      'Cut deployment failures by 45% by automating CI/CD pipelines with GitHub Actions and Jenkins.',
      'Improved deployment velocity and system scalability by leading the migration from a monolithic application to Kubernetes-orchestrated Node.js microservices on AWS.',
    ],
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Webpack', 'Kubernetes', 'AWS', 'GitHub Actions', 'Jenkins', 'JWT', 'OAuth 2.0'],
  },
  {
    id: 'epistic',
    company: 'Epistic Technologies',
    role: 'Software Engineer — WebRTC & Frontend',
    period: 'Feb 2020 – Feb 2021',
    location: 'Ahmedabad, India',
    tenure: '1 year',
    bullets: [
      'Supported 10,000+ concurrent users at 98% uptime by building a real-time WebRTC communication platform.',
      'Delivered the complete real-time communication architecture — React frontend, Node.js signaling server, peer-to-peer layer — powering the platform end to end.',
      'Improved MongoDB query performance by 40% through schema redesign, indexing, and query optimization.',
      'Achieved sub-2-second load times across modern browsers by building responsive, performance-tuned React applications.',
    ],
    tags: ['React', 'Node.js', 'WebRTC', 'Socket.IO', 'MongoDB', 'JavaScript'],
  },
]
