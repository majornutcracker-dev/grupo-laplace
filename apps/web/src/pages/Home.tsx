import { Link } from 'react-router-dom'
import { PhotoFrame, PlusMark, buttonClasses } from '@grupo-laplace/ui'
import { BenefitColumns, CtaBand, SectionHeading, ServiceIndex, TeacherCard } from '../components/Blocks'
import { home, services, teachers } from '../data/content'
import { usePageMeta } from '../lib/usePageMeta'

export default function Home() {
  usePageMeta(
    'Grupo ALPAS · Refuerzo escolar, universitario y orientación vocacional',
    'Grupo ALPAS acompaña tu aprendizaje: refuerzo académico escolar, cursos universitarios de matemática, cálculo, química y física, y orientación vocacional.',
  )
  const { hero, about, why, team, cta } = home
  return (
    <>
      {/* 1. Hero */}
      <section aria-labelledby="hero-title" className="overflow-hidden bg-white">
        <div className="container-wide grid items-center gap-12 pt-10 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:pt-16 lg:pb-24">
          <div>
            <p className="type-label tracking-[0.08em] text-text-accent">{hero.tag}</p>
            <h1 id="hero-title" className="type-display mt-5 max-w-[14ch]">{hero.title}</h1>
            <p className="type-body-lg mt-6 max-w-[34rem] text-text-body">{hero.description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/servicios" className={buttonClasses({ variant: 'primary' })}>Explorar servicios</Link>
              <Link to="/conocenos" className={buttonClasses({ variant: 'outlined' })}>Conócenos</Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3" aria-label="Lo que ofrecemos">
              {hero.complement.map((c) => (
                <li key={c} className="type-label inline-flex items-center gap-2.5 text-text-heading">
                  <PlusMark className="size-3" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[30rem] lg:max-w-none">
            <div aria-hidden className="hero-block frame-tab absolute inset-0 translate-x-5 translate-y-5 bg-surface-inverse sm:translate-x-8 sm:translate-y-8" />
            <PhotoFrame className="hero-photo relative" alt={hero.photoNote} ratio="4/5" />
            <PlusMark className="hero-plus absolute -top-5 -left-5 size-14 sm:size-16" />
          </div>
        </div>
      </section>

      {/* 2. Presentación */}
      <section aria-labelledby="about-title" className="bg-surface-subtle">
        <div className="container-wide section-y grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <PhotoFrame alt={about.photoNote} ratio="1/1" className="order-last mx-auto w-full max-w-md lg:order-first lg:max-w-none" />
          <div>
            <h2 id="about-title" className="type-h2 max-w-[20ch]">{about.title}</h2>
            {about.body.map((p) => (
              <p key={p} className="type-body-lg mt-5 max-w-[36rem] text-text-body">{p}</p>
            ))}
            <Link to="/conocenos" className={buttonClasses({ variant: 'link' }, 'mt-8')}>Conoce a Grupo ALPAS</Link>
          </div>
        </div>
      </section>

      {/* 3. Servicios */}
      <section aria-labelledby="services-title" className="container-wide section-y">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading id="services-title" title={home.services.title} description={home.services.description} />
          <Link to="/servicios" className={buttonClasses({ variant: 'outlined', size: 'sm' }, 'self-start lg:self-auto')}>Ver todos los servicios</Link>
        </div>
        <div className="mt-12">
          <ServiceIndex items={services} />
        </div>
      </section>

      {/* 4. Por qué elegirnos */}
      <section aria-labelledby="why-title" className="bg-surface-inverse">
        <div className="container-wide section-y">
          <SectionHeading id="why-title" inverse title={why.title} />
          <div className="mt-12">
            <BenefitColumns inverse items={why.items} />
          </div>
        </div>
      </section>

      {/* 5. Equipo */}
      <section aria-labelledby="team-title" className="container-wide section-y">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading id="team-title" title={team.title} />
          <Link to="/conocenos" className={buttonClasses({ variant: 'outlined', size: 'sm' }, 'self-start lg:self-auto')}>Conoce al equipo</Link>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((t, i) => <TeacherCard key={i} teacher={t} />)}
        </div>
      </section>

      {/* 6. CTA final */}
      <CtaBand title={cta.title} description={cta.description} />
    </>
  )
}
