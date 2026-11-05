import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Music2, Phone, Youtube } from 'lucide-react'
import { Breadcrumbs, Note, PlusMark } from '@grupo-laplace/ui'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { siteConfig } from '../config/site'
import { contacto } from '../data/content'
import { socialLinks, socialNames, whatsappUrl } from '../lib/contact'
import { usePageMeta } from '../lib/usePageMeta'

const socialIcons = { facebook: Facebook, instagram: Instagram, tiktok: Music2, youtube: Youtube }

function Channel({ icon: Icon, label, value, href }: { icon: LucideIcon; label: string; value?: string; href?: string }) {
  return (
    <li className="flex items-start gap-4 py-5">
      <span className="grid size-11 shrink-0 place-items-center rounded-pill bg-surface-accent text-text-accent"><Icon className="size-5" aria-hidden /></span>
      <div className="min-w-0">
        <p className="type-label text-text-heading">{label}</p>
        {value ? (
          href ? <a href={href} className="type-body break-words text-text-body underline-offset-4 hover:underline" {...(/^https?:/.test(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{value}</a> : <p className="type-body text-text-body">{value}</p>
        ) : (
          <p className="type-body-sm text-text-muted">Por confirmar</p>
        )}
      </div>
    </li>
  )
}

export default function Contacto() {
  usePageMeta('Contacto · Grupo ALPAS', contacto.description)
  const { contact } = siteConfig
  const wa = whatsappUrl()
  const socials = socialLinks()
  return (
    <section aria-labelledby="page-title" className="bg-surface-subtle">
      <div className="container-wide grid gap-12 pt-8 pb-[var(--space-section-y)] lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:pt-12">
        <div>
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Contacto' }]} renderLink={(href, label) => <Link to={href}>{label}</Link>} />
          <h1 id="page-title" className="type-h1 mt-6 max-w-[16ch]">{contacto.title}</h1>
          <p className="type-body-lg mt-5 max-w-[34rem] text-text-body">{contacto.description}</p>

          <div id="whatsapp" className="frame-tab relative mt-10 overflow-hidden bg-surface-inverse p-8 sm:p-10">
            <PlusMark className="absolute top-6 right-6 size-10" />
            <p className="type-h4 text-white">Escríbenos por WhatsApp</p>
            <p className="type-body mt-2 max-w-[28rem] text-text-inverse-muted">Es la forma más rápida de recibir información sobre nuestros servicios.</p>
            {wa ? (
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppButton />
                <span className="type-label text-white">{contact.phone || `+${contact.whatsappNumber}`}</span>
              </div>
            ) : (
              <Note tone="warning" title="Número de WhatsApp por confirmar" className="mt-7">
                Muy pronto publicaremos aquí nuestro número de contacto.
              </Note>
            )}
          </div>
        </div>

        <div className="lg:pt-24">
          <h2 className="type-h5">Otros canales</h2>
          <ul className="mt-2 divide-y divide-border-default border-y border-border-default">
            <Channel icon={MessageCircle} label="WhatsApp" value={contact.whatsappNumber ? `+${contact.whatsappNumber}` : undefined} href={wa ?? undefined} />
            <Channel icon={Phone} label="Teléfono" value={contact.phone || undefined} href={contact.phone ? `tel:${contact.phone.replace(/\s/g, '')}` : undefined} />
            <Channel icon={Mail} label="Correo electrónico" value={contact.email || undefined} href={contact.email ? `mailto:${contact.email}` : undefined} />
            <Channel icon={MapPin} label="Ubicación" value={contact.address || undefined} href={contact.mapUrl || undefined} />
          </ul>
          <h2 className="type-h5 mt-10">Redes sociales</h2>
          {socials.length ? (
            <ul className="mt-4 flex flex-wrap gap-3">
              {socials.map(([key, url]) => {
                const Icon = socialIcons[key]
                return (
                  <li key={key}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-pill bg-white px-4 type-label text-text-heading shadow-neutral hover:bg-surface-muted">
                      <Icon className="size-4.5" aria-hidden />{socialNames[key]}
                    </a>
                  </li>
                )
              })}
            </ul>
          ) : (
            <p className="type-body-sm mt-2 text-text-muted">Por confirmar</p>
          )}
        </div>
      </div>
    </section>
  )
}
