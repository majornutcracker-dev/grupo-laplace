/**
 * Secciones del Figma «PROTOTIPOS» (versión final del cliente), reutilizadas por Inicio,
 * Escolar, Universitario, Orientación vocacional, Contacto y 404.
 * Medidas y colores salen de las variables del archivo (ver `styles/global.css`, paleta site-*).
 */
import { useId, useState, type CSSProperties, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@grupo-alpas/ui'
import ctaBlob from '../../assets/figma/cta-blob.svg'
import ctaSquiggle from '../../assets/figma/cta-squiggle.svg'
import brandWhatsapp from '../../assets/figma/brand-whatsapp.svg'
import heroBlob from '../../assets/figma/hero-blob.svg'
import heroDots from '../../assets/figma/hero-dots.svg'
import arrowCurl from '../../assets/figma/hero-flecha-a.svg'
import arrowHead from '../../assets/figma/hero-flecha-b.svg'
import type { Area, Faq, IconItem, Practical } from '../../data/paginas'
import { delay } from '../../lib/motion'
import { WhatsAppButton } from '../WhatsAppButton'

/* ── Tipografía de sección ─────────────────────────────────────────── */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('site-eyebrow', className)}>{children}</p>
}

/** Antetítulo + titular (Plus Jakarta Sans 40) + descripción opcional. */
export function SectionHead({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  inverse,
  className,
}: {
  id?: string
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  inverse?: boolean
  className?: string
}) {
  return (
    <div className={cn('max-w-[40rem]', align === 'center' && 'mx-auto text-center', className)}>
      <Eyebrow className={cn(inverse && 'text-white')}>{eyebrow}</Eyebrow>
      <h2 id={id} className={cn('site-display mt-2', inverse && 'text-white')}>{title}</h2>
      {description && <p className={cn('mt-6 text-base leading-normal', inverse ? 'text-white' : 'text-site-ink')}>{description}</p>}
    </div>
  )
}

/** Palabra o frase en verde dentro de un titular (como en el Figma). */
export function Green({ children }: { children: ReactNode }) {
  return <span className="text-site-green">{children}</span>
}

/** Etiqueta verde (Figma: az-etiqueta). */
export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn('inline-flex items-center rounded-[1rem] bg-site-green-soft px-4 py-2 text-xs leading-[1.4] font-medium text-site-green-text', className)}>
      {children}
    </span>
  )
}

/* ── Círculos y cuadros de ícono ───────────────────────────────────── */
const circleTones = {
  navy: 'bg-site-navy text-white',
  green: 'bg-site-green text-white',
  soft: 'bg-site-green-soft text-site-green',
  mist: 'bg-site-mist text-site-navy',
  fog: 'bg-site-fog text-site-navy',
}
export type CircleTone = keyof typeof circleTones

export function IconCircle({ icon: Icon, tone = 'navy', size = 60, square, className }: { icon: LucideIcon; tone?: CircleTone; size?: 56 | 60; square?: boolean; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn('grid shrink-0 place-items-center [&_svg]:size-6', size === 60 ? 'size-15' : 'size-14', square ? 'rounded-[1rem]' : 'rounded-pill', circleTones[tone], className)}
    >
      <Icon strokeWidth={1.75} />
    </span>
  )
}

/* ── Composición del hero (foto recortada + recursos gráficos) ─────── */
type Tile = { src: string; tone: 'green' | 'navy' }
export type HeroChip = { icon: LucideIcon; label: [string, string]; tone: 'soft' | 'mist' }

/**
 * Reproduce la composición del Figma con posiciones en porcentaje, así escala igual en todas las pantallas:
 * puntos, flecha curva, mancha verde, la foto recortada, dos cuadros de ícono inclinados y, en Inicio, dos chips.
 */
export function HeroShowcase({
  variant,
  photo,
  photoAlt,
  tiles,
  chips,
  photoStyle,
}: {
  variant: 'home' | 'service'
  photo: string
  photoAlt: string
  tiles: [Tile, Tile]
  chips?: [HeroChip, HeroChip]
  /** Posición de la foto dentro del lienzo (left/top/width/height en %) */
  photoStyle: CSSProperties
}) {
  const home = variant === 'home'
  const pos = home
    ? { dots: { left: '78.2%', top: '1.7%' }, arrow: { left: '0.8%', top: '5.3%' }, blob: { left: '47.1%', top: '25.9%' }, green: { left: '0%', top: '36.3%', r: -15.6 }, navy: { left: '76.2%', top: '6.4%', r: 11 } }
    : { dots: { left: '82.2%', top: '16.7%' }, arrow: { left: '0.7%', top: '13.2%' }, blob: { left: '47.1%', top: '22.4%' }, green: { left: '46.4%', top: '0%', r: -7.7 }, navy: { left: '65.5%', top: '13.3%', r: 10.4 } }
  return (
    <div className="relative mx-auto w-full max-w-[36.5rem]" style={{ aspectRatio: home ? '585 / 490' : '585 / 440' }}>
      <img aria-hidden src={heroDots} alt="" className="pop-in absolute w-[11.5%]" style={{ ...pos.dots, ...delay(300) }} />
      <div aria-hidden className="pop-in absolute w-[15.4%]" style={{ ...pos.arrow, ...delay(380) }}>
        <div className="relative aspect-[98/107]">
          <img src={arrowCurl} alt="" className="absolute inset-[4%_4%_4%_4%] size-[92%] -rotate-[96deg]" />
          <img src={arrowHead} alt="" className="absolute right-0 bottom-[2%] w-[18%] -rotate-[96deg]" />
        </div>
      </div>
      <img aria-hidden src={heroBlob} alt="" className="pop-in absolute w-[52.9%]" style={{ ...pos.blob, ...delay(120) }} />
      <img src={photo} alt={photoAlt} className="pop-in absolute object-contain object-bottom" style={{ ...photoStyle, ...delay(200) }} />
      {tiles.map((t, i) => {
        const p = i === 0 ? pos.green : pos.navy
        return (
          <span
            key={t.src}
            aria-hidden
            className={cn('float-y absolute grid aspect-square w-[10.6%] place-items-center rounded-[18px] shadow-[0_8px_24px_-12px_rgb(10_33_58/0.45)]', t.tone === 'green' ? 'bg-site-green' : 'bg-site-navy')}
            style={{ left: p.left, top: p.top, rotate: `${p.r}deg`, ...delay(i ? 1200 : 0), animationDuration: i ? '7s' : '6s' }}
          >
            <img src={t.src} alt="" className="w-[57%]" />
          </span>
        )
      })}
      {chips?.map((c, i) => {
        const Icon = c.icon
        return (
          <div
            key={c.label[0]}
            className={cn(
              'pop-in absolute flex items-center gap-[3%] rounded-[18px] bg-white px-[4.5%] py-[3%] shadow-overlay sm:gap-4',
              i === 0 ? 'top-[81.4%] left-[6%] w-[45.8%]' : 'top-[54.3%] left-[56.8%] w-[37.8%]',
            )}
            style={delay(520 + i * 140)}
          >
            <span aria-hidden className={cn('grid aspect-square w-[24%] max-w-[53px] shrink-0 place-items-center rounded-pill [&_svg]:size-[45%]', c.tone === 'soft' ? 'bg-site-green-soft text-site-green' : 'bg-site-mist text-site-navy')}>
              <Icon strokeWidth={1.75} />
            </span>
            <span className="text-[clamp(0.6875rem,0.4rem+1.1vw,0.97rem)] leading-normal font-medium text-site-ink">
              {c.label[0]}
              <br />
              {c.label[1]}
            </span>
          </div>
        )
      })}
    </div>
  )
}

/** Hero de dos columnas: texto a la izquierda y composición a la derecha. */
export function HeroSplit({ tag, title, description, actions, extra, media }: { tag: string; title: ReactNode; description: ReactNode; actions: ReactNode; extra?: ReactNode; media: ReactNode }) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,33.8rem)_1fr] lg:gap-20">
      <div>
        <Tag className="pop-in">{tag}</Tag>
        <h1 id="page-title" className="site-display pop-in mt-6" style={delay(60)}>{title}</h1>
        <p className="pop-in mt-6 text-base leading-normal text-site-ink sm:text-lg" style={delay(120)}>{description}</p>
        <div className="pop-in mt-6 flex flex-col gap-4 sm:flex-row sm:gap-6" style={delay(180)}>{actions}</div>
        {extra}
      </div>
      {media}
    </div>
  )
}

/* ── Modalidad, horarios e inversión ───────────────────────────────── */
export function PracticalStrip({ items }: { items: Practical[] }) {
  return (
    <ul aria-label="Modalidad, horarios e inversión" className="grid gap-5 py-6 md:grid-cols-3 lg:gap-10">
      {items.map((it, i) => (
        <li key={it.title} className="reveal flex items-start gap-6 rounded-[1.5rem] bg-white p-6 shadow-overlay" style={delay(i * 90)}>
          <IconCircle icon={it.icon} tone={i === 1 ? 'green' : 'navy'} />
          <div className="text-lg leading-normal text-site-ink">
            <p className="font-medium">{it.title}</p>
            <p className="mt-2">{it.value}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

/* ── Cards grises «¿Qué hacemos?» ──────────────────────────────────── */
export function WorkCards({ items }: { items: IconItem[] }) {
  return (
    <ul className="grid gap-5 md:grid-cols-3 lg:gap-10">
      {items.map((it, i) => (
        <li key={it.title} className="reveal lift rounded-[1.5rem] border border-site-wash bg-site-wash p-8 sm:p-10" style={delay(i * 90)}>
          <IconCircle icon={it.icon} tone={i === 1 ? 'green' : 'navy'} />
          <h3 className="mt-8 text-lg leading-normal font-medium text-site-ink">{it.title}</h3>
          <p className="mt-2 text-lg leading-normal text-site-ink">{it.text}</p>
        </li>
      ))}
    </ul>
  )
}

/* ── Áreas académicas ──────────────────────────────────────────────── */
export function AreaGrid({ areas }: { areas: Area[] }) {
  return (
    <ul className="grid gap-4 min-[420px]:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-10">
      {areas.map((a, i) => {
        // Alternancia en damero, como en el Figma (verde suave / gris)
        const green = (Math.floor(i / 4) + (i % 4)) % 2 === 0
        return (
          <li key={a.name} className="reveal lift flex min-w-0 items-center gap-4 rounded-[1.5rem] border border-site-fog/50 bg-white p-6" style={delay((i % 4) * 70)}>
            <IconCircle icon={a.icon} tone={green ? 'soft' : 'mist'} size={56} />
            <span className="min-w-0 text-base leading-normal font-medium text-site-ink">{a.name}</span>
          </li>
        )
      })}
    </ul>
  )
}

/* ── Beneficios sobre azul ─────────────────────────────────────────── */
export function BenefitsBand({
  id,
  eyebrow,
  title,
  items,
  layout,
}: {
  id: string
  eyebrow: string
  title: string
  items: IconItem[]
  /** row: 2×2 con ícono a la izquierda · stack: 3 columnas con ícono arriba · univ: 2 + 3 (Universitario) */
  layout: 'row' | 'stack' | 'univ'
}) {
  const grid = {
    row: 'md:grid-cols-2',
    stack: 'md:grid-cols-3',
    univ: 'md:grid-cols-2 lg:grid-cols-6 [&>li:nth-child(1)]:lg:col-span-4 [&>li:nth-child(2)]:lg:col-span-2 [&>li:nth-child(n+3)]:lg:col-span-2',
  }[layout]
  return (
    <section aria-labelledby={id} className="bg-site-navy">
      <div className="container-wide py-16 sm:py-20">
        <SectionHead id={id} eyebrow={eyebrow} title={title} align="center" inverse className="max-w-none" />
        <ul className={cn('mt-10 grid gap-5 lg:gap-10', grid)}>
          {items.map(({ icon, title: t, text }, i) => (
            <li
              key={t}
              className={cn('reveal flex gap-6 rounded-[1.5rem] bg-site-night p-8 shadow-overlay sm:p-10', layout === 'row' ? 'flex-col sm:flex-row' : 'flex-col')}
              style={delay(i * 90)}
            >
              <IconCircle icon={icon} tone="green" square />
              <div>
                <h3 className="text-lg leading-normal font-medium text-white">{t}</h3>
                <p className="mt-2 text-base leading-normal text-white">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ── Preguntas frecuentes (Figma: componente-preguntas) ────────────── */
function FaqItem({ item }: { item: Faq }) {
  const [open, setOpen] = useState(true)
  const id = useId()
  return (
    <li className="reveal rounded-[1rem] border border-site-wash bg-site-wash">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-a`}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center gap-4 rounded-[1rem] px-6 py-6 text-left text-lg leading-normal font-medium text-site-ink"
        >
          <span className="flex-1">{item.question}</span>
          <ChevronDown aria-hidden className={cn('size-6 shrink-0 transition-transform duration-300 ease-standard', open && 'rotate-180')} />
        </button>
      </h3>
      <div id={`${id}-a`} className={cn('grid transition-[grid-template-rows] duration-300 ease-standard', open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
        <div className="overflow-hidden" {...(open ? {} : { inert: true })}>
          <p className="px-6 pb-6 text-base leading-normal text-site-ink">{item.answer}</p>
        </div>
      </div>
    </li>
  )
}

export function FaqSection({ items }: { items: Faq[] }) {
  return (
    <section aria-labelledby="faq-title" className="bg-white">
      <div className="container-wide py-16 sm:py-20">
        <SectionHead id="faq-title" eyebrow="PREGUNTAS FRECUENTES" title="Resolvemos tus dudas antes de empezar" align="center" />
        <ul className="mx-auto mt-10 flex max-w-[56.25rem] flex-col gap-6">
          {items.map((it) => <FaqItem key={it.question} item={it} />)}
        </ul>
      </div>
    </section>
  )
}

/* ── CTA final en card azul ────────────────────────────────────────── */
export function CtaCard({ title, description, whatsappUrl, withIcon }: { title: string; description: string; whatsappUrl?: string | null; withIcon?: boolean }) {
  return (
    <section aria-labelledby="cta-title" className="bg-white">
      <div className="container-wide py-10">
        <div className="reveal relative mx-auto flex max-w-[75rem] flex-col items-center gap-10 overflow-hidden rounded-[1.5rem] bg-site-navy px-6 py-16 text-center sm:px-20 sm:py-24">
          <img aria-hidden src={ctaBlob} alt="" className="float-y absolute bottom-[10%] left-[8.75%] hidden w-[8.4%] md:block" />
          <img aria-hidden src={ctaSquiggle} alt="" className="float-y absolute top-[20%] right-[9%] hidden w-[9.4%] rotate-[14.7deg] md:block" style={{ animationDuration: '7s' }} />
          <div className="relative max-w-[35.125rem]">
            <h2 id="cta-title" className="site-display text-white">{title}</h2>
            <p className="mt-6 text-lg leading-normal text-white">{description}</p>
          </div>
          <WhatsAppButton
            url={whatsappUrl}
            label="Consulta por WhatsApp"
            variant="secondary"
            pill
            iconRight={withIcon ? <img src={brandWhatsapp} alt="" className="size-[18px]" /> : undefined}
            hideIcon
            className="relative"
          />
        </div>
      </div>
    </section>
  )
}

/* ── Card de docente (Figma: card-profesores) ──────────────────────── */
export function TeamCard({ name, role, photo, index = 0 }: { name: string; role: string; photo: string; index?: number }) {
  return (
    <article className="reveal lift flex flex-col gap-6 overflow-hidden rounded-[1.5rem] border border-site-wash bg-white pb-10 shadow-overlay" style={delay(index * 90)}>
      <img src={photo} alt={`Foto de ${name}`} loading="lazy" className="aspect-[1312/1199] w-full rounded-t-[1rem] object-cover" />
      <div className="flex flex-col gap-4 px-6">
        <Tag className="self-start">{role}</Tag>
        <h3 className="text-lg leading-normal font-medium text-site-ink">{name}</h3>
      </div>
    </article>
  )
}
