import { HAIR, SKIN } from './palette'

/**
 * Personajes ilustrados (geométricos, planos), dibujados en SVG para el sitio.
 * Son ilustraciones genéricas de estudiantes y docentes: no representan a personas reales del equipo.
 * Ropa y acentos usan clases de tokens (fill-brand-*), así se adaptan al tema de cada marca.
 */

export type HairStyle = 'short' | 'long' | 'bun' | 'curly' | 'buzz' | 'ponytail'

export type PersonProps = {
  skin?: string
  hair?: string
  hairStyle?: HairStyle
  /** Clase de relleno de la ropa (token) */
  shirt?: string
  /** Clase del cuello/solapa */
  collar?: string
  glasses?: boolean
  /** Objeto en primer plano */
  holding?: 'none' | 'book' | 'notebook' | 'tablet'
  /** Saludo con la mano levantada */
  wave?: boolean
  className?: string
  /** Posición al anidarlo dentro de otra escena SVG */
  x?: number
  y?: number
  width?: number
  height?: number
}


const INK = '#1B2433'

function HairBack({ style, color }: { style: HairStyle; color: string }) {
  if (style === 'long') return <path d="M53 98C49 50 76 32 102 32c28 0 52 18 47 66l3 74c-18-10-80-10-102 0Z" fill={color} />
  if (style === 'ponytail') return <path d="M140 70c22 6 30 40 18 72-4-22-12-36-24-42Z" fill={color} />
  if (style === 'bun') return <circle cx="100" cy="36" r="17" fill={color} />
  return null
}

function HairFront({ style, color }: { style: HairStyle; color: string }) {
  switch (style) {
    case 'buzz':
      return <path d="M63 86c2-30 18-44 38-44s36 14 37 44c-8-14-20-20-37-20S71 72 63 86Z" fill={color} />
    case 'curly':
      return (
        <g fill={color}>
          {[
            [66, 78, 14], [78, 60, 15], [96, 52, 16], [116, 54, 15], [132, 66, 14], [138, 84, 11], [62, 96, 10],
          ].map(([cx, cy, r]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />)}
        </g>
      )
    case 'long':
    case 'ponytail':
    case 'bun':
      return <path d="M61 88c3-30 22-44 41-44 22 0 38 16 38 44-10-14-24-22-40-22-15 0-29 8-39 22Z" fill={color} />
    default:
      return <path d="M60 92c-2-38 18-54 42-54 26 0 42 18 38 54-6-20-20-30-38-30-18 0-34 10-42 30Z" fill={color} />
  }
}

export function Person({
  skin = SKIN.medium,
  hair = HAIR.black,
  hairStyle = 'short',
  shirt = 'fill-brand-secondary',
  collar = 'fill-white',
  glasses,
  holding = 'none',
  wave,
  className,
  x,
  y,
  width,
  height,
}: PersonProps) {
  return (
    <svg viewBox="0 0 200 220" className={className} x={x} y={y} width={width} height={height} aria-hidden>
      <HairBack style={hairStyle} color={hair} />
      {/* cuerpo */}
      <path d="M28 220c0-52 30-80 72-80s72 28 72 80Z" className={shirt} />
      <path d="M84 140l16 20 16-20Z" className={collar} />
      {wave && (
        <g>
          <path d="M150 168c10-20 14-44 12-66" stroke={skin} strokeWidth="18" strokeLinecap="round" fill="none" />
          <circle cx="161" cy="96" r="12" fill={skin} />
        </g>
      )}
      {/* cuello y cabeza */}
      <rect x="88" y="116" width="24" height="30" rx="10" fill={skin} />
      <rect x="88" y="128" width="24" height="10" fill={INK} opacity="0.08" />
      <circle cx="62" cy="98" r="8" fill={skin} />
      <circle cx="138" cy="98" r="8" fill={skin} />
      <ellipse cx="100" cy="92" rx="38" ry="44" fill={skin} />
      <HairFront style={hairStyle} color={hair} />
      {/* rostro */}
      <circle cx="86" cy="98" r="3.6" fill={INK} />
      <circle cx="114" cy="98" r="3.6" fill={INK} />
      <path d="M88 113q12 10 24 0" stroke={INK} strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <circle cx="76" cy="110" r="6" fill="#E8826B" opacity="0.25" />
      <circle cx="124" cy="110" r="6" fill="#E8826B" opacity="0.25" />
      {glasses && (
        <g stroke={INK} strokeWidth="2.6" fill="none">
          <circle cx="86" cy="98" r="10.5" />
          <circle cx="114" cy="98" r="10.5" />
          <path d="M96.5 98h7" />
        </g>
      )}
      {holding === 'book' && (
        <g>
          <rect x="70" y="170" width="60" height="44" rx="4" className="fill-brand-primary" />
          <rect x="74" y="174" width="52" height="36" rx="2" fill="#fff" opacity="0.18" />
          <rect x="66" y="176" width="10" height="16" rx="5" fill={skin} />
          <rect x="124" y="176" width="10" height="16" rx="5" fill={skin} />
        </g>
      )}
      {holding === 'notebook' && (
        <g>
          <rect x="64" y="166" width="72" height="50" rx="5" fill="#fff" />
          {[178, 188, 198].map((y) => <path key={y} d={`M74 ${y}h52`} className="stroke-brand-secondary" strokeWidth="2.5" strokeLinecap="round" />)}
          <rect x="60" y="182" width="11" height="17" rx="5.5" fill={skin} />
          <rect x="129" y="182" width="11" height="17" rx="5.5" fill={skin} />
        </g>
      )}
      {holding === 'tablet' && (
        <g>
          <rect x="62" y="164" width="76" height="54" rx="7" className="fill-brand-primary" />
          <rect x="68" y="170" width="64" height="42" rx="3" fill="#fff" />
          <path d="M76 202l12-14 9 8 13-16 12 22" className="stroke-brand-secondary" strokeWidth="3" fill="none" strokeLinejoin="round" />
        </g>
      )}
    </svg>
  )
}
