import { useEffect, useRef, useState } from 'react'

interface Options {
  duration?: number
  enabled?: boolean
}

export function useCountUp(target: number, { duration = 1200, enabled = true }: Options = {}) {
  const [value, setValue] = useState(0)
  const frame = useRef<number>()
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    if (!enabled) return

    const start = performance.now()
    const from = 0

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(from + (target - from) * eased))
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick)
      }
    }

    frame.current = requestAnimationFrame(tick)

    // rAF is paused while the document is hidden (e.g. iPadOS Split View can report
    // hidden while still visibly on screen), which would otherwise freeze the count
    // mid-animation. setTimeout still fires regardless, so force the final value once
    // the animation should be done.
    timeout.current = setTimeout(() => setValue(target), duration + 300)

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current)
      if (timeout.current) clearTimeout(timeout.current)
    }
  }, [target, duration, enabled])

  return value
}

export function parseLeadingNumber(raw: string): number | null {
  const match = raw.match(/[\d,]+/)
  if (!match) return null
  return Number(match[0].replace(/,/g, ''))
}
