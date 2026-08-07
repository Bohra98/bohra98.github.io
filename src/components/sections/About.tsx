import { about, contact } from '../../data/site'
import { skills } from '../../data/skills'
import { SpotlightCard } from '../ui/SpotlightCard'

const aboutLinks = [
  { icon: '✉', label: contact.email, href: `mailto:${contact.email}` },
  { icon: '📞', label: contact.phone, href: contact.phoneHref },
  { icon: 'in', label: contact.linkedinLabel, href: contact.linkedin },
  { icon: 'gh', label: contact.githubLabel, href: contact.github },
  { icon: '🌐', label: 'bohra98.github.io', href: contact.site },
]

export function About() {
  return (
    <section id="about" className="grid grid-cols-1 gap-16 px-8 py-32 md:grid-cols-2 md:px-16">
      <div>
        <div className="mb-4 text-[0.65rem] uppercase tracking-[0.2em] text-primary">// About me</div>
        <h2 className="reveal mb-6 font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight">
          {about.heading}
        </h2>
        {about.paragraphs.map((paragraph, i) => (
          <p
            key={i}
            className="reveal mb-6 text-sm leading-loose text-muted"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {paragraph}
          </p>
        ))}
        <div className="flex flex-col gap-3">
          {aboutLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-primary"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded border border-ink/10 bg-surface text-sm">
                {link.icon}
              </span>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {skills.map((category) => (
          <SpotlightCard key={category.category}>
            <div className="mb-3 text-[0.6rem] uppercase tracking-[0.15em] text-primary">
              {category.category}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {category.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-ink/10 bg-bg px-2 py-1 text-[0.65rem] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  )
}
