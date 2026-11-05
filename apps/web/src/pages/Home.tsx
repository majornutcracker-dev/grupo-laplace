import { Link } from 'react-router-dom'
import { CheckCircle2, Compass, GraduationCap, HandHeart, School } from 'lucide-react'
import { PlusMark, buttonClasses } from '@grupo-laplace/ui'
import { ArtFrame, BenefitCards, CtaBand, IconTile, SectionHeading, ServiceTiles, TeacherCard } from '../components/Blocks'
import { home, services, teachers } from '../data/content'
import { Burst, CurlyArrow, Dot, Sparkle, Squiggle } from '../illustrations/Doodles'
import { Person } from '../illustrations/Person'
import { HAIR, SKIN } from '../illustrations/palette'
import { StudyGroupScene, TutoringScene } from '../illustrations/Scenes'
import { delay } from '../lib/motion'
import { usePageMeta } from '../lib/usePageMeta'

const pillars = [
  { icon: School, title: 'Refuerzo académico', text: 'Para estudiantes de nivel escolar.' },
  { icon: GraduationCap, title: 'Formación universitaria', text: 'Matemática, cálculo, química y física.' },
  { icon: Compass, title: 'Orientación vocacional', text: 'Para elegir tu carrera con confianza.' },
]

/** Collage del hero: cuatro retratos ilustrados en formas distintas, como en las referencias */
function HeroCollage() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none" aria-hidden>
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <div className="pop-in aspect-square overflow-hidden rounded-pill bg-brand-secondary" style={delay(120)}>
          <Person className="mt-[8%] size-full" skin={SKIN.light} hair={HAIR.auburn} hairStyle="ponytail" shirt="fill-white" collar="fill-brand-secondary" holding="book" />
        </div>
        <div className="pop-in frame-tab aspect-square overflow-hidden bg-surface-muted" style={delay(220)}>
          <Person className="mt-[8%] size-full" skin={SKIN.tan} hair={HAIR.black} hairStyle="short" glasses shirt="fill-brand-primary" wave />
        </div>
        <div className="pop-in aspect-square overflow-hidden rounded-xl bg-brand-primary" style={delay(320)}>
          <Person className="mt-[8%] size-full" skin={SKIN.deep} hair={HAIR.black} hairStyle="curly" shirt="fill-brand-secondary" collar="fill-white" holding="notebook" />
        </div>
        <div className="pop-in aspect-square overflow-hidden rounded-tl-xl rounded-tr-xl rounded-br-[50%] rounded-bl-xl bg-surface-accent" style={delay(420)}>
          <Person className="mt-[8%] size-full" skin={SKIN.medium} hair={HAIR.brown} hairStyle="bun" shirt="fill-brand-primary" holding="tablet" />
        </div>
      </div>

      {/* Tarjetas flotantes con contenido real del servicio */}
      <div className="pop-in float-y absolute -bottom-6 -left-3 flex items-center gap-3 rounded-lg bg-white py-3 pr-5 pl-3 shadow-raised sm:-left-8" style={delay(620)}>
        <IconTile icon={HandHeart} tone={1} className="size-10 rounded-md [&_svg]:size-5" />
        <span className="type-label text-text-heading">Acompañamiento<br />cercano</span>
      </div>
      <div className="pop-in float-y absolute top-[42%] -right-3 hidden items-center gap-2 rounded-pill bg-white px-4 py-2 shadow-raised sm:flex" style={{ ...delay(760), animationDuration: '7s' }}>
        <CheckCircle2 className="size-4.5 text-text-accent" />
        <span className="type-caption text-text-heading">Escolar y universitario</span>
      </div>

      <PlusMark className="pop-in float-y absolute -top-6 -right-4 size-14" />
      <Sparkle className="float-y absolute -top-3 left-[46%] size-7" />
      <Dot className="float-y bottom-[30%] -left-4 size-3 bg-brand-secondary" />
      <Dot className="top-[8%] -left-2 size-2 bg-brand-primary" />
      <Dot className="-right-2 bottom-[12%] size-2.5 bg-brand-secondary" />
    </div>
  )
}

export default function Home() {
  usePageMeta(
    'Grupo ALPAS · Refuerzo escolar, universitario y orientación vocacional',
    'Grupo ALPAS acompaña tu aprendizaje: refuerzo académico escolar, cursos universitarios de matemática, cálculo, química y física, y orientación vocacional.',
  )
  const { hero, about, why, team, cta } = home
  return (
    <>
      {/* 1. Hero */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden bg-surface-subtle">
        <div aria-hidden className="absolute -top-32 -right-40 size-[34rem] rounded-pill bg-surface-accent" />
        <div className="container-wide relative grid items-center gap-16 pt-10 pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:pt-16 lg:pb-28">
          <div>
            <p className="pop-in inline-flex rounded-pill bg-white px-4 py-1.5 type-caption tracking-[0.08em] text-text-accent shadow-neutral">{hero.tag}</p>
            <h1 id="hero-title" className="type-display pop-in mt-6 max-w-[15ch]" style={delay(80)}>
              Aprender mejor hoy. Llegar{' '}
              <span className="relative inline-block whitespace-nowrap">
                más lejos
                <Squiggle className="absolute -bottom-2 left-0 h-3 w-full" />
              </span>{' '}
              mañana.
            </h1>
            <p className="type-body-lg pop-in mt-7 max-w-[34rem] text-text-body" style={delay(160)}>{hero.description}</p>
            <div className="pop-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={delay(240)}>
              <Link to="/servicios" className={buttonClasses({ variant: 'primary' })}>Explorar servicios</Link>
              <Link to="/conocenos" className={buttonClasses({ variant: 'neutral' })}>Conócenos</Link>
              <CurlyArrow className="ml-2 hidden h-12 w-24 xl:block" />
            </div>
            <ul className="pop-in mt-10 flex flex-wrap gap-x-6 gap-y-3" aria-label="Lo que ofrecemos" style={delay(320)}>
              {hero.complement.map((c) => (
                <li key={c} className="type-label inline-flex items-center gap-2 text-text-heading">
                  <CheckCircle2 className="size-5 text-text-accent" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <HeroCollage />
        </div>
      </section>

      {/* Franja de pilares (en lugar de cifras que no tenemos) */}
      <section aria-label="Nuestros pilares" className="container-wide relative -mt-10 lg:-mt-14">
        <ul className="reveal grid gap-px overflow-hidden rounded-xl bg-white/10 shadow-raised md:grid-cols-3">
          {pillars.map(({ icon, title, text }, i) => (
            <li key={title} className="flex items-center gap-4 bg-surface-inverse px-6 py-6 sm:px-8">
              <IconTile icon={icon} tone={i === 1 ? 1 : 2} className="size-12" />
              <div>
                <p className="type-h5 text-white">{title}</p>
                <p className="type-body-sm text-text-inverse-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 2. Presentación */}
      <section aria-labelledby="about-title" className="container-wide section-y grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div className="relative order-last mx-auto w-full max-w-md lg:order-first lg:max-w-none">
          <ArtFrame className="reveal aspect-square"><StudyGroupScene /></ArtFrame>
          <div className="reveal float-y absolute -right-3 -bottom-6 rounded-lg bg-white px-5 py-4 shadow-raised sm:-right-8" style={delay(200)}>
            <p className="type-caption text-text-muted">En cada etapa</p>
            <p className="type-label text-text-heading">Del colegio a tu carrera</p>
          </div>
          <Burst className="absolute -top-6 -left-6 size-10" />
        </div>
        <div className="reveal">
          <h2 id="about-title" className="type-h2 max-w-[20ch]">{about.title}</h2>
          {about.body.map((p) => (
            <p key={p} className="type-body-lg mt-5 max-w-[36rem] text-text-body">{p}</p>
          ))}
          <Link to="/conocenos" className={buttonClasses({ variant: 'primary' }, 'mt-9')}>Conoce a Grupo ALPAS</Link>
        </div>
      </section>

      {/* 3. Servicios */}
      <section aria-labelledby="services-title" className="bg-surface-subtle">
        <div className="container-wide section-y">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading id="services-title" title={home.services.title} description={home.services.description} />
            <Link to="/servicios" className={buttonClasses({ variant: 'outlined', size: 'sm' }, 'self-start lg:self-auto')}>Ver todos los servicios</Link>
          </div>
          <div className="mt-12"><ServiceTiles items={services} /></div>
        </div>
      </section>

      {/* 4. Por qué elegirnos */}
      <section aria-labelledby="why-title" className="container-wide section-y">
        <SectionHeading id="why-title" align="center" title={why.title} />
        <div className="mt-12"><BenefitCards items={why.items} /></div>
      </section>

      {/* 5. Equipo */}
      <section aria-labelledby="team-title" className="bg-surface-subtle">
        <div className="container-wide section-y">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading id="team-title" title={team.title} />
            <Link to="/conocenos" className={buttonClasses({ variant: 'outlined', size: 'sm' }, 'self-start lg:self-auto')}>Conoce al equipo</Link>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((t, i) => <TeacherCard key={i} index={i} teacher={t} />)}
          </div>
        </div>
      </section>

      {/* 6. CTA final */}
      <div className="pt-[var(--space-section-y)]">
        <CtaBand tone="green" title={cta.title} description={cta.description} art={<TutoringScene bg={false} />} />
      </div>
    </>
  )
}
