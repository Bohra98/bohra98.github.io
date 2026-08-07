import { hero } from '../../data/site'
import { MagneticButton } from '../ui/MagneticButton'
import { StatTile } from '../ui/StatTile'

const delays = [0, 0.1, 0.2, 0.3, 0.4, 0.5]

export function HeroContent() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
      <div
        className="reveal mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[0.7rem] uppercase tracking-widest text-primary"
        style={{ animationDelay: `${delays[0]}s` }}
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
        {hero.tag}
      </div>

      <h1
        className="reveal mb-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-ink"
        style={{ animationDelay: `${delays[1]}s`, textWrap: 'balance' } as React.CSSProperties}
      >
        {hero.headline}
      </h1>

      <p
        className="reveal mx-auto mb-10 max-w-xl text-sm leading-loose text-muted"
        style={{ animationDelay: `${delays[2]}s` }}
      >
        {hero.subtitle}
      </p>

      <div className="reveal mb-10 flex justify-center" style={{ animationDelay: `${delays[3]}s` }}>
        <MagneticButton
          href="#about"
          className="flex items-center gap-3 rounded-full border border-ink/10 bg-surface py-1.5 pl-1.5 pr-5 text-sm text-ink shadow-sm transition-colors hover:border-primary/40"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-onPrimary">
            YB
          </span>
          About — {hero.firstName} {hero.lastName}
        </MagneticButton>
      </div>

      <div
        className="reveal mb-10 flex flex-wrap justify-center gap-3 sm:gap-6"
        style={{ animationDelay: `${delays[4]}s` }}
      >
        {hero.stats.map((stat) => (
          <StatTile key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>

      <div className="reveal flex justify-center gap-4" style={{ animationDelay: `${delays[5]}s` }}>
        <MagneticButton
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-medium uppercase tracking-wider text-onPrimary transition-colors hover:bg-ink hover:text-bg"
        >
          Get in touch
        </MagneticButton>
        <MagneticButton
          href="#experience"
          className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-7 py-3.5 text-xs uppercase tracking-wider text-ink transition-colors hover:border-primary/50 hover:text-primary"
        >
          View work
        </MagneticButton>
      </div>
    </div>
  )
}
