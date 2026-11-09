import { buttonClasses } from '@grupo-laplace/ui'
import { MessageCircleQuestion, Rocket, UsersRound } from 'lucide-react'
import fotoUniversitario from '../assets/figma/servicio-universitario.webp'
import { Accent, DarkBenefits, FinalCta, IconTile, InfoCard, InnerHero, PhotoComposition, PracticalSection, SectionIntro } from '../components/site/SiteBlocks'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { practicalInfo, universitario as u, universitarioPage } from '../data/content'
import { whatsappUrl } from '../lib/contact'
import { usePageMeta } from '../lib/usePageMeta'

export default function Universitario() {
  usePageMeta('Universitario · Grupo ALPAS', u.hero.description)
  const wa = whatsappUrl('Hola, Grupo ALPAS. Quisiera información sobre el acompañamiento universitario.')
  return (
    <>
      {/* 1. Hero */}
      <InnerHero
        crumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios', href: '/servicios' }, { label: 'Universitario' }]}
        tag={universitarioPage.tag}
        title={<>Comprende tus cursos. <Accent>Avanza</Accent> con confianza.</>}
        description={
          <>
            <p>{u.hero.description}</p>
            <p>{u.intro}</p>
          </>
        }
        actions={
          <>
            <WhatsAppButton url={wa} label="Solicitar información" variant="primary" pill />
            <a href="#areas" className={buttonClasses({ variant: 'neutral', pill: true })}>Ver cursos</a>
          </>
        }
        media={
          <PhotoComposition
            src={fotoUniversitario}
            alt="Estudiante universitaria en una asesoría virtual de cálculo con su docente"
            chips={[
              { icon: UsersRound, label: 'Asesoría por curso' },
              { icon: Rocket, label: 'Crecimiento académico', tone: 'mist' },
            ]}
          />
        }
      />

      {/* 2. ¿Qué hacemos? — el acompañamiento es una secuencia, por eso va numerado */}
      <section aria-labelledby="what-title" className="bg-site-paper">
        <div className="container-wide section-y">
          <div className="reveal grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-20">
            <SectionIntro id="what-title" eyebrow="¿Qué hacemos?" title="Un acompañamiento según tu curso y tu ritmo" />
            <p className="max-w-[34rem] text-base leading-normal text-site-ink lg:mt-0">
              Partimos de lo que estás llevando en la universidad: revisamos los temas que te cuestan, los explicamos con claridad y los practicamos contigo.
            </p>
          </div>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {universitarioPage.what.map((w, i) => (
              <li key={w.title}>
                <InfoCard icon={w.icon} tone={i === 1 ? 'green' : 'navy'} title={w.title} index={i} aside={<span className="text-sm font-medium text-site-slate">Paso {i + 1}</span>}>
                  {w.text}
                </InfoCard>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3. Áreas académicas */}
      <section id="areas" aria-labelledby="areas-title" className="scroll-mt-28 bg-site-paper">
        <div className="container-wide pb-[var(--space-section-y)]">
          <SectionIntro id="areas-title" eyebrow="Áreas académicas" title="Cursos y áreas que reforzamos" description="Matemática, química, física, cálculo y otros cursos que puedes consultarnos." />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {u.areas.map((a, i) => (
              <li key={a.name}><InfoCard icon={a.icon} tone={i % 2 ? 'green' : 'navy'} title={a.name} index={i}>{a.text}</InfoCard></li>
            ))}
          </ul>
          <div className="reveal mt-5 flex flex-col gap-5 rounded-[1.5rem] border border-dashed border-site-steel/60 bg-site-mist/40 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <IconTile icon={MessageCircleQuestion} tone="mist" size="md" />
              <div>
                <h3 className="text-[1.1875rem] leading-[1.4] font-medium text-site-ink">¿Llevas otro curso?</h3>
                <p className="mt-1 text-base leading-normal text-site-ink/85">Escríbenos con el nombre del curso y te confirmamos si podemos acompañarte.</p>
              </div>
            </div>
            <WhatsAppButton url={whatsappUrl('Hola, Grupo ALPAS. Quisiera saber si pueden acompañarme en el curso de: ')} label="Consultar mi curso" variant="neutral" pill className="shrink-0" />
          </div>
        </div>
      </section>

      {/* 4. ¿Por qué estudiar con ALPAS? */}
      <DarkBenefits id="why-title" eyebrow="Beneficios" title="¿Por qué estudiar con ALPAS?" items={u.benefits} />

      {/* 5. Modalidad, horarios e inversión */}
      <PracticalSection id="practical-title" items={practicalInfo} whatsappUrl={wa} note="Dependen del curso y del periodo académico. Escríbenos y te enviamos la información vigente." />

      {/* 6. CTA final */}
      <FinalCta
        title={<>Tu próximo examen empieza <Accent>hoy</Accent></>}
        description="Cuéntanos qué curso llevas y qué temas te cuestan. Te respondemos por WhatsApp con la información del acompañamiento."
        whatsappUrl={wa}
      />
    </>
  )
}
