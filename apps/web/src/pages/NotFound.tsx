import { Link } from 'react-router-dom'
import { PlusMark, buttonClasses } from '@grupo-laplace/ui'
import { usePageMeta } from '../lib/usePageMeta'

export default function NotFound() {
  usePageMeta('Página no encontrada · Grupo ALPAS')
  return (
    <section className="container-wide section-y flex flex-col items-start">
      <PlusMark className="size-14" />
      <h1 className="type-h1 mt-8">No encontramos esta página</h1>
      <p className="type-body-lg mt-4 text-text-body">Puede que el enlace haya cambiado. Vuelve al inicio o revisa nuestros servicios.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/" className={buttonClasses({ variant: 'primary' })}>Ir al inicio</Link>
        <Link to="/servicios" className={buttonClasses({ variant: 'outlined' })}>Ver servicios</Link>
      </div>
    </section>
  )
}
