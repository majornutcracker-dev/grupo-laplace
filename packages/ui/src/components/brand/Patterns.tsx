import { useId } from 'react'
import { cn } from '../../lib/cn'

/**
 * Patrones de marca reconstruidos como mosaicos SVG a partir de la guía original
 * (Figma · "Patrones de marca"). Se usan siempre con baja intensidad, nunca detrás de texto largo.
 *  - "orbitas": retícula de circunferencias + puntos (geometría / átomo).
 *  - "red": nodos y enlaces (moléculas / gráficas de funciones).
 */
type Tone = 'dark' | 'light'
type PatternProps = { variant?: 'orbitas' | 'red'; tone?: Tone; className?: string; intensity?: 'subtle' | 'default' }

const palette = {
  dark: { line: '#33A5CC', dot: '#33A5CC', accent: '#FF8A3D' },
  light: { line: '#102C53', dot: '#33A5CC', accent: '#FF8A3D' },
}

export function BrandPattern({ variant = 'red', tone = 'dark', className, intensity = 'default' }: PatternProps) {
  const id = useId().replace(/:/g, '')
  const c = palette[tone]
  const k = intensity === 'subtle' ? 0.55 : 1
  const base = tone === 'dark' ? 1 : 0.55
  return (
    <svg aria-hidden="true" className={cn('pointer-events-none absolute inset-0 h-full w-full', className)}>
      <defs>
        {variant === 'orbitas' ? (
          <pattern id={id} width="80" height="64" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="40" r="19" fill="none" stroke={c.line} strokeOpacity={0.35 * k * base} strokeWidth="1" />
            <circle cx="60" cy="8" r="1.6" fill={c.dot} fillOpacity={0.5 * k * base} />
            <circle cx="22" cy="10" r="2.4" fill={c.accent} fillOpacity={0.45 * k * base} />
            <circle cx="66" cy="44" r="1.3" fill={c.dot} fillOpacity={0.35 * k * base} />
          </pattern>
        ) : (
          <pattern id={id} width="240" height="140" patternUnits="userSpaceOnUse">
            <g stroke={c.line} strokeOpacity={0.28 * k * base} strokeWidth="1" fill="none">
              <path d="M8 52 L52 40 L76 58" />
              <path d="M150 30 L196 22 L222 42" />
              <path d="M120 112 L164 100 L186 126" />
            </g>
            <g fill={c.dot} fillOpacity={0.55 * k * base}>
              <circle cx="8" cy="52" r="2" />
              <circle cx="76" cy="58" r="2" />
              <circle cx="196" cy="22" r="2" />
              <circle cx="120" cy="112" r="2" />
              <circle cx="104" cy="16" r="1.5" />
              <circle cx="214" cy="88" r="1.5" />
              <circle cx="40" cy="120" r="1.3" />
            </g>
            <g fill={c.accent} fillOpacity={0.6 * k * base}>
              <circle cx="52" cy="40" r="2.4" />
              <circle cx="222" cy="42" r="2.2" />
              <circle cx="164" cy="100" r="2.4" />
            </g>
          </pattern>
        )}
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

/**
 * "La curva": recurso gráfico derivado de la L parabólica del isotipo
 * (aparece también en la guía original junto a los mockups). Representa la
 * trayectoria de aprendizaje; el punto naranja es el estudiante que avanza.
 */
export function BrandCurve({ className, tone = 'dark', withPoint = true }: { className?: string; tone?: Tone; withPoint?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 240 120" fill="none" className={cn('pointer-events-none', className)}>
      <path
        d="M6 110 C 40 110, 52 30, 92 30 S 140 100, 176 78 S 214 22, 234 14"
        stroke={tone === 'dark' ? '#33A5CC' : '#102C53'}
        strokeWidth="10"
        strokeLinecap="round"
      />
      {withPoint && <circle cx="214" cy="30" r="9" fill="#FF8A3D" />}
    </svg>
  )
}
