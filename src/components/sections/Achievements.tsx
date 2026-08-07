import { achievements } from '../../data/achievements'
import { SpotlightCard } from '../ui/SpotlightCard'

export function Achievements() {
  return (
    <section id="achievements" className="border-y border-ink/10 bg-surface px-8 py-32 md:px-16">
      <div className="mb-4 text-[0.65rem] uppercase tracking-[0.2em] text-primary">// Recognition</div>
      <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-tight">
        Awards &amp; Impact
      </h2>
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {achievements.map((achievement) => (
          <SpotlightCard key={achievement.title} className="bg-bg">
            <div className="mb-4 text-3xl">{achievement.icon}</div>
            <div className="mb-2 font-display text-base font-bold">{achievement.title}</div>
            <p className="text-[0.72rem] leading-relaxed text-muted">{achievement.description}</p>
          </SpotlightCard>
        ))}
      </div>
    </section>
  )
}
