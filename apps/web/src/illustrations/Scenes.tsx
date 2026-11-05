import { Person } from './Person'
import { HAIR, SKIN } from './palette'

/**
 * Escenas ilustradas del sitio. Fondos y acentos usan tokens (fill-surface-*, fill-brand-*),
 * así que en la página Escolar toman la paleta de Grupo Laplace.
 */

const label = (title: string) => <title>{title}</title>

/** Docente explicando en la pizarra a una estudiante */
export function TutoringScene({ className, title = 'Ilustración: docente explicando un ejercicio en la pizarra a una estudiante', bg = true }: { className?: string; title?: string; bg?: boolean }) {
  return (
    <svg viewBox="0 0 480 400" role="img" className={className}>
      {label(title)}
      {bg && <rect width="480" height="400" className="fill-surface-accent" />}
      <circle cx="400" cy="70" r="90" className={bg ? 'fill-brand-secondary' : 'fill-white'} opacity="0.18" />
      {/* pizarra */}
      <rect x="40" y="46" width="250" height="170" rx="14" className="fill-brand-primary" />
      <rect x="40" y="200" width="250" height="16" rx="6" fill="#000" opacity="0.15" />
      <g fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.92">
        <path d="M66 92h28M80 78v28" />
        <path d="M110 100c8-22 22-22 26 0s18 22 26 0" />
        <path d="M184 92h30M184 102h30" />
        <path d="M232 80l16 22M248 80l-16 22" />
        <path d="M66 150c40-34 80 18 120-6s60-26 84 4" className="stroke-brand-secondary" />
      </g>
      <circle cx="226" cy="140" r="7" className="fill-brand-secondary" />
      {/* docente */}
      <Person x={232} y={104} width={210} height={232} skin={SKIN.tan} hair={HAIR.black} hairStyle="short" glasses shirt="fill-brand-primary" wave />
      {/* estudiante */}
      <Person x={30} y={190} width={190} height={210} skin={SKIN.light} hair={HAIR.auburn} hairStyle="ponytail" shirt="fill-brand-secondary" holding="notebook" />
      {/* mesa */}
      {bg && <rect x="0" y="372" width="480" height="28" className="fill-brand-primary" opacity="0.12" />}
    </svg>
  )
}

/** Grupo de estudio alrededor de una mesa */
export function StudyGroupScene({ className, title = 'Ilustración: tres estudiantes estudiando juntos en una mesa' }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 480 480" role="img" className={className}>
      {label(title)}
      <rect width="480" height="480" className="fill-surface-muted" />
      <circle cx="96" cy="96" r="64" className="fill-brand-secondary" opacity="0.22" />
      <rect x="320" y="40" width="120" height="120" rx="28" className="fill-white" />
      <g className="stroke-brand-primary" strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M352 82h20M362 72v20" />
        <path d="M388 82h20" />
        <path d="M352 124h56" />
        <path d="M352 112h24" opacity="0.4" />
      </g>
      <Person x={20} y={150} width={180} height={198} skin={SKIN.deep} hair={HAIR.black} hairStyle="curly" shirt="fill-brand-primary" />
      <Person x={150} y={118} width={190} height={210} skin={SKIN.light} hair={HAIR.blond} hairStyle="bun" glasses shirt="fill-brand-secondary" />
      <Person x={284} y={160} width={176} height={194} skin={SKIN.medium} hair={HAIR.brown} hairStyle="short" shirt="fill-white" collar="fill-brand-secondary" />
      {/* mesa */}
      <path d="M0 330h480v150H0Z" className="fill-brand-primary" />
      <rect x="60" y="352" width="120" height="78" rx="6" fill="#fff" transform="rotate(-6 120 391)" />
      <g className="stroke-brand-secondary" strokeWidth="4" strokeLinecap="round">
        <path d="M78 376l84-9" /><path d="M80 394l84-9" /><path d="M82 412l60-6" />
      </g>
      <rect x="220" y="356" width="150" height="90" rx="10" className="fill-brand-secondary" />
      <rect x="232" y="368" width="126" height="66" rx="4" fill="#fff" opacity="0.9" />
      <path d="M248 420l22-24 18 14 22-26 26 36" className="stroke-brand-primary" strokeWidth="4" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="420" cy="400" r="22" fill="#fff" opacity="0.9" />
      <path d="M410 400l7 7 13-14" className="stroke-brand-secondary" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Universitario: estudiante con tablet y símbolos de cálculo y ciencias */
export function UniversityScene({ className, title = 'Ilustración: estudiante universitario repasando cálculo y física' }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 480 400" role="img" className={className}>
      {label(title)}
      <rect width="480" height="400" className="fill-surface-muted" />
      <circle cx="240" cy="230" r="150" className="fill-brand-secondary" opacity="0.18" />
      <g className="fill-white">
        <rect x="40" y="48" width="118" height="70" rx="16" />
        <rect x="330" y="64" width="110" height="64" rx="16" />
        <rect x="356" y="262" width="92" height="60" rx="16" />
      </g>
      <text x="62" y="96" fontSize="34" fontFamily="Poppins, sans-serif" fontWeight="500" className="fill-brand-primary">∫ dx</text>
      <g className="stroke-brand-primary" strokeWidth="3" fill="none">
        <ellipse cx="385" cy="96" rx="30" ry="11" />
        <ellipse cx="385" cy="96" rx="30" ry="11" transform="rotate(60 385 96)" />
        <ellipse cx="385" cy="96" rx="30" ry="11" transform="rotate(-60 385 96)" />
      </g>
      <circle cx="385" cy="96" r="5" className="fill-brand-secondary" />
      <text x="372" y="302" fontSize="28" fontFamily="Poppins, sans-serif" fontWeight="500" className="fill-brand-primary">π</text>
      <circle cx="420" cy="292" r="8" className="fill-brand-secondary" />
      <Person x={120} y={112} width={250} height={288} skin={SKIN.medium} hair={HAIR.black} hairStyle="short" shirt="fill-brand-primary" holding="tablet" />
    </svg>
  )
}

/** Orientación vocacional: joven frente a caminos con señales */
export function GuidanceScene({ className, title = 'Ilustración: joven eligiendo entre varios caminos profesionales' }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 480 400" role="img" className={className}>
      {label(title)}
      <rect width="480" height="400" className="fill-surface-accent" />
      <path d="M0 330C120 300 200 360 300 330s140-40 180-30v100H0Z" className="fill-brand-secondary" opacity="0.35" />
      {/* poste con señales */}
      <rect x="346" y="96" width="10" height="250" rx="5" className="fill-brand-primary" />
      <path d="M356 112h80l18 16-18 16h-80Z" className="fill-brand-primary" />
      <path d="M346 168h-76l-18 16 18 16h76Z" className="fill-brand-secondary" />
      <path d="M356 224h70l18 16-18 16h-70Z" className="fill-white" />
      <g fill="#fff"><rect x="372" y="124" width="44" height="8" rx="4" /></g>
      <g fill="#fff"><rect x="280" y="180" width="44" height="8" rx="4" /></g>
      <g className="fill-brand-primary"><rect x="372" y="236" width="36" height="8" rx="4" /></g>
      {/* brújula */}
      <circle cx="92" cy="88" r="44" className="fill-white" />
      <circle cx="92" cy="88" r="44" className="stroke-brand-primary" strokeWidth="4" fill="none" />
      <path d="M92 58l10 30-10 30-10-30Z" className="fill-brand-secondary" />
      <path d="M92 58l10 30H82Z" className="fill-brand-primary" />
      <Person x={70} y={150} width={220} height={250} skin={SKIN.light} hair={HAIR.brown} hairStyle="long" shirt="fill-brand-secondary" />
    </svg>
  )
}

/** Cursos grabados: pantalla con una clase en video */
export function RecordedScene({ className, title = 'Ilustración: pantalla con una clase grabada' }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 480 400" role="img" className={className}>
      {label(title)}
      <rect width="480" height="400" className="fill-surface-muted" />
      <rect x="70" y="70" width="340" height="220" rx="18" className="fill-brand-primary" />
      <rect x="86" y="86" width="308" height="170" rx="8" fill="#fff" />
      <rect x="180" y="290" width="120" height="20" className="fill-brand-primary" opacity="0.8" />
      <rect x="140" y="306" width="200" height="14" rx="7" className="fill-brand-primary" />
      <circle cx="240" cy="168" r="34" className="fill-brand-secondary" />
      <path d="M230 150l28 18-28 18Z" fill="#fff" />
      <rect x="110" y="236" width="260" height="6" rx="3" className="fill-surface-muted" />
      <rect x="110" y="236" width="96" height="6" rx="3" className="fill-brand-secondary" />
      <rect x="360" y="40" width="80" height="44" rx="12" className="fill-brand-secondary" />
      <text x="374" y="69" fontSize="18" fontFamily="Poppins, sans-serif" fontWeight="500" fill="#fff">Pronto</text>
    </svg>
  )
}

/** Contacto: teléfono con conversación */
export function ChatScene({ className, title = 'Ilustración: conversación por mensajes en un teléfono' }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 400 400" role="img" className={className}>
      {label(title)}
      <rect width="400" height="400" className="fill-surface-accent" />
      <rect x="124" y="40" width="152" height="300" rx="28" className="fill-brand-primary" />
      <rect x="136" y="64" width="128" height="252" rx="12" fill="#fff" />
      <rect x="148" y="84" width="84" height="34" rx="14" className="fill-surface-muted" />
      <rect x="168" y="130" width="84" height="44" rx="14" className="fill-brand-secondary" />
      <rect x="148" y="186" width="70" height="30" rx="14" className="fill-surface-muted" />
      <rect x="176" y="228" width="76" height="30" rx="14" className="fill-brand-secondary" />
      <g fill="#fff"><rect x="180" y="142" width="56" height="7" rx="3.5" /><rect x="180" y="155" width="36" height="7" rx="3.5" /></g>
      <circle cx="300" cy="96" r="34" className="fill-brand-secondary" />
      <path d="M286 96l9 9 17-18" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="96" cy="286" r="26" className="fill-white" />
      <g className="fill-brand-primary"><circle cx="84" cy="286" r="4" /><circle cx="96" cy="286" r="4" /><circle cx="108" cy="286" r="4" /></g>
    </svg>
  )
}

