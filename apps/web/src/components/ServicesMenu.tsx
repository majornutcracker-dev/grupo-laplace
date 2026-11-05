import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Tag, cn } from '@grupo-laplace/ui'
import { services, type Service } from '../data/content'

/** Destino de cada servicio en el menú. Cursos grabados aún no tiene página: lleva a su bloque en Servicios. */
const hrefOf = (s: Service) => s.to ?? `/servicios#${s.id}`

/** Icono en círculo blanco (como en la referencia). Escolar usa el azul de Grupo Laplace para anunciar la marca. */
function MenuIcon({ service, active }: { service: Service; active?: boolean }) {
  const Icon = service.icon
  return (
    <span
      aria-hidden
      className={cn(
        'grid size-11 shrink-0 place-items-center rounded-pill bg-white shadow-neutral ring-1 ring-border-subtle transition-colors duration-200 [&_svg]:size-5',
        service.id === 'escolar' ? 'text-laplace-blue' : 'text-primary-5',
        active && 'ring-2 ring-green-medium',
      )}
    >
      <Icon />
    </span>
  )
}

/** Opción del menú: icono, nombre y descripción breve. Sirve para el panel de escritorio y para el menú móvil. */
export function ServiceMenuItem({ service, onNavigate, className }: { service: Service; onNavigate?: () => void; className?: string }) {
  const { pathname } = useLocation()
  const current = service.to === pathname
  return (
    <Link
      to={hrefOf(service)}
      onClick={onNavigate}
      aria-current={current ? 'page' : undefined}
      className={cn(
        'group flex items-start gap-3.5 rounded-lg p-3 transition-colors duration-150',
        current ? 'bg-surface-accent' : 'hover:bg-card-hover active:bg-surface-muted',
        className,
      )}
    >
      <MenuIcon service={service} active={current} />
      <span className="min-w-0 pt-0.5">
        <span className="type-label flex flex-wrap items-center gap-2 text-text-heading">
          {service.name}
          {service.comingSoon && <Tag color="warning" className="px-2 py-0 text-[0.75rem]">Próximamente</Tag>}
        </span>
        <span className="type-caption mt-0.5 block text-text-muted">{service.menuText}</span>
      </span>
    </Link>
  )
}

/** Pie del panel: acceso a la página general de servicios. */
function MenuFooter({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      to="/servicios"
      onClick={onNavigate}
      className="type-label group flex items-center justify-between gap-4 rounded-lg px-3 py-3 text-text-heading transition-colors duration-150 hover:bg-card-hover"
    >
      <span>
        Todos los servicios
        <span className="type-caption block font-normal text-text-muted">Compara las propuestas y elige la tuya</span>
      </span>
      <ArrowRight className="size-4.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
    </Link>
  )
}

/**
 * «Servicios» en el navbar de escritorio: botón de divulgación que abre un panel con las propuestas.
 * Se abre al pasar el cursor (con mouse) o al hacer clic; se cierra con Esc, clic fuera, al salir el foco o al navegar.
 */
export function ServicesMenu({ linkClass }: { linkClass: (active: boolean) => string }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const rootRef = useRef<HTMLLIElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const closeTimer = useRef<number | undefined>(undefined)
  const openedByHover = useRef(false)
  const panelId = useId()
  const active = pathname.startsWith('/servicios')

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => () => window.clearTimeout(closeTimer.current), [])

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

  const hoverOpen = (pointerType: string) => {
    if (pointerType !== 'mouse') return
    window.clearTimeout(closeTimer.current)
    if (!open) openedByHover.current = true
    setOpen(true)
  }
  const hoverClose = (pointerType: string) => {
    if (pointerType !== 'mouse') return
    closeTimer.current = window.setTimeout(() => {
      openedByHover.current = false
      setOpen(false)
    }, 180)
  }
  const close = () => setOpen(false)

  return (
    <li
      ref={rootRef}
      className="relative"
      onPointerEnter={(e) => hoverOpen(e.pointerType)}
      onPointerLeave={(e) => hoverClose(e.pointerType)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false)
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          // Si el cursor ya lo abrió, el clic lo deja fijo en vez de cerrarlo
          if (openedByHover.current) openedByHover.current = false
          else setOpen((o) => !o)
        }}
        className={cn(linkClass(active || open), 'inline-flex items-center gap-1.5')}
      >
        Servicios
        <ChevronDown className={cn('size-4 transition-transform duration-200 ease-standard', open && 'rotate-180')} aria-hidden />
      </button>

      <MenuPanel id={panelId} open={open}>
        <ul className="grid grid-cols-2 gap-1">
          {services.map((s) => (
            <li key={s.id}>
              <ServiceMenuItem service={s} onNavigate={close} />
            </li>
          ))}
        </ul>
        <div className="mt-2 border-t border-border-subtle pt-2">
          <MenuFooter onNavigate={close} />
        </div>
      </MenuPanel>
    </li>
  )
}

function MenuPanel({ id, open, children }: { id: string; open: boolean; children: ReactNode }) {
  return (
    <div
      id={id}
      className={cn(
        // El ::before cubre el hueco entre botón y panel para que el hover no se corte
        'absolute top-full left-1/2 z-10 mt-4 w-[40rem] -translate-x-1/2 before:absolute before:inset-x-0 before:-top-4 before:h-4',
        'transition-[opacity,translate,visibility] duration-200 ease-standard',
        open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0',
      )}
    >
      <div className="rounded-[1.75rem] bg-white p-3 shadow-[0_28px_60px_-24px_rgb(1_29_53/0.4)] ring-1 ring-border-subtle">
        {children}
      </div>
    </div>
  )
}

/** Versión móvil: sección desplegable dentro del menú a pantalla completa. */
export function MobileServicesMenu({ onNavigate }: { onNavigate: () => void }) {
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
      <div id={panelId} hidden={!open} className="pb-4">
        <ul className="card flex flex-col gap-1 rounded-lg p-2">
          {services.map((s) => (
            <li key={s.id}>
              <ServiceMenuItem service={s} onNavigate={onNavigate} />
            </li>
          ))}
          <li className="border-t border-border-subtle pt-1">
            <MenuFooter onNavigate={onNavigate} />
          </li>
        </ul>
      </div>
    </li>
  )
}
