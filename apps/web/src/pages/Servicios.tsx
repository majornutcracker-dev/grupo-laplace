import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@grupo-laplace/ui'
import { CtaBand, ServiceTiles } from '../components/Blocks'
import { home, services, servicesPage } from '../data/content'
import { usePageMeta } from '../lib/usePageMeta'

export default function Servicios() {
  usePageMeta('Servicios · Grupo ALPAS', servicesPage.description)
  return (
    <>
      <section aria-labelledby="page-title" className="bg-surface-subtle">
        <div className="container-wide pt-8 pb-14 lg:pt-12 lg:pb-20">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Servicios' }]} renderLink={(href, label) => <Link to={href}>{label}</Link>} />
          <h1 id="page-title" className="type-h1 mt-6 max-w-[20ch]">{servicesPage.title}</h1>
          <p className="type-body-lg mt-5 max-w-[38rem] text-text-body">{servicesPage.description}</p>
        </div>
      </section>

      <section aria-label="Catálogo de servicios" className="container-wide section-y">
        <ServiceTiles items={services} columns={2} />
      </section>

      <CtaBand title={home.cta.title} description={home.cta.description} />
    </>
  )
}
