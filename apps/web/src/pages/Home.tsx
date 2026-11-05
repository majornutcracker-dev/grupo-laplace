import { Link } from 'react-router-dom'
import { ChevronRight, Compass, GraduationCap, MessageCircle, School } from 'lucide-react'
import { Tag, buttonClasses, cn } from '@grupo-laplace/ui'
import { BenefitCards, CtaBand, SectionDivider, SectionHeading, TeacherCard } from '../components/Blocks'
import { ServiceExplorer } from '../components/ServiceExplorer'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { home, services, teachers, type Service } from '../data/content'
import { Burst } from '../illustrations/Doodles'
import { Person, type PersonProps } from '../illustrations/Person'
import { HAIR, SKIN } from '../illustrations/palette'
import { GuidanceScene, RecordedScene, StudyGroupScene, TutoringScene } from '../illustrations/Scenes'
import { whatsappUrl } from '../lib/contact'
import { delay } from '../lib/motion'
import { usePageMeta } from '../lib/usePageMeta'

const heroChips = [
  { icon: School, label: 'Refuerzo académico' },
  { icon: GraduationCap, label: 'Formación universitaria' },
  { icon: Compass, label: 'Orientación vocacional' },
]
const subjects = ['Matemática', 'Cálculo', 'Química', 'Física', 'Cursos del colegio']
const byId = (id: Service['id']) => services.find((s) => s.id === id)!

/* ── Cards del hero ────────────────────────────────────────────────── */

/** Card alta con retrato ilustrado: lleva al servicio (como las cards de publicaciones de la referencia). */
function PortraitCard({ service, person, mediaClass, className, d }: { service: Service; person: PersonProps; mediaClass: string; className?: string; d: number }) {
  const Icon = service.icon
  return (
    <Link
      to={service.to!}
      data-brand={service.id === 'escolar' ? 'laplace' : undefined}
      className={cn('pop-in glass card-link group flex flex-col rounded-[1.75rem] p-2.5 text-left', className)}
      style={delay(d)}
    >
      <span className="flex items-center justify-between gap-2 px-2 pt-1 pb-3">
        <span className="type-label text-text-heading">{service.name}</span>
        <Icon className="size-5 text-text-heading" aria-hidden />
      </span>
      <span aria-hidden className={cn('card-media block aspect-[4/5] rounded-[1.25rem]', mediaClass)}>
        <Person className="absolute inset-x-0 bottom-0 mx-auto h-[88%] w-auto" {...person} />
      </span>
      <span className="type-body-sm block px-2 pt-4 text-text-body">{service.summary}</span>
      <span className="type-caption flex items-center justify-between gap-2 px-2 pt-3 pb-2 text-text-muted">
        {service.audience}
        <ChevronRight className="size-4 text-text-heading transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  )
}

/** Tile pequeño con escena ilustrada y etiqueta superpuesta. */
function SceneTile({ service, Scene, d }: { service: Service; Scene: typeof GuidanceScene; d: number }) {
  return (
    <Link
      to={service.to ?? `/servicios#${service.id}`}
      className="pop-in glass card-link group block rounded-[1.5rem] p-2"
      style={delay(d)}
    >
      <span aria-hidden className="card-media block aspect-square rounded-[1.125rem]">
        <Scene />
      </span>
      <span className="type-caption flex items-center justify-between gap-2 px-1.5 pt-2.5 pb-1 text-text-heading">
        {service.name}
        {service.comingSoon ? <Tag color="warning" className="px-2 py-0 text-[0.6875rem]">Pronto</Tag> : <ChevronRight className="size-3.5" aria-hidden />}
      </span>
    </Link>
  )
}

/** Card central: qué cursos acompañamos y acceso directo a WhatsApp (sin testimonios inventados). */
function SubjectsCard({ d }: { d: number }) {
  const wa = whatsappUrl('Hola, Grupo ALPAS. Quisiera reforzar un curso.')
  const glyphs = ['+', '×', '√', 'π', '∫']
  return (
    <div className="pop-in rounded-[1.75rem] bg-white p-6 text-left shadow-[0_24px_48px_-28px_rgb(1_29_53/0.45)] ring-1 ring-white sm:p-7" style={delay(d)}>
      <div aria-hidden className="flex gap-2">
        {glyphs.map((g) => (
          <span key={g} className="grid size-8 place-items-center rounded-pill bg-surface-accent text-[1.05rem] font-semibold text-green-deep">{g}</span>
        ))}
      </div>
      <p className="type-h4 mt-5 text-text-heading">¿Qué curso necesitas entender mejor?</p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Cursos que acompañamos">
        {subjects.map((s) => (
          <li key={s} className="type-caption card rounded-pill px-3 py-1.5 text-text-heading">{s}</li>
        ))}
      </ul>
      <div className="mt-6 flex items-center gap-3 border-t border-border-subtle pt-5">
        <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-pill bg-white ring-1 ring-border-subtle">
          <img src={`${import.meta.env.BASE_URL}favicon.png`} alt="" className="size-8 rounded-sm" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="type-label block text-text-heading">Grupo ALPAS</span>
          <span className="type-caption block text-text-muted">Cuéntanos tu curso y te orientamos</span>
        </span>
        {wa ? (
          <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="Escribir a Grupo ALPAS por WhatsApp" className="grid size-11 shrink-0 place-items-center rounded-pill bg-green-deep text-white transition-colors hover:bg-primary-5">
            <MessageCircle className="size-5" aria-hidden />
          </a>
        ) : (
          <Link to="/contacto" aria-label="Contactar a Grupo ALPAS" className="grid size-11 shrink-0 place-items-center rounded-pill bg-green-deep text-white transition-colors hover:bg-primary-5">
            <MessageCircle className="size-5" aria-hidden />
          </Link>
        )}
      </div>
    </div>
  )
}

/* ── Hero ──────────────────────────────────────────────────────────── */
function Hero() {
  const { hero } = home
  return (
    <section aria-labelledby="hero-title" className="hero-sky relative overflow-hidden">
      <div aria-hidden className="hero-grid absolute inset-0" />

      <div className="container-wide relative pt-12 text-center sm:pt-16 lg:pt-20">
        <p className="pop-in glass-dark type-caption inline-flex rounded-pill px-4 py-1.5 tracking-[0.08em] text-white">{hero.tag}</p>
        <h1 id="hero-title" className="type-display pop-in mx-auto mt-6 max-w-[15ch] text-white" style={delay(80)}>
          {hero.title}
        </h1>
        <p className="type-body-lg pop-in mx-auto mt-6 max-w-[36rem] text-white/85" style={delay(160)}>{hero.description}</p>
        <div className="pop-in mt-9 flex flex-col justify-center gap-3 sm:flex-row" style={delay(240)}>
          <WhatsAppButton variant="inverse" pill />
          <Link to="/servicios" className={buttonClasses({ variant: 'glass', pill: true })}>
            Explorar servicios
            <ChevronRight className="size-4.5" aria-hidden />
          </Link>
        </div>
        <ul className="pop-in mt-10 flex flex-wrap justify-center gap-2.5" aria-label="Lo que ofrecemos" style={delay(320)}>
          {heroChips.map(({ icon: Icon, label }) => (
            <li key={label} className="glass-dark type-label inline-flex items-center gap-2 rounded-pill px-4 py-2 text-white">
              <Icon className="size-4.5 text-green-medium" aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </div>

      {/* Mosaico de cards: retratos a los lados, cursos al centro */}
      <div className="container-wide relative mt-14 lg:mt-20">
        <div className="hero-fade mx-auto grid max-w-[66rem] grid-cols-2 items-start gap-3 pb-6 sm:gap-4 lg:grid-cols-[1fr_1.45fr_1fr] lg:gap-5">
          <PortraitCard
            service={byId('escolar')}
            mediaClass="bg-brand-secondary"
            person={{ skin: SKIN.light, hair: HAIR.auburn, hairStyle: 'ponytail', shirt: 'fill-white', collar: 'fill-brand-secondary', holding: 'book' }}
            className="order-2 lg:order-1 lg:mt-10"
            d={420}
          />
          <div className="order-1 col-span-2 grid gap-3 sm:gap-4 lg:order-2 lg:col-span-1 lg:gap-5">
            <SubjectsCard d={360} />
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
              <SceneTile service={byId('orientacion')} Scene={GuidanceScene} d={560} />
              <SceneTile service={byId('grabados')} Scene={RecordedScene} d={640} />
            </div>
          </div>
          <PortraitCard
            service={byId('universitario')}
            mediaClass="bg-surface-muted"
            person={{ skin: SKIN.tan, hair: HAIR.black, hairStyle: 'short', glasses: true, shirt: 'fill-brand-primary', holding: 'tablet' }}
            className="order-3 lg:mt-10"
            d={480}
          />
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  usePageMeta(
    'Grupo ALPAS · Refuerzo escolar, universitario y orientación vocacional',
    'Grupo ALPAS acompaña tu aprendizaje: refuerzo académico escolar, cursos universitarios de matemática, cálculo, química y física, y orientación vocacional.',
  )
  const { about, why, team, cta } = home
  return (
    <>
      <Hero />

      {/* Presentación */}
      <section aria-labelledby="about-title" className="container-wide section-y grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div className="relative order-last mx-auto w-full max-w-md lg:order-first lg:max-w-none">
          <div className="reveal card card-frame">
            <div className="card-media aspect-square"><StudyGroupScene /></div>
          </div>
          <div className="reveal float-y card-white absolute -right-3 -bottom-6 px-5 py-4 shadow-raised sm:-right-8" style={delay(200)}>
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
          <Link to="/conocenos" className={buttonClasses({ variant: 'primary', pill: true }, 'mt-9')}>Conoce a Grupo ALPAS</Link>
        </div>
      </section>

      <SectionDivider />

      {/* Servicios en pestañas */}
      <section aria-labelledby="services-title" className="container-wide section-y">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading id="services-title" eyebrow="Nuestros servicios" title={home.services.title} description={home.services.description} />
          <Link to="/servicios" className={buttonClasses({ variant: 'primary', size: 'sm', pill: true }, 'self-start lg:self-auto')}>
            Ver todos los servicios
            <ChevronRight className="size-4" aria-hidden />
          </Link>
        </div>
        <div className="reveal mt-12"><ServiceExplorer items={services} /></div>
      </section>

      <SectionDivider />

      {/* Por qué elegirnos */}
      <section aria-labelledby="why-title" className="container-wide section-y">
        <SectionHeading id="why-title" align="center" title={why.title} />
        <div className="mt-12"><BenefitCards items={why.items} /></div>
      </section>

      <SectionDivider />

      {/* Equipo */}
      <section aria-labelledby="team-title" className="container-wide section-y">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading id="team-title" eyebrow="Equipo docente" title={team.title} />
          <Link to="/conocenos" className={buttonClasses({ variant: 'outlined', size: 'sm', pill: true }, 'self-start lg:self-auto')}>Conoce al equipo</Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((t, i) => <TeacherCard key={i} index={i} teacher={t} />)}
        </div>
      </section>

      <CtaBand tone="green" title={cta.title} description={cta.description} art={<TutoringScene bg={false} />} />
    </>
  )
}
