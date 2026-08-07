import { useCountUp, parseLeadingNumber } from '../../hooks/useCountUp'

interface StatTileProps {
  label: string
  value: string
}

export function StatTile({ label, value }: StatTileProps) {
  const numeric = parseLeadingNumber(value)
  const counted = useCountUp(numeric ?? 0, { enabled: numeric !== null })
  const suffix = numeric !== null ? value.replace(String(numeric), '').trim() : ''
  const display = numeric !== null ? `${counted.toLocaleString()}${suffix}` : value

  return (
    <div className="rounded-lg border border-ink/10 bg-surface p-4">
      <div className="font-display text-2xl font-extrabold text-primary">{display}</div>
      <div className="mt-1 text-[0.65rem] uppercase tracking-wider text-muted">{label}</div>
    </div>
  )
}
