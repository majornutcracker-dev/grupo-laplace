import type { ReactNode } from 'react'
import { AlertTriangle, CheckCircle2, Info, XCircle } from 'lucide-react'
import { cn } from '../lib/cn'

/** az-nota de Figma: mensaje breve con icono. tipo = primary · first · neutral · success · warning · error. */
export type NoteTone = 'primary' | 'first' | 'neutral' | 'success' | 'warning' | 'error'

const tones: Record<NoteTone, { cls: string; icon: typeof Info }> = {
  primary: { cls: 'bg-primary-1 text-primary-5', icon: Info },
  first: { cls: 'bg-green-soft text-green-deep', icon: Info },
  neutral: { cls: 'bg-surface-subtle text-neutral-base border border-border-default', icon: Info },
  success: { cls: 'bg-success-soft text-success-text', icon: CheckCircle2 },
  warning: { cls: 'bg-warning-soft text-warning-text', icon: AlertTriangle },
  error: { cls: 'bg-danger-soft text-danger-text', icon: XCircle },
}

export function Note({ tone = 'primary', title, children, className }: { tone?: NoteTone; title?: string; children?: ReactNode; className?: string }) {
  const { cls, icon: Icon } = tones[tone]
  return (
    <div role={tone === 'error' ? 'alert' : 'note'} className={cn('flex gap-3 rounded-lg px-4 py-3', cls, className)}>
      <Icon className="mt-0.5 size-5 shrink-0" aria-hidden />
      <div className="type-body-sm min-w-0">
        {title && <p className="type-label">{title}</p>}
        {children && <div className={title ? 'mt-0.5 text-neutral-base' : undefined}>{children}</div>}
      </div>
    </div>
  )
}
