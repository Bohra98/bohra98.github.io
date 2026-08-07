import { education } from '../../data/education'
import { SpotlightCard } from '../ui/SpotlightCard'

export function Education() {
  return (
    <section id="education" className="scroll-mt-56 px-8 py-32 md:min-h-screen md:px-16">
      <div className="mb-4 text-[0.65rem] uppercase tracking-[0.2em] text-primary">// Education</div>
      <h2 className="mb-16 font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-tight">
        Academic Background
      </h2>

      <SpotlightCard className="max-w-xl">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-lg">
          🎓
        </div>
        <div className="mb-1 font-display text-base font-bold leading-snug">{education.degree}</div>
        <div className="mb-1 text-[0.8rem] text-muted">{education.institution}</div>
        <div className="text-[0.7rem] uppercase tracking-wider text-primary">{education.period}</div>
      </SpotlightCard>
    </section>
  )
}
