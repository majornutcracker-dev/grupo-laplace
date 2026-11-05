import { Link } from 'react-router-dom'
import { Breadcrumbs, PhotoFrame, buttonClasses, cn } from '@grupo-laplace/ui'
import { CtaBand, PracticalInfo, SectionHeading, TeacherCard } from '../components/Blocks'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { laplaceConfig } from '../config/site'
import { escolar, teachers } from '../data/content'
import { laplaceWhatsappUrl } from '../lib/contact'
import { usePageMeta } from '../lib/usePageMeta'

/** Triángulo Δ: recurso geométrico propio de Grupo Laplace (sus "A" del logotipo). */
function DeltaMark({ className, tone = 'accent' }: { className?: string; tone?: 'accent' | 'secondary' | 'primary' }) {
  const fill = { accent: 'fill-brand-accent', secondary: 'fill-brand-secondary', primary: 'fill-brand-primary' }[tone]
  return (
    <svg aria-hidden viewBox="0 0 40 36" className={cn('size-10', className)}>
      <path d="M20 2 38 34H2Z" className={cn(fill, 'stroke-none')} />
      <path d="M20 14 29 30H11Z" className="fill-white" />
    </svg>
  )
}

/** Logotipo de Laplace: imagen oficial si está configurada; mientras tanto, el nombre en texto con sus Δ. */
function LaplaceWordmark({ className }: { className?: string }) {
  if (laplaceConfig.logoSrc) return <img src={laplaceConfig.logoSrc} alt="Grupo Laplace" className={cn('h-14 w-auto', className)} />
  return (
    <p className={cn('leading-none text-brand-primary', className)} aria-label="Grupo Laplace">
      <span aria-hidden className="block text-[0.95rem] tracking-[0.22em]">GRUPO</span>
      <span aria-hidden className="mt-1 block text-[2rem] font-semibold tracking-[0.04em]">
        L<span className="text-brand-accent">Δ</span>PL<span className="text-brand-accent">Δ</span>CE
      </span>
    </p>
  )
}

export default function Escolar() {
  usePageMeta('Escolar con Grupo Laplace · Grupo ALPAS', `${laplaceConfig.tagline} Refuerzo escolar en matemática y ciencias con Grupo Laplace.`)
  const wa = laplaceWhatsappUrl('Hola, Grupo Laplace. Quisiera información sobre el refuerzo escolar.')
  return (
    <div data-brand="laplace">
      {/* Hero con la identidad de Laplace */}
      <section aria-labelledby="page-title" className="relative overflow-hidden bg-white">
        <div className="container-wide grid items-center gap-12 pt-8 pb-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pt-12 lg:pb-24">
          <div>
            <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Servicios', href: '/servicios' }, { label: 'Escolar' }]} renderLink={(href, label) => <Link to={href}>{label}</Link>} />
            <LaplaceWordmark className="mt-10" />
            <h1 id="page-title" className="type-display mt-8 max-w-[16ch]">{laplaceConfig.tagline}</h1>
            <p className="type-body-lg mt-6 max-w-[34rem] text-text-body">{escolar.intro}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton url={wa} variant="primary" />
              <a href="#areas" className={buttonClasses({ variant: 'outlined' })}>Ver áreas académicas</a>
            </div>
            <p className="type-caption mt-8 text-text-muted">Servicio Escolar presentado por Grupo ALPAS.</p>
          </div>
          <div className="relative mx-auto w-full max-w-[30rem] lg:max-w-none">
            <div aria-hidden className="absolute -right-4 -bottom-4 size-2/3 rounded-xl bg-surface-accent" />
            <PhotoFrame className="relative" alt={escolar.photoNote} ratio="4/5" />
            <DeltaMark className="absolute -top-5 -left-4 size-14" />
            <DeltaMark tone="secondary" className="absolute right-6 -bottom-6 size-10" />
          </div>
        </div>
      </section>

      {/* Acompañamiento escolar */}
      <section aria-labelledby="approach-title" className="bg-surface-muted">
        <div className="container-wide section-y grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-20">
          <h2 id="approach-title" className="type-h2 max-w-[16ch]">{escolar.approach.title}</h2>
          <p className="type-body-lg max-w-[36rem] text-text-body">{escolar.approach.text}</p>
        </div>
      </section>

      {/* Áreas académicas */}
      <section id="areas" aria-labelledby="areas-title" className="container-wide section-y">
        <SectionHeading id="areas-title" title="Áreas académicas" description="Matemática y ciencias para estudiantes de nivel escolar." />
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {escolar.areas.map(({ name, icon: Icon }, i) => (
            <li
              key={name}
              className={cn(
                'flex min-h-28 flex-col justify-between gap-4 rounded-xl p-5',
                i % 3 === 0 ? 'bg-brand-primary text-white' : i % 3 === 1 ? 'bg-surface-accent text-text-heading' : 'bg-surface-muted text-text-heading',
              )}
            >
              <Icon className={cn('size-6', i % 3 === 0 ? 'text-brand-secondary' : 'text-brand-primary')} aria-hidden />
              <span className="type-h5">{name}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Beneficios */}
      <section aria-labelledby="benefits-title" className="bg-surface-inverse">
        <div className="container-wide section-y">
          <SectionHeading id="benefits-title" inverse title="Por qué estudiar con Grupo Laplace" />
          <ul className="mt-12 grid gap-10 md:grid-cols-3">
            {escolar.benefits.map((b) => (
              <li key={b.title}>
                <DeltaMark className="size-9" />
                <h3 className="type-h4 mt-5 text-white">{b.title}</h3>
                <p className="type-body mt-2 text-white/85">{b.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Modalidad, horarios e inversión: sin datos inventados */}
      <section aria-label="Modalidad, horarios e inversión" className="container-wide section-y">
        <PracticalInfo whatsappUrl={wa} />
      </section>

      {/* Docentes */}
      <section aria-labelledby="team-title" className="bg-surface-subtle">
        <div className="container-wide section-y">
          <SectionHeading id="team-title" title="Docentes de Grupo Laplace" description="Presentaremos aquí al equipo que acompaña a cada estudiante." />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((t, i) => <TeacherCard key={i} teacher={t} />)}
          </div>
        </div>
      </section>

      <div className="pt-[var(--space-section-y)]">
        <CtaBand title="¿Listo para entender tus cursos?" description="Escríbenos y te contamos cómo acompañamos a tu hijo o hija en el colegio."
          whatsappUrl={wa}
          decoration={
            <>
              <DeltaMark className="absolute top-8 right-8 size-16 sm:size-20" />
              <DeltaMark tone="secondary" className="absolute right-32 bottom-10 hidden size-8 sm:block" />
            </>
          }
        />
      </div>
    </div>
  )
}
