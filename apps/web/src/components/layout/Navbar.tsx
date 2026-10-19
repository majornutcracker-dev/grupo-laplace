import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, MessageCircle, X } from 'lucide-react'
import { nav } from '../../data/content'
import { whatsappUrl } from '../../lib/contact'
import { Button, Logo, cn } from '@grupo-laplace/ui'

export function Navbar() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const wa = whatsappUrl()

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
    panelRef.current?.querySelector<HTMLElement>('a,button')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
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

  // Fuera de la home, las anclas apuntan a la home respetando el base path de Pages
  const href = (h: string) => (onHome ? h : `${import.meta.env.BASE_URL}${h}`)

  return (
    <header
      className={cn(
        'sticky top-0 z-[100] transition-[background-color,box-shadow,border-color] duration-200',
        // backdrop-filter crea un bloque contenedor para hijos fixed: se quita con el menú abierto
        open ? 'border-b border-border-default bg-white' : scrolled ? 'border-b border-border-default bg-white/95 backdrop-blur-md' : 'border-b border-transparent bg-white',
      )}
    >
      <a href="#contenido" className="type-label absolute top-2 left-2 z-10 -translate-y-20 rounded-md bg-navy-900 px-4 py-2 text-white focus:translate-y-0">
        Saltar al contenido
      </a>
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
        <Link to="/" aria-label="Grupo Laplace, ir al inicio" className="shrink-0 rounded-sm">
          <Logo height={38} decorative />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={href(n.href)} className="type-label rounded-md px-3 py-2 text-text-secondary transition-colors duration-150 hover:bg-navy-50 hover:text-text-primary">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {wa && (
            <Button href={wa} variant="ghost" size="sm" iconLeft={<MessageCircle className="size-4" aria-hidden />}>
              WhatsApp
            </Button>
          )}
          <Button href={href('#contacto')} size="sm">Solicitar información</Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="inline-grid size-11 place-items-center rounded-md text-navy-900 hover:bg-navy-50 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        </button>
      </div>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 top-[4.5rem] bottom-0 overflow-y-auto border-t border-border-default bg-white lg:hidden"
      >
        <nav aria-label="Principal móvil" className="container-page flex min-h-full flex-col py-6">
          <ul className="flex flex-col">
            {nav.map((n) => (
              <li key={n.href} className="border-b border-border-subtle">
                <a href={href(n.href)} onClick={() => setOpen(false)} className="type-h4 flex min-h-14 items-center text-text-primary">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-8">
            <Button href={href('#contacto')} size="lg" fullWidth onClick={() => setOpen(false)}>
              Solicitar información
            </Button>
            {wa && (
              <Button href={wa} variant="outline" size="lg" fullWidth iconLeft={<MessageCircle className="size-5" aria-hidden />}>
                Escríbenos por WhatsApp
              </Button>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
