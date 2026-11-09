import { buttonClasses } from '@grupo-laplace/ui'
import { Compass, HandHeart } from 'lucide-react'
import fotoOrientacion from '../assets/figma/servicio-orientacion.webp'
import { Accent, DarkBenefits, FinalCta, InfoCard, InnerHero, PhotoComposition, SectionIntro } from '../components/site/SiteBlocks'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { orientacion as o, orientacionPage } from '../data/content'
import { whatsappUrl } from '../lib/contact'
import { usePageMeta } from '../lib/usePageMeta'

/**
 * Orientación vocacional tiene su propia estructura: no hay áreas ni horarios, sino a quién va dirigido,
 * qué incluye y para qué sirve. No se muestran pruebas ni etapas que ALPAS no haya confirmado.
 */
export default function Orientacion() {
  usePageMeta('Orientación vocacional · Grupo ALPAS', o.hero.description)
  const wa = whatsappUrl('Hola, Grupo ALPAS. Quisiera información sobre la orientación vocacional.')
  return (
    <>
      {/* 1. Hero */}
      <InnerHero
        crumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios', href: '/servicios' }, { label: 'Orientación vocacional' }]}
        tag={orientacionPage.tag}
        title={<>Descubre tu camino. <Accent>Construye</Accent> tu futuro.</>}
        description={
          <>
            <p>{o.hero.description}</p>
            <p>{o.intro}</p>
          </>
        }
        actions={
          <>
            <WhatsAppButton url={wa} label="Quiero orientación" variant="primary" pill />
            <a href="#dirigido" className={buttonClasses({ variant: 'neutral', pill: true })}>¿Es para mí?</a>
          </>
        }
        media={
          <PhotoComposition
            src={fotoOrientacion}
            alt="Joven conversando por videollamada con su orientadora vocacional"
            chips={[
              { icon: HandHeart, label: 'Acompañamiento cercano' },
              { icon: Compass, label: 'Explora tus opciones', tone: 'mist' },
            ]}
          />
        }
      />

      {/* 2. ¿A quién está dirigido? */}
      <section id="dirigido" aria-labelledby="audience-title" className="scroll-mt-28 bg-site-paper">
        <div className="container-wide section-y">
          <SectionIntro id="audience-title" eyebrow="¿A quién está dirigido?" title="Para quienes están eligiendo qué estudiar" />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {o.audience.map((a, i) => (
              <li key={a.title}>
                <InfoCard icon={orientacionPage.audienceIcons[i]} tone={i === 1 ? 'green' : 'navy'} title={a.title} index={i}>{a.text}</InfoCard>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. ¿Qué te ofrece este servicio? */}
      <section aria-labelledby="offers-title" className="bg-site-paper">
        <div className="container-wide pb-[var(--space-section-y)]">
          <div className="rounded-[1.5rem] bg-site-mist/60 p-6 sm:p-10 lg:p-14">
            <SectionIntro
              id="offers-title"
              eyebrow="¿Qué te ofrece este servicio?"
              title="Un acompañamiento para decidir con información"
              className="max-w-[44rem]"
              description="Conversamos contigo sobre lo que te interesa y revisamos juntos tus opciones."
            />
            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {o.offers.map((f, i) => (
                <li key={f.title}><InfoCard icon={f.icon} tone={i === 1 ? 'green' : 'navy'} title={f.title} index={i}>{f.text}</InfoCard></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Beneficios */}
      <DarkBenefits id="benefits-title" eyebrow="Beneficios" title="Cómo te ayuda la orientación vocacional" items={orientacionPage.benefits} />

      {/* 5. CTA final */}
      <FinalCta
        title={<>Conversemos sobre <Accent>tu futuro</Accent></>}
        description="Cuéntanos en qué etapa estás y te contamos cómo funciona la orientación vocacional de ALPAS."
        whatsappUrl={wa}
      />
    </>
  )
}
