import { cn } from '@grupo-alpas/ui'
import fotoOrientacion from '../assets/figma/hero-orientacion.webp'
import tileHeart from '../assets/figma/tile-heart.svg'
import tileRoute from '../assets/figma/tile-route.svg'
import { ServiceHero } from '../components/site/ServiceLayout'
import { BenefitsBand, CtaCard, Eyebrow, FaqSection, Green, IconCircle, SectionHead } from '../components/site/Sections'
import { orientacionFigma as o } from '../data/paginas'
import { whatsappUrl } from '../lib/contact'
import { delay } from '../lib/motion'
import { usePageMeta } from '../lib/usePageMeta'

/** Orientación vocacional: a quién va dirigido, el proceso en tres pasos, beneficios y preguntas (Figma). */
export default function Orientacion() {
  usePageMeta('Orientación vocacional · Grupo ALPAS', o.hero.description)
  const wa = whatsappUrl('Hola, Grupo ALPAS. Quisiera información sobre la orientación vocacional.')
  return (
    <>
      <ServiceHero
        tag={o.hero.tag}
        title={<>Descubre tu camino<br /><Green>Construye tu futuro</Green></>}
        description={o.hero.description}
        whatsappUrl={wa}
        secondary={{ label: 'Ver servicio', href: '#proceso' }}
        showcase={{
          photo: fotoOrientacion,
          photoAlt: 'Joven en una sesión virtual de orientación vocacional con su orientadora',
          photoStyle: { left: '4.3%', top: '14.7%', width: '89%', height: '79.5%' },
          tiles: [tileRoute, tileHeart],
        }}
      />

      {/* ¿A quién está dirigido? */}
      <section aria-labelledby="audience-title" className="bg-white">
        <div className="container-wide py-16 sm:py-20">
          <SectionHead id="audience-title" eyebrow={o.audience.eyebrow} title={o.audience.title} />
          <ul className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-10">
            {o.audience.items.map((a, i) => (
              <li key={a.text} className="reveal lift rounded-[1.5rem] bg-white p-8 shadow-overlay sm:p-10" style={delay(i * 90)}>
                <IconCircle icon={a.icon} tone={i === 1 ? 'green' : 'navy'} />
                <p className="mt-8 text-lg leading-normal font-medium text-site-ink">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* El proceso: tres pasos, el del medio desplazado hacia abajo como en el Figma */}
      <section id="proceso" aria-labelledby="process-title" className="scroll-mt-24 bg-white">
        <div className="container-wide pb-20">
          <SectionHead id="process-title" eyebrow={o.process.eyebrow} title={o.process.title} />
          <ol className="mt-10 grid gap-6 md:grid-cols-3 lg:gap-20">
            {o.process.steps.map((s, i) => {
              const n = String(i + 1).padStart(2, '0')
              return (
                <li key={s.title} className={cn('reveal', i === 1 && 'md:pt-20')} style={delay(i * 120)}>
                  <article className="lift flex h-full flex-col gap-6 rounded-[1.5rem] bg-white p-8 shadow-overlay sm:p-10">
                    <div className="flex items-center justify-between">
                      <IconCircle icon={s.icon} tone={s.tone === 'green' ? 'soft' : 'mist'} square />
                      <span aria-hidden className="text-[3.125rem] leading-normal font-semibold tracking-[6px] text-site-fog/45">{n}</span>
                    </div>
                    <div>
                      <Eyebrow className="text-site-green-text">PASO {n}</Eyebrow>
                      <h3 className="mt-4 text-lg leading-normal font-medium text-site-ink">{s.title}</h3>
                      <p className="mt-2 text-base leading-normal text-site-ink">{s.text}</p>
                    </div>
                  </article>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <BenefitsBand id="benefits-title" eyebrow={o.benefits.eyebrow} title={o.benefits.title} items={o.benefits.items} layout="stack" />
      <FaqSection items={o.faqs} />
      <CtaCard title={o.cta.title} description={o.cta.description} whatsappUrl={wa} />
      <div className="h-10 bg-white" />
    </>
  )
}
