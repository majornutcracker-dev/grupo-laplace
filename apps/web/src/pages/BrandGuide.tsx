import type { CSSProperties, ReactNode } from 'react'
import { Check, Mail, MapPin, MessageCircle, Sigma, X } from 'lucide-react'
import mockups from '../assets/brand/mockups.png'
import { Code, Demo, DocSection, DocsShell, Spec } from '../components/layout/Docs'
import { Badge, BrandCurve, BrandPattern, Logo, StatusTag, cn } from '@grupo-laplace/ui'
import { usePageMeta } from '../lib/usePageMeta'

const toc = [
  { id: 'esencia', label: 'Esencia' },
  { id: 'logotipo', label: 'Logotipo' },
  { id: 'seguridad', label: 'Área de seguridad' },
  { id: 'incorrectos', label: 'Usos incorrectos' },
  { id: 'color', label: 'Color' },
  { id: 'tipografia', label: 'Tipografía' },
  { id: 'recursos', label: 'Recursos gráficos' },
  { id: 'imagen', label: 'Fotografía e ilustración' },
  { id: 'reticula', label: 'Retícula' },
  { id: 'aplicaciones', label: 'Aplicaciones' },
]

function DoDont({ ok, children, label }: { ok: boolean; children: ReactNode; label: string }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-border-default bg-white">
      <div className="grid h-32 place-items-center overflow-hidden p-4">{children}</div>
      <figcaption className={cn('type-caption flex items-start gap-2 border-t px-4 py-3', ok ? 'border-feedback-success-border bg-feedback-success-surface text-feedback-success' : 'border-feedback-error-border bg-feedback-error-surface text-feedback-error')}>
        {ok ? <Check className="mt-px size-4 shrink-0" aria-hidden /> : <X className="mt-px size-4 shrink-0" aria-hidden />}
        <span>{label}</span>
      </figcaption>
    </figure>
  )
}

const swatches = [
  { name: 'Azul profundo', hex: '#102C53', rgb: '16 · 44 · 83', cmyk: '100 · 80 · 35 · 30*', role: 'Estructura, confianza, fondos principales, texto', share: '30 %', fg: '#fff' },
  { name: 'Celeste', hex: '#33A5CC', rgb: '51 · 165 · 204', cmyk: '75 · 15 · 10 · 0*', role: 'Reconocimiento, aprendizaje, elementos interactivos', share: '7 %', fg: '#102C53' },
  { name: 'Naranja', hex: '#FF8A3D', rgb: '255 · 138 · 61', cmyk: '0 · 55 · 80 · 0*', role: 'Energía y acción: CTA y acentos puntuales', share: '3 %', fg: '#102C53' },
  { name: 'Blanco', hex: '#FFFFFF', rgb: '255 · 255 · 255', cmyk: '0 · 0 · 0 · 0', role: 'Claridad, espacio, contraste', share: '60 %', fg: '#102C53' },
]

export default function BrandGuide() {
  usePageMeta('Guía de marca · Grupo Laplace', 'Sistema de identidad visual de Grupo Laplace: logotipo, color, tipografía, recursos gráficos y aplicaciones.')
  return (
    <DocsShell
      overline="Brand identity system · v2.0 (evolución)"
      title="Guía de marca Grupo Laplace"
      lead="Evolución del sistema original: se conserva el logotipo, la paleta y el espíritu, y se ordenan reglas de uso, jerarquías y recursos para que la marca se vea igual de sólida en una taza, un flyer o la web."
      toc={toc}
    >
      {/* ── ESENCIA ── */}
      <DocSection id="esencia" title="Esencia de marca">
        <div className="on-dark relative overflow-hidden rounded-2xl bg-navy-900 p-8 text-white sm:p-12">
          <BrandPattern variant="red" tone="dark" intensity="subtle" />
          <div className="relative grid gap-10 lg:grid-cols-2">
            <div>
              <p className="type-overline text-text-accent-on-dark">Concepto central</p>
              <p className="type-h1 mt-3 text-white">Aprender juntos,<br />llegar más lejos.</p>
            </div>
            <div className="type-body-lg space-y-4 text-text-inverse-muted">
              <p><strong className="text-white">El punto en la curva.</strong> El isotipo une una L parabólica —una trayectoria que sube— con una P sólida, y sobre ellas un punto. Leemos el punto como el estudiante que avanza sobre la curva del aprendizaje, sostenido por la estructura del docente.</p>
              <p className="type-body-sm"><StatusTag status="propuesta" className="mr-2" />Lectura narrativa propuesta por diseño; no modifica el logotipo.</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Propósito', 'Que cada estudiante de secundaria comprenda las ciencias y confíe en su capacidad para seguir avanzando.'],
            ['Propuesta de valor', 'Reforzamiento en matemáticas y química que prioriza entender el porqué, con práctica guiada y acompañamiento cercano.'],
            ['Personalidad', 'Clara · Cercana · Rigurosa · Optimista. Un buen profesor: sabe mucho, explica simple y no te deja solo.'],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border border-border-default bg-white p-6">
              <h3 className="type-h4">{t}</h3>
              <p className="type-body mt-2 text-text-secondary">{d}</p>
            </div>
          ))}
        </div>
        <p className="type-body text-text-secondary">Estrategia completa (público, tono, mensajes, eslóganes): <Code>docs/02-estrategia-de-marca.md</Code>.</p>
      </DocSection>

      {/* ── LOGOTIPO ── */}
      <DocSection id="logotipo" title="Logotipo" description="Los trazados son los originales de Figma; solo se han normalizado colores y recortes. La versión vertical es una composición nueva propuesta con las mismas piezas.">
        <div className="grid gap-4 md:grid-cols-2">
          <Demo title="Horizontal · principal" note="Uso por defecto: web, papelería, redes."><div className="grid place-items-center py-6"><Logo height={64} /></div></Demo>
          <Demo title="Horizontal · invertido" dark note="Fondos azul profundo o fotografías oscuras."><div className="grid place-items-center py-6"><Logo tone="inverted" height={64} /></div></Demo>
          <Demo title="Vertical · propuesta" note={<span className="flex items-center gap-2"><StatusTag status="propuesta" /> Espacios cuadrados o estrechos: polos, tomatodos, perfiles.</span>}><div className="grid place-items-center py-2"><Logo layout="vertical" height={130} /></div></Demo>
          <Demo title="Isotipo" note="Favicon, avatar de redes, sellos, bordados pequeños."><div className="flex items-center justify-center gap-8 py-6"><Logo layout="isotipo" height={72} /><div className="rounded-xl bg-navy-900 p-4"><Logo layout="isotipo" tone="inverted" height={56} /></div></div></Demo>
        </div>
        <Demo title="Versiones a una tinta">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="grid place-items-center rounded-lg border border-border-subtle p-6"><Logo tone="mono-navy" height={44} /></div>
            <div className="grid place-items-center rounded-lg bg-navy-900 p-6"><Logo tone="mono-white" height={44} /></div>
            <div className="grid place-items-center rounded-lg border border-border-subtle p-6"><Logo tone="mono-black" height={44} /></div>
          </div>
        </Demo>
        <Spec rows={[
          ['Corrección', 'En la guía original el logotipo a color está rotulado como «Versión monocromática». Aquí se renombra: Principal (2 colores) y Una tinta (azul, blanco o negro).'],
          ['Archivos', <>SVG en <Code>brand/logos/</Code> y <Code>web/src/assets/brand/</Code>: horizontal, vertical e isotipo × color, inverted, mono-navy, mono-white, mono-black.</>],
        ]} />
      </DocSection>

      {/* ── ÁREA DE SEGURIDAD ── */}
      <DocSection id="seguridad" title="Área de seguridad y tamaños mínimos" description="La unidad x es la altura de la palabra «GRUPO» (≈ 24 % de la altura del logotipo). Ningún elemento entra en ese margen.">
        <Demo>
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="mx-auto w-fit">
              <div className="relative p-[calc(64px*0.24)]" style={{ outline: '1px dashed #33A5CC', background: 'repeating-linear-gradient(45deg, #ECF9FF 0 6px, #fff 6px 12px)' } as CSSProperties}>
                <div className="bg-white"><Logo height={64} /></div>
                {['top-0 left-1/2 -translate-x-1/2', 'bottom-0 left-1/2 -translate-x-1/2', 'left-0 top-1/2 -translate-y-1/2', 'right-0 top-1/2 -translate-y-1/2'].map((p) => (
                  <span key={p} className={cn('type-caption absolute font-bold text-celeste-700', p)}>x</span>
                ))}
              </div>
            </div>
            <ul className="type-body-sm space-y-2 text-text-secondary">
              <li><strong className="text-text-primary">Horizontal:</strong> 120 px de ancho en pantalla · 30 mm en impresión.</li>
              <li><strong className="text-text-primary">Vertical:</strong> 56 px de alto · 18 mm.</li>
              <li><strong className="text-text-primary">Isotipo:</strong> 20 px · 6 mm. Por debajo, el punto se funde con la curva.</li>
              <li><strong className="text-text-primary">Bordado:</strong> isotipo ≥ 25 mm; logotipo horizontal ≥ 70 mm (el «GRUPO» es fino).</li>
            </ul>
          </div>
        </Demo>
      </DocSection>

      {/* ── USOS INCORRECTOS ── */}
      <DocSection id="incorrectos" title="Usos correctos e incorrectos">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <DoDont ok label="Principal sobre blanco o superficies claras."><Logo height={40} /></DoDont>
          <DoDont ok label="Invertido sobre azul profundo."><div className="grid h-full w-full place-items-center rounded-md bg-navy-900"><Logo tone="inverted" height={36} /></div></DoDont>
          <DoDont ok={false} label="No deformar ni cambiar proporciones."><div style={{ transform: 'scaleX(1.45)' }}><Logo height={36} /></div></DoDont>
          <DoDont ok={false} label="No rotar ni inclinar."><div style={{ transform: 'rotate(-12deg)' }}><Logo height={36} /></div></DoDont>
          <DoDont ok={false} label="No cambiar los colores oficiales."><div style={{ filter: 'hue-rotate(150deg) saturate(1.6)' }}><Logo height={36} /></div></DoDont>
          <DoDont ok={false} label="No usar la versión a color sobre celeste o naranja."><div className="grid h-full w-full place-items-center rounded-md bg-celeste-500"><Logo height={36} /></div></DoDont>
          <DoDont ok={false} label="No añadir sombras, contornos ni efectos."><div style={{ filter: 'drop-shadow(4px 4px 3px rgba(0,0,0,.45))' }}><Logo height={36} /></div></DoDont>
          <DoDont ok={false} label="No colocar sobre patrones o fotos con poco contraste."><div className="relative grid h-full w-full place-items-center overflow-hidden rounded-md bg-navy-700"><BrandPattern variant="orbitas" tone="dark" /><Logo tone="mono-navy" height={36} className="relative" /></div></DoDont>
        </div>
      </DocSection>

      {/* ── COLOR ── */}
      <DocSection id="color" title="Color" description="Los cuatro valores oficiales no cambian. El azul manda; el celeste identifica; el naranja activa. Escalas completas y tokens en el UI Kit.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {swatches.map((s) => (
            <div key={s.hex} className="overflow-hidden rounded-xl border border-border-default bg-white">
              <div className="flex h-32 items-end justify-between p-4" style={{ background: s.hex, color: s.fg }}>
                <span className="type-h4">{s.name}</span>
                <span className="type-caption font-semibold">{s.share}</span>
              </div>
              <dl className="type-caption grid grid-cols-[3.5rem_1fr] gap-y-1 p-4 text-text-secondary">
                <dt className="font-semibold text-text-primary">HEX</dt><dd className="font-mono">{s.hex}</dd>
                <dt className="font-semibold text-text-primary">RGB</dt><dd className="font-mono">{s.rgb}</dd>
                <dt className="font-semibold text-text-primary">CMYK</dt><dd className="font-mono">{s.cmyk}</dd>
              </dl>
              <p className="type-body-sm border-t border-border-subtle px-4 py-3 text-text-secondary">{s.role}</p>
            </div>
          ))}
        </div>
        <p className="type-caption text-text-muted">* CMYK aproximado de referencia: validar con prueba de color de la imprenta. Para Pantone, solicitar equivalencia física (no se inventa un código).</p>
        <Demo title="Proporción de uso y combinaciones permitidas">
          <div className="flex h-10 overflow-hidden rounded-md ring-1 ring-border-default">
            <div className="w-[60%] bg-white" /><div className="w-[30%] bg-navy-900" /><div className="w-[7%] bg-celeste-500" /><div className="w-[3%] bg-orange-400" />
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['#FFFFFF', '#102C53', 'Azul sobre blanco · 13.9:1', true],
              ['#102C53', '#FFFFFF', 'Blanco sobre azul · 13.9:1', true],
              ['#102C53', '#33A5CC', 'Celeste sobre azul · 4.9:1 (títulos, iconos)', true],
              ['#FF8A3D', '#102C53', 'Azul sobre naranja · 5.9:1 (CTA)', true],
              ['#FF8A3D', '#FFFFFF', 'Blanco sobre naranja · 2.4:1', false],
              ['#FFFFFF', '#33A5CC', 'Celeste sobre blanco en texto · 2.8:1', false],
            ].map(([bg, fg, label, ok]) => (
              <div key={label as string} className="flex items-center gap-3 rounded-lg border border-border-default p-3">
                <span className="type-h4 grid size-12 shrink-0 place-items-center rounded-md ring-1 ring-border-default" style={{ background: bg as string, color: fg as string }}>Aa</span>
                <span className={cn('type-body-sm flex-1', ok ? 'text-text-primary' : 'text-feedback-error')}>{label as string}</span>
                {ok ? <Check className="size-5 text-feedback-success" aria-label="Permitido" /> : <X className="size-5 text-feedback-error" aria-label="No permitido" />}
              </div>
            ))}
          </div>
        </Demo>
      </DocSection>

      {/* ── TIPOGRAFÍA ── */}
      <DocSection id="tipografia" title="Sistema tipográfico">
        <div className="grid gap-4 lg:grid-cols-3">
          <Demo title="Montserrat · titulares" note="Bold 700 / SemiBold 600. Continuidad con la guía original y con la geometría del logotipo.">
            <p className="font-display text-[3.5rem] leading-none font-bold">Aa</p>
            <p className="type-h3 mt-4">Comprende las ciencias</p>
          </Demo>
          <Demo title="Inter · texto e interfaz" note="Regular 400 a SemiBold 600. Sustituye a Montserrat en párrafos: más legible en tamaños pequeños y cifras tabulares para ejercicios.">
            <p className="font-body text-[3.5rem] leading-none font-semibold">Aa</p>
            <p className="type-body mt-4">Explicamos la idea detrás de cada fórmula. 0123456789 · x² + 2x − 3</p>
          </Demo>
          <Demo title="Fredoka · acento" note="Solo cifras grandes, numeración de pasos y piezas sociales. Nunca en párrafos ni titulares largos: puede verse infantil.">
            <p className="font-accent text-[3.5rem] leading-none font-semibold">01 02</p>
            <p className="type-body mt-4 text-text-secondary">Sustituye el rol de «Freedoka» de la guía original (nombre correcto: Fredoka).</p>
          </Demo>
        </div>
      </DocSection>

      {/* ── RECURSOS GRÁFICOS ── */}
      <DocSection id="recursos" title="Recursos gráficos" description="Tres recursos, todos nacidos del isotipo o de la guía original. Se usan con moderación: uno protagonista por pieza.">
        <div className="grid gap-4 md:grid-cols-3">
          <Demo title="1 · La curva" note="Derivada de la L parabólica. Trayectoria de aprendizaje. Esquinas, pies de página, separadores.">
            <BrandCurve className="mx-auto w-48" tone="light" />
          </Demo>
          <Demo title="2 · Patrón órbitas" dark note="Circunferencias + puntos (geometría, átomo). Fondos de tarjetas y secciones; opacidad ≤ 35 %.">
            <div className="relative h-32 overflow-hidden rounded-md"><BrandPattern variant="orbitas" tone="dark" /></div>
          </Demo>
          <Demo title="3 · Patrón red" dark note="Nodos y enlaces (moléculas, gráficas). Hero, banners, portadas. Nunca detrás de párrafos.">
            <div className="relative h-32 overflow-hidden rounded-md"><BrandPattern variant="red" tone="dark" /></div>
          </Demo>
        </div>
        <Demo title="Patrones en versión clara (nueva)">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative h-32 overflow-hidden rounded-md bg-celeste-50"><BrandPattern variant="orbitas" tone="light" /></div>
            <div className="relative h-32 overflow-hidden rounded-md bg-white ring-1 ring-border-default"><BrandPattern variant="red" tone="light" /></div>
          </div>
        </Demo>
        <Spec rows={[
          ['Iconografía', 'Lucide (lineal, trazo 2 px, terminaciones redondeadas) — coherente con las curvas del isotipo. Iconos en contenedor redondeado (radius.lg) celeste 50 / azul / naranja 50.'],
          ['Símbolos científicos', 'Σ, x², H₂O, enlaces moleculares: como apoyo a contenido real, nunca como decoración aleatoria (evitar «sopa de fórmulas»).'],
        ]} />
      </DocSection>

      {/* ── FOTOGRAFÍA E ILUSTRACIÓN ── */}
      <DocSection id="imagen" title="Fotografía e ilustración">
        <div className="grid gap-4 md:grid-cols-2">
          <Demo title="Dirección fotográfica">
            <ul className="type-body-sm space-y-2 text-text-secondary">
              <li>✔ Estudiantes reales de secundaria (12–17 años) y docentes, en sesiones de estudio auténticas.</li>
              <li>✔ Momentos de explicación: pizarra, cuaderno, señalar un ejercicio, mirada compartida.</li>
              <li>✔ Luz natural, fondos limpios, ropa sin marcas visibles; espacios con presencia de azul.</li>
              <li>✔ Encuadres con aire a un lado para colocar texto.</li>
              <li>✘ Modelos adultos posando, oficinas corporativas, sonrisas forzadas a cámara.</li>
              <li>✘ Filtros saturados, fotos de stock ajenas al contexto local.</li>
            </ul>
          </Demo>
          <Demo title="Estilo de ilustración">
            <ul className="type-body-sm space-y-2 text-text-secondary">
              <li>✔ Composiciones de interfaz y diagramas: hojas de ejercicios resueltos, moléculas, gráficas de funciones.</li>
              <li>✔ Formas planas, trazo 2–10 px redondeado, paleta oficial + neutros.</li>
              <li>✔ Siempre contenido académico verdadero (los ejercicios deben estar bien resueltos).</li>
              <li>✘ Personajes caricaturescos, mascotas, estilo infantil o 3D brillante.</li>
            </ul>
          </Demo>
        </div>
      </DocSection>

      {/* ── RETÍCULA ── */}
      <DocSection id="reticula" title="Composición y retículas">
        <Demo>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-8 lg:grid-cols-12">
            {Array.from({ length: 12 }).map((_, i) => <div key={i} className={cn('h-20 rounded-sm bg-celeste-100', i >= 4 && 'hidden sm:block', i >= 8 && 'sm:hidden lg:block')} />)}
          </div>
          <ul className="type-body-sm mt-6 grid gap-2 text-text-secondary md:grid-cols-3">
            <li><strong className="text-text-primary">Web:</strong> 12 columnas (escritorio) · 8 (tablet) · 4 (móvil); contenedor 1152 px; margen fluido 16–32 px.</li>
            <li><strong className="text-text-primary">Impresos:</strong> 6 columnas, margen = 2x (ver área de seguridad); logo en esquina superior o inferior izquierda.</li>
            <li><strong className="text-text-primary">Redes:</strong> margen interior del 8 % del lado; logo o isotipo siempre en la misma esquina (inferior izquierda).</li>
          </ul>
        </Demo>
      </DocSection>

      {/* ── APLICACIONES ── */}
      <DocSection id="aplicaciones" title="Aplicaciones de marca" description="Maquetas de referencia construidas con el sistema. Los datos de contacto son marcadores: se completan con información real.">
        <div className="grid gap-6">
          <Demo title="Tarjeta de presentación · 85 × 55 mm" className="bg-surface-subtle">
            <div className="grid max-w-3xl gap-4 sm:grid-cols-2">
              <div className="on-dark relative aspect-[85/55] overflow-hidden rounded-md bg-navy-900 shadow-md">
                <BrandPattern variant="red" tone="dark" intensity="subtle" />
                <div className="relative grid h-full place-items-center"><Logo layout="vertical" tone="inverted" height={72} /></div>
              </div>
              <div className="relative flex aspect-[85/55] flex-col justify-between overflow-hidden rounded-md bg-white p-4 shadow-md">
                <BrandCurve className="absolute -right-4 -bottom-3 w-24 opacity-90" tone="dark" />
                <div>
                  <p className="type-label text-navy-900">Nombre Apellido</p>
                  <p className="type-caption text-celeste-700">Cargo · Área</p>
                </div>
                <ul className="type-caption relative space-y-0.5 text-text-secondary">
                  <li className="flex items-center gap-1.5"><MessageCircle className="size-3" aria-hidden />+51 ··· ··· ···</li>
                  <li className="flex items-center gap-1.5"><Mail className="size-3" aria-hidden />correo@dominio</li>
                  <li className="flex items-center gap-1.5"><MapPin className="size-3" aria-hidden />Dirección de la sede</li>
                </ul>
              </div>
            </div>
          </Demo>
          <Demo title="Publicación para redes · 1080 × 1080" className="bg-surface-subtle">
            <div className="grid max-w-2xl gap-4 sm:grid-cols-2">
              <div className="on-dark relative flex aspect-square flex-col justify-between overflow-hidden rounded-md bg-navy-900 p-5 text-white shadow-md">
                <BrandPattern variant="orbitas" tone="dark" intensity="subtle" />
                <Badge tone="inverse" className="relative w-fit" icon={<Sigma className="size-3" aria-hidden />}>Matemáticas</Badge>
                <p className="type-h3 relative text-[clamp(1.125rem,3vw,1.75rem)] text-white">¿Por qué <span className="text-celeste-400">factorizar</span> funciona?</p>
                <div className="relative flex items-center justify-between"><Logo layout="isotipo" tone="inverted" height={28} /><span className="type-caption text-celeste-300">Desliza →</span></div>
              </div>
              <div className="relative flex aspect-square flex-col justify-between overflow-hidden rounded-md bg-white p-5 shadow-md">
                <p className="type-accent-number text-[3.5rem] text-orange-400">02</p>
                <p className="type-body-sm font-medium text-navy-900">Buscamos los valores que hacen cero el producto: (x − 2)(x − 3) = 0</p>
                <Logo height={28} />
              </div>
            </div>
          </Demo>
          <Demo title="Flyer A5 · banner" className="bg-surface-subtle">
            <div className="grid max-w-3xl gap-4 sm:grid-cols-[1fr_1.4fr]">
              <div className="relative flex aspect-[148/210] flex-col overflow-hidden rounded-md bg-white shadow-md">
                <div className="on-dark relative h-[52%] bg-navy-900 p-4"><BrandPattern variant="red" tone="dark" /><Logo tone="inverted" height={28} className="relative" /></div>
                <div className="flex flex-1 flex-col justify-between p-4">
                  <p className="type-h4 leading-tight text-navy-900">Comprende matemáticas y química</p>
                  <span className="type-caption w-fit rounded-sm bg-orange-400 px-2 py-1 font-semibold text-navy-900">Solicita información</span>
                </div>
              </div>
              <div className="on-dark relative flex aspect-[3/1] items-center justify-between gap-4 self-center overflow-hidden rounded-md bg-navy-900 px-5 shadow-md">
                <BrandCurve className="absolute -bottom-3 left-1/3 w-32 opacity-60" withPoint={false} />
                <p className="type-h4 relative text-[1rem] leading-tight text-white sm:text-[1.125rem]">Aprender juntos,<br />llegar más lejos.</p>
                <Logo layout="isotipo" tone="inverted" height={40} className="relative" />
              </div>
            </div>
          </Demo>
          <Demo title="Presentación académica · material de estudio" className="bg-surface-subtle">
            <div className="grid max-w-3xl gap-4 sm:grid-cols-2">
              <div className="relative flex aspect-video flex-col justify-between overflow-hidden rounded-md bg-white p-4 shadow-md">
                <div className="flex items-center justify-between"><p className="type-overline text-[0.5625rem] text-celeste-700">Química · Tema 3</p><Logo layout="isotipo" height={20} /></div>
                <p className="type-h4 text-navy-900">Enlace covalente</p>
                <div className="h-1 w-10 rounded-full bg-orange-400" />
              </div>
              <div className="relative flex aspect-[210/297] flex-col overflow-hidden rounded-md bg-white shadow-md sm:aspect-auto">
                <div className="flex items-center justify-between border-b-2 border-navy-900 px-4 py-2"><Logo height={28} /><span className="type-caption text-text-muted">Ficha 01</span></div>
                <div className="type-academic space-y-1 p-4 text-[0.75rem] text-navy-900">
                  <p className="font-semibold">1. Resuelve: x² − 5x + 6 = 0</p>
                  <p className="text-text-muted">Nombre: ____________ Fecha: ______</p>
                </div>
              </div>
            </div>
          </Demo>
        </div>

        <Spec rows={[
          ['Tote bags', 'Algodón natural o azul profundo. Logo vertical centrado a 1/3 superior, 1 tinta (azul o blanco), serigrafía. Variante: patrón «red» a todo lado en celeste sobre azul.'],
          ['Lapiceros', 'Cuerpo blanco o azul. Logo horizontal 1 tinta, ≥ 30 mm, tampografía. Clip en celeste si el proveedor lo permite.'],
          ['Polos y poleras', 'Azul profundo (prioritario) o blanco. Isotipo bordado en pecho izquierdo (≥ 25 mm) y logotipo horizontal en espalda alta. Poleras: concepto «Aprender juntos, llegar más lejos» en espalda.'],
          ['Resaltadores', 'Tapa del color del resaltador; logo horizontal blanco o azul en el cuerpo. El naranja de marca es un buen resaltador oficial.'],
          ['Tomatodos', 'Acero blanco o azul. Logo vertical, grabado láser o 1 tinta. Evitar el logo a color sobre metal cromado.'],
          ['Tazas', 'Blanca con logo vertical a color en un lado y la curva + punto naranja en el otro. Interior celeste opcional.'],
          ['Libretas', 'Tapa azul profundo con isotipo invertido centrado o en esquina; contratapa con patrón órbitas. Interiores con cabecera de marca y cuadrícula de 5 mm.'],
          ['Flyers y banners', 'Mitad superior azul con patrón «red» + titular; mitad inferior blanca con mensaje y CTA naranja. Un mensaje por pieza.'],
          ['Redes sociales', 'Plantillas de carrusel: portada azul (pregunta), interiores blancos (paso a paso), cierre con CTA. Isotipo siempre abajo a la izquierda.'],
          ['Presentaciones', '16:9, fondo blanco, título Montserrat, cuerpo Inter, isotipo en esquina; portada y separadores en azul con patrón.'],
          ['Material de estudio', 'A4 blanco, cabecera con logo horizontal y número de ficha, Inter 11–12 pt, interlineado 1.6, sin fondos de color para ahorrar tinta.'],
        ]} />

        <Demo title="Aplicaciones existentes (guía original, Figma)" note="Hallazgos: logo demasiado pequeño en casi todos los mockups, posición variable y fotografía de modelos adultos que no representa al público. Ver auditoría.">
          <img src={mockups} alt="Mockups originales: polo, tomatodo, polera, tote bags, gorra, taza y libreta con el logo de Grupo Laplace" className="w-full rounded-md" loading="lazy" />
        </Demo>
      </DocSection>
    </DocsShell>
  )
}
