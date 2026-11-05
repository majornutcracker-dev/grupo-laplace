import { cn } from '@grupo-laplace/ui'

/** Trazos decorativos dibujados a mano (inspirados en las referencias). Todos son decorativos. */

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 18" preserveAspectRatio="none" aria-hidden className={cn('draw-line', className)}>
      <path d="M3 12C40 4 70 4 110 9s80 6 107-2" className="stroke-brand-secondary" strokeWidth="5" strokeLinecap="round" fill="none" pathLength={1} />
    </svg>
  )
}

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden className={className}>
      <path d="M20 2c2 10 8 16 18 18-10 2-16 8-18 18-2-10-8-16-18-18C12 18 18 12 20 2Z" className="fill-brand-secondary" />
    </svg>
  )
}

export function Burst({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={className}>
      <g className="stroke-brand-primary" strokeWidth="3.5" strokeLinecap="round">
        <path d="M24 4v9" />
        <path d="M38 10l-6 6" />
        <path d="M44 24h-9" />
      </g>
    </svg>
  )
}

export function CurlyArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 70" aria-hidden className={className}>
      <path d="M6 14c22 40 52 46 62 30 8-13-8-22-14-10-7 14 16 30 54 22" className="stroke-brand-primary" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M100 46l9 10-12 4" className="stroke-brand-primary" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Dot({ className }: { className?: string }) {
  return <span aria-hidden className={cn('absolute rounded-pill', className)} />
}
