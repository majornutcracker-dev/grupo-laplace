import { Link, useLocation } from 'react-router-dom'
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Music2, Phone, Youtube } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { nav } from '../../data/content'
import { socialLinks, whatsappUrl } from '../../lib/contact'
import { BrandCurve, Logo } from '@grupo-laplace/ui'

const socialIcons = { facebook: Facebook, instagram: Instagram, tiktok: Music2, youtube: Youtube }
const socialNames = { facebook: 'Facebook', instagram: 'Instagram', tiktok: 'TikTok', youtube: 'YouTube' }

export function Footer({ showDocsLinks = true }: { showDocsLinks?: boolean }) {
  const { pathname } = useLocation()
  const href = (h: string) => (pathname === '/' ? h : `${import.meta.env.BASE_URL}${h}`)
  const { contact, legal } = siteConfig
  const wa = whatsappUrl()
  const socials = socialLinks()
  const year = new Date().getFullYear()

  return (
    <footer className="on-dark relative overflow-hidden bg-navy-950 text-white">
      <BrandCurve className="absolute -right-10 -bottom-6 w-72 opacity-20" withPoint={false} />
      <div className="container-page relative grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo tone="inverted" height={44} />
          <p className="type-h4 mt-6 max-w-sm text-white">{siteConfig.tagline}</p>
          <p className="type-body-sm mt-2 max-w-sm text-text-inverse-muted">{siteConfig.description}</p>
          {socials.length > 0 && (
            <ul className="mt-6 flex gap-2" aria-label="Redes sociales">
              {socials.map(([key, url]) => {
                const Icon = socialIcons[key]
                return (
                  <li key={key}>
                    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={socialNames[key]} className="inline-grid size-11 place-items-center rounded-md bg-white/5 text-white transition-colors hover:bg-white/15">
                      <Icon className="size-5" aria-hidden />
                    </a>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <nav aria-label="Secundaria" className="md:col-span-3">
          <h2 className="type-overline text-text-accent-on-dark">Explora</h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={href(n.href)} className="type-body-sm text-text-inverse-muted transition-colors hover:text-white">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="type-overline text-text-accent-on-dark">Contacto</h2>
          <ul className="type-body-sm mt-4 space-y-3 text-text-inverse-muted">
            {wa && (
              <li><a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 hover:text-white"><MessageCircle className="size-4 text-celeste-400" aria-hidden />WhatsApp</a></li>
            )}
            {contact.phone && (
              <li><a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2.5 hover:text-white"><Phone className="size-4 text-celeste-400" aria-hidden />{contact.phone}</a></li>
            )}
            {contact.email && (
              <li><a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2.5 hover:text-white"><Mail className="size-4 text-celeste-400" aria-hidden />{contact.email}</a></li>
            )}
            {contact.address && (
              <li className="flex gap-2.5"><MapPin className="mt-0.5 size-4 shrink-0 text-celeste-400" aria-hidden />{contact.address}</li>
            )}
            {import.meta.env.DEV && !wa && !contact.phone && !contact.email && !contact.address && (
              <li className="rounded-md border border-dashed border-white/20 p-3 text-[0.8125rem]">
                Datos de contacto pendientes. Configúralos en <code className="text-celeste-300">src/config/site.ts</code>.
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page type-caption flex flex-col gap-3 py-6 text-text-inverse-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. Todos los derechos reservados.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legal.privacyUrl && <li><a href={legal.privacyUrl} className="hover:text-white">Política de privacidad</a></li>}
            {legal.termsUrl && <li><a href={legal.termsUrl} className="hover:text-white">Términos y condiciones</a></li>}
            {showDocsLinks && (
              <>
                <li><Link to="/marca" className="hover:text-white">Guía de marca</Link></li>
                <li><Link to="/ui-kit" className="hover:text-white">UI Kit</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </footer>
  )
}
