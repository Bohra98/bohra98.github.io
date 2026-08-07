import { certs } from '../../data/certs'
import { SpotlightCard } from '../ui/SpotlightCard'

export function Certs() {
  return (
    <section id="certs" className="px-8 py-32 md:px-16">
      <div className="mb-4 text-[0.65rem] uppercase tracking-[0.2em] text-primary">// Credentials</div>
      <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-tight">
        Certifications
      </h2>
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {certs.map((cert) => (
          <SpotlightCard key={cert.name}>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-accent/20 bg-accent/10 text-lg">
              {cert.icon}
            </div>
            <div className="mb-1 font-display text-sm font-bold leading-snug">{cert.name}</div>
            <div className="text-[0.7rem] text-muted">{cert.issuer}</div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  )
}
