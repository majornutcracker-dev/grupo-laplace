import { cn } from '../../lib/cn'

const files = import.meta.glob('../../assets/brand/*.svg', { eager: true, query: '?url', import: 'default' }) as Record<string, string>
const src = (name: string) => files[`../../assets/brand/${name}.svg`]

export type LogoLayout = 'horizontal' | 'vertical' | 'isotipo'
export type LogoTone = 'color' | 'inverted' | 'mono-navy' | 'mono-white' | 'mono-black'

type LogoProps = {
  layout?: LogoLayout
  tone?: LogoTone
  /** Altura en px. Respeta los tamaños mínimos de la guía: horizontal 28 px, vertical 56 px, isotipo 20 px. */
  height?: number
  className?: string
  /** Si el logo es decorativo (ya hay un nombre visible cerca), pasa decorative */
  decorative?: boolean
}

const MIN_HEIGHT: Record<LogoLayout, number> = { horizontal: 28, vertical: 56, isotipo: 20 }

export function Logo({ layout = 'horizontal', tone = 'color', height = 40, className, decorative }: LogoProps) {
  const name = layout === 'isotipo' ? `isotipo-${tone}` : `logo-${layout}-${tone}`
  const h = Math.max(height, MIN_HEIGHT[layout])
  return (
    <img
      src={src(name)}
      alt={decorative ? '' : 'Grupo Laplace'}
      height={h}
      style={{ height: h, width: 'auto' }}
      className={cn('block select-none', className)}
      draggable={false}
    />
  )
}
