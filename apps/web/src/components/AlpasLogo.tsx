import logo from '../assets/figma/logo-header.svg'
import logoOnDark from '../assets/figma/logo-footer.svg'
import { cn } from '@grupo-laplace/ui'

/** Logotipo de Grupo ALPAS (vectorial, exportado del Figma «PROTOTIPOS»). Sobre fondos oscuros usa la versión clara. */
export function AlpasLogo({ className, onDark }: { className?: string; onDark?: boolean }) {
  return <img src={onDark ? logoOnDark : logo} alt="Grupo ALPAS, grupo de estudio" width={119} height={48} className={cn('h-10 w-auto', className)} />
}
