import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { ProjectEntry } from '../../data/types'
import { ArchitectureDiagram } from '../ui/ArchitectureDiagram'
import { StatTile } from '../ui/StatTile'

interface ProjectDrawerProps {
  project: ProjectEntry | null
  onClose: () => void
}

export function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  useEffect(() => {
    if (!project) return
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={project.name}
          className="fixed inset-0 z-[200] overflow-y-auto bg-bg/95 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            layoutId={`project-card-${project.id}`}
            className="mx-auto max-w-4xl px-8 py-24"
          >
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="mb-8 text-xs uppercase tracking-widest text-muted hover:text-primary"
            >
              ← Close
            </button>

            <div className="mb-2 text-4xl">{project.emoji}</div>
            <h2 className="mb-2 font-display text-4xl font-extrabold tracking-tight">{project.name}</h2>
            <div className="mb-8 text-xs uppercase tracking-widest text-primary">
              {project.company} · {project.period}
            </div>

            <p className="mb-10 max-w-2xl text-sm leading-loose text-muted">{project.description}</p>

            {project.metrics.length > 0 && (
              <div className="mb-10 grid grid-cols-3 gap-4">
                {project.metrics.map((metric) => (
                  <StatTile key={metric.label} label={metric.label} value={metric.value} />
                ))}
              </div>
            )}

            <div className="mb-10 grid gap-6 md:grid-cols-3">
              <div>
                <div className="mb-2 text-[0.6rem] uppercase tracking-widest text-primary">Challenge</div>
                <p className="text-[0.8rem] leading-relaxed text-muted">{project.challenge}</p>
              </div>
              <div>
                <div className="mb-2 text-[0.6rem] uppercase tracking-widest text-primary">Decision</div>
                <p className="text-[0.8rem] leading-relaxed text-muted">{project.decision}</p>
              </div>
              <div>
                <div className="mb-2 text-[0.6rem] uppercase tracking-widest text-primary">Result</div>
                <p className="text-[0.8rem] leading-relaxed text-muted">{project.result}</p>
              </div>
            </div>

            <div className="mb-10">
              <div className="mb-3 text-[0.6rem] uppercase tracking-widest text-primary">Architecture</div>
              <ArchitectureDiagram nodes={project.architecture} />
            </div>

            <div className="mb-4 text-[0.6rem] uppercase tracking-widest text-primary">Highlights</div>
            <ul className="mb-10 flex flex-col gap-2">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="relative pl-5 text-[0.8rem] leading-relaxed text-muted">
                  <span className="absolute left-0 text-primary">▸</span>
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-primary/15 bg-primary/5 px-2.5 py-1 text-[0.65rem] text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
