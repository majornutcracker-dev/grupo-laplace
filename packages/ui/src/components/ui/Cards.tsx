import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Check, Quote } from 'lucide-react'
import { cn } from '../../lib/cn'
import type { Course, Teacher, Testimonial } from '../../types'
import { Button } from './Button'
import { Avatar, Badge, Card, IconTile, StatusTag } from './Primitives'
import { BrandPattern } from '../brand/Patterns'

/* ── Curso ───────────────────────────────────────────────────────────── */
export function CourseCard({ course, ctaHref = '#contacto' }: { course: Course; ctaHref?: string }) {
  const Icon = course.icon
  const dark = course.tone === 'navy'
  return (
    <article className={cn('relative flex flex-col overflow-hidden rounded-2xl border', dark ? 'on-dark border-navy-800 bg-navy-900 text-white' : 'border-celeste-100 bg-celeste-50')}>
      <div className="relative px-6 pt-6 pb-8 sm:px-8 sm:pt-8">
        <BrandPattern variant={dark ? 'red' : 'orbitas'} tone={dark ? 'dark' : 'light'} intensity="subtle" className="[mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="relative flex items-center justify-between gap-4">
          <IconTile tone={dark ? 'inverse' : 'navy'} size="lg"><Icon /></IconTile>
          <Badge tone={dark ? 'inverse' : 'celeste'}>Secundaria</Badge>
        </div>
        <h3 className={cn('type-h2 relative mt-6', dark ? 'text-white' : 'text-navy-900')}>{course.name}</h3>
        <p className={cn('type-body-lg relative mt-3 max-w-[34rem]', dark ? 'text-text-inverse-muted' : 'text-text-secondary')}>{course.description}</p>
      </div>
      <div className={cn('flex flex-1 flex-col gap-6 border-t px-6 py-6 sm:px-8', dark ? 'border-white/10 bg-navy-950/30' : 'border-celeste-100 bg-white')}>
        <ul className="space-y-3">
          {course.benefits.map((b) => (
            <li key={b} className="flex gap-3">
              <span className={cn('mt-0.5 inline-grid size-5 shrink-0 place-items-center rounded-full', dark ? 'bg-celeste-500 text-navy-950' : 'bg-navy-900 text-white')} aria-hidden>
                <Check className="size-3" strokeWidth={3} />
              </span>
              <span className={cn('type-body', dark ? 'text-white' : 'text-text-primary')}>{b}</span>
            </li>
          ))}
        </ul>
        <div className={cn('rounded-lg border border-dashed p-4', dark ? 'border-white/20' : 'border-border-strong')}>
          <p className={cn('type-caption', dark ? 'text-text-inverse-muted' : 'text-text-muted')}>
            Por confirmar con la academia: {course.pending.join(' · ')}
          </p>
        </div>
        <div className="mt-auto">
          <Button href={ctaHref} variant={dark ? 'primary' : 'secondary'} className="w-full whitespace-normal text-center sm:w-auto" iconRight={<ArrowRight className="size-4 shrink-0" aria-hidden />}>
            Solicitar información de {course.name}
          </Button>
        </div>
      </div>
    </article>
  )
}

/* ── Beneficio ───────────────────────────────────────────────────────── */
export function BenefitCard({ icon: Icon, title, text, featured }: { icon: LucideIcon; title: string; text: string; featured?: boolean }) {
  if (featured)
    return (
      <article className="on-dark relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-navy-900 p-7 text-white sm:p-9">
        <BrandPattern variant="orbitas" tone="dark" intensity="subtle" />
        <IconTile tone="inverse" size="lg" className="relative"><Icon /></IconTile>
        <div className="relative mt-10 min-w-0">
          <h3 className="type-h3 text-[1.75rem] break-words text-white">{title}</h3>
          <p className="type-body-lg mt-3 text-text-inverse-muted">{text}</p>
        </div>
      </article>
    )
  return (
    <Card className="flex h-full flex-col gap-4 p-6">
      <IconTile tone="celeste"><Icon /></IconTile>
      <div>
        <h3 className="type-h4 text-text-primary">{title}</h3>
        <p className="type-body mt-1.5 text-text-secondary">{text}</p>
      </div>
    </Card>
  )
}

/* ── Docente ─────────────────────────────────────────────────────────── */
export function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="relative grid aspect-[4/3] place-items-center overflow-hidden bg-navy-50">
        {teacher.photo ? (
          <img src={teacher.photo} alt={`Foto de ${teacher.name}`} className="h-full w-full object-cover" />
        ) : (
          <>
            <BrandPattern variant="orbitas" tone="light" intensity="subtle" />
            <div className="relative flex flex-col items-center gap-2 text-center">
              <Avatar name="Docente" size="xl" />
              <span className="type-caption text-text-muted">Foto pendiente</span>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="celeste" size="sm">{teacher.area}</Badge>
          {teacher.status !== 'confirmado' && <StatusTag status={teacher.status} />}
        </div>
        <h3 className="type-h4 text-text-primary">{teacher.name}</h3>
        <p className="type-body-sm text-text-secondary">{teacher.bio}</p>
      </div>
    </Card>
  )
}

/* ── Testimonio ──────────────────────────────────────────────────────── */
export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-border-default bg-surface-default p-6 sm:p-7">
      <Quote className="size-8 text-celeste-500" aria-hidden />
      <blockquote className="type-body-lg mt-4 flex-1 text-text-primary">“{t.quote}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border-subtle pt-5">
        <Avatar name={t.author} size="md" />
        <div className="min-w-0">
          <p className="type-label text-text-primary">{t.author}</p>
          <p className="type-caption text-text-muted">{t.role}</p>
        </div>
        {t.status === 'demostrativo' && <StatusTag status="demostrativo" className="ml-auto hidden sm:inline-flex" />}
      </figcaption>
    </figure>
  )
}

/* ── Pregunta frecuente (versión estática, p. ej. para material impreso o resúmenes) ── */
export function FaqCard({ q, a }: { q: string; a: string }) {
  return (
    <Card className="p-6">
      <h3 className="type-h4 text-text-primary">{q}</h3>
      <p className="type-body mt-2 text-text-secondary">{a}</p>
    </Card>
  )
}

/* ── Modalidad ───────────────────────────────────────────────────────── */
export function ModalityCard({ icon: Icon, title, text, status, selected }: { icon: LucideIcon; title: string; text: string; status?: 'pendiente' | 'confirmado'; selected?: boolean }) {
  return (
    <Card className={cn('flex gap-4 p-5', selected && 'border-navy-900 ring-1 ring-navy-900')}>
      <IconTile tone={selected ? 'navy' : 'celeste'}><Icon /></IconTile>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="type-h4 text-text-primary">{title}</h3>
          {status === 'pendiente' && <StatusTag status="pendiente" />}
        </div>
        <p className="type-body-sm mt-1 text-text-secondary">{text}</p>
      </div>
    </Card>
  )
}

/* ── Bloque informativo ──────────────────────────────────────────────── */
export function InfoBlock({ icon: Icon, title, children, tone = 'subtle' }: { icon: LucideIcon; title: string; children: ReactNode; tone?: 'subtle' | 'accent' | 'highlight' }) {
  const tones = { subtle: 'bg-surface-subtle border-border-default', accent: 'bg-surface-accent border-celeste-100', highlight: 'bg-surface-highlight border-orange-100' }
  return (
    <div className={cn('flex gap-4 rounded-xl border p-5 sm:p-6', tones[tone])}>
      <Icon className={cn('mt-0.5 size-6 shrink-0', tone === 'highlight' ? 'text-orange-700' : 'text-celeste-700')} aria-hidden />
      <div>
        <h3 className="type-h4 text-text-primary">{title}</h3>
        <div className="type-body mt-1 text-text-secondary">{children}</div>
      </div>
    </div>
  )
}

/* ── Estadística ─────────────────────────────────────────────────────── */
export function Stat({ value, label, pending, inverse }: { value: string; label: string; pending?: boolean; inverse?: boolean }) {
  return (
    <div className={cn('border-l-2 pl-5', inverse ? 'border-celeste-400' : 'border-orange-400')}>
      <p className={cn('type-accent-number text-[2.75rem]', inverse ? 'text-white' : 'text-navy-900', pending && 'opacity-40')}>{value}</p>
      <p className={cn('type-body-sm mt-2', inverse ? 'text-text-inverse-muted' : 'text-text-secondary')}>{label}</p>
      {pending && <p className={cn('type-caption mt-1', inverse ? 'text-celeste-300' : 'text-text-muted')}>Dato pendiente</p>}
    </div>
  )
}

/* ── Lista de ventajas ───────────────────────────────────────────────── */
export function AdvantageList({ items, inverse }: { items: string[]; inverse?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it} className="flex gap-3">
          <Check className={cn('mt-1 size-5 shrink-0', inverse ? 'text-celeste-400' : 'text-celeste-600')} strokeWidth={2.5} aria-hidden />
          <span className={cn('type-body', inverse ? 'text-white' : 'text-text-primary')}>{it}</span>
        </li>
      ))}
    </ul>
  )
}
