import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { ButtonLink, buttonClasses, type ButtonSize, type ButtonVariant } from '@grupo-laplace/ui'
import { whatsappUrl } from '../lib/contact'

type Props = {
  label?: string
  message?: string
  /** URL ya calculada (p. ej. el WhatsApp de Laplace); por defecto el de ALPAS */
  url?: string | null
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  pill?: boolean
  className?: string
}

/**
 * CTA principal del sitio. Con número configurado abre WhatsApp con el mensaje precargado;
 * sin número lleva a Contacto, donde se indica que el número está pendiente.
 */
export function WhatsAppButton({ label = 'Consultar por WhatsApp', message, url, variant = 'secondary', size, fullWidth, pill, className }: Props) {
  const href = url === undefined ? whatsappUrl(message) : url
  const icon = <MessageCircle className="size-5 shrink-0" aria-hidden />
  if (href) {
    return (
      <ButtonLink href={href} variant={variant} size={size} fullWidth={fullWidth} pill={pill} iconLeft={icon} className={className}>
        {label}
      </ButtonLink>
    )
  }
  return (
    <Link to="/contacto" className={buttonClasses({ variant, size, fullWidth, pill }, className)}>
      {icon}
      {label}
    </Link>
  )
}
