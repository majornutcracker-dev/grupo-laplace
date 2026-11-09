import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { Facebook, Instagram, Mail, MessageCircle, Music2, Youtube } from 'lucide-react'
import { siteConfig } from '../config/site'
import { nav, services } from '../data/content'
import { socialLinks, socialNames, whatsappUrl } from '../lib/contact'
import { AlpasLogo } from './AlpasLogo'

const socialIcons = { facebook: Facebook, instagram: Instagram, tiktok: Music2, youtube: Youtube }
const linkClass = 'text-base leading-normal font-medium text-neutral-subordinary transition-colors hover:text-white'

/** Fila de contacto: ícono + dato. Solo se muestra si el dato existe. */
function ContactRow({ icon: Icon, label, href, external }: { icon: LucideIcon; label: string; href: string; external?: boolean }) {
  return (
    <li>
      <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="inline-flex items-center gap-2 text-base leading-normal text-neutral-subordinary transition-colors hover:text-white">
        <Icon className="size-5 shrink-0" aria-hidden />
        <span className="break-all">{label}</span>
      </a>
    </li>
  )
}

/** Pie de página (Figma: footer de «PROTOTIPOS / inicio»). */
export function SiteFooter() {
  const { contact } = siteConfig
  const wa = whatsappUrl()
  const socials = socialLinks()
  return (
    <footer className="bg-site-navy">
      <div className="container-wide pt-14 pb-28 lg:pb-10">
        <div className="grid gap-12 lg:grid-cols-[21rem_1fr] lg:gap-20">
          <div>
            <AlpasLogo onDark className="h-12" />
            <p className="mt-8 max-w-[21rem] text-base leading-normal text-site-steel">{siteConfig.description.split('. ')[0]}.</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <nav aria-label="Navegación del pie">
              <h2 className="text-base leading-normal font-medium text-white">Navegación</h2>
              <ul className="mt-4 space-y-4">
                {nav.filter((n) => n.to !== '/servicios').map((n) => (
                  <li key={n.to}><Link to={n.to} className={linkClass}>{n.label}</Link></li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Servicios">
              <h2 className="text-base leading-normal font-medium text-white">Servicios</h2>
              <ul className="mt-4 space-y-4">
                {services.filter((s) => s.to).map((s) => (
                  <li key={s.id}><Link to={s.to!} className={linkClass}>{s.name}</Link></li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-base leading-normal font-medium text-white">Contacto</h2>
              <ul className="mt-4 space-y-4">
                {wa && <ContactRow icon={MessageCircle} label={contact.phone || `+${contact.whatsappNumber}`} href={wa} external />}
                {socials.map(([key, url]) => (
                  <ContactRow key={key} icon={socialIcons[key]} label={key === 'facebook' ? url.replace(/^https?:\/\/(www\.)?facebook\.com\//, '') : socialNames[key]} href={url} external />
                ))}
                {contact.email && <ContactRow icon={Mail} label={contact.email} href={`mailto:${contact.email}`} />}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-site-slate/60 pt-10">
          <p className="text-center text-base leading-normal text-site-steel">© {new Date().getFullYear()} ALPAS Grupo de estudio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
