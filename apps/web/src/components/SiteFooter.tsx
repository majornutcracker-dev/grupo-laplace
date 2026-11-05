import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Music2, Phone, Youtube } from 'lucide-react'
import { siteConfig } from '../config/site'
import { nav, services } from '../data/content'
import { socialLinks, socialNames, whatsappUrl } from '../lib/contact'
import { AlpasLogo } from './AlpasLogo'

const socialIcons = { facebook: Facebook, instagram: Instagram, tiktok: Music2, youtube: Youtube }

export function SiteFooter() {
  const { contact } = siteConfig
  const wa = whatsappUrl()
  const socials = socialLinks()
  return (
    <footer className="bg-surface-inverse text-text-inverse-muted">
      <div className="container-wide grid gap-12 pt-16 pb-28 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:pb-16">
        <div className="max-w-sm">
          <AlpasLogo onDark className="h-9" />
          <p className="type-body-sm mt-6">{siteConfig.description}</p>
          {socials.length > 0 && (
            <ul className="mt-6 flex gap-2" aria-label="Redes sociales">
              {socials.map(([key, url]) => {
                const Icon = socialIcons[key]
                return (
                  <li key={key}>
                    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={socialNames[key]} className="grid size-11 place-items-center rounded-pill bg-white/8 text-white hover:bg-white/16">
                      <Icon className="size-5" aria-hidden />
                    </a>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <nav aria-label="Navegación del pie">
          <h2 className="type-label text-white">Navegación</h2>
          <ul className="type-body-sm mt-4 space-y-3">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-white">{n.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Servicios">
          <h2 className="type-label text-white">Servicios</h2>
          <ul className="type-body-sm mt-4 space-y-3">
            {services.map((s) => (
              <li key={s.id}>
                {s.to ? <Link to={s.to} className="hover:text-white">{s.name}</Link> : <span>{s.name} · próximamente</span>}
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="type-label text-white">Contacto</h2>
          <ul className="type-body-sm mt-4 space-y-3">
            <li>
              {wa ? (
                <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 hover:text-white"><MessageCircle className="size-4 text-green-medium" aria-hidden />WhatsApp</a>
              ) : (
                <Link to="/contacto" className="inline-flex items-center gap-2.5 hover:text-white"><MessageCircle className="size-4 text-green-medium" aria-hidden />WhatsApp</Link>
              )}
            </li>
            {contact.phone && <li className="flex items-center gap-2.5"><Phone className="size-4 text-green-medium" aria-hidden /><a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-white">{contact.phone}</a></li>}
            {contact.email && <li className="flex items-center gap-2.5"><Mail className="size-4 text-green-medium" aria-hidden /><a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a></li>}
            {contact.address && <li className="flex gap-2.5"><MapPin className="mt-0.5 size-4 shrink-0 text-green-medium" aria-hidden />{contact.address}</li>}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-wide type-caption py-6">© {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
