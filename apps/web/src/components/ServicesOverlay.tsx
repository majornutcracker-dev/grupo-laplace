import { useEffect, useId, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { cn } from '@grupo-laplace/ui'
import { services, type Service } from '../data/content'

/** Servicios del overlay (Figma: overlay-options): solo los que tienen página propia. */
const menuServices = services.filter((s): s is Service & { to: string } => Boolean(s.to))

/** Opción del overlay (Figma: card-option-menu): ícono en círculo, título y descripción breve. */
function OptionCard({ service, onSelect }: { service: Service & { to: string }; onSelect: () => void }) {
  const { pathname } = useLocation()
  const current = pathname === service.to
  const Icon = service.icon
  return (
    <Link
      to={service.to}
      onClick={onSelect}
      aria-current={current ? 'page' : undefined}
      className={cn(
        'flex items-center gap-4 rounded-2xl px-4 py-2 transition-colors duration-150',
        current ? 'bg-site-green-soft/60' : 'hover:bg-site-mist/70 focus-visible:bg-site-mist/70',
      )}
    >
      <span aria-hidden className="grid size-9 shrink-0 place-items-center rounded-pill border border-site-mist bg-white text-site-navy [&_svg]:size-4">
        <Icon />
      </span>
      <span className="min-w-0 flex-1 py-1">
        <span className="block text-sm leading-normal font-medium text-site-ink">{service.name}</span>
        <span className="mt-1 block text-xs leading-normal text-text-muted">{service.menuText}</span>
      </span>
    </Link>
  )
}

/**
 * «Servicios» en el header de escritorio: un botón que abre el overlay con las opciones.
 * Se cierra al elegir una opción, al hacer clic fuera, con Esc, al salir el foco o al cambiar de página.
 */
export function ServicesOverlay({ itemClass }: { itemClass: (active: boolean) => string }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const rootRef = useRef<HTMLLIElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelId = useId()
  const active = pathname.startsWith('/servicios')

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      buttonRef.current?.focus()
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <li
      ref={rootRef}
      className="relative"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false)
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className={cn(itemClass(active || open), 'inline-flex items-center gap-2')}
      >
        Servicios
        <ChevronDown className={cn('size-3.5 transition-transform duration-200 ease-standard', open && 'rotate-180')} aria-hidden />
      </button>

      <div
        id={panelId}
        className={cn(
          'absolute top-full left-1/2 z-10 mt-3 w-[min(34.875rem,calc(100vw-2rem))] -translate-x-1/2',
          'transition-[opacity,translate,visibility] duration-200 ease-standard',
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0',
        )}
      >
        <ul className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-overlay ring-1 ring-site-mist">
          {menuServices.map((s) => (
            <li key={s.id}>
              <OptionCard service={s} onSelect={() => setOpen(false)} />
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

/** Versión móvil: «Servicios» se despliega dentro del menú a pantalla completa con las mismas opciones. */
export function MobileServicesOptions({ onSelect }: { onSelect: () => void }) {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(pathname.startsWith('/servicios'))
  const panelId = useId()
  return (
    <li className="border-b border-border-subtle">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className={cn('type-h5 flex min-h-16 w-full items-center justify-between', pathname.startsWith('/servicios') ? 'text-text-accent' : 'text-text-heading')}
      >
        Servicios
        <ChevronDown className={cn('size-5 transition-transform duration-200 ease-standard', open && 'rotate-180')} aria-hidden />
      </button>
      <ul id={panelId} hidden={!open} className="mb-4 flex flex-col gap-1 rounded-2xl bg-white p-2 shadow-overlay ring-1 ring-site-mist">
        {menuServices.map((s) => (
          <li key={s.id}>
            <OptionCard service={s} onSelect={onSelect} />
          </li>
        ))}
      </ul>
    </li>
  )
}
