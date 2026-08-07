import { useRef, useState, type ReactNode, type ComponentPropsWithoutRef } from 'react'
import { motion } from 'framer-motion'
import { magneticOffset } from '../../lib/magnetic'

interface MagneticButtonProps extends ComponentPropsWithoutRef<typeof motion.a> {
  children: ReactNode
}

export function MagneticButton({ children, className, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  function handlePointerMove(event: React.PointerEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setOffset(magneticOffset(event.clientX, event.clientY, rect, 0.3, 12))
  }

  return (
    <motion.a
      ref={ref}
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.5 }}
      {...props}
    >
      {children}
    </motion.a>
  )
}
