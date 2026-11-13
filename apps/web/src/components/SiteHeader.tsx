import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@grupo-alpas/ui'
import { nav } from '../data/content'
import { AlpasLogo } from './AlpasLogo'
import { MobileServicesOptions, ServicesOverlay } from './ServicesOverlay'
import { WhatsAppButton } from './WhatsAppButton'

/* Ítem del nav (Figma: nav-item, estados default y hovered) */
const itemClass = (active: boolean) =>
  cn(
    'relative rounded-[1.5rem] px-5 py-2 text-base leading-normal font-medium transition-colors duration-150 xl:px-6',
    active ? 'bg-site-mist text-site-navy' : 'text-site-ink hover:bg-site-mist/70 hover:text-site-navy',
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
    <header
      className={cn(
        'sticky top-0 z-[100] bg-white pt-6 transition-shadow duration-200',
        (scrolled || open) && 'shadow-[0_1px_0_var(--color-border-default)]',
      )}
    >
      {/* Enlace para saltar al contenido: invisible (sr-only) hasta que recibe foco con el teclado.
          No usa display:none porque así dejaría de ser accesible por Tab y lector de pantalla. */}
      <a
        href="#contenido"
        className="type-label sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[110] focus:rounded-pill focus:bg-primary-5 focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <div className="site-container flex h-[4.375rem] items-center justify-between gap-6 lg:gap-10">
        <Link to="/" aria-label="Grupo ALPAS, ir al inicio" className="shrink-0 rounded-sm">
          <AlpasLogo className="h-12" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-2 xl:gap-6">
            {nav.map((n) =>
              n.to === '/servicios' ? (
                <ServicesOverlay key={n.to} itemClass={itemClass} />
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
          <WhatsAppButton label="Consulta por WhatsApp" pill hideIcon />
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

      <div id="menu-movil" ref={panelRef} hidden={!open} className="fixed inset-x-0 top-[5.875rem] bottom-0 overflow-y-auto bg-white lg:hidden">
        <nav aria-label="Principal móvil" className="site-container flex min-h-full flex-col pt-4 pb-8">
          <ul className="flex flex-col">
            {nav.map((n) =>
              n.to === '/servicios' ? (
                <MobileServicesOptions key={n.to} onSelect={() => setOpen(false)} />
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
