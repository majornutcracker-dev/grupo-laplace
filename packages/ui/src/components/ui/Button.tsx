import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '../../lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'inverse' | 'whatsapp'
export type ButtonSize = 'sm' | 'md' | 'lg'

type Common = {
  variant?: ButtonVariant
  size?: ButtonSize
  iconLeft?: ReactNode
  iconRight?: ReactNode
  /** Botón solo con icono: exige aria-label */
  iconOnly?: boolean
  loading?: boolean
  fullWidth?: boolean
  children?: ReactNode
  className?: string
}
type AsButton = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type AsLink = Common & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

const base =
  'relative inline-flex items-center justify-center gap-2 type-button rounded-md select-none ' +
  'transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-standard ' +
  'active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50'

const variants: Record<ButtonVariant, string> = {
  // Naranja = acción principal. Texto azul (contraste 5.9:1); el blanco sobre naranja no cumple AA.
  primary: 'bg-action-primary text-action-on-primary hover:bg-action-primary-hover active:bg-action-primary-active shadow-xs',
  secondary: 'bg-action-secondary text-action-on-secondary hover:bg-action-secondary-hover active:bg-action-secondary-active',
  outline: 'border border-border-strong bg-surface-default text-text-primary hover:border-navy-900 hover:bg-action-tertiary-hover',
  ghost: 'text-text-primary hover:bg-action-tertiary-hover',
  inverse: 'bg-white text-navy-900 hover:bg-navy-50',
  whatsapp: 'bg-whatsapp text-navy-950 hover:brightness-95',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'min-h-9 px-3.5 text-[0.875rem]',
  md: 'min-h-11 px-5',
  lg: 'min-h-13 px-7 text-[1.0625rem]',
}
const iconSizes: Record<ButtonSize, string> = { sm: 'size-9', md: 'size-11', lg: 'size-13' }

export function Button(props: AsButton | AsLink) {
  const { variant = 'primary', size = 'md', iconLeft, iconRight, iconOnly, loading, fullWidth, children, className, ...rest } = props
  // Sin librería de merge: whitespace-nowrap solo si el consumidor no define su propio whitespace-*
  const classes = cn(base, !className?.includes('whitespace-') && 'whitespace-nowrap', variants[variant], iconOnly ? iconSizes[size] : sizes[size], fullWidth && 'w-full', className)
  const content = (
    <>
      {loading ? <Loader2 className="size-[1.1em] animate-spin" aria-hidden /> : iconLeft}
      {iconOnly ? null : <span>{children}</span>}
      {iconOnly && !loading ? children : null}
      {!loading && iconRight}
    </>
  )
  if (typeof rest.href === 'string') {
    const { href, ...anchor } = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    const external = /^https?:/.test(href ?? '')
    return (
      <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...anchor}>
        {content}
      </a>
    )
  }
  const btn = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button {...btn} type={btn.type ?? 'button'} className={classes} aria-busy={loading || undefined} disabled={btn.disabled || loading}>
      {content}
    </button>
  )
}

/** Enlace de texto con subrayado animado; color celeste-700 (6.7:1 sobre blanco). */
export function TextLink({ className, children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        'type-label inline-flex items-center gap-1 text-text-link underline decoration-celeste-300 decoration-2 underline-offset-4',
        'transition-colors duration-200 hover:text-text-link-hover hover:decoration-navy-900',
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  )
}
