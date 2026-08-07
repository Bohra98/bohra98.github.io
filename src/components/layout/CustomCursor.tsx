import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    let ringX = 0
    let ringY = 0

    function handleMove(event: PointerEvent) {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${event.clientX - 6}px, ${event.clientY - 6}px)`
      }
      ringX += (event.clientX - 18 - ringX) * 0.15
      ringY += (event.clientY - 18 - ringY) * 0.15
    }

    let raf: number
    function tick() {
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', handleMove)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('pointermove', handleMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-3 w-3 rounded-full bg-primary mix-blend-difference md:block" />
      <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-9 w-9 rounded-full border border-primary/50 md:block" />
    </>
  )
}
