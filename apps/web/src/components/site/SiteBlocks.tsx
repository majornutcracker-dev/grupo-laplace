/**
 * Bloques de las páginas internas, construidos con el lenguaje visual del Figma «PROTOTIPOS / inicio»:
 * etiqueta verde (az-etiqueta), titulares Plus Jakarta Sans, cards blancas con sombra suave (card-servicios),
 * beneficios sobre azul, card de docente (card-profesores) y CTA final con fórmulas de fondo.
 */
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { Breadcrumbs, cn } from '@grupo-alpas/ui'
import ctaFondo from '../../assets/figma/cta-fondo.svg'
import ctaClap from '../../assets/figma/cta-clap.svg'
import heroBlob from '../../assets/figma/hero-blob.svg'
import mathPhi from '../../assets/figma/math-phi.svg'
import mathPendiente from '../../assets/figma/math-pendiente.svg'
import trazo from '../../assets/figma/trazo-nosotros.svg'
import type { Teacher } from '../../data/content'
import { delay } from '../../lib/motion'
import { WhatsAppButton } from '../WhatsAppButton'

/* ── Etiqueta (Figma: az-etiqueta) ─────────────────────────────────── */
export function SiteTag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn('inline-flex items-center rounded-2xl bg-site-green-soft px-4 py-2 text-xs leading-[1.4] font-medium text-site-green-text', className)}>
      {children}
    </span>
  )
}

/* ── Encabezado de sección: antetítulo + titular ───────────────────── */
export function SectionIntro({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  inverse,
  className,
}: {
  id?: string
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  inverse?: boolean
  className?: string
}) {
  return (
    <div className={cn('max-w-[40rem]', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <p className={cn('site-eyebrow', inverse && 'text-white')}>{eyebrow}</p>}
      <h2 id={id} className={cn('site-display mt-2', inverse && 'text-white')}>{title}</h2>
      {description && <p className={cn('mt-4 text-base leading-normal sm:text-lg', inverse ? 'text-site-steel' : 'text-site-ink')}>{description}</p>}
    </div>
  )
}

/* ── Cuadro de ícono (Figma: 72 px, radio 16) ──────────────────────── */
const tileTones = {
  navy: 'bg-site-navy text-white',
  green: 'bg-site-green text-white',
  soft: 'bg-site-green-soft text-site-green-text',
  mist: 'bg-site-mist text-site-navy',
  night: 'bg-site-navy text-site-green',
}
export type TileTone = keyof typeof tileTones

export function IconTile({ icon: Icon, tone = 'navy', size = 'lg', className }: { icon: LucideIcon; tone?: TileTone; size?: 'md' | 'lg'; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        'grid shrink-0 place-items-center rounded-2xl',
        size === 'lg' ? 'size-16 sm:size-[4.5rem] [&_svg]:size-7 sm:[&_svg]:size-8' : 'size-12 [&_svg]:size-6',
        tileTones[tone],
        className,
      )}
    >
      <Icon />
    </span>
  )
}

/* ── Card blanca (Figma: card-servicios sin foto) ──────────────────── */
export function InfoCard({
  icon,
  tone = 'navy',
  title,
  children,
  aside,
  className,
  index = 0,
}: {
  icon?: LucideIcon
  tone?: TileTone
  title: string
  children?: ReactNode
  aside?: ReactNode
  className?: string
  index?: number
}) {
  return (
    <div className={cn('reveal flex h-full flex-col gap-5 rounded-[1.5rem] border border-neutral-disabled/40 bg-site-paper p-6 shadow-overlay', className)} style={delay(index * 80)}>
      {(icon || aside) && (
        <div className="flex items-start justify-between gap-3">
          {icon && <IconTile icon={icon} tone={tone} />}
          {aside}
        </div>
      )}
      <div>
        <h3 className="text-[1.1875rem] leading-[1.4] font-medium text-site-ink">{title}</h3>
        {children && <div className="mt-2 text-base leading-normal text-site-ink/85">{children}</div>}
      </div>
    </div>
  )
}

/* ── Hero de página interna ────────────────────────────────────────── */
export type HeroChip = { icon: LucideIcon; label: string; tone?: 'soft' | 'mist' }

function HeroChipCard({ chip, className, d }: { chip: HeroChip; className?: string; d: number }) {
  const Icon = chip.icon
  return (
    <div className={cn('pop-in float-y absolute flex items-center gap-3 rounded-2xl bg-site-paper py-3 pr-5 pl-3 shadow-[0_0_44px_rgb(6_15_18/0.1)]', className)} style={delay(d)}>
      <span aria-hidden className={cn('grid size-11 place-items-center rounded-pill [&_svg]:size-5', chip.tone === 'mist' ? 'bg-site-mist text-site-navy' : 'bg-site-green-soft text-site-green-text')}>
        <Icon />
      </span>
      <span className="max-w-[9rem] text-sm leading-snug font-medium text-site-ink sm:text-base">{chip.label}</span>
    </div>
  )
}

/** Foto con el marco del Figma: rectángulo gris detrás, fórmulas y trazo decorativo. */
export function PhotoComposition({ src, alt, chips = [], cutout, ratio = '4/3', className }: { src: string; alt: string; chips?: HeroChip[]; cutout?: boolean; ratio?: string; className?: string }) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[34rem]', className)}>
      {cutout ? (
        <img aria-hidden src={heroBlob} alt="" className="pop-in absolute top-[22%] -right-[6%] w-[70%]" style={delay(100)} />
      ) : (
        <div aria-hidden className="pop-in absolute top-[12%] -right-2 bottom-[4%] w-1/2 rounded-[2.25rem] bg-site-mist sm:-right-6" style={delay(100)} />
      )}
      <img
        src={src}
        alt={alt}
        className={cn('pop-in relative w-full', cutout ? 'h-auto' : 'rounded-[2rem] object-cover')}
        style={{ ...delay(160), ...(cutout ? {} : { aspectRatio: ratio }) }}
      />
      <img aria-hidden src={mathPhi} alt="" className="absolute -top-8 -left-2 w-24 -rotate-[14deg] sm:-left-8 sm:w-28" />
      <img aria-hidden src={mathPendiente} alt="" className="absolute -top-12 right-[12%] hidden w-24 sm:block" />
      <img aria-hidden src={trazo} alt="" className="absolute -bottom-8 left-2 w-20 rotate-[15deg] sm:w-24" />
      {chips[0] && <HeroChipCard chip={chips[0]} d={420} className="-bottom-6 -left-2 sm:-left-10" />}
      {chips[1] && <HeroChipCard chip={chips[1]} d={540} className="top-[38%] -right-2 hidden sm:flex sm:-right-8" />}
    </div>
  )
}

export function InnerHero({
  crumbs,
  tag,
  title,
  description,
  actions,
  media,
}: {
  crumbs: Array<{ label: string; href?: string }>
  tag: string
  title: ReactNode
  description: ReactNode
  actions: ReactNode
  media: ReactNode
}) {
  return (
    <section aria-labelledby="page-title" className="overflow-hidden bg-site-paper">
      <div className="container-wide grid items-center gap-16 pt-8 pb-20 lg:grid-cols-[1fr_1.05fr] lg:gap-20 lg:pt-10 lg:pb-24">
        <div>
          <Breadcrumbs items={crumbs} renderLink={(href, label) => <Link to={href}>{label}</Link>} />
          <SiteTag className="pop-in mt-8">{tag}</SiteTag>
          <h1 id="page-title" className="site-display pop-in mt-6 max-w-[18ch] text-[clamp(2.25rem,1.7rem+2vw,3rem)]" style={delay(60)}>
            {title}
          </h1>
          <div className="pop-in mt-6 max-w-[34rem] space-y-4 text-base leading-normal text-site-ink sm:text-lg" style={delay(120)}>{description}</div>
          <div className="pop-in mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap" style={delay(180)}>{actions}</div>
        </div>
        {media}
      </div>
    </section>
  )
}

/** Palabra destacada en verde dentro de un titular (como en el Figma). */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-site-green">{children}</span>
}

/* ── Beneficios sobre azul (Figma: «Descubre lo que hace diferente a ALPAS») ─ */
export function DarkBenefits({
  id,
  eyebrow,
  title,
  items,
}: {
  id: string
  eyebrow: string
  title: string
  items: Array<{ icon: LucideIcon; title: string; text: string }>
}) {
  return (
    <section aria-labelledby={id} className="bg-site-navy">
      <div className="container-wide section-y">
        <SectionIntro id={id} eyebrow={eyebrow} title={title} align="center" inverse className="max-w-[48rem]" />
        <ul className={cn('mt-10 grid gap-5 lg:gap-10', items.length % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-3')}>
          {items.map(({ icon, title: t, text }, i) => (
            <li key={t} className={cn('reveal flex min-w-0 flex-col gap-6 rounded-[1.5rem] bg-site-night p-7 sm:p-10', items.length % 2 === 0 ? 'sm:flex-row' : 'xl:flex-row')} style={delay(i * 90)}>
              <IconTile icon={icon} tone="night" />
              <div>
                <h3 className="text-[1.1875rem] leading-[1.4] font-medium text-site-paper">{t}</h3>
                <p className="mt-2 text-base leading-normal text-site-paper/85">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ── Card de docente (Figma: card-profesores) ──────────────────────── */
export function TeacherProfileCard({ teacher, index = 0 }: { teacher: Teacher; index?: number }) {
  const pending = !teacher.name
  return (
    <article className="reveal flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-neutral-disabled/40 bg-site-paper shadow-overlay" style={delay(index * 90)}>
      {teacher.photo ? (
        <img src={teacher.photo} alt={`Foto de ${teacher.name ?? 'docente de ALPAS'}`} className="aspect-[1312/1199] w-full rounded-t-2xl object-cover" loading="lazy" />
      ) : (
        <div role="img" aria-label="Foto del docente pendiente" className="relative aspect-[1312/1199] w-full overflow-hidden rounded-t-2xl bg-site-mist">
          <svg viewBox="0 0 200 180" aria-hidden className="absolute inset-x-0 bottom-0 h-auto w-full">
            <circle cx="100" cy="72" r="36" className="fill-site-steel" opacity="0.55" />
            <path d="M34 180c0-50 30-78 66-78s66 28 66 78Z" className="fill-site-steel" opacity="0.55" />
          </svg>
          <span className="absolute top-4 left-4 rounded-pill bg-white px-3 py-1 text-xs font-medium text-text-muted">Foto pendiente</span>
        </div>
      )}
      <div className="flex flex-1 flex-col gap-4 px-6 pt-6 pb-10">
        <SiteTag className={cn('self-start', pending && 'bg-site-mist text-text-muted')}>{teacher.specialty ?? 'Especialidad por confirmar'}</SiteTag>
        <div>
          <h3 className={cn('text-[1.1875rem] leading-[1.4] font-medium', pending ? 'text-text-muted' : 'text-site-ink')}>{teacher.name ?? 'Nombre del docente'}</h3>
          <p className={cn('mt-2 text-base leading-normal', pending ? 'text-text-muted' : 'text-site-ink/85')}>
            {teacher.bio ?? 'Perfil por completar con la información de Grupo ALPAS.'}
          </p>
        </div>
      </div>
    </article>
  )
}

/* ── CTA final (Figma: «¡Tu próximo paso comienza aquí!») ──────────── */
export function FinalCta({ title, description, whatsappUrl, label = 'Consulta por WhatsApp' }: { title: ReactNode; description: string; whatsappUrl?: string | null; label?: string }) {
  return (
    <section aria-labelledby="cta-title" className="overflow-hidden bg-site-paper">
      <div className="reveal container-wide relative flex flex-col items-center gap-10 py-20 text-center sm:py-24">
        <img aria-hidden src={ctaFondo} alt="" className="pointer-events-none absolute top-1/2 left-1/2 hidden w-[106.5rem] max-w-none -translate-x-1/2 -translate-y-1/2 md:block" />
        <div className="relative max-w-[35rem]">
          <h2 id="cta-title" className="site-display">{title}</h2>
          <p className="mt-6 text-lg leading-[1.4] text-site-ink">{description}</p>
        </div>
        <div className="relative">
          <img aria-hidden src={ctaClap} alt="" className="absolute top-1/2 -left-16 hidden w-10 -translate-y-1/2 rotate-[-129deg] sm:block" />
          <WhatsAppButton url={whatsappUrl} label={label} variant="primary" pill />
        </div>
      </div>
    </section>
  )
}

/* ── Modalidad, horarios e inversión ───────────────────────────────── */
/**
 * La información comercial la define ALPAS en cada periodo y todavía no está publicada:
 * cada card muestra «Por confirmar» y el texto invita a consultar. Para publicar datos reales,
 * pasa `items` con el texto definitivo y `pending: false`.
 */
export type PracticalItem = { icon: LucideIcon; title: string; text: string; pending?: boolean }

export function PracticalSection({ id, items, whatsappUrl, note }: { id: string; items: PracticalItem[]; whatsappUrl?: string | null; note?: string }) {
  return (
    <section aria-labelledby={id} className="bg-site-paper">
      <div className="container-wide section-y">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-20">
          <SectionIntro id={id} eyebrow="Información práctica" title="Modalidad, horarios e inversión" />
          <div>
            <p className="max-w-[34rem] text-base leading-normal text-site-ink">
              {note ?? 'Estos datos cambian según el periodo. Escríbenos y te enviamos la información vigente.'}
            </p>
            <div className="mt-6"><WhatsAppButton url={whatsappUrl} label="Pedir información" variant="primary" pill /></div>
          </div>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <li key={it.title}>
              <InfoCard icon={it.icon} tone={i === 1 ? 'green' : 'navy'} title={it.title} index={i} aside={it.pending !== false ? <SiteTag className="bg-site-mist px-3 py-1 text-text-muted">Por confirmar</SiteTag> : undefined}>
                {it.text}
              </InfoCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ── Foto + texto (Figma: container-nosotros) ──────────────────────── */
export function MediaText({ id, media, eyebrow, title, children, reverse }: { id: string; media: ReactNode; eyebrow: string; title: ReactNode; children: ReactNode; reverse?: boolean }) {
  return (
    <section aria-labelledby={id} className="bg-site-paper">
      <div className="container-wide section-y grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div className={cn('reveal', reverse && 'lg:order-last')}>{media}</div>
        <div className="reveal">
          <SectionIntro id={id} eyebrow={eyebrow} title={title} />
          <div className="mt-6 max-w-[36rem] space-y-5 text-base leading-normal text-site-ink">{children}</div>
        </div>
      </div>
    </section>
  )
}
