import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { CalendarClock, ChevronRight, Laptop, Wallet } from 'lucide-react'
import { Accordion, Breadcrumbs, PhotoFrame, PlusMark, Tag, cn } from '@grupo-laplace/ui'
import type { Service, Teacher } from '../data/content'
import { Sparkle } from '../illustrations/Doodles'
import { TutoringScene } from '../illustrations/Scenes'
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
export function SectionHeading({ title, description, inverse, id, align = 'left', className }: { title: string; description?: ReactNode; inverse?: boolean; id?: string; align?: 'left' | 'center'; className?: string }) {
  return (
    <div className={cn('max-w-[40rem]', align === 'center' && 'mx-auto text-center', className)}>
      <h2 id={id} className={cn('type-h2', inverse && 'text-white')}>{title}</h2>
      {description && <p className={cn('type-body-lg mt-4', inverse ? 'text-text-inverse-muted' : 'text-text-body')}>{description}</p>}
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

/* ── Tiles de servicios (Inicio) ───────────────────────────────────── */
export function ServiceTiles({ items }: { items: Service[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((s, i) => {
        const inner = (
          <>
            <div className="flex items-start justify-between gap-3">
              <IconTile icon={s.icon} tone={i} />
              {s.comingSoon && <Tag color="warning">Próximamente</Tag>}
            </div>
            <h3 className="type-h4 mt-6 text-[1.5rem]">{s.name}</h3>
            <p className="type-body-sm mt-2 flex-1 text-text-body">{s.summary}</p>
            <span className={cn('type-label mt-6 inline-flex items-center gap-1', s.comingSoon ? 'text-text-muted' : 'text-text-heading group-hover:text-text-accent')}>
              {s.comingSoon ? 'Próximamente' : 'Conocer más'}
              {!s.comingSoon && <ChevronRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />}
            </span>
          </>
        )
        return (
          <li key={s.id} className="reveal" style={delay(i * 90)}>
            {s.to ? (
              <Link to={s.to} className="lift group flex h-full flex-col rounded-xl border border-border-subtle bg-white p-6 shadow-neutral">
                {inner}
                <span className="sr-only"> sobre {s.name}</span>
              </Link>
            ) : (
              <div className="flex h-full flex-col rounded-xl border border-dashed border-border-strong bg-surface-subtle p-6">{inner}</div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

/* ── Beneficios: tarjetas con icono de color ───────────────────────── */
export function BenefitCards({ items, inverse }: { items: Array<{ icon: LucideIcon; title: string; text: string }>; inverse?: boolean }) {
  const cols = items.length % 3 === 0 ? 'md:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'
  return (
    <ul className={cn('grid gap-5', cols)}>
      {items.map(({ icon, title, text }, i) => (
        <li
          key={title}
          className={cn('reveal flex flex-col gap-4 rounded-xl p-6 sm:p-7', inverse ? 'bg-white/6 ring-1 ring-white/10' : 'bg-white shadow-neutral ring-1 ring-border-subtle')}
          style={delay(i * 90)}
        >
          <IconTile icon={icon} tone={inverse ? (i % 2 ? 1 : 2) : i} />
          <h3 className={cn('type-h5', inverse && 'text-white')}>{title}</h3>
          <p className={cn('type-body-sm', inverse ? 'text-text-inverse-muted' : 'text-text-body')}>{text}</p>
        </li>
      ))}
    </ul>
  )
}

/* ── Tarjeta de docente: espacios editables, sin datos inventados ──── */
export function TeacherCard({ teacher, index = 0 }: { teacher: Teacher; index?: number }) {
  const pending = !teacher.name
  return (
    <article className="reveal flex flex-col" style={delay(index * 90)}>
      {teacher.photo ? (
        <PhotoFrame src={teacher.photo} alt={teacher.name ? `Foto de ${teacher.name}` : 'Foto del docente'} ratio="4/5" />
      ) : (
        <div role="img" aria-label="Foto del docente pendiente" className="frame-tab relative aspect-[4/5] overflow-hidden bg-surface-muted">
          {/* Silueta genérica sin rostro: marca el espacio de la foto real */}
          <svg viewBox="0 0 200 250" aria-hidden className="absolute inset-x-0 bottom-0 w-full">
            <circle cx="100" cy="92" r="42" className="fill-primary-2" opacity="0.55" />
            <path d="M24 250c0-60 34-96 76-96s76 36 76 96Z" className="fill-primary-2" opacity="0.55" />
          </svg>
          <PlusMark className="absolute top-5 right-5 size-7 opacity-80" />
          <span className="type-caption absolute top-5 left-5 rounded-pill bg-white px-3 py-1 text-text-muted">Foto pendiente</span>
        </div>
      )}
      <div className="mt-5">
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
          <div key={label} className="reveal rounded-xl bg-white p-5 shadow-neutral ring-1 ring-border-subtle" style={delay(i * 90)}>
            <dt className="flex items-center gap-3 type-label text-text-heading"><IconTile icon={icon} tone={i + 1} className="size-10 rounded-md [&_svg]:size-5" />{label}</dt>
            <dd className="type-body-sm mt-3 text-text-body">{text}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

/* ── Preguntas frecuentes ──────────────────────────────────────────── */
export function FaqBlock({ items }: { items: Array<{ question: string; answer: string }> }) {
  return (
    <section aria-labelledby="faq-title" className="container-wide section-y grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
      <SectionHeading id="faq-title" title="Preguntas frecuentes" description="Si tu duda no está aquí, escríbenos." />
      <Accordion items={items} />
    </section>
  )
}

