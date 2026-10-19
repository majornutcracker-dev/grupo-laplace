import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { Plus, X } from 'lucide-react'
import { cn } from '../../lib/cn'

/* ── Acordeón ─────────────────────────────────────────────────────────
   Patrón WAI-ARIA: botón con aria-expanded + región etiquetada. */
export function Accordion({ items, defaultOpen = 0, allowMultiple = false, className }: {
  items: Array<{ title: string; content: ReactNode }>
  defaultOpen?: number | null
  allowMultiple?: boolean
  className?: string
}) {
  const baseId = useId()
  const [open, setOpen] = useState<number[]>(defaultOpen === null ? [] : [defaultOpen])
  const toggle = (i: number) =>
    setOpen((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : allowMultiple ? [...prev, i] : [i]))

  return (
    <div className={cn('divide-y divide-border-default rounded-xl border border-border-default bg-surface-default', className)}>
      {items.map((it, i) => {
        const isOpen = open.includes(i)
        const btnId = `${baseId}-b${i}`
        const panelId = `${baseId}-p${i}`
        return (
          <div key={i}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                className="group flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              >
                <span className="type-h4 text-[1.0625rem] text-text-primary sm:text-[1.125rem]">{it.title}</span>
                <span
                  className={cn(
                    'inline-grid size-8 shrink-0 place-items-center rounded-full border transition-[transform,background-color,border-color] duration-200 ease-standard',
                    isOpen ? 'rotate-45 border-navy-900 bg-navy-900 text-white' : 'border-border-strong text-navy-900 group-hover:border-navy-900',
                  )}
                  aria-hidden
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>
            <AccordionPanel id={panelId} labelledBy={btnId} open={isOpen}>
              {it.content}
            </AccordionPanel>
          </div>
        )
      })}
    </div>
  )
}

// El panel cerrado se marca inert por DOM (compatible con React 18 y 19) para sacarlo del orden de foco.
function AccordionPanel({ id, labelledBy, open, children }: { id: string; labelledBy: string; open: boolean; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current) ref.current.inert = !open
  }, [open])
  return (
    <div
      ref={ref}
      id={id}
      role="region"
      aria-labelledby={labelledBy}
      className={cn('grid transition-[grid-template-rows] duration-300 ease-standard', open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}
    >
      <div className="overflow-hidden">
        <div className="type-body max-w-[44rem] px-5 pb-6 text-text-secondary sm:px-6">{children}</div>
      </div>
    </div>
  )
}

/* ── Tabs ─────────────────────────────────────────────────────────────
   Navegación con flechas, Inicio y Fin (patrón WAI-ARIA Tabs). */
export function Tabs({ tabs, className, variant = 'underline' }: {
  tabs: Array<{ label: string; content: ReactNode }>
  className?: string
  variant?: 'underline' | 'pill'
}) {
  const baseId = useId()
  const [active, setActive] = useState(0)
  const refs = useRef<Array<HTMLButtonElement | null>>([])
  const onKey = (e: KeyboardEvent) => {
    const last = tabs.length - 1
    const next = { ArrowRight: active === last ? 0 : active + 1, ArrowLeft: active === 0 ? last : active - 1, Home: 0, End: last }[e.key]
    if (next === undefined) return
    e.preventDefault()
    setActive(next)
    refs.current[next]?.focus()
  }
  return (
    <div className={className}>
      <div
        role="tablist"
        onKeyDown={onKey}
        className={cn('flex gap-1 overflow-x-auto', variant === 'underline' ? 'border-b border-border-default' : 'w-fit max-w-full rounded-pill bg-neutral-100 p-1')}
      >
        {tabs.map((t, i) => (
          <button
            key={i}
            ref={(el) => {
              refs.current[i] = el
            }}
            id={`${baseId}-t${i}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls={`${baseId}-p${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={cn(
              'type-label shrink-0 whitespace-nowrap transition-colors duration-200',
              variant === 'underline'
                ? cn('-mb-px border-b-2 px-4 py-3', active === i ? 'border-orange-400 text-text-primary' : 'border-transparent text-text-muted hover:text-text-primary')
                : cn('rounded-pill px-4 py-2', active === i ? 'bg-white text-text-primary shadow-sm' : 'text-text-muted hover:text-text-primary'),
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div key={i} id={`${baseId}-p${i}`} role="tabpanel" aria-labelledby={`${baseId}-t${i}`} hidden={active !== i} tabIndex={0} className="pt-6 focus-visible:outline-offset-4">
          {t.content}
        </div>
      ))}
    </div>
  )
}

/* ── Modal ────────────────────────────────────────────────────────────
   <dialog> nativo: atrapa el foco, cierra con Esc y devuelve el foco al disparador. */
export function Modal({ open, onClose, title, description, children, footer }: {
  open: boolean
  onClose: () => void
  title: string
  description?: string
  children?: ReactNode
  footer?: ReactNode
}) {
  const ref = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])
  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className={cn(
        'm-auto w-[calc(100%-2rem)] max-w-lg rounded-xl bg-surface-default p-0 text-text-primary shadow-lg',
        'backdrop:bg-navy-950/60 backdrop:backdrop-blur-[2px]',
      )}
    >
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id={titleId} className="type-h3">{title}</h2>
            {description && <p className="type-body-sm mt-1 text-text-secondary">{description}</p>}
          </div>
          <button type="button" onClick={onClose} aria-label="Cerrar" className="-mt-1 -mr-2 inline-grid size-10 place-items-center rounded-md text-neutral-600 hover:bg-neutral-100 hover:text-text-primary">
            <X className="size-5" aria-hidden />
          </button>
        </div>
        {children && <div className="type-body mt-4 text-text-secondary">{children}</div>}
        {footer && <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">{footer}</div>}
      </div>
    </dialog>
  )
}
