import type { CSSProperties, ReactNode } from 'react'
import { buttonClasses } from '@grupo-alpas/ui'
import { howWeWork, practical, type Area, type Faq, type IconItem } from '../../data/paginas'
import { WhatsAppButton } from '../WhatsAppButton'
import { AreaGrid, BenefitsBand, CtaCard, FaqSection, HeroShowcase, HeroSplit, PracticalStrip, SectionHead, WorkCards } from './Sections'

type Showcase = { photo: string; photoAlt: string; photoStyle: CSSProperties; tiles: [string, string] }

/** Hero de un servicio (Figma: Frame 60/62/63): texto, composición y la franja de modalidad, horarios e inversión. */
export function ServiceHero({
  tag,
  title,
  description,
  whatsappUrl,
  secondary,
  showcase,
}: {
  tag: string
  title: ReactNode
  description: ReactNode
  whatsappUrl: string | null
  secondary: { label: string; href: string }
  showcase: Showcase
}) {
  return (
    <section aria-labelledby="page-title" className="overflow-hidden bg-white">
      <div className="container-wide pt-10 pb-10">
        <HeroSplit
          tag={tag}
          title={title}
          description={description}
          actions={
            <>
              <WhatsAppButton url={whatsappUrl} label="Consulta por WhatsApp" variant="primary" pill hideIcon className="sm:flex-1" />
              <a href={secondary.href} className={buttonClasses({ variant: 'neutral', pill: true }, 'sm:w-45')}>{secondary.label}</a>
            </>
          }
          media={
            <HeroShowcase
              variant="service"
              photo={showcase.photo}
              photoAlt={showcase.photoAlt}
              photoStyle={showcase.photoStyle}
              tiles={[{ src: showcase.tiles[0], tone: 'green' }, { src: showcase.tiles[1], tone: 'navy' }]}
            />
          }
        />
        <div className="mt-10">
          <PracticalStrip items={practical} />
        </div>
      </div>
    </section>
  )
}

/**
 * Estructura compartida de Escolar y Universitario (Figma): hero, ¿Qué hacemos?, áreas académicas,
 * beneficios, preguntas frecuentes y CTA final. Cada página aporta su contenido.
 */
export function AcademicServicePage({
  hero,
  whatTitle,
  areas,
  benefits,
  benefitsTitle = '¿Por qué estudiar con ALPAS?',
  benefitsLayout,
  areaSize,
  faqs,
  cta,
  whatsappUrl,
}: {
  hero: Omit<Parameters<typeof ServiceHero>[0], 'whatsappUrl'>
  whatTitle: string
  areas: Area[]
  benefits: IconItem[]
  /** Título de la sección de beneficios (por defecto «¿Por qué estudiar con ALPAS?») */
  benefitsTitle?: string
  benefitsLayout: 'row' | 'univ'
  /** Escolar: círculo 56 y texto 16 · Universitario: círculo 53 y texto 18 (Figma) */
  areaSize: 'escolar' | 'universitario'
  faqs: Faq[]
  cta: { title: string; description: string }
  whatsappUrl: string | null
}) {
  return (
    <>
      <ServiceHero {...hero} whatsappUrl={whatsappUrl} />

      <section aria-labelledby="what-title" className="bg-white">
        <div className="container-wide py-16 sm:py-20">
          <SectionHead id="what-title" eyebrow="¿QUÉ HACEMOS?" title={whatTitle} />
          <div className="mt-10"><WorkCards items={howWeWork} /></div>
        </div>
      </section>

      <section id="cursos" aria-labelledby="areas-title" className="scroll-mt-24 bg-white">
        <div className="container-wide pt-6 pb-20">
          <SectionHead id="areas-title" eyebrow="ÁREAS ACADÉMICAS" title="Cursos que reforzamos" />
          <div className="mt-10"><AreaGrid areas={areas} size={areaSize} /></div>
        </div>
      </section>

      <BenefitsBand id="benefits-title" eyebrow="BENEFICIOS" title={benefitsTitle} items={benefits} layout={benefitsLayout} />
      <FaqSection items={faqs} />
      <CtaCard title={cta.title} description={cta.description} whatsappUrl={whatsappUrl} />
      <div className="h-10 bg-white" />
    </>
  )
}
