import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { CalendarClock, ChevronRight, Laptop, Wallet } from 'lucide-react'
import { Accordion, Breadcrumbs, IconBadge, PhotoFrame, PlusMark, Tag, buttonClasses, cn } from '@grupo-laplace/ui'
import type { Service, Teacher } from '../data/content'
import { WhatsAppButton } from './WhatsAppButton'

/* ── Encabezado de sección ─────────────────────────────────────────── */
export function SectionHeading({ title, description, inverse, id, className }: { title: string; description?: ReactNode; inverse?: boolean; id?: string; className?: string }) {
  return (
    <div className={cn('max-w-[40rem]', className)}>
      <h2 id={id} className={cn('type-h2', inverse && 'text-white')}>{title}</h2>
      {description && <p className={cn('type-body-lg mt-4', inverse ? 'text-text-inverse-muted' : 'text-text-body')}>{description}</p>}
    </div>
  )
}

/* ── Hero de páginas interiores ────────────────────────────────────── */
export function PageHero({
  crumbs,
  title,
  description,
  photoNote,
  photo,
  aside,
  actions,
}: {
  crumbs: Array<{ label: string; href?: string }>
  title: string
  description: string
  photoNote: string
  photo?: string
  aside?: ReactNode
  actions?: ReactNode
}) {
  return (
    <section aria-labelledby="page-title" className="bg-surface-subtle">
      <div className="container-wide grid items-center gap-10 pt-8 pb-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pt-12 lg:pb-20">
        <div>
          <Breadcrumbs items={crumbs} renderLink={(href, label) => <Link to={href}>{label}</Link>} />
          {aside && <div className="mt-8">{aside}</div>}
          <h1 id="page-title" className="type-h1 mt-6 max-w-[18ch]">{title}</h1>
          <p className="type-body-lg mt-5 max-w-[36rem] text-text-body">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions ?? <WhatsAppButton />}</div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <PhotoFrame src={photo} alt={photoNote} ratio="5/4" />
          <PlusMark className="absolute -top-4 -right-2 size-12 lg:-right-5" />
        </div>
      </div>
    </section>
  )
}

/* ── Índice de servicios (Inicio): filas, no tarjetas idénticas ────── */
export function ServiceIndex({ items }: { items: Service[] }) {
  return (
    <ul className="divide-y divide-border-default border-y border-border-default">
      {items.map((s) => {
        const Icon = s.icon
        const body = (
          <>
            <IconBadge tone={s.comingSoon ? 'secondary' : 'primary'}><Icon /></IconBadge>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="type-h4 text-[1.5rem] sm:text-h4">{s.name}</h3>
                {s.comingSoon ? <Tag color="warning">Próximamente</Tag> : <Tag color="first">{s.audience}</Tag>}
              </div>
              <p className="type-body mt-1 max-w-[36rem] text-text-body">{s.summary}</p>
            </div>
            <span
              className={cn(
                'type-label hidden shrink-0 items-center gap-1 sm:inline-flex',
                s.comingSoon ? 'text-text-muted' : 'text-text-heading group-hover:text-text-accent',
              )}
            >
              {s.comingSoon ? 'Próximamente' : 'Conocer más'}
              {!s.comingSoon && <ChevronRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />}
            </span>
          </>
        )
        return (
          <li key={s.id}>
            {s.to ? (
              <Link to={s.to} className="group flex items-center gap-5 rounded-lg py-6 transition-colors duration-200 hover:bg-surface-subtle sm:gap-6 sm:px-4">
                {body}
                <span className="sr-only">Conocer más sobre {s.name}</span>
              </Link>
            ) : (
              <div className="flex items-center gap-5 py-6 opacity-80 sm:gap-6 sm:px-4" aria-label={`${s.name}: próximamente`}>{body}</div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

/* ── Beneficios en columnas con filete, sin tarjetas ───────────────── */
export function BenefitColumns({ items, inverse }: { items: Array<{ icon: LucideIcon; title: string; text: string }>; inverse?: boolean }) {
  const cols = items.length % 3 === 0 ? 'md:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'
  return (
    <ul className={cn('grid gap-px overflow-hidden rounded-xl', cols, inverse ? 'bg-white/10' : 'bg-border-default')}>
      {items.map(({ icon: Icon, title, text }) => (
        <li key={title} className={cn('flex flex-col gap-4 p-6 sm:p-8', inverse ? 'bg-surface-inverse' : 'bg-white')}>
          <IconBadge tone={inverse ? 'inverse' : 'secondary'}><Icon /></IconBadge>
          <h3 className={cn('type-h5', inverse && 'text-white')}>{title}</h3>
          <p className={cn('type-body-sm', inverse ? 'text-text-inverse-muted' : 'text-text-body')}>{text}</p>
        </li>
      ))}
    </ul>
  )
}

/* ── Tarjeta de docente: espacios editables, sin datos inventados ──── */
export function TeacherCard({ teacher }: { teacher: Teacher }) {
  const pending = !teacher.name
  return (
    <article className="flex flex-col">
      <PhotoFrame src={teacher.photo} alt={teacher.name ? `Foto de ${teacher.name}` : 'Foto del docente pendiente'} pendingLabel="Foto pendiente" ratio="4/5" />
      <div className="mt-5">
        {teacher.specialty ? <Tag color="first">{teacher.specialty}</Tag> : <Tag color="disabled">Especialidad pendiente</Tag>}
        <h3 className={cn('type-h5 mt-3', pending && 'text-text-muted')}>{teacher.name ?? 'Nombre del docente'}</h3>
        <p className="type-body-sm mt-1.5 text-text-muted">{teacher.bio ?? 'Breve descripción de su experiencia, por confirmar con Grupo ALPAS.'}</p>
      </div>
    </article>
  )
}

/* ── CTA final ─────────────────────────────────────────────────────── */
export function CtaBand({ title, description, whatsappUrl, extra, decoration }: { title: string; description: string; whatsappUrl?: string | null; extra?: ReactNode; decoration?: ReactNode }) {
  return (
    <section aria-labelledby="cta-title" className="container-wide pb-[var(--space-section-y)]">
      <div className="frame-tab relative overflow-hidden bg-surface-inverse px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
        {decoration ?? (
          <>
            <PlusMark className="absolute top-8 right-8 size-16 opacity-90 sm:size-20" />
            <PlusMark tone="inverse" className="absolute right-28 bottom-10 hidden size-6 opacity-30 sm:block" />
          </>
        )}
        <div className="relative max-w-2xl">
          <h2 id="cta-title" className="type-h2 text-white">{title}</h2>
          <p className="type-body-lg mt-4 text-text-inverse-muted">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton url={whatsappUrl} />
            {extra}
          </div>
        </div>
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
        <div className="mt-6"><WhatsAppButton label="Consultar por WhatsApp" url={whatsappUrl} variant="primary" /></div>
      </div>
      <dl className="grid gap-4 sm:grid-cols-3">
        {rows.map(({ icon: Icon, label, text }) => (
          <div key={label} className="rounded-xl bg-surface-muted p-5">
            <dt className="flex items-center gap-2 type-label text-text-heading"><Icon className="size-5 text-text-accent" aria-hidden />{label}</dt>
            <dd className="type-body-sm mt-2 text-text-body">{text}</dd>
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

/* ── Enlace secundario con estilo de botón (router) ────────────────── */
export function RouterButton({ to, children, variant = 'outlined' }: { to: string; children: ReactNode; variant?: 'outlined' | 'neutral' | 'primary' | 'text' }) {
  return <Link to={to} className={buttonClasses({ variant })}>{children}</Link>
}
