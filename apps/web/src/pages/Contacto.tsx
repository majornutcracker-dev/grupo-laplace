import type { LucideIcon } from 'lucide-react'
import { Facebook, Mail } from 'lucide-react'
import whatsappIcon from '../assets/figma/brand-whatsapp.svg'
import { Eyebrow, Green, IconCircle } from '../components/site/Sections'
import { siteConfig } from '../config/site'
import { contactoFigma as c } from '../data/paginas'
import { whatsappUrl } from '../lib/contact'
import { delay } from '../lib/motion'
import { usePageMeta } from '../lib/usePageMeta'

type Channel = { title: string; value: string; href: string; tone: 'navy' | 'green'; icon?: LucideIcon; external?: boolean }

/** Contacto (Figma: «contactanos»): encabezado centrado y tres medios de contacto. */
export default function Contacto() {
  usePageMeta('Contacto · Grupo ALPAS', c.description)
  const { contact, social } = siteConfig
  const facebookUser = social.facebook.replace(/^https?:\/\/(www\.)?facebook\.com\//, '')
  const channels: Channel[] = [
    { title: 'WhatsApp', value: contact.phone, href: whatsappUrl() ?? '#', tone: 'navy', external: true },
    { title: 'Correo electrónico', value: contact.email, href: `mailto:${contact.email}`, tone: 'green', icon: Mail },
    { title: 'Redes sociales', value: `Facebook: ${facebookUser}`, href: social.facebook, tone: 'navy', icon: Facebook, external: true },
  ]
  return (
    <>
      <section aria-labelledby="page-title" className="bg-white">
        <div className="container-wide flex flex-col items-center py-10 text-center sm:py-12">
          <Eyebrow className="pop-in text-site-green-text">{c.eyebrow}</Eyebrow>
          <h1 id="page-title" className="site-display pop-in mt-6" style={delay(60)}>
            Estamos aquí para <Green>ayudarte</Green>
          </h1>
          <p className="pop-in mt-6 max-w-[42rem] text-lg leading-normal text-site-ink" style={delay(120)}>{c.description}</p>
        </div>
      </section>

      <section aria-label="Medios de contacto" className="bg-white">
        <ul className="container-wide grid gap-5 pt-10 pb-20 md:grid-cols-3 lg:gap-10">
          {channels.map((ch, i) => (
            <li key={ch.title} className="reveal" style={delay(i * 90)}>
              <a
                href={ch.href}
                {...(ch.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="lift flex h-full flex-col gap-8 rounded-[1.5rem] bg-white p-8 shadow-overlay sm:p-10"
              >
                {ch.icon ? (
                  <IconCircle icon={ch.icon} tone={ch.tone} />
                ) : (
                  <span aria-hidden className="grid size-15 place-items-center rounded-pill bg-site-navy">
                    <img src={whatsappIcon} alt="" className="size-6" />
                  </span>
                )}
                <span>
                  <span className="block text-lg leading-normal font-medium text-site-ink">{ch.title}</span>
                  <span className="mt-2 block text-lg leading-normal break-words text-site-ink">{ch.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
