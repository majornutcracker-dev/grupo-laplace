import { Button } from '@grupo-laplace/ui'
import { usePageMeta } from '../lib/usePageMeta'

export default function NotFound() {
  usePageMeta('Página no encontrada · Grupo Laplace')
  return (
    <section className="container-page section-y text-center">
      <p className="type-accent-number text-[5rem] text-celeste-500">404</p>
      <h1 className="type-h2 mt-4">No encontramos esta página</h1>
      <p className="type-body-lg mt-3 text-text-secondary">Puede que el enlace haya cambiado.</p>
      <Button href={import.meta.env.BASE_URL} className="mt-8">Volver al inicio</Button>
    </section>
  )
}
