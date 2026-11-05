import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Activa el revelado al hacer scroll: marca <html class="motion"> y añade .in a cada .reveal
 * cuando entra en pantalla. Se vuelve a enlazar en cada cambio de página.
 */
export function useRevealOnScroll() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    document.documentElement.classList.add('motion')
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el))
    })
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [pathname])
}
