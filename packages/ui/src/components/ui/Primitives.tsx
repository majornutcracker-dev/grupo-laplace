import type { HTMLAttributes, ReactNode } from 'react'
import { AlertTriangle, CheckCircle2, ChevronRight, Info, Loader2, XCircle } from 'lucide-react'
import { cn } from '../../lib/cn'

/* ── Badge ───────────────────────────────────────────────────────────── */
export type BadgeTone = 'navy' | 'celeste' | 'orange' | 'neutral' | 'success' | 'error' | 'inverse'
const badgeTones: Record<BadgeTone, string> = {
  navy: 'bg-navy-50 text-navy-900 ring-navy-100',
  celeste: 'bg-celeste-50 text-celeste-800 ring-celeste-100',
  orange: 'bg-orange-50 text-orange-800 ring-orange-100',
  neutral: 'bg-neutral-100 text-neutral-800 ring-neutral-200',
  success: 'bg-feedback-success-surface text-feedback-success ring-feedback-success-border',
  error: 'bg-feedback-error-surface text-feedback-error ring-feedback-error-border',
  inverse: 'bg-white/10 text-white ring-white/20',
}
export function Badge({ tone = 'navy', size = 'md', icon, children, className }: { tone?: BadgeTone; size?: 'sm' | 'md'; icon?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-pill font-semibold ring-1 ring-inset', size === 'sm' ? 'px-2 py-0.5 text-[0.75rem]' : 'px-3 py-1 text-[0.8125rem]', badgeTones[tone], className)}>
      {icon}
      {children}
    </span>
  )
}

/* ── Etiqueta de estado de contenido (confirmado / propuesta / demostrativo / pendiente) ── */
const statusMap = {
  confirmado: { tone: 'success', label: 'Confirmado' },
  propuesta: { tone: 'celeste', label: 'Propuesta' },
  demostrativo: { tone: 'orange', label: 'Contenido demostrativo' },
  pendiente: { tone: 'neutral', label: 'Pendiente de la academia' },
} as const
export function StatusTag({ status, className }: { status: keyof typeof statusMap; className?: string }) {
  const s = statusMap[status]
  return (
    <Badge tone={s.tone} size="sm" className={className} icon={<span className="size-1.5 rounded-full bg-current" aria-hidden />}>
      {s.label}
    </Badge>
  )
}

/* ── Avatar ──────────────────────────────────────────────────────────── */
export function Avatar({ name, src, size = 'md', className }: { name: string; src?: string; size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string }) {
  const dims = { sm: 'size-8 text-xs', md: 'size-11 text-sm', lg: 'size-16 text-lg', xl: 'size-24 text-2xl' }[size]
  const initials = name
    .split(/\s+/)
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('')
  return src ? (
    <img src={src} alt={name} className={cn('rounded-full object-cover ring-2 ring-white', dims, className)} />
  ) : (
    <span role="img" aria-label={name} className={cn('inline-grid place-items-center rounded-full bg-navy-100 font-display font-bold text-navy-800 ring-2 ring-white', dims, className)}>
      {initials || '·'}
    </span>
  )
}

/* ── Alertas ─────────────────────────────────────────────────────────── */
export type AlertTone = 'info' | 'success' | 'warning' | 'error'
const alertMap = {
  info: { icon: Info, cls: 'bg-feedback-info-surface border-feedback-info-border text-feedback-info' },
  success: { icon: CheckCircle2, cls: 'bg-feedback-success-surface border-feedback-success-border text-feedback-success' },
  warning: { icon: AlertTriangle, cls: 'bg-feedback-warning-surface border-feedback-warning-border text-feedback-warning' },
  error: { icon: XCircle, cls: 'bg-feedback-error-surface border-feedback-error-border text-feedback-error' },
}
export function Alert({ tone = 'info', title, children, className, action }: { tone?: AlertTone; title?: string; children?: ReactNode; className?: string; action?: ReactNode }) {
  const { icon: Icon, cls } = alertMap[tone]
  return (
    <div role={tone === 'error' ? 'alert' : 'status'} className={cn('flex gap-3 rounded-lg border p-4', cls, className)}>
      <Icon className="mt-0.5 size-5 shrink-0" aria-hidden />
      <div className="min-w-0 flex-1">
        {title && <p className="type-label">{title}</p>}
        {children && <div className="type-body-sm mt-0.5 text-text-primary/85">{children}</div>}
        {action && <div className="mt-3">{action}</div>}
      </div>
    </div>
  )
}

/* ── Carga ───────────────────────────────────────────────────────────── */
export function Spinner({ label = 'Cargando', className }: { label?: string; className?: string }) {
  return (
    <span role="status" className={cn('inline-flex items-center gap-2 text-text-secondary', className)}>
      <Loader2 className="size-5 animate-spin text-celeste-600" aria-hidden />
      <span className="type-body-sm">{label}</span>
    </span>
  )
}
export function Skeleton({ className }: { className?: string }) {
  return <span aria-hidden className={cn('block animate-pulse rounded-md bg-neutral-100', className)} />
}

/* ── Breadcrumbs ─────────────────────────────────────────────────────── */
export function Breadcrumbs({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav aria-label="Ruta de navegación">
      <ol className="type-body-sm flex flex-wrap items-center gap-1 text-text-muted">
        {items.map((it, i) => (
          <li key={i} className="inline-flex items-center gap-1">
            {i > 0 && <ChevronRight className="size-4 text-neutral-400" aria-hidden />}
            {it.href && i < items.length - 1 ? (
              <a href={it.href} className="rounded-xs hover:text-text-primary hover:underline">{it.label}</a>
            ) : (
              <span aria-current="page" className="font-semibold text-text-primary">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

/* ── Encabezado de sección ───────────────────────────────────────────── */
export function SectionHeader({ overline, title, lead, align = 'left', inverse, className, id }: { overline?: string; title: ReactNode; lead?: ReactNode; align?: 'left' | 'center'; inverse?: boolean; className?: string; id?: string }) {
  return (
    <div className={cn('max-w-[46rem]', align === 'center' && 'mx-auto text-center', className)}>
      {overline && (
        <p className={cn('type-overline mb-3 inline-flex items-center gap-2', inverse ? 'text-text-accent-on-dark' : 'text-celeste-700')}>
          <span className="h-0.5 w-6 rounded-full bg-current" aria-hidden />
          {overline}
        </p>
      )}
      <h2 id={id} className={cn('type-h2', inverse ? 'text-white' : 'text-text-primary')}>{title}</h2>
      {lead && <p className={cn('type-subtitle mt-4', inverse ? 'text-text-inverse-muted' : 'text-text-secondary')}>{lead}</p>}
    </div>
  )
}

/* ── Card base ───────────────────────────────────────────────────────── */
export function Card({ className, interactive, children, ...rest }: HTMLAttributes<HTMLDivElement> & { interactive?: boolean }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border-default bg-surface-default',
        interactive && 'transition-[box-shadow,transform,border-color] duration-200 ease-standard hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

/* ── Icono en contenedor ─────────────────────────────────────────────── */
export function IconTile({ children, tone = 'celeste', size = 'md', className }: { children: ReactNode; tone?: 'celeste' | 'navy' | 'orange' | 'inverse'; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const tones = {
    celeste: 'bg-celeste-50 text-celeste-700',
    navy: 'bg-navy-900 text-white',
    orange: 'bg-orange-50 text-orange-700',
    inverse: 'bg-white/10 text-celeste-300',
  }
  const sizes = { sm: 'size-9 rounded-md [&_svg]:size-4.5', md: 'size-12 rounded-lg [&_svg]:size-6', lg: 'size-14 rounded-lg [&_svg]:size-7' }
  return <span className={cn('inline-grid shrink-0 place-items-center', tones[tone], sizes[size], className)} aria-hidden>{children}</span>
}
