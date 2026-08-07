import { useRef, useState, type ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 50, y: 50 })

  function handlePointerMove(event: React.PointerEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPos({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn(
        'group relative overflow-hidden rounded-xl border border-ink/10 bg-surface p-6 transition-colors hover:border-primary/30',
        className,
      )}
      style={{
        ['--spot-x' as string]: `${pos.x}%`,
        ['--spot-y' as string]: `${pos.y}%`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(400px circle at var(--spot-x) var(--spot-y), oklch(var(--primary) / 0.08), transparent 60%)',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
