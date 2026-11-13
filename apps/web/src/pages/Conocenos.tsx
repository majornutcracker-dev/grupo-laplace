import { Link } from 'react-router-dom'
import { HandHeart, Rocket } from 'lucide-react'
import { buttonClasses } from '@grupo-alpas/ui'
import fotoEstudiantes from '../assets/figma/hero-estudiantes.webp'
import fotoDocente from '../assets/figma/nosotros-docente.webp'
import { Accent, FinalCta, InfoCard, InnerHero, MediaText, PhotoComposition, SectionIntro, TeacherProfileCard } from '../components/site/SiteBlocks'
import { conocenos as c, home, teachers, valueIcons } from '../data/content'
import { whatsappUrl } from '../lib/contact'
import { usePageMeta } from '../lib/usePageMeta'

export default function Conocenos() {
  usePageMeta('Conócenos · Grupo ALPAS', c.who)
  return (
    <>
      {/* 1. Hero */}
      <InnerHero
        crumbs={[{ label: 'Inicio', href: '/' }, { label: 'Conócenos' }]}
        tag="APRENDE · CRECE · AVANZA"
        title={<>Un equipo que acompaña cada etapa del <Accent>aprendizaje</Accent></>}
        description={<p>{c.hero.description}</p>}
        actions={
          <>
            <Link to="/servicios" className={buttonClasses({ variant: 'primary', pill: true })}>Explora nuestros servicios</Link>
            <a href="#equipo" className={buttonClasses({ variant: 'neutral', pill: true })}>Conoce al equipo</a>
          </>
        }
        media={
          <PhotoComposition
            cutout
            src={fotoEstudiantes}
            alt="Dos estudiantes de Grupo ALPAS con polos de la marca, mochilas y cuadernos"
            chips={[
              { icon: HandHeart, label: 'Acompañamiento constante' },
              { icon: Rocket, label: 'Crecimiento académico', tone: 'mist' },
            ]}
          />
        }
      />

      {/* 2. ¿Quiénes somos? */}
      <MediaText
        id="who-title"
        eyebrow="¿Quiénes somos?"
        title={home.about.title}
        media={<PhotoComposition ratio="1312/1199" src={fotoDocente} alt="Docente de Grupo ALPAS saludando con un libro de Matemáticas en la mano" />}
      >
        <p>{c.who}</p>
        {home.about.body.slice(1).map((p) => <p key={p}>{p}</p>)}
      </MediaText>

      {/* 3. Nuestra propuesta educativa + 4. Nuestro propósito */}
      <section aria-label="Propuesta y propósito" className="bg-site-paper">
        <div className="container-wide grid gap-5 pb-[var(--space-section-y)] lg:grid-cols-2">
          <article aria-labelledby="proposal-title" className="reveal rounded-[1.5rem] border border-neutral-disabled/40 bg-site-paper p-8 shadow-overlay sm:p-12">
            <SectionIntro id="proposal-title" eyebrow="Nuestra propuesta educativa" title="Primero entender, después avanzar" />
            <p className="mt-6 text-base leading-normal text-site-ink">{c.proposal}</p>
            <p className="mt-4 text-base leading-normal text-site-ink">Explicamos cada tema paso a paso y partimos de lo que cada estudiante necesita reforzar.</p>
          </article>
          <article aria-labelledby="purpose-title" className="reveal relative overflow-hidden rounded-[1.5rem] bg-site-navy p-8 sm:p-12">
            <p className="site-eyebrow text-site-steel">Nuestro propósito</p>
            <h2 id="purpose-title" className="site-display mt-2 text-white">{c.purpose}</h2>
            <span aria-hidden className="absolute -right-10 -bottom-10 size-40 rounded-pill bg-site-green/25" />
          </article>
        </div>
      </section>

      {/* 5. Valores y principios */}
      <section aria-labelledby="values-title" className="bg-site-paper">
        <div className="container-wide pb-[var(--space-section-y)]">
          <SectionIntro id="values-title" eyebrow="Valores y principios" title="Lo que nos representa" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.values.map((v, i) => (
              <li key={v.title}><InfoCard icon={valueIcons[i]} tone={i % 2 ? 'green' : 'navy'} title={v.title} index={i}>{v.text}</InfoCard></li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Nuestro equipo docente */}
      <section id="equipo" aria-labelledby="team-title" className="scroll-mt-28 bg-site-paper">
        <div className="container-wide pb-[var(--space-section-y)]">
          <SectionIntro id="team-title" eyebrow="Nuestro equipo" title={home.team.title} description="En ALPAS encontrarás el acompañamiento que necesitas para fortalecer tus conocimientos, superar nuevos retos y seguir creciendo." className="max-w-[44rem]" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {teachers.map((t, i) => <TeacherProfileCard key={t.name ?? i} index={i} teacher={t} />)}
          </div>
        </div>
      </section>

      {/* 7. CTA final */}
      <FinalCta
        title={<>¡Tu próximo paso <Accent>comienza aquí</Accent>!</>}
        description="Conoce cómo podemos acompañarte en tu aprendizaje. Estamos listos para ayudarte."
        whatsappUrl={whatsappUrl()}
      />
    </>
  )
}
