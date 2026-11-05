import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { Breadcrumbs, IconBadge, PlusMark, Tag, buttonClasses, cn } from '@grupo-laplace/ui'
import { ArtFrame, CtaBand } from '../components/Blocks'
import { GuidanceScene, RecordedScene, TutoringScene, UniversityScene } from '../illustrations/Scenes'
import { Sparkle } from '../illustrations/Doodles'

const art = { escolar: TutoringScene, universitario: UniversityScene, orientacion: GuidanceScene, grabados: RecordedScene }
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

      <section aria-label="Catálogo de servicios" className="container-wide section-y space-y-20 lg:space-y-28">
        {services.map((s, i) => {
          const Icon = s.icon
          const reverse = i % 2 === 1
          return (
            <article key={s.id} aria-labelledby={`srv-${s.id}`} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <div className={cn('relative mx-auto w-full max-w-md lg:max-w-none', reverse && 'lg:order-last')}>
                {(() => {
                  const Scene = art[s.id]
                  return <ArtFrame className="reveal aspect-[6/5]"><Scene /></ArtFrame>
                })()}
                {s.comingSoon && (
                  <Tag color="warning" icon={<Clock className="size-3.5" aria-hidden />} className="absolute top-5 left-5 shadow-neutral">Próximamente</Tag>
                )}
                <PlusMark className={cn('float-y absolute -top-4 size-11', reverse ? '-left-3' : '-right-3')} />
                <Sparkle className={cn('float-y absolute -bottom-4 size-8', reverse ? '-right-2' : '-left-2')} />
              </div>
              <div className="reveal">
                <div className="flex items-center gap-3">
                  <IconBadge tone={s.comingSoon ? 'secondary' : 'primary'}><Icon /></IconBadge>
                  {s.comingSoon ? <Tag color="warning">Próximo lanzamiento</Tag> : <Tag color="first">{s.audience}</Tag>}
                </div>
                <h2 id={`srv-${s.id}`} className="type-h2 mt-6">{s.name}</h2>
                <p className="type-body-lg mt-4 max-w-[32rem] text-text-body">{s.summary}</p>
                {s.to ? (
                  <Link to={s.to} className={buttonClasses({ variant: 'primary' }, 'mt-8')}>Conocer más<span className="sr-only"> sobre {s.name}</span></Link>
                ) : (
                  <p className="type-body-sm mt-6 max-w-[30rem] text-text-muted">Estamos preparando esta propuesta. Escríbenos si quieres que te avisemos cuando esté disponible.</p>
                )}
              </div>
            </article>
          )
        })}
      </section>

      <CtaBand title={home.cta.title} description={home.cta.description} />
    </>
  )
}
