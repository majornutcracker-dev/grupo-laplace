import { siteConfig } from '../config/site'

export const hasWhatsapp = () => siteConfig.contact.whatsappNumber.trim().length > 0

/** Devuelve el enlace wa.me o null si el número aún no está configurado. */
export function whatsappUrl(message: string = siteConfig.contact.whatsappMessage) {
  if (!hasWhatsapp()) return null
  const number = siteConfig.contact.whatsappNumber.replace(/\D/g, '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export const socialLinks = () =>
  (Object.entries(siteConfig.social) as Array<[keyof typeof siteConfig.social, string]>)
    .filter(([, url]) => url.trim().length > 0)
