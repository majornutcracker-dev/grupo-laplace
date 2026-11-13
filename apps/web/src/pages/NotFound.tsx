import { Link } from 'react-router-dom'
import { buttonClasses } from '@grupo-alpas/ui'
import { Eyebrow, FigmaPage } from '../components/site/Sections'
import { error404 } from '../data/paginas'
import { delay } from '../lib/motion'
import { usePageMeta } from '../lib/usePageMeta'

/** Error 404 (Figma: «Error 404»). */
export default function NotFound() {
  usePageMeta('Página no encontrada · Grupo ALPAS', error404.description)
  return (
    <FigmaPage>
    <section aria-labelledby="page-title" className="bg-white">
      <div className="site-container flex flex-col items-center py-10 text-center">
        <Eyebrow className="pop-in text-site-green-text">ERROR 404</Eyebrow>
        <p aria-hidden className="pop-in mt-6 font-display text-[clamp(7rem,4rem+12vw,11.25rem)] leading-[1.15] font-semibold text-site-ink" style={delay(80)}>
          4<span className="text-site-green">0</span>4
        </p>
        <h1 id="page-title" className="pop-in mt-10 text-[1.6875rem] leading-[1.4] font-medium text-site-ink" style={delay(140)}>{error404.title}</h1>
        <p className="pop-in mt-6 max-w-[48rem] text-lg leading-normal text-site-ink" style={delay(200)}>{error404.description}</p>
        <div className="pop-in mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6" style={delay(260)}>
          <Link to="/" className={buttonClasses({ variant: 'primary', pill: true })}>Volver al inicio</Link>
          <Link to="/#servicios" className={buttonClasses({ variant: 'neutral', pill: true })}>Ver nuestros servicios</Link>
        </div>
      </div>
    </section>
    </FigmaPage>
  )
}
