import type { ReactNode } from 'react'
import { cn } from '@grupo-laplace/ui'

/** Piezas de maquetación para las páginas de documentación (UI Kit y Guía de marca). */

export function DocsShell({ title, lead, toc, children, overline }: { title: string; lead: string; overline: string; toc: Array<{ id: string; label: string }>; children: ReactNode }) {
  return (
    <div className="bg-surface-subtle">
      <header className="on-dark border-b border-navy-800 bg-navy-900 text-white">
        <div className="container-page max-w-[var(--container-wide)] py-14 lg:py-20">
          <p className="type-overline text-text-accent-on-dark">{overline}</p>
          <h1 className="type-h1 mt-3 text-white">{title}</h1>
          <p className="type-subtitle mt-4 max-w-3xl text-text-inverse-muted">{lead}</p>
        </div>
      </header>
      <div className="container-page grid max-w-[var(--container-wide)] gap-10 py-12 lg:grid-cols-[13rem_1fr] lg:py-16">
        <nav aria-label="Índice" className="hidden lg:block">
          <ul className="sticky top-24 space-y-1 border-l border-border-default">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="type-body-sm -ml-px block border-l-2 border-transparent py-1.5 pl-4 text-text-muted hover:border-navy-900 hover:text-text-primary">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="min-w-0 space-y-16">{children}</div>
      </div>
    </div>
  )
}

export function DocSection({ id, title, description, children }: { id: string; title: string; description?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-24">
      <h2 id={`${id}-h`} className="type-h2 text-text-primary">{title}</h2>
      {description && <div className="type-body-lg mt-3 max-w-3xl text-text-secondary">{description}</div>}
      <div className="mt-8 space-y-8">{children}</div>
    </section>
  )
}

export function Demo({ title, children, className, dark, note }: { title?: string; children: ReactNode; className?: string; dark?: boolean; note?: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border-default bg-white">
      {title && (
        <div className="flex items-center justify-between border-b border-border-subtle px-5 py-3">
          <h3 className="type-label text-text-primary">{title}</h3>
        </div>
      )}
      <div className={cn('p-5 sm:p-8', dark && 'on-dark bg-navy-900', className)}>{children}</div>
      {note && <div className="type-body-sm border-t border-border-subtle bg-surface-subtle px-5 py-3 text-text-secondary">{note}</div>}
    </div>
  )
}

/** Ficha técnica del componente: variantes, tamaños, estados, espaciado, color, responsive, accesibilidad y uso. */
export function Spec({ rows }: { rows: Array<[string, ReactNode]> }) {
  return (
    <dl className="grid overflow-hidden rounded-xl border border-border-default bg-white sm:grid-cols-[11rem_1fr]">
      {rows.map(([k, v], i) => (
        <div key={k} className={cn('contents', i > 0 && '[&>*]:border-t [&>*]:border-border-subtle')}>
          <dt className="type-label bg-surface-subtle px-5 py-3 text-text-primary">{k}</dt>
          <dd className="type-body-sm px-5 py-3 text-text-secondary">{v}</dd>
        </div>
      ))}
    </dl>
  )
}

export function Code({ children }: { children: ReactNode }) {
  return <code className="rounded-xs bg-navy-50 px-1.5 py-0.5 font-mono text-[0.8125em] text-navy-900">{children}</code>
}
