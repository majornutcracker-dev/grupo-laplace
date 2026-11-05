import logo from '../assets/brand/alpas-logo.png'
import { cn } from '@grupo-laplace/ui'

/** Logotipo de Grupo ALPAS (exportado del archivo de Figma). Sobre fondos oscuros va en una placa blanca. */
export function AlpasLogo({ className, onDark }: { className?: string; onDark?: boolean }) {
  const img = <img src={logo} alt="Grupo ALPAS, grupo de estudio" width={700} height={292} className={cn('h-10 w-auto', className)} />
  return onDark ? <span className="inline-flex rounded-lg bg-white px-3 py-2">{img}</span> : img
}
