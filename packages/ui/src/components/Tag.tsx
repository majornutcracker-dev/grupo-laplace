import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

/** az-etiqueta de Figma: Color = neutral · primary · first (verde) · success · warning · error · disabled, Fill = true/false. */
export type TagColor = 'neutral' | 'primary' | 'first' | 'success' | 'warning' | 'error' | 'disabled'

const soft: Record<TagColor, string> = {
  neutral: 'bg-primary-1 text-neutral-base',
  primary: 'bg-primary-1 text-primary-5',
  first: 'bg-green-soft text-green-deep',
  success: 'bg-success-soft text-success-text',
  warning: 'bg-warning-soft text-warning-text',
  error: 'bg-danger-soft text-danger-text',
  disabled: 'bg-neutral-disabled/60 text-neutral-muted',
}
const filled: Record<TagColor, string> = {
  neutral: 'bg-neutral-base text-white',
  primary: 'bg-primary-5 text-white',
  first: 'bg-green-deep text-white',
  success: 'bg-success-text text-white',
  warning: 'bg-warning-medium text-warning-text',
  error: 'bg-danger-text text-white',
  disabled: 'bg-primary-2 text-white',
}

export function Tag({ color = 'neutral', fill = false, icon, children, className }: { color?: TagColor; fill?: boolean; icon?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-pill px-3 py-1 type-caption', fill ? filled[color] : soft[color], className)}>
      {icon}
      {children}
    </span>
  )
}
