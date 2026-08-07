export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/[0.07] blur-[140px]" />
      <div className="absolute left-1/2 top-1/4 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-accent/[0.05] blur-[120px]" />
    </div>
  )
}
