import { useState } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useClock } from '../../hooks/useClock'
import { cn } from '../../lib/cn'
import { ThemeToggle } from '../ui/ThemeToggle'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'internship', label: 'Internship' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Impact' },
  { id: 'certs', label: 'Certs' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const linkIds = links.map((l) => l.id)

export function Nav() {
  const active = useActiveSection(linkIds)
  const [open, setOpen] = useState(false)
  const time = useClock('Asia/Kolkata')

  return (
    <>
      <div className="fixed left-6 top-6 z-[100] hidden text-xs text-muted lg:block">
        Asia/Kolkata
      </div>
      <div className="fixed right-6 top-6 z-[100] hidden font-display text-xs tabular-nums text-muted lg:block">
        {time}
      </div>

      <nav className="fixed inset-x-0 top-4 z-[100] flex justify-center px-4">
        <div className="flex items-center gap-1 rounded-full border border-ink/10 bg-surface/90 px-2 py-2 shadow-lg shadow-ink/5 backdrop-blur-xl">
          <a
            href="#hero"
            className="flex h-8 w-8 items-center justify-center rounded-full font-display text-sm font-bold text-primary hover:bg-ink/5"
          >
            YB
          </a>

          <ul className="hidden items-center gap-0.5 md:flex">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={cn(
                    'block rounded-full px-4 py-1.5 text-xs font-medium transition-colors',
                    active === link.id
                      ? 'bg-ink text-bg'
                      : 'text-muted hover:bg-ink/5 hover:text-ink',
                  )}
                  aria-current={active === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden h-5 w-px bg-ink/10 md:block" />
          <ThemeToggle />

          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1 rounded-full hover:bg-ink/5 md:hidden"
          >
            <span
              className={cn(
                'h-px w-4 bg-ink transition-transform',
                open && 'translate-y-[3px] rotate-45',
              )}
            />
            <span
              className={cn(
                'h-px w-4 bg-ink transition-transform',
                open && '-translate-y-[3px] -rotate-45',
              )}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-x-4 top-20 z-[99] rounded-2xl border border-ink/10 bg-surface/95 p-2 shadow-lg backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors',
                    active === link.id ? 'bg-ink text-bg' : 'text-muted hover:bg-ink/5 hover:text-ink',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
