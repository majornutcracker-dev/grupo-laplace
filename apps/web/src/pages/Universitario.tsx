import { Steps } from '@grupo-laplace/ui'
import { BenefitCards, CtaBand, FaqBlock, PageHero, PracticalInfo, SectionHeading } from '../components/Blocks'
import { home, universitario as u } from '../data/content'
import { UniversityScene } from '../illustrations/Scenes'
import { usePageMeta } from '../lib/usePageMeta'

export default function Universitario() {
  usePageMeta('Universitario · Grupo ALPAS', u.hero.description)
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios', href: '/servicios' }, { label: 'Universitario' }]}
        title={u.hero.title}
        description={u.hero.description}
        art={<UniversityScene />}
      />

      <section aria-labelledby="areas-title" className="container-wide section-y grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <SectionHeading id="areas-title" title="Cursos y áreas académicas" />
          <p className="type-body-lg mt-5 max-w-[30rem] text-text-body">{u.intro}</p>
        </div>
        <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {u.areas.map(({ name, icon: Icon, text }) => (
            <li key={name} className="border-t-2 border-brand-secondary pt-5">
              <Icon className="size-7 text-text-accent" aria-hidden />
              <h3 className="type-h4 mt-3">{name}</h3>
              <p className="type-body mt-1 text-text-body">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="method-title" className="bg-surface-subtle">
        <div className="container-wide section-y">
          <SectionHeading id="method-title" title="Cómo te acompañamos" description="Un recorrido simple, pensado para que avances con tu curso." />
          <Steps className="mt-12" steps={u.method} />
        </div>
      </section>

      <section aria-labelledby="benefits-title" className="container-wide section-y">
        <SectionHeading id="benefits-title" title="Lo que ganas con el acompañamiento" />
        <div className="mt-12"><BenefitCards items={u.benefits} /></div>
      </section>

      <section aria-label="Modalidad, horarios e inversión" className="bg-surface-accent">
        <div className="container-wide section-y"><PracticalInfo /></div>
      </section>

      <FaqBlock items={u.faqs} />
      <CtaBand title="¿Qué curso necesitas reforzar?" description={home.cta.description} />
    </>
  )
}
