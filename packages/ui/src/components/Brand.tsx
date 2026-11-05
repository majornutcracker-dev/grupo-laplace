import type { ReactNode } from 'react'
import { ImageIcon } from 'lucide-react'
import { cn } from '../lib/cn'

/** El "+" del A+ del logotipo, como recurso geométrico. Decorativo. */
export function PlusMark({ className, tone = 'secondary' }: { className?: string; tone?: 'secondary' | 'primary' | 'accent' | 'inverse' }) {
  const colors = { secondary: 'bg-brand-secondary', primary: 'bg-brand-primary', accent: 'bg-brand-accent', inverse: 'bg-white' }
  return (
    <span aria-hidden className={cn('relative inline-block size-10', className)}>
      <span className={cn('absolute top-1/2 left-0 h-[28%] w-full -translate-y-1/2 rounded-pill', colors[tone])} />
      <span className={cn('absolute top-0 left-1/2 h-full w-[28%] -translate-x-1/2 rounded-pill', colors[tone])} />
    </span>
  )
}

/**
 * Marco de fotografía con la forma "pestaña" del logotipo.
 * Sin src muestra un espacio reservado que describe la foto que falta: nunca una foto de stock inventada.
 */
export function PhotoFrame({
  src,
  alt,
  pendingLabel,
  ratio = '4/5',
  className,
  children,
}: {
  src?: string
  alt: string
  pendingLabel?: string
  ratio?: string
  className?: string
  children?: ReactNode
}) {
  return (
    <figure className={cn('frame-tab relative overflow-hidden bg-surface-muted', className)} style={{ aspectRatio: ratio }}>
      {src ? (
        <img src={src} alt={alt} className="size-full object-cover" loading="lazy" decoding="async" />
      ) : (
        <div role="img" aria-label={alt} className="flex size-full flex-col items-center justify-center gap-3 p-6 text-center">
          <span className="grid size-12 place-items-center rounded-pill bg-white text-text-muted shadow-neutral">
            <ImageIcon className="size-5" aria-hidden />
          </span>
          <span className="type-caption max-w-[16rem] text-text-muted">{pendingLabel ?? alt}</span>
        </div>
      )}
      {children}
    </figure>
  )
}

/** Icono en contenedor, para beneficios y servicios. */
export function IconBadge({ children, tone = 'secondary', className }: { children: ReactNode; tone?: 'secondary' | 'primary' | 'inverse' | 'accent'; className?: string }) {
  const tones = {
    secondary: 'bg-surface-accent text-text-accent',
    primary: 'bg-action-primary text-action-on-primary',
    inverse: 'bg-white/10 text-text-accent-on-dark',
    accent: 'bg-brand-accent text-action-on-secondary',
  }
  return <span aria-hidden className={cn('grid size-12 shrink-0 place-items-center rounded-lg [&_svg]:size-6', tones[tone], className)}>{children}</span>
}
