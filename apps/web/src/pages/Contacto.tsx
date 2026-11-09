import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Music2, Phone, Youtube } from 'lucide-react'
import { Breadcrumbs, ButtonLink, cn } from '@grupo-laplace/ui'
import { Accent, FinalCta, IconTile, SectionIntro, SiteTag } from '../components/site/SiteBlocks'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { siteConfig } from '../config/site'
import { contacto } from '../data/content'
import { socialNames, whatsappUrl } from '../lib/contact'
import { delay } from '../lib/motion'
import { usePageMeta } from '../lib/usePageMeta'

const socialIcons = { facebook: Facebook, instagram: Instagram, tiktok: Music2, youtube: Youtube }

/** Medio de contacto. Sin dato, muestra «Por confirmar» en lugar de inventarlo. */
function ChannelCard({ icon, label, value, href, action, index = 0 }: { icon: LucideIcon; label: string; value?: string; href?: string; action?: string; index?: number }) {
  return (
    <li className="reveal flex h-full flex-col gap-5 rounded-[1.5rem] border border-neutral-disabled/40 bg-site-paper p-6 shadow-overlay" style={delay(index * 80)}>
      <div className="flex items-start justify-between gap-3">
        <IconTile icon={icon} tone={value ? (index % 2 ? 'green' : 'navy') : 'mist'} size="md" />
        {!value && <SiteTag className="bg-site-mist px-3 py-1 text-text-muted">Por confirmar</SiteTag>}
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="text-[1.1875rem] leading-[1.4] font-medium text-site-ink">{label}</h3>
        <p className={cn('mt-1 text-base leading-normal break-words', value ? 'text-site-ink' : 'text-text-muted')}>{value ?? 'Dato pendiente de publicar.'}</p>
        {value && href && (
          <ButtonLink href={href} variant="neutral" size="sm" pill className="mt-5 self-start">
            {action ?? 'Abrir'}
          </ButtonLink>
        )}
      </div>
    </li>
  )
}

export default function Contacto() {
  usePageMeta('Contacto · Grupo ALPAS', contacto.description)
  const { contact, social } = siteConfig
  const wa = whatsappUrl()
  const waNumber = contact.phone || (contact.whatsappNumber ? `+${contact.whatsappNumber}` : '')
  const tel = contact.phone ? `tel:${contact.phone.replace(/\s/g, '')}` : undefined
  const socialEntries = Object.entries(social) as Array<[keyof typeof social, string]>

  return (
    <>
      {/* 1. Hero + 2. Contacto por WhatsApp */}
      <section aria-labelledby="page-title" className="overflow-hidden bg-site-paper">
        <div className="container-wide grid items-center gap-12 pt-8 pb-20 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:pt-10 lg:pb-24">
          <div>
            <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Contacto' }]} renderLink={(href, label) => <Link to={href}>{label}</Link>} />
            <SiteTag className="pop-in mt-8">CONTACTO</SiteTag>
            <h1 id="page-title" className="site-display pop-in mt-6 max-w-[16ch] text-[clamp(2.25rem,1.7rem+2vw,3rem)]" style={delay(60)}>
              Estamos listos para <Accent>escucharte</Accent>
            </h1>
            <p className="pop-in mt-6 max-w-[34rem] text-base leading-normal text-site-ink sm:text-lg" style={delay(120)}>{contacto.description}</p>
          </div>

          <div id="whatsapp" aria-labelledby="wa-title" className="pop-in relative overflow-hidden rounded-[1.5rem] bg-site-navy p-8 sm:p-10" style={delay(180)}>
            <span aria-hidden className="absolute -top-12 -right-12 size-44 rounded-pill bg-site-green/20" />
            <IconTile icon={MessageCircle} tone="green" className="relative" />
            <h2 id="wa-title" className="relative mt-8 text-[1.5rem] leading-[1.3] font-medium text-white">Escríbenos por WhatsApp</h2>
            <p className="relative mt-2 max-w-[26rem] text-base leading-normal text-site-steel">Es nuestro canal principal y la forma más rápida de recibir información.</p>
            {wa ? (
              <>
                <p className="relative mt-8 text-sm text-site-steel">Número de WhatsApp</p>
                <p className="relative font-display text-[1.75rem] leading-tight font-semibold tracking-wide text-white">{waNumber}</p>
                <div className="relative mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <WhatsAppButton label="Abrir conversación" variant="inverse" pill />
                  <WhatsAppButton
                    label="Preguntar por un servicio"
                    message="Hola, Grupo ALPAS. Quisiera saber qué servicio es el adecuado para mí."
                    variant="glass"
                    pill
                  />
                </div>
              </>
            ) : (
              <p className="relative mt-8 rounded-2xl bg-white/10 p-4 text-base text-white">Número de WhatsApp por confirmar.</p>
            )}
          </div>
        </div>
      </section>

      {/* 3. Otros medios de contacto */}
      <section aria-labelledby="channels-title" className="bg-site-paper">
        <div className="container-wide pb-[var(--space-section-y)]">
          <SectionIntro id="channels-title" eyebrow="Otros medios" title="También puedes encontrarnos aquí" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ChannelCard icon={Phone} label="Teléfono" value={contact.phone || undefined} href={tel} action="Llamar" index={0} />
            <ChannelCard icon={Mail} label="Correo electrónico" value={contact.email || undefined} href={contact.email ? `mailto:${contact.email}` : undefined} action="Escribir un correo" index={1} />
            <ChannelCard icon={MapPin} label="Ubicación" value={contact.address || undefined} href={contact.mapUrl || undefined} action="Ver mapa" index={2} />
          </ul>

          <h3 className="mt-14 text-[1.1875rem] leading-[1.4] font-medium text-site-ink">Redes sociales oficiales</h3>
          <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {socialEntries.map(([key, url], i) => (
              <ChannelCard
                key={key}
                icon={socialIcons[key]}
                label={socialNames[key]}
                value={url ? url.replace(/^https?:\/\/(www\.)?[^/]+\//, '') : undefined}
                href={url || undefined}
                action={`Ir a ${socialNames[key]}`}
                index={i}
              />
            ))}
          </ul>
        </div>
      </section>

      {/* 4. CTA */}
      <FinalCta
        title={<>¿Tienes una duda? <Accent>Conversemos</Accent></>}
        description="Te ayudamos a encontrar el servicio adecuado para ti o para tu hijo. Escríbenos y te respondemos por WhatsApp."
        whatsappUrl={wa}
      />
    </>
  )
}
