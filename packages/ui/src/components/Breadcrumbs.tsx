import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import { cn } from '../lib/cn'

/** Ruta de navegación. renderLink permite usar el Link del router del consumidor. */
export function Breadcrumbs({
  items,
  renderLink = (href, label) => <a href={href}>{label}</a>,
  inverse,
  className,
}: {
  items: Array<{ label: string; href?: string }>
  renderLink?: (href: string, label: string) => ReactNode
  inverse?: boolean
  className?: string
}) {
  return (
    <nav aria-label="Ruta de navegación" className={className}>
      <ol className={cn('type-body-sm flex flex-wrap items-center gap-1.5', inverse ? 'text-text-inverse-muted' : 'text-text-muted')}>
        {items.map((it, i) => {
          const last = i === items.length - 1
          return (
            <li key={it.label} className="inline-flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="size-4 opacity-60" aria-hidden />}
              {it.href && !last ? (
                <span className={cn('underline-offset-4 hover:underline', inverse ? 'hover:text-white' : 'hover:text-text-heading')}>
                  {renderLink(it.href, it.label)}
                </span>
              ) : (
                <span aria-current={last ? 'page' : undefined} className={cn('type-label', inverse ? 'text-white' : 'text-text-heading')}>
                  {it.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
