import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import { HeroContent } from './HeroContent'

const HeroScene = lazy(() => import('./HeroScene').then((m) => ({ default: m.HeroScene })))

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [shouldMount, setShouldMount] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(min-width: 768px)').matches) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldMount(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" ref={ref} className="relative flex min-h-screen items-center overflow-hidden px-8 pb-16 pt-32 md:px-16">
      <div className="absolute inset-0 -z-0">
        {shouldMount && (
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        )}
      </div>
      <HeroContent />
    </section>
  )
}
