import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experience } from '../../data/experience'

gsap.registerPlugin(ScrollTrigger)

export function Experience() {
  const railRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!railRef.current || !progressRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: railRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 0.3,
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" className="px-8 py-32 md:px-16">
      <div className="mb-16">
        <div className="mb-4 text-[0.65rem] uppercase tracking-[0.2em] text-primary">// Work history</div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-tight">Experience</h2>
      </div>

      <div ref={railRef} className="relative pl-6 md:pl-[180px]">
        <div className="absolute left-0 top-0 hidden h-full w-px bg-ink/10 md:left-[174px] md:block" />
        <div
          ref={progressRef}
          className="absolute left-0 top-0 hidden h-full w-px origin-top bg-primary md:left-[174px] md:block"
        />

        {experience.map((entry) => (
          <article key={entry.id} className="border-b border-ink/10 py-10 md:grid md:grid-cols-[180px_1fr] md:gap-12">
            <div className="mb-2 text-xs text-muted md:pr-8 md:text-right">
              <strong className="mb-1 block font-display text-sm font-bold text-ink">{entry.company}</strong>
              {entry.period}
              <br />
              {entry.location}
            </div>
            <div>
              <div className="mb-1 font-display text-xl font-bold">{entry.role}</div>
              <div className="mb-4 text-xs tracking-wider text-primary">
                {entry.company.toUpperCase()} · {entry.tenure}
              </div>
              <ul className="mb-4 flex flex-col gap-2">
                {entry.bullets.map((bullet, i) => (
                  <li key={i} className="relative pl-5 text-[0.8rem] leading-relaxed text-muted">
                    <span className="absolute left-0 text-primary">→</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {entry.tags.map((tag) => (
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
        ))}
      </div>
    </section>
  )
}
