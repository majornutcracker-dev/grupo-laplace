import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../lib/cn'

/** Variantes del componente az-boton de Figma (tipo = Primary · Neutral · Outlined · Secondary · Text · Link). */
export type ButtonVariant = 'primary' | 'secondary' | 'neutral' | 'outlined' | 'text' | 'link' | 'inverse'
export type ButtonSize = 'md' | 'sm'

type Options = { variant?: ButtonVariant; size?: ButtonSize; iconOnly?: boolean; fullWidth?: boolean }

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-action-primary text-action-on-primary hover:bg-action-primary-hover active:bg-action-primary-pressed shadow-primary',
  secondary: 'bg-action-secondary text-action-on-secondary hover:bg-action-secondary-hover active:brightness-95',
  neutral: 'bg-action-neutral text-action-on-neutral shadow-neutral hover:bg-action-neutral-hover active:bg-surface-muted',
  outlined:
    'border border-border-strong bg-transparent text-action-on-neutral hover:border-action-on-neutral active:bg-surface-muted',
  text: 'bg-transparent text-action-on-neutral hover:bg-surface-muted active:bg-primary-1',
  link: 'rounded-sm text-text-accent underline decoration-2 underline-offset-4 hover:text-text-heading',
  inverse: 'bg-white text-primary-5 hover:bg-primary-1 active:bg-primary-2',
}
const sizes: Record<ButtonSize, string> = { md: 'min-h-13.5 px-6', sm: 'min-h-11 px-5 text-[0.9375rem]' }
const iconSizes: Record<ButtonSize, string> = { md: 'size-13.5', sm: 'size-11' }

/** Clases del botón, para aplicarlas también a enlaces del router (<Link className={buttonClasses()} />). */
export function buttonClasses({ variant = 'primary', size = 'md', iconOnly, fullWidth }: Options = {}, className?: string) {
  return cn(
    'inline-flex items-center justify-center gap-2 type-button select-none whitespace-nowrap',
    'transition-[background-color,color,border-color,box-shadow] duration-200 ease-standard',
    'disabled:pointer-events-none disabled:bg-action-disabled disabled:text-action-on-disabled disabled:shadow-none',
    'aria-disabled:pointer-events-none aria-disabled:bg-action-disabled aria-disabled:text-action-on-disabled aria-disabled:shadow-none',
    variants[variant],
    variant !== 'link' && (iconOnly ? cn(iconSizes[size], 'rounded-pill') : cn(sizes[size], 'rounded-xl')),
    fullWidth && 'w-full',
    className,
  )
}

type CommonProps = Options & { iconLeft?: ReactNode; iconRight?: ReactNode; children?: ReactNode; className?: string }

export function Button({ variant, size, iconOnly, fullWidth, iconLeft, iconRight, children, className, type = 'button', ...rest }: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={buttonClasses({ variant, size, iconOnly, fullWidth }, className)} {...rest}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  )
}

/** Botón como enlace externo o ancla. Los enlaces http(s) abren en una pestaña nueva. */
export function ButtonLink({ variant, size, iconOnly, fullWidth, iconLeft, iconRight, children, className, href, ...rest }: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const external = typeof href === 'string' && /^https?:/.test(href)
  return (
    <a
      href={href}
      className={buttonClasses({ variant, size, iconOnly, fullWidth }, className)}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </a>
  )
}
