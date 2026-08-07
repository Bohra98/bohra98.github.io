import { useEffect, useState } from 'react'
import { contact } from '../../data/site'
import { encodeEmail, decodeEmail } from '../../lib/obfuscate'
import { MagneticButton } from '../ui/MagneticButton'

const encodedEmail = encodeEmail(contact.email)

export function Contact() {
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    setEmail(decodeEmail(encodedEmail))
  }, [])

  return (
    <section id="contact" className="relative overflow-hidden px-8 py-32 text-center md:px-16">
      <div className="mb-4 text-[0.65rem] uppercase tracking-[0.2em] text-primary">// Let's connect</div>
      <h2
        className="mb-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-none tracking-tight"
        style={{ textWrap: 'balance' } as React.CSSProperties}
      >
        {contact.tagline}
      </h2>
      <p className="mx-auto mb-12 max-w-md text-sm text-muted">{contact.sub}</p>

      <div className="flex flex-wrap justify-center gap-4">
        <MagneticButton
          href={email ? `mailto:${email}` : undefined}
          className="flex items-center gap-2 rounded-md border border-ink/10 bg-surface px-6 py-3.5 text-sm text-ink transition-colors hover:border-primary hover:text-primary"
        >
          ✉ {email ?? 'Loading…'}
        </MagneticButton>
        <MagneticButton
          href={contact.phoneHref}
          className="flex items-center gap-2 rounded-md border border-ink/10 bg-surface px-6 py-3.5 text-sm text-ink transition-colors hover:border-primary hover:text-primary"
        >
          📞 {contact.phone}
        </MagneticButton>
        <MagneticButton
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-md border border-ink/10 bg-surface px-6 py-3.5 text-sm text-ink transition-colors hover:border-primary hover:text-primary"
        >
          in LinkedIn
        </MagneticButton>
        <MagneticButton
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-md border border-ink/10 bg-surface px-6 py-3.5 text-sm text-ink transition-colors hover:border-primary hover:text-primary"
        >
          GitHub
        </MagneticButton>
      </div>
    </section>
  )
}
