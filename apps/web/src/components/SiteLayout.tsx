import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useRevealOnScroll } from '../lib/useReveal'
import { MobileWhatsAppBar } from './MobileWhatsAppBar'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function SiteLayout() {
  const { pathname, hash } = useLocation()
  useRevealOnScroll()
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return (
    <>
      <SiteHeader />
      <main id="contenido" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <SiteFooter />
      <MobileWhatsAppBar />
    </>
  )
}
