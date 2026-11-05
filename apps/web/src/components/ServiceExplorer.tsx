import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Tag, buttonClasses, cn } from '@grupo-laplace/ui'
import type { Service } from '../data/content'
import { CurlyArrow } from '../illustrations/Doodles'
import { serviceScenes } from '../illustrations/serviceScenes'

/**
 * Servicios en pestañas verticales (patrón de la referencia): la lista a la izquierda,
 * y a la derecha un panel gris con la ilustración y una card de detalle superpuesta.
 * Pestañas WAI-ARIA: flechas, Inicio y Fin mueven la selección.
 */
export function ServiceExplorer({ items }: { items: Service[] }) {
  const [active, setActive] = useState(0)
  const tabs = useRef<Array<HTMLButtonElement | null>>([])
  const baseId = useId()
  const current = items[active]
  const Scene = serviceScenes[current.id]

  const select = (i: number) => {
    const next = (i + items.length) % items.length
    setActive(next)
    tabs.current[next]?.focus()
  }
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const keys: Record<string, () => void> = {
      ArrowDown: () => select(i + 1),
      ArrowRight: () => select(i + 1),
      ArrowUp: () => select(i - 1),
      ArrowLeft: () => select(i - 1),
      Home: () => select(0),
      End: () => select(items.length - 1),
    }
    if (keys[e.key]) {
      e.preventDefault()
      keys[e.key]()
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,25rem)_1fr] lg:gap-12">
      <div role="tablist" aria-label="Servicios de Grupo ALPAS" aria-orientation="vertical" className="flex flex-col gap-1.5">
        {items.map((s, i) => {
          const selected = i === active
          const Icon = s.icon
          return (
            <button
              key={s.id}
              ref={(el) => {
                tabs.current[i] = el
              }}
              id={`${baseId}-t${i}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              aria-labelledby={`${baseId}-n${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={cn(
                'flex items-start gap-4 rounded-lg px-5 py-4 text-left transition-colors duration-200 ease-standard',
                selected ? 'card' : 'hover:bg-card',
              )}
            >
              <Icon aria-hidden className={cn('mt-0.5 size-5.5 shrink-0', selected ? 'text-text-heading' : 'text-text-muted')} />
              <span className="min-w-0">
                <span id={`${baseId}-n${i}`} className={cn('type-h5 flex flex-wrap items-center gap-2', selected ? 'text-text-heading' : 'text-text-muted')}>
                  {s.name}
                  {s.comingSoon && <Tag color="warning" className="px-2 py-0 text-[0.75rem]">Próximamente</Tag>}
                </span>
                <span
                  aria-hidden
                  className={cn('grid transition-[grid-template-rows] duration-300 ease-standard', selected ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}
                >
                  <span className="type-body-sm overflow-hidden text-text-body">
                    <span className="block pt-1.5">{s.summary}</span>
                  </span>
                </span>
              </span>
            </button>
          )
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-t${active}`}
        data-brand={current.id === 'escolar' ? 'laplace' : undefined}
        className="card relative overflow-hidden p-4 sm:p-8"
      >
        {/* Cuadrícula tenue de fondo */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(var(--color-border-subtle)_1px,transparent_1px),linear-gradient(90deg,var(--color-border-subtle)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(80%_70%_at_30%_30%,#000,transparent)]"
        />
        <div key={current.id} className="swap-in relative lg:min-h-[29rem]">
          <div aria-hidden className="card-white p-2 lg:absolute lg:top-0 lg:left-0 lg:w-[70%]">
            <div className="card-media aspect-[6/5]"><Scene /></div>
          </div>
          <CurlyArrow className="absolute right-[24%] bottom-[38%] hidden h-14 w-24 -scale-x-100 rotate-12 lg:block" />
          <div className="card-white relative mt-4 p-6 shadow-raised lg:absolute lg:right-0 lg:bottom-0 lg:mt-0 lg:w-[52%] lg:p-7">
            <Tag color={current.comingSoon ? 'warning' : 'first'}>{current.comingSoon ? 'Próximo lanzamiento' : current.audience}</Tag>
            <h3 className="type-h4 mt-4">{current.name}</h3>
            <p className="type-body-sm mt-2 text-text-body">{current.summary}</p>
            {current.to ? (
              <Link to={current.to} className={buttonClasses({ variant: 'primary', size: 'sm', pill: true }, 'mt-6')}>
                Conocer {current.name}
                <ChevronRight className="size-4" aria-hidden />
              </Link>
            ) : (
              <p className="type-caption mt-5 text-text-muted">Estamos preparando esta propuesta. Escríbenos si quieres que te avisemos.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
