import { useState } from 'react'
import { projects } from '../../data/projects'
import { ProjectCard } from '../projects/ProjectCard'
import { ProjectDrawer } from '../projects/ProjectDrawer'

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null)
  const openProject = projects.find((p) => p.id === openId) ?? null

  return (
    <section id="projects" className="border-y border-ink/10 bg-surface px-8 py-32 md:px-16">
      <div className="mb-4 text-[0.65rem] uppercase tracking-[0.2em] text-primary">// What I've built</div>
      <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-tight">
        Featured Projects
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} onOpen={setOpenId} />
        ))}
      </div>

      <ProjectDrawer project={openProject} onClose={() => setOpenId(null)} />
    </section>
  )
}
