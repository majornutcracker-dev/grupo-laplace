import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import { cn } from '../lib/cn'

/**
 * Preguntas frecuentes: patrón WAI-ARIA (botón con aria-expanded + región). Se abre una a la vez.
 * Cada pregunta es una card suave; al abrirse pasa a blanco y el chevron gira hacia abajo.
 */
export function Accordion({ items, className }: { items: Array<{ question: string; answer: ReactNode }>; className?: string }) {
  const baseId = useId()
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div
            key={it.question}
            className={cn(
              'rounded-lg px-5 transition-[background-color,box-shadow] duration-200 ease-standard sm:px-6',
              isOpen ? 'card-white shadow-raised' : 'card hover:bg-card-hover',
            )}
          >
            <h3>
              <button
                id={`${baseId}-b${i}`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${baseId}-p${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-15 w-full items-center justify-between gap-6 py-4 text-left"
              >
                <span className="type-label text-[1.0625rem] text-text-heading">{it.question}</span>
                <ChevronRight
                  aria-hidden
                  className={cn('size-5 shrink-0 text-text-heading transition-transform duration-200 ease-standard', isOpen && 'rotate-90')}
                />
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
        <div className="type-body max-w-prose pb-5 text-text-body">{children}</div>
      </div>
    </div>
  )
}
