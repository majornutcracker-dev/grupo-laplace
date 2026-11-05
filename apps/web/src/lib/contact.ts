import { laplaceConfig, siteConfig } from '../config/site'

const digits = (n: string) => n.replace(/\D/g, '')

/** Enlace wa.me con mensaje, o null si el número aún no está configurado. */
export function whatsappUrl(message: string = siteConfig.contact.whatsappMessage, number = siteConfig.contact.whatsappNumber) {
  if (!digits(number)) return null
  return `https://wa.me/${digits(number)}?text=${encodeURIComponent(message)}`
}

/** WhatsApp para el servicio Escolar: el de Laplace si existe, si no el de ALPAS. */
export const laplaceWhatsappUrl = (message: string) =>
  whatsappUrl(message, laplaceConfig.whatsappNumber || siteConfig.contact.whatsappNumber)

export const socialNames = { facebook: 'Facebook', instagram: 'Instagram', tiktok: 'TikTok', youtube: 'YouTube' } as const

export const socialLinks = () =>
  (Object.entries(siteConfig.social) as Array<[keyof typeof siteConfig.social, string]>).filter(([, url]) => url.trim())
