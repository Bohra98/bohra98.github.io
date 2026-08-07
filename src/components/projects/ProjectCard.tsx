import { motion } from 'framer-motion'
import type { ProjectEntry } from '../../data/types'
import { cn } from '../../lib/cn'

interface ProjectCardProps {
  project: ProjectEntry
  index: number
  onOpen: (id: string) => void
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  return (
    <motion.button
      layoutId={`project-card-${project.id}`}
      onClick={() => onOpen(project.id)}
      style={{ animationDelay: `${index * 0.08}s` }}
      className={cn(
        'reveal group relative flex flex-col gap-4 rounded-xl border border-ink/10 bg-bg p-8 text-left transition-colors hover:border-primary/25',
        project.featured && 'md:col-span-2',
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="text-3xl">{project.emoji}</div>
        <span className="whitespace-nowrap rounded-sm border border-ink/10 bg-surface px-2.5 py-1 text-[0.6rem] uppercase tracking-wider text-muted">
          {project.company}
        </span>
      </div>
      <div>
        <div className="font-display text-lg font-extrabold tracking-tight">{project.name}</div>
        <div className="mt-1 text-[0.65rem] tracking-wider text-primary">{project.period}</div>
      </div>
      <p className="flex-1 text-[0.75rem] leading-loose text-muted">{project.description}</p>
      <div className="mt-auto flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-primary/15 bg-primary/5 px-2.5 py-1 text-[0.6rem] text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.button>
  )
}
