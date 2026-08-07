import { footer } from '../../data/site'

export function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-ink/10 px-8 py-8 text-xs tracking-wider text-muted md:px-16">
      <div>{footer.left}</div>
      <div>{footer.right}</div>
    </footer>
  )
}
