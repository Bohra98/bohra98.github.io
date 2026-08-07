import { internship } from '../../data/internship'

export function Internship() {
  return (
    <section id="internship" className="px-8 py-24 md:px-16">
      <div className="mb-4 text-[0.65rem] uppercase tracking-[0.2em] text-primary">// Before that</div>
      <h2 className="mb-12 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-tight">
        Internship
      </h2>

      <article className="rounded-xl border border-ink/10 bg-surface p-8 md:grid md:grid-cols-[180px_1fr] md:gap-12">
        <div className="mb-4 text-xs text-muted md:mb-0 md:pr-8 md:text-right">
          <strong className="mb-1 block font-display text-sm font-bold text-ink">{internship.company}</strong>
          {internship.period}
          <br />
          {internship.location}
        </div>
        <div>
          <div className="mb-1 font-display text-lg font-bold">{internship.role}</div>
          <div className="mb-4 text-xs tracking-wider text-primary">
            {internship.company.toUpperCase()} · {internship.tenure}
          </div>
          <ul className="mb-4 flex flex-col gap-2">
            {internship.bullets.map((bullet, i) => (
              <li key={i} className="relative pl-5 text-[0.8rem] leading-relaxed text-muted">
                <span className="absolute left-0 text-primary">→</span>
                {bullet}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">
            {internship.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-primary/15 bg-primary/10 px-2.5 py-1 text-[0.6rem] uppercase tracking-wider text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}
