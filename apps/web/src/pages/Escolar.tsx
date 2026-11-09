import { buttonClasses } from '@grupo-laplace/ui'
import { HandHeart, Rocket } from 'lucide-react'
import fotoEscolar from '../assets/figma/servicio-escolar.webp'
import { Accent, DarkBenefits, InfoCard, InnerHero, PhotoComposition, PracticalSection, SectionIntro, FinalCta } from '../components/site/SiteBlocks'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { laplaceConfig } from '../config/site'
import { alpasBenefits, escolar, escolarPage, practicalInfo } from '../data/content'
import { laplaceWhatsappUrl } from '../lib/contact'
import { delay } from '../lib/motion'
import { usePageMeta } from '../lib/usePageMeta'

export default function Escolar() {
  usePageMeta('Escolar con Grupo Laplace · Grupo ALPAS', `${laplaceConfig.tagline} Refuerzo académico para estudiantes de nivel escolar con Grupo ALPAS y Grupo Laplace.`)
  const wa = laplaceWhatsappUrl('Hola, Grupo ALPAS. Quisiera información sobre el servicio Escolar.')
  return (
    <>
      {/* 1. Hero */}
      <InnerHero
        crumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios', href: '/servicios' }, { label: 'Escolar' }]}
        tag={escolarPage.hero.tag}
        title={<>¡Todo empieza cuando <Accent>lo entiendes</Accent>!</>}
        description={escolarPage.hero.description.map((p) => <p key={p}>{p}</p>)}
        actions={
          <>
            <WhatsAppButton url={wa} label="Solicitar información" variant="primary" pill />
            <a href="#areas" className={buttonClasses({ variant: 'neutral', pill: true })}>Ver áreas académicas</a>
          </>
        }
        media={
          <PhotoComposition
            src={fotoEscolar}
            alt="Estudiante escolar resolviendo ejercicios en su cuaderno durante una clase virtual con su docente"
            chips={[
              { icon: HandHeart, label: 'Acompañamiento constante' },
              { icon: Rocket, label: 'Crecimiento académico', tone: 'mist' },
            ]}
          />
        }
      />

      {/* 2. ¿Qué hacemos? */}
      <section aria-labelledby="what-title" className="bg-site-paper">
        <div className="container-wide section-y">
          <div className="reveal grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-20">
            <SectionIntro id="what-title" eyebrow="¿Qué hacemos?" title={escolar.approach.title} />
            <div className="max-w-[34rem] space-y-4 text-base leading-normal text-site-ink">
              <p>{escolar.approach.text}</p>
              <p>{escolar.intro}</p>
            </div>
          </div>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {escolarPage.what.map((w, i) => (
              <li key={w.title}><InfoCard icon={w.icon} tone={i === 1 ? 'green' : 'navy'} title={w.title} index={i}>{w.text}</InfoCard></li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Áreas académicas */}
      <section id="areas" aria-labelledby="areas-title" className="scroll-mt-28 bg-site-paper">
        <div className="container-wide pb-[var(--space-section-y)]">
          <SectionIntro id="areas-title" eyebrow="Áreas académicas" title="Cursos que reforzamos" description="Matemática y ciencias del colegio, explicadas con claridad y practicadas paso a paso." />
          <ul className="mt-10 grid gap-4 min-[420px]:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {escolar.areas.map((a, i) => {
              const Icon = a.icon
              return (
                <li key={a.name} className="reveal flex min-w-0 items-center gap-4 rounded-[1.5rem] border border-neutral-disabled/40 bg-site-paper p-4 shadow-overlay sm:p-5" style={delay((i % 4) * 70)}>
                  <span aria-hidden className={i % 2 ? 'grid size-12 shrink-0 place-items-center rounded-2xl bg-site-green-soft text-site-green-text [&_svg]:size-6' : 'grid size-12 shrink-0 place-items-center rounded-2xl bg-site-mist text-site-navy [&_svg]:size-6'}>
                    <Icon />
                  </span>
                  <span className="min-w-0 text-base leading-snug font-medium text-site-ink">{a.name}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* 4. ¿Por qué estudiar con ALPAS? */}
      <DarkBenefits id="why-title" eyebrow="Beneficios" title="¿Por qué estudiar con ALPAS?" items={alpasBenefits} />

      {/* 5. Modalidad, horarios e inversión */}
      <PracticalSection id="practical-title" items={practicalInfo} whatsappUrl={wa} />

      {/* 6. CTA final */}
      <FinalCta
        title={<>¿Quieres reforzar los cursos <Accent>del colegio</Accent>?</>}
        description="Escríbenos por WhatsApp, cuéntanos el grado y los cursos, y te enviamos la información del servicio Escolar."
        whatsappUrl={wa}
      />
    </>
  )
}
