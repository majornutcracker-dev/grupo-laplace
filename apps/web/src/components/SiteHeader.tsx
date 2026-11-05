import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@grupo-laplace/ui'
import { nav } from '../data/content'
import { AlpasLogo } from './AlpasLogo'
import { MobileServicesMenu, ServicesMenu } from './ServicesMenu'
import { WhatsAppButton } from './WhatsAppButton'

const itemClass = (active: boolean) =>
  cn(
    'type-label relative rounded-pill px-4 py-2 transition-colors duration-150',
    active ? 'bg-surface-muted text-primary-5' : 'text-neutral-base hover:bg-surface-muted hover:text-primary-5',
  )
const linkClass = ({ isActive }: { isActive: boolean }) => itemClass(isActive)

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Menú móvil: bloquea el scroll, cierra con Esc y devuelve el foco al botón
  useEffect(() => {
    if (!open) return
    const toggle = toggleRef.current
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector<HTMLElement>('a')?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 64rem)')
    const onMq = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
      toggle?.focus()
    }
  }, [open])

  return (
    // Píldora flotante: el contenedor no captura clics, solo la barra y el menú
    <header className="pointer-events-none sticky top-0 z-[100] h-[var(--header-h)] pt-3">
      <a href="#contenido" className="type-label pointer-events-auto absolute top-2 left-2 z-10 -translate-y-24 rounded-pill bg-primary-5 px-4 py-2 text-white focus:translate-y-0">
        Saltar al contenido
      </a>
      <div className="container-wide">
        <div
          className={cn(
            'pointer-events-auto flex h-16 items-center justify-between gap-4 rounded-pill bg-white/95 pr-2 pl-5 ring-1 backdrop-blur-md transition-shadow duration-200 lg:pl-6',
            scrolled || open ? 'shadow-[0_14px_36px_-18px_rgb(1_29_53/0.45)] ring-border-default' : 'shadow-[0_10px_30px_-20px_rgb(1_29_53/0.5)] ring-white/60',
          )}
        >
          <Link to="/" aria-label="Grupo ALPAS, ir al inicio" className="shrink-0 rounded-sm">
            <AlpasLogo className="h-9" />
          </Link>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((n) =>
                n.to === '/servicios' ? (
                  <ServicesMenu key={n.to} linkClass={itemClass} />
                ) : (
                  <li key={n.to}>
                    <NavLink to={n.to} end={n.to === '/'} className={linkClass}>
                      {n.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <WhatsAppButton size="sm" pill />
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="grid size-12 place-items-center rounded-pill text-primary-5 hover:bg-surface-muted lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        ref={panelRef}
        hidden={!open}
        className="pointer-events-auto fixed inset-x-3 top-[calc(var(--header-h)+0.25rem)] bottom-3 overflow-y-auto rounded-[1.75rem] bg-white shadow-raised ring-1 ring-border-subtle lg:hidden"
      >
        <nav aria-label="Principal móvil" className="flex min-h-full flex-col px-5 pt-2 pb-6">
          <ul className="flex flex-col">
            {nav.map((n) =>
              n.to === '/servicios' ? (
                <MobileServicesMenu key={n.to} onNavigate={() => setOpen(false)} />
              ) : (
                <li key={n.to} className="border-b border-border-subtle">
                  <NavLink
                    to={n.to}
                    end={n.to === '/'}
                    className={({ isActive }) => cn('type-h5 flex min-h-16 items-center', isActive ? 'text-text-accent' : 'text-text-heading')}
                  >
                    {n.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
          <div className="mt-auto pt-8">
            <WhatsAppButton fullWidth />
          </div>
        </nav>
      </div>
    </header>
  )
}
