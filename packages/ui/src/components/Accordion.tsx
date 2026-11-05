import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../lib/cn'

/** Preguntas frecuentes: patrón WAI-ARIA (botón con aria-expanded + región). Se abre una a la vez. */
export function Accordion({ items, className }: { items: Array<{ question: string; answer: ReactNode }>; className?: string }) {
  const baseId = useId()
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className={cn('border-y border-border-default', className)}>
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={it.question} className="border-b border-border-default last:border-b-0">
            <h3>
              <button
                id={`${baseId}-b${i}`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${baseId}-p${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="type-h5 text-text-heading">{it.question}</span>
                <span
                  aria-hidden
                  className={cn(
                    'grid size-9 shrink-0 place-items-center rounded-pill bg-surface-muted text-text-heading transition-transform duration-200 ease-standard group-hover:bg-primary-1',
                    isOpen && 'rotate-180 bg-action-primary text-action-on-primary group-hover:bg-action-primary',
                  )}
                >
                  <ChevronDown className="size-4.5" />
                </span>
              </button>
            </h3>
            <Panel id={`${baseId}-p${i}`} labelledBy={`${baseId}-b${i}`} open={isOpen}>
              {it.answer}
            </Panel>
          </div>
        )
      })}
    </div>
  )
}

function Panel({ id, labelledBy, open, children }: { id: string; labelledBy: string; open: boolean; children: ReactNode }) {
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
        <div className="type-body max-w-prose pb-6 text-text-body">{children}</div>
      </div>
    </div>
  )
}
