import { Link } from 'react-router-dom'
import icCorreo from '../assets/figma/icons/footer-correo.svg'
import icFacebook from '../assets/figma/icons/footer-facebook.svg'
import icWhatsapp from '../assets/figma/icons/footer-whatsapp.svg'
import { siteConfig } from '../config/site'
import { nav, services } from '../data/content'
import { socialLinks, whatsappUrl } from '../lib/contact'
import { AlpasLogo } from './AlpasLogo'

const linkClass = 'text-base leading-normal font-medium text-neutral-subordinary transition-colors hover:text-white'

/** Fila de contacto: ícono + dato. Solo se muestra si el dato existe. */
function ContactRow({ icon, label, href, external }: { icon: string; label: string; href: string; external?: boolean }) {
  return (
    <li>
      <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="inline-flex items-center gap-2 text-base leading-normal text-neutral-subordinary transition-colors hover:text-white">
        <img src={icon} alt="" aria-hidden className="size-5 shrink-0" />
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
      <div className="site-container pt-10 pb-28 lg:pb-10">
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
                {wa && <ContactRow icon={icWhatsapp} label={contact.phone || `+${contact.whatsappNumber}`} href={wa} external />}
                {/* El Figma solo muestra Facebook; otras redes se agregan aquí con su ícono cuando existan */}
                {socials.filter(([key]) => key === 'facebook').map(([key, url]) => (
                  <ContactRow key={key} icon={icFacebook} label={url.replace(/^https?:\/\/(www\.)?facebook\.com\//, '')} href={url} external />
                ))}
                {contact.email && <ContactRow icon={icCorreo} label={contact.email} href={`mailto:${contact.email}`} />}
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
