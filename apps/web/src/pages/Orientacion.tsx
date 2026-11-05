import { CheckCircle2 } from 'lucide-react'
import { Steps } from '@grupo-laplace/ui'
import { BenefitCards, CtaBand, FaqBlock, PageHero, SectionHeading } from '../components/Blocks'
import { orientacion as o } from '../data/content'
import { GuidanceScene } from '../illustrations/Scenes'
import { usePageMeta } from '../lib/usePageMeta'

export default function Orientacion() {
  usePageMeta('Orientación vocacional · Grupo ALPAS', o.hero.description)
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios', href: '/servicios' }, { label: 'Orientación vocacional' }]}
        title={o.hero.title}
        description={o.hero.description}
        art={<GuidanceScene />}
      />

      <section aria-labelledby="intro-title" className="container-wide section-y grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 id="intro-title" className="type-h2 max-w-[18ch]">Una decisión importante, acompañada</h2>
          <p className="type-body-lg mt-5 max-w-[32rem] text-text-body">{o.intro}</p>
        </div>
        <div>
          <h3 className="type-h5">¿A quién está dirigido?</h3>
          <ul className="mt-5 divide-y divide-border-default border-y border-border-default">
            {o.audience.map((a) => (
              <li key={a.title} className="py-5">
                <p className="type-label text-text-heading">{a.title}</p>
                <p className="type-body-sm mt-1 text-text-body">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="offers-title" className="bg-surface-inverse">
        <div className="container-wide section-y">
          <SectionHeading id="offers-title" inverse title="¿Qué ofrece la orientación vocacional?" />
          <div className="mt-12"><BenefitCards inverse items={o.offers} /></div>
        </div>
      </section>

      <section aria-labelledby="benefits-title" className="container-wide section-y grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <SectionHeading id="benefits-title" title="Beneficios del acompañamiento" />
        <ul className="space-y-5">
          {o.benefits.map((b) => (
            <li key={b} className="flex gap-4">
              <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-text-accent" aria-hidden />
              <span className="type-body-lg text-text-heading">{b}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="process-title" className="bg-surface-subtle">
        <div className="container-wide section-y">
          <SectionHeading id="process-title" title="Cómo funciona el proceso" description="Cada etapa la definimos contigo, según lo que necesites." />
          <Steps className="mt-12" steps={o.process} />
        </div>
      </section>

      <FaqBlock items={o.faqs} />
      <CtaBand title="Conversemos sobre tu futuro" description="Cuéntanos en qué etapa estás y te contamos cómo podemos acompañarte." />
    </>
  )
}
