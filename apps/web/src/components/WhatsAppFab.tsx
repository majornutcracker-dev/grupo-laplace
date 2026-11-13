import { Link } from 'react-router-dom'
import whatsappIcon from '../assets/figma/brand-whatsapp.svg'
import { whatsappUrl } from '../lib/contact'
import { delay } from '../lib/motion'

const fabClass =
  'pop-in fixed right-5 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-[90] grid size-15 place-items-center rounded-pill bg-site-green ' +
  'shadow-[0_12px_28px_-10px_rgb(10_33_58/0.55)] transition-[background-color,translate,box-shadow] duration-200 ease-standard ' +
  'hover:-translate-y-0.5 hover:bg-site-green-text focus-visible:outline-offset-4 sm:right-8 sm:bottom-8'

/**
 * Botón flotante de WhatsApp, abajo a la derecha en todas las páginas (canal principal de contacto).
 * Sin número configurado lleva a Contacto. No tiene animación cíclica: solo aparece una vez al cargar.
 */
export function WhatsAppFab() {
  const href = whatsappUrl()
  const icon = <img src={whatsappIcon} alt="" className="size-7" />
  const label = 'Escríbenos por WhatsApp'
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className={fabClass} style={delay(600)}>
      {icon}
    </a>
  ) : (
    <Link to="/contacto" aria-label={label} title={label} className={fabClass} style={delay(600)}>
      {icon}
    </Link>
  )
}
