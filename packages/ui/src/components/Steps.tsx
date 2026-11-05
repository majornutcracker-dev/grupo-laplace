import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

/** az-pasos de Figma, en su uso de sitio: pasos de un proceso en orden. Solo para contenido que es una secuencia real. */
export function Steps({ steps, className }: { steps: Array<{ title: string; text: ReactNode }>; className?: string }) {
  return (
    <ol className={cn('grid gap-8 md:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] md:gap-6', className)}>
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex gap-4 md:flex-col md:gap-5">
          <div className="flex flex-col items-center md:flex-row">
            <span className="grid size-10 shrink-0 place-items-center rounded-pill bg-action-primary type-label text-action-on-primary">
              {i + 1}
            </span>
            {i < steps.length - 1 && (
              <span aria-hidden className="mt-2 w-0.5 flex-1 bg-border-default md:mt-0 md:ml-3 md:h-0.5 md:w-auto" />
            )}
          </div>
          <div className="pb-2">
            <h3 className="type-h5">{s.title}</h3>
            <p className="type-body mt-1.5 text-text-body">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
