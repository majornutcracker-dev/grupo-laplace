import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { CalendarClock, ChevronRight, Laptop, Wallet } from 'lucide-react'
import { Accordion, Breadcrumbs, PhotoFrame, PlusMark, Tag, cn } from '@grupo-laplace/ui'
import type { Service, Teacher } from '../data/content'
import { Sparkle } from '../illustrations/Doodles'
import { TutoringScene } from '../illustrations/Scenes'
import { serviceScenes } from '../illustrations/serviceScenes'
import { delay } from '../lib/motion'
import { WhatsAppButton } from './WhatsAppButton'

/* Tonos de los cuadros de icono, en rotación (inspirado en las referencias, dentro de la paleta) */
const iconTones = [
  'bg-brand-primary text-white',
  'bg-brand-secondary text-white',
  'bg-surface-accent text-text-accent',
  'bg-surface-muted text-text-heading',
]

export function IconTile({ icon: Icon, tone = 0, className }: { icon: LucideIcon; tone?: number; className?: string }) {
  return (
    <span aria-hidden className={cn('grid size-14 shrink-0 place-items-center rounded-lg [&_svg]:size-6.5', iconTones[tone % iconTones.length], className)}>
      <Icon />
    </span>
  )
}

/* ── Encabezado de sección ─────────────────────────────────────────── */
/** Etiqueta en píldora sobre un título (como en la referencia). Úsala solo donde aporte contexto. */
export function SectionTag({ children, inverse, className }: { children: ReactNode; inverse?: boolean; className?: string }) {
  return (
    <p className={cn('type-caption inline-flex rounded-pill px-3.5 py-1', inverse ? 'glass-dark text-white' : 'card rounded-pill text-text-heading', className)}>
      {children}
    </p>
  )
}

export function SectionHeading({ title, description, eyebrow, inverse, id, align = 'left', className }: { title: string; description?: ReactNode; eyebrow?: string; inverse?: boolean; id?: string; align?: 'left' | 'center'; className?: string }) {
  return (
    <div className={cn('max-w-[40rem]', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <SectionTag inverse={inverse} className="mb-5">{eyebrow}</SectionTag>}
      <h2 id={id} className={cn('type-h2', inverse && 'text-white')}>{title}</h2>
      {description && <p className={cn('type-body-lg mt-4', inverse ? 'text-text-inverse-muted' : 'text-text-body')}>{description}</p>}
    </div>
  )
}

/** Separador entre secciones: filete fino con el signo + de ALPAS al centro. */
export function SectionDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('container-wide flex items-center gap-5', className)}>
      <span className="h-px flex-1 bg-border-default" />
      <span className="relative grid size-8 place-items-center"><PlusMark className="absolute inset-0 size-8" /></span>
      <span className="h-px flex-1 bg-border-default" />
    </div>
  )
}

/* ── Marco de ilustración con forma de pestaña ─────────────────────── */
export function ArtFrame({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('frame-tab relative overflow-hidden [&>svg]:block [&>svg]:size-full', className)}>{children}</div>
}

/* ── Hero de páginas interiores ────────────────────────────────────── */
export function PageHero({
  crumbs,
  title,
  description,
  art,
  aside,
  actions,
}: {
  crumbs: Array<{ label: string; href?: string }>
  title: string
  description: string
  art: ReactNode
  aside?: ReactNode
  actions?: ReactNode
}) {
  return (
    <section aria-labelledby="page-title" className="relative overflow-hidden bg-surface-subtle">
      <div className="container-wide grid items-center gap-12 pt-8 pb-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pt-12 lg:pb-24">
        <div>
          <Breadcrumbs items={crumbs} renderLink={(href, label) => <Link to={href}>{label}</Link>} />
          {aside && <div className="mt-8">{aside}</div>}
          <h1 id="page-title" className="type-h1 pop-in mt-6 max-w-[18ch]">{title}</h1>
          <p className="type-body-lg pop-in mt-5 max-w-[36rem] text-text-body" style={delay(80)}>{description}</p>
          <div className="pop-in mt-8 flex flex-col gap-3 sm:flex-row" style={delay(160)}>{actions ?? <WhatsAppButton />}</div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <ArtFrame className="pop-in aspect-[6/5]" >{art}</ArtFrame>
          <PlusMark className="float-y absolute -top-5 -right-2 size-12 lg:-right-5" />
          <Sparkle className="float-y absolute -bottom-4 -left-3 size-8" />
        </div>
      </div>
    </section>
  )
}

/* ── Cards de servicios: marco + ilustración + texto (catálogo) ───── */
export function ServiceTiles({ items, columns = 4 }: { items: Service[]; columns?: 2 | 4 }) {
  return (
    <ul className={cn('grid gap-5', columns === 4 ? 'sm:grid-cols-2 xl:grid-cols-4' : 'md:grid-cols-2')}>
      {items.map((s, i) => {
        const Scene = serviceScenes[s.id]
        const Icon = s.icon
        const inner = (
          <>
            <div className="flex items-center justify-between gap-3 px-2.5 pt-1.5 pb-3">
              <span className="type-caption flex items-center gap-2 text-text-muted">
                <Icon className="size-4.5 text-text-heading" aria-hidden />
                {s.audience}
              </span>
              {s.comingSoon && <Tag color="warning">Próximamente</Tag>}
            </div>
            <div aria-hidden className="card-media aspect-[6/5]" data-brand={s.id === 'escolar' ? 'laplace' : undefined}>
              <Scene />
            </div>
            <div className="flex flex-1 flex-col px-2.5 pt-5 pb-3">
              <h3 className={cn('type-h4', columns === 4 && 'text-[1.5rem]')}>{s.name}</h3>
              <p className="type-body-sm mt-2 flex-1 text-text-body">{s.summary}</p>
              {s.comingSoon ? (
                <p className="type-caption mt-5 text-text-muted">Estamos preparando esta propuesta.</p>
              ) : (
                <span className="type-label mt-5 inline-flex items-center gap-1 text-text-heading group-hover:text-text-accent">
                  Conocer más
                  <ChevronRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
                </span>
              )}
            </div>
          </>
        )
        return (
          <li key={s.id} id={s.id} className="reveal scroll-mt-28" style={delay(i * 90)}>
            {s.to ? (
              <Link to={s.to} className="card card-frame card-link group flex h-full flex-col">
                {inner}
                <span className="sr-only"> sobre {s.name}</span>
              </Link>
            ) : (
              <div className="card card-frame flex h-full flex-col">{inner}</div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

/* ── Beneficios: cards suaves con icono en círculo ─────────────────── */
export function BenefitCards({ items, inverse }: { items: Array<{ icon: LucideIcon; title: string; text: string }>; inverse?: boolean }) {
  const cols = items.length % 3 === 0 ? 'md:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'
  return (
    <ul className={cn('grid gap-4 sm:gap-5', cols)}>
      {items.map(({ icon: Icon, title, text }, i) => (
        <li
          key={title}
          className={cn('reveal flex flex-col p-6 sm:p-7', inverse ? 'glass-dark rounded-xl' : 'card')}
          style={delay(i * 90)}
        >
          <span
            aria-hidden
            className={cn(
              'grid size-12 place-items-center rounded-pill [&_svg]:size-5.5',
              inverse ? 'bg-white/12 text-text-accent-on-dark' : cn('bg-white shadow-neutral ring-1 ring-border-subtle', i % 2 ? 'text-green-deep' : 'text-primary-5'),
            )}
          >
            <Icon />
          </span>
          <h3 className={cn('type-h5 mt-8', inverse && 'text-white')}>{title}</h3>
          <p className={cn('type-body-sm mt-2', inverse ? 'text-text-inverse-muted' : 'text-text-body')}>{text}</p>
        </li>
      ))}
    </ul>
  )
}

/* ── Card de docente: espacios editables, sin datos inventados ───── */
export function TeacherCard({ teacher, index = 0 }: { teacher: Teacher; index?: number }) {
  const pending = !teacher.name
  return (
    <article className="reveal card card-frame flex flex-col" style={delay(index * 90)}>
      {teacher.photo ? (
        <div className="card-media">
          <PhotoFrame src={teacher.photo} alt={teacher.name ? `Foto de ${teacher.name}` : 'Foto del docente'} ratio="4/5" className="rounded-none" />
        </div>
      ) : (
        <div role="img" aria-label="Foto del docente pendiente" className="card-media aspect-[4/5] bg-surface-muted">
          {/* Silueta genérica sin rostro: marca el espacio de la foto real */}
          <svg viewBox="0 0 200 250" aria-hidden className="absolute inset-x-0 bottom-0 h-auto w-full">
            <circle cx="100" cy="92" r="42" className="fill-primary-2" opacity="0.55" />
            <path d="M24 250c0-60 34-96 76-96s76 36 76 96Z" className="fill-primary-2" opacity="0.55" />
          </svg>
          <PlusMark className="absolute top-4 right-4 size-7 opacity-80" />
          <span className="type-caption absolute top-4 left-4 rounded-pill bg-white px-3 py-1 text-text-muted">Foto pendiente</span>
        </div>
      )}
      <div className="px-3 pt-5 pb-3">
        {teacher.specialty ? <Tag color="first">{teacher.specialty}</Tag> : <Tag color="disabled">Especialidad pendiente</Tag>}
        <h3 className={cn('type-h5 mt-3', pending && 'text-text-muted')}>{teacher.name ?? 'Nombre del docente'}</h3>
        <p className="type-body-sm mt-1.5 text-text-muted">{teacher.bio ?? 'Breve descripción de su experiencia, por confirmar con Grupo ALPAS.'}</p>
      </div>
    </article>
  )
}

/* ── CTA final con ilustración ─────────────────────────────────────── */
export function CtaBand({
  title,
  description,
  whatsappUrl,
  extra,
  decoration,
  art,
  tone = 'inverse',
}: {
  title: string
  description: string
  whatsappUrl?: string | null
  extra?: ReactNode
  decoration?: ReactNode
  art?: ReactNode
  /** green: panel verde ALPAS (texto blanco 5.9:1); inverse: color estructural del tema */
  tone?: 'inverse' | 'green'
}) {
  return (
    <section aria-labelledby="cta-title" className="container-wide pb-[var(--space-section-y)]">
      <div className={cn('reveal frame-tab relative grid overflow-hidden lg:grid-cols-[1.2fr_1fr]', tone === 'green' ? 'bg-green-deep' : 'bg-surface-inverse')}>
        {decoration ?? (
          <>
            <PlusMark tone="inverse" className="float-y absolute top-8 left-[45%] hidden size-8 opacity-40 lg:block" />
            <PlusMark tone={tone === 'green' ? 'inverse' : 'secondary'} className="absolute top-8 right-8 size-12 opacity-90 lg:hidden" />
          </>
        )}
        <div className="relative px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <h2 id="cta-title" className="type-h2 max-w-[18ch] text-white">{title}</h2>
          <p className={cn('type-body-lg mt-4 max-w-[34rem]', tone === 'green' ? 'text-white/90' : 'text-text-inverse-muted')}>{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton url={whatsappUrl} variant={tone === 'green' ? 'inverse' : 'secondary'} />
            {extra}
          </div>
        </div>
        <div className="relative hidden self-end lg:block [&>svg]:block [&>svg]:h-auto [&>svg]:w-full">{art ?? <TutoringScene bg={false} />}</div>
      </div>
    </section>
  )
}

/* ── Información comercial pendiente (modalidad, horarios, inversión) ─ */
export function PracticalInfo({ title = 'Modalidad, horarios e inversión', whatsappUrl }: { title?: string; whatsappUrl?: string | null }) {
  const rows = [
    { icon: Laptop, label: 'Modalidad', text: 'Te contamos las opciones disponibles al consultar.' },
    { icon: CalendarClock, label: 'Horarios', text: 'Coordinamos los horarios vigentes contigo.' },
    { icon: Wallet, label: 'Inversión', text: 'Te enviamos el detalle según el servicio que elijas.' },
  ]
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
      <div>
        <h2 className="type-h3">{title}</h2>
        <p className="type-body mt-3 text-text-body">Esta información cambia según el periodo, así que la damos actualizada por WhatsApp.</p>
        <div className="mt-6"><WhatsAppButton url={whatsappUrl} variant="primary" /></div>
      </div>
      <dl className="grid gap-4 sm:grid-cols-3">
        {rows.map(({ icon, label, text }, i) => (
          <div key={label} className="reveal card p-5" style={delay(i * 90)}>
            <dt className="flex items-center gap-3 type-label text-text-heading"><IconTile icon={icon} tone={i + 1} className="size-10 rounded-md [&_svg]:size-5" />{label}</dt>
            <dd className="type-body-sm mt-3 text-text-body">{text}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

/* ── Preguntas frecuentes: bloque centrado con cierre hacia WhatsApp ─ */
export function FaqBlock({ items, whatsappUrl }: { items: Array<{ question: string; answer: string }>; whatsappUrl?: string | null }) {
  return (
    <section aria-labelledby="faq-title" className="container-wide section-y">
      <SectionHeading id="faq-title" align="center" eyebrow="Dudas comunes" title="Preguntas frecuentes" />
      <Accordion items={items} className="reveal mx-auto mt-12 max-w-[46rem]" />
      <div className="mt-10 flex flex-col items-center gap-4 text-center">
        <p className="type-body text-text-body">¿Tu pregunta no está aquí?</p>
        <WhatsAppButton url={whatsappUrl} variant="primary" size="sm" pill label="Escríbenos por WhatsApp" />
      </div>
    </section>
  )
}
