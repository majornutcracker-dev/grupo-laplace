import { useState } from 'react'
import {
  ArrowRight, Atom, BookOpenCheck, Calculator, Clock, Download, FlaskConical, GraduationCap, Laptop, Lightbulb,
  MapPin, MessageCircle, PencilRuler, Plus, School, Sigma, Target, UsersRound,
} from 'lucide-react'
import tokens from '@grupo-laplace/tokens/tokens.json'
import { Code, Demo, DocSection, DocsShell, Spec } from '../components/layout/Docs'
import { Accordion, AdvantageList, Alert, Avatar, Badge, BenefitCard, Breadcrumbs, Button, Checkbox, CourseCard, FaqCard, Field, IconTile, InfoBlock, Input, Logo, Modal, ModalityCard, RadioGroup, Select, Skeleton, Spinner, Stat, StatusTag, Tabs, TeacherCard, TestimonialCard, TextLink, Textarea } from '@grupo-laplace/ui'
import { courses, faqs, teachers, testimonials } from '../data/content'
import { usePageMeta } from '../lib/usePageMeta'

type Leaf = { $value: string; $description?: string }
const color = tokens.color as unknown as Record<string, Record<string, Leaf> | Leaf>
const resolve = (v: string): string => {
  const m = v.match(/^\{color\.(.+)\}$/)
  if (!m) return v
  const [g, s] = m[1].split('.')
  const node = s ? (color[g] as Record<string, Leaf>)[s] : (color[g] as Leaf)
  return resolve(node.$value)
}

const toc = [
  { id: 'tokens-color', label: 'Color' },
  { id: 'tokens-tipografia', label: 'Tipografía' },
  { id: 'tokens-espacio', label: 'Espacio, radios y sombras' },
  { id: 'tokens-layout', label: 'Layout y movimiento' },
  { id: 'navegacion', label: 'Navegación' },
  { id: 'acciones', label: 'Acciones' },
  { id: 'contenido', label: 'Contenido' },
  { id: 'formularios', label: 'Formularios' },
  { id: 'complementarios', label: 'Complementarios' },
]

const PRIMITIVES = ['navy', 'celeste', 'orange', 'neutral'] as const
const SEMANTIC = ['brand', 'action', 'surface', 'text', 'border', 'feedback'] as const

export default function UiKit() {
  usePageMeta('UI Kit · Grupo Laplace', 'Design system y componentes de la web de Grupo Laplace.')
  const [modal, setModal] = useState(false)
  const [radio, setRadio] = useState('virtual')

  return (
    <DocsShell
      overline="Design system · v1.0"
      title="UI Kit Grupo Laplace"
      lead="Implementación digital de la identidad: tokens semánticos, tipografía y componentes reutilizables con variantes, estados y criterios de accesibilidad. La web informativa está construida solo con estas piezas."
      toc={toc}
    >
      {/* ── TOKENS: COLOR ── */}
      <DocSection
        id="tokens-color"
        title="Color"
        description={<>Escalas tonales generadas en OKLCH y ancladas en los cuatro colores oficiales (marcados con ●). Fuente: <Code>packages/tokens/tokens.json</Code> → <Code>yarn build</Code> → utilidades Tailwind.</>}
      >
        {PRIMITIVES.map((name) => (
          <div key={name}>
            <h3 className="type-label mb-3 capitalize text-text-primary">{name}</h3>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-11">
              {Object.entries(color[name] as Record<string, Leaf>).map(([step, v]) => {
                const official = ['#102C53', '#33A5CC', '#FF8A3D'].includes(v.$value)
                return (
                  <div key={step}>
                    <div className="h-14 rounded-md ring-1 ring-black/5 ring-inset" style={{ background: v.$value }} />
                    <p className="type-caption mt-1.5 text-text-primary">{official && '● '}{step}</p>
                    <p className="font-mono text-[0.6875rem] text-text-muted">{v.$value}</p>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
        <div className="grid gap-4 md:grid-cols-2">
          {SEMANTIC.map((group) => (
            <Demo key={group} title={`color.${group}.*`} className="p-0 sm:p-0">
              <ul className="divide-y divide-border-subtle">
                {Object.entries(color[group] as Record<string, Leaf>).map(([k, v]) => (
                  <li key={k} className="flex items-center gap-3 px-5 py-2.5">
                    <span className="size-6 shrink-0 rounded-sm ring-1 ring-black/10 ring-inset" style={{ background: resolve(v.$value) }} />
                    <code className="type-caption flex-1 truncate font-mono text-text-primary">{group}.{k}</code>
                    <span className="font-mono text-[0.6875rem] text-text-muted">{v.$value.replace(/[{}]|color\./g, '')}</span>
                  </li>
                ))}
              </ul>
            </Demo>
          ))}
        </div>
        <Spec
          rows={[
            ['Contraste', 'Azul profundo / blanco 13.9:1 (AAA). Naranja / azul 5.9:1 (AA). Celeste / azul 4.9:1 (AA). Blanco sobre naranja 2.4:1 y celeste sobre blanco 2.8:1: NO usar para texto.'],
            ['Regla 60-30-10', 'Blanco y superficies claras ≈ 60 %, azul profundo ≈ 30 %, celeste + naranja ≈ 10 %. El naranja solo marca la acción principal o un acento por vista.'],
            ['Texto enlace', <>Usa <Code>text.link</Code> (celeste 700, 6.7:1). Celeste 500 solo en fondos oscuros o elementos no textuales.</>],
          ]}
        />
      </DocSection>

      {/* ── TOKENS: TIPOGRAFÍA ── */}
      <DocSection
        id="tokens-tipografia"
        title="Tipografía"
        description="Montserrat (titulares) mantiene la continuidad con la guía original; Inter (texto y UI) aporta máxima legibilidad en pantalla y cifras claras para ejercicios. Fredoka queda como acento de marca para cifras y piezas sociales."
      >
        <Demo className="space-y-6">
          {(
            [
              ['type-display', 'Display', 'Llega más lejos'],
              ['type-h1', 'H1', 'Comprende las ciencias'],
              ['type-h2', 'H2', 'Nuestros cursos'],
              ['type-h3', 'H3', 'Resolución guiada'],
              ['type-h4', 'H4', 'Acompañamiento continuo'],
              ['type-subtitle', 'Subtítulo', 'Acompañamos a cada estudiante a entender el porqué de cada fórmula.'],
              ['type-body-lg', 'Texto principal L', 'Creemos que las ciencias se aprenden mejor cuando alguien te acompaña a razonar.'],
              ['type-body', 'Texto principal', 'Explicamos la idea detrás de cada fórmula con ejemplos claros.'],
              ['type-body-sm text-text-secondary', 'Texto secundario', 'Información complementaria y descripciones breves.'],
              ['type-label', 'Etiqueta', 'Curso de interés'],
              ['type-overline text-celeste-700', 'Overline', 'Nuestra metodología'],
              ['type-button', 'Botón', 'Solicitar información'],
              ['type-caption text-text-muted', 'Caption', 'Los campos con * son obligatorios.'],
              ['type-academic', 'Material académico', 'Si x² − 5x + 6 = 0, entonces (x − 2)(x − 3) = 0 → x = 2 ó x = 3.'],
              ['type-accent-number text-[3rem]', 'Acento (Fredoka)', '01 · 02 · 03'],
            ] as const
          ).map(([cls, label, sample]) => {
            const key = cls.split(' ')[0].replace('type-', '') as keyof typeof tokens.text
            const t = tokens.text[key] as { size?: Leaf; 'line-height'?: Leaf; weight?: Leaf } | undefined
            return (
              <div key={label} className="grid gap-2 border-b border-border-subtle pb-6 last:border-0 last:pb-0 md:grid-cols-[11rem_1fr] md:gap-6">
                <div>
                  <p className="type-label text-text-primary">{label}</p>
                  <p className="font-mono text-[0.6875rem] text-text-muted">.{cls.split(' ')[0]}{t?.weight ? ` · ${t.weight.$value}` : ''}{t?.['line-height'] ? ` · lh ${t['line-height'].$value}` : ''}</p>
                </div>
                <p className={cls}>{sample}</p>
              </div>
            )
          })}
        </Demo>
      </DocSection>

      {/* ── TOKENS: ESPACIO, RADIOS, SOMBRAS ── */}
      <DocSection id="tokens-espacio" title="Espacio, radios y sombras" description="Retícula de 4 px. Las secciones usan espaciado fluido (clamp) para respirar en escritorio sin desperdiciar pantalla en móvil.">
        <Demo title="Escala de espaciado (×4 px)">
          <div className="space-y-2">
            {[1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24].map((n) => (
              <div key={n} className="flex items-center gap-4">
                <code className="type-caption w-20 font-mono text-text-muted">{n} · {n * 4}px</code>
                <span className="h-3 rounded-xs bg-celeste-500" style={{ width: n * 4 }} />
              </div>
            ))}
          </div>
        </Demo>
        <div className="grid gap-4 md:grid-cols-2">
          <Demo title="Radios">
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(tokens.radius).map(([k, v]) => (
                <div key={k} className="text-center">
                  <div className="mx-auto size-14 border-2 border-navy-900 bg-navy-50" style={{ borderRadius: v.$value }} />
                  <p className="type-caption mt-2 text-text-primary">{k}</p>
                  <p className="font-mono text-[0.6875rem] text-text-muted">{v.$value}</p>
                </div>
              ))}
            </div>
          </Demo>
          <Demo title="Sombras (tinte azul profundo)" className="bg-surface-subtle">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
              {(['xs', 'sm', 'md', 'lg'] as const).map((k) => (
                <div key={k} className="grid h-20 place-items-center rounded-lg bg-white" style={{ boxShadow: tokens.shadow[k].$value }}>
                  <span className="type-caption text-text-primary">{k}</span>
                </div>
              ))}
            </div>
          </Demo>
        </div>
        <Spec rows={[
          ['Controles', 'radius.md (12 px) para botones, inputs y selects. Altura mínima 44 px (táctil).'],
          ['Tarjetas', 'radius.xl (24 px) para tarjetas; radius.2xl (32 px) para paneles de sección.'],
          ['Elevación', 'Las tarjetas son planas con borde; la sombra solo aparece en hover o en elementos flotantes (modal, hoja de trabajo del hero).'],
        ]} />
      </DocSection>

      {/* ── TOKENS: LAYOUT Y MOVIMIENTO ── */}
      <DocSection id="tokens-layout" title="Layout y movimiento">
        <div className="grid gap-4 md:grid-cols-2">
          <Spec rows={[
            ...Object.entries(tokens.breakpoint).map(([k, v]) => [`breakpoint.${k}`, `${v.$value} · ${parseFloat(v.$value) * 16}px`] as [string, string]),
            ...Object.entries(tokens.container).map(([k, v]) => [`container.${k}`, `${v.$value} · ${parseFloat(v.$value) * 16}px`] as [string, string]),
          ]} />
          <Spec rows={[
            ...Object.entries(tokens.z).filter(([k]) => !k.startsWith('$')).map(([k, v]) => [`z.${k}`, (v as Leaf).$value] as [string, string]),
            ...Object.entries(tokens.motion.duration).map(([k, v]) => [`duration.${k}`, v.$value] as [string, string]),
            ...Object.entries(tokens.motion.easing).map(([k, v]) => [`easing.${k}`, v.$value] as [string, string]),
            ['Movimiento reducido', 'Todas las transiciones se anulan con prefers-reduced-motion.'],
          ]} />
        </div>
      </DocSection>

      {/* ── NAVEGACIÓN ── */}
      <DocSection id="navegacion" title="Navegación" description="El navbar y el footer en vivo son los de esta misma página. El menú móvil aparece por debajo de 1024 px.">
        <Demo title="Logo · variantes del componente <Logo />">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="grid place-items-center rounded-lg border border-border-subtle p-6"><Logo height={44} /></div>
            <div className="grid place-items-center rounded-lg bg-navy-900 p-6"><Logo tone="inverted" height={44} /></div>
            <div className="grid place-items-center rounded-lg border border-border-subtle p-6"><Logo layout="vertical" height={96} /></div>
            <div className="flex items-center justify-center gap-6 rounded-lg border border-border-subtle p-6"><Logo layout="isotipo" height={48} /><Logo layout="isotipo" tone="mono-navy" height={48} /></div>
          </div>
        </Demo>
        <Spec rows={[
          ['Navbar', 'Sticky, 72 px de alto, fondo blanco que gana borde y desenfoque al hacer scroll. Enlaces de sección + CTA naranja «Solicitar información». WhatsApp aparece solo si está configurado.'],
          ['Menú móvil', 'Botón de 44 × 44 px con aria-expanded/aria-controls. Panel a pantalla completa, bloquea el scroll, cierra con Esc y devuelve el foco. Enlaces de 56 px de alto.'],
          ['Enlaces', 'Estado normal texto secundario; hover fondo navy-50 y texto primario; foco visible celeste 600.'],
          ['Footer', 'Fondo navy-950, logo invertido, navegación secundaria, contacto configurable, enlaces legales solo si existen.'],
          ['Accesibilidad', 'Enlace «Saltar al contenido», landmarks header/nav/main/footer con aria-label diferenciados.'],
        ]} />
      </DocSection>

      {/* ── ACCIONES ── */}
      <DocSection id="acciones" title="Acciones">
        <Demo title="Botones · variantes">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Primario</Button>
            <Button variant="secondary">Secundario</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="whatsapp" iconLeft={<MessageCircle className="size-4" aria-hidden />}>WhatsApp</Button>
          </div>
        </Demo>
        <Demo title="Botones · sobre fondo oscuro" dark>
          <div className="flex flex-wrap items-center gap-3">
            <Button>Primario</Button>
            <Button variant="inverse">Inverso</Button>
          </div>
        </Demo>
        <Demo title="Tamaños, iconos y estados">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Pequeño</Button>
              <Button size="md">Mediano</Button>
              <Button size="lg">Grande</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button iconRight={<ArrowRight className="size-4" aria-hidden />}>Icono derecha</Button>
              <Button variant="outline" iconLeft={<Download className="size-4" aria-hidden />}>Icono izquierda</Button>
              <Button variant="secondary" iconOnly aria-label="Agregar"><Plus className="size-5" aria-hidden /></Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button loading>Enviando</Button>
              <Button disabled>Deshabilitado</Button>
              <Button variant="outline" disabled>Deshabilitado</Button>
            </div>
          </div>
        </Demo>
        <Demo title="Enlaces y CTA">
          <div className="space-y-6">
            <p className="type-body">Texto con un <TextLink href="#acciones">enlace de texto</TextLink> en línea.</p>
            <div className="flex flex-col gap-3 rounded-xl bg-surface-highlight p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="type-h4">CTA de inscripción</p>
                <p className="type-body-sm text-text-secondary">Una sola acción naranja por vista.</p>
              </div>
              <Button size="lg" iconRight={<ArrowRight className="size-5" aria-hidden />}>Solicitar información</Button>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-border-default p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="type-h4">CTA de WhatsApp</p>
                <p className="type-body-sm text-text-secondary">Usa <Code>whatsappUrl()</Code>; si no hay número configurado, no se muestra.</p>
              </div>
              <Button size="lg" variant="whatsapp" iconLeft={<MessageCircle className="size-5" aria-hidden />}>Escribir por WhatsApp</Button>
            </div>
          </div>
        </Demo>
        <Spec rows={[
          ['Variantes', 'primary (naranja, acción principal) · secondary (azul) · outline · ghost · inverse (fondos oscuros) · whatsapp.'],
          ['Tamaños', 'sm 36 px · md 44 px · lg 52 px de alto. Padding horizontal 14 / 20 / 28 px.'],
          ['Estados', 'hover (tono más claro o fondo navy-50) · active (escala 0.98) · focus-visible (anillo celeste 600, 2 px + 2 px de separación) · loading (spinner + aria-busy) · disabled (50 % opacidad).'],
          ['Color', 'El texto del botón naranja es azul profundo (5.9:1). Nunca blanco sobre naranja.'],
          ['Responsive', 'En móvil los CTA del hero y secciones ocupan el ancho completo y se apilan.'],
          ['Accesibilidad', 'Botones solo con icono requieren aria-label. Los enlaces externos abren en pestaña nueva con rel="noopener".'],
        ]} />
      </DocSection>

      {/* ── CONTENIDO ── */}
      <DocSection id="contenido" title="Contenido">
        <div className="grid gap-6 lg:grid-cols-2">{courses.map((c) => <CourseCard key={c.id} course={c} />)}</div>
        <div className="grid gap-5 md:grid-cols-3">
          <BenefitCard featured icon={UsersRound} title="Destacado" text="Card de beneficio destacada sobre azul profundo." />
          <BenefitCard icon={BookOpenCheck} title="Beneficio" text="Card estándar con icono celeste." />
          <BenefitCard icon={Target} title="Beneficio" text="Mismo alto en cada fila del grid." />
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <TeacherCard teacher={teachers[0]} />
          <div className="md:col-span-2"><TestimonialCard t={testimonials[0]} /></div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <FaqCard q={faqs[0].q} a={faqs[0].a} />
          <div className="space-y-3">
            <ModalityCard icon={School} title="Presencial" text="Clases en la sede de la academia." status="pendiente" selected />
            <ModalityCard icon={Laptop} title="Virtual" text="Clases en línea en tiempo real." status="pendiente" />
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <InfoBlock icon={Lightbulb} title="Bloque informativo" tone="subtle">Fondo sutil para notas.</InfoBlock>
          <InfoBlock icon={Atom} title="Bloque de acento" tone="accent">Fondo celeste 50.</InfoBlock>
          <InfoBlock icon={Clock} title="Bloque destacado" tone="highlight">Fondo naranja 50, uso puntual.</InfoBlock>
        </div>
        <Demo title="Estadísticas y lista de ventajas">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-8">
              <Stat value="—" label="Años de experiencia" pending />
              <Stat value="—" label="Estudiantes acompañados" pending />
            </div>
            <AdvantageList items={['Explicación conceptual', 'Práctica guiada', 'Acompañamiento cercano']} />
          </div>
        </Demo>
        <Spec rows={[
          ['Variantes', 'Curso (celeste / navy) · Beneficio (estándar / destacado) · Docente · Testimonio · FAQ · Modalidad (seleccionada) · Bloque informativo (sutil / acento / destacado) · Estadística · Lista de ventajas.'],
          ['Espaciado', 'Padding interno 24 px (móvil) / 32 px (escritorio). Separación de grid 20–24 px.'],
          ['Datos', 'El contenido pendiente o demostrativo se marca con <StatusTag>. Las estadísticas sin dato real muestran «—» y «Dato pendiente».'],
          ['Accesibilidad', 'Tarjetas como <article>/<figure>, títulos con jerarquía real (h3), iconos decorativos con aria-hidden.'],
        ]} />
      </DocSection>

      {/* ── FORMULARIOS ── */}
      <DocSection id="formularios" title="Formularios">
        <Demo>
          <div className="grid gap-5 md:grid-cols-2">
            <Field id="k-1" label="Campo por defecto" hint="Texto de ayuda opcional.">
              <Input id="k-1" placeholder="Escribe aquí" hint="Texto de ayuda opcional." />
            </Field>
            <Field id="k-2" label="Campo con error" required error="Escribe un número de teléfono válido.">
              <Input id="k-2" defaultValue="12" error="Escribe un número de teléfono válido." />
            </Field>
            <Field id="k-3" label="Campo válido" success="Correo verificado.">
              <Input id="k-3" defaultValue="familia@correo.com" success="Correo verificado." />
            </Field>
            <Field id="k-4" label="Campo deshabilitado">
              <Input id="k-4" disabled defaultValue="No editable" />
            </Field>
            <Field id="k-5" label="Select">
              <Select id="k-5" defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Matemáticas</option><option>Química</option></Select>
            </Field>
            <Field id="k-6" label="Textarea" optional>
              <Textarea id="k-6" rows={3} placeholder="Escribe tu consulta" />
            </Field>
            <div className="space-y-3">
              <Checkbox label="Checkbox marcado" defaultChecked />
              <Checkbox label="Checkbox con descripción" description="Texto complementario." />
              <Checkbox label="Checkbox con error" error="Este campo es obligatorio." />
            </div>
            <RadioGroup legend="Radio buttons" name="k-radio" value={radio} onChange={setRadio} options={[{ value: 'presencial', label: 'Presencial', description: 'Por confirmar' }, { value: 'virtual', label: 'Virtual', description: 'Por confirmar' }]} />
          </div>
        </Demo>
        <Alert tone="success" title="Mensaje de éxito">Recibimos tu consulta. Te responderemos pronto.</Alert>
        <Alert tone="error" title="Mensaje de error">No pudimos enviar tu consulta. Inténtalo nuevamente.</Alert>
        <Spec rows={[
          ['Estados', 'default · hover (borde neutral 400) · focus (borde celeste 600 + halo) · error (borde y mensaje rojo con icono) · éxito (verde) · disabled.'],
          ['Tamaño', 'Altura mínima 48 px; texto 16 px para evitar el zoom automático de iOS.'],
          ['Validación', 'En blur y al enviar. Al enviar con errores, el foco va al primer campo inválido.'],
          ['Accesibilidad', '<label> asociado, aria-invalid, aria-describedby hacia ayuda/error, obligatorio indicado con * y texto, grupos de radio en <fieldset>/<legend>.'],
        ]} />
      </DocSection>

      {/* ── COMPLEMENTARIOS ── */}
      <DocSection id="complementarios" title="Elementos complementarios">
        <Demo title="Badges, etiquetas de estado y avatares">
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              <Badge>Navy</Badge><Badge tone="celeste">Celeste</Badge><Badge tone="orange">Naranja</Badge><Badge tone="neutral">Neutral</Badge>
              <Badge tone="success">Éxito</Badge><Badge tone="error">Error</Badge><Badge size="sm" tone="celeste" icon={<Sigma className="size-3" aria-hidden />}>Matemáticas</Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              <StatusTag status="confirmado" /><StatusTag status="propuesta" /><StatusTag status="demostrativo" /><StatusTag status="pendiente" />
            </div>
            <div className="flex items-center gap-3">
              <Avatar name="Ana Torres" size="sm" /><Avatar name="Ana Torres" /><Avatar name="Luis Rojas" size="lg" /><Avatar name="Docente Laplace" size="xl" />
            </div>
          </div>
        </Demo>
        <Demo title="Iconografía · Lucide, trazo 2 px, esquinas redondeadas">
          <div className="flex flex-wrap gap-3">
            {[Sigma, Calculator, FlaskConical, Atom, PencilRuler, Lightbulb, GraduationCap, UsersRound, Target, MapPin].map((I, i) => (
              <IconTile key={i} tone={i % 3 === 0 ? 'navy' : i % 3 === 1 ? 'celeste' : 'orange'}><I /></IconTile>
            ))}
          </div>
        </Demo>
        <div className="grid gap-5 lg:grid-cols-2">
          <Accordion items={faqs.slice(0, 3).map((f) => ({ title: f.q, content: f.a }))} />
          <Demo>
            <Tabs tabs={[{ label: 'Matemáticas', content: <p className="type-body text-text-secondary">Contenido de la pestaña Matemáticas.</p> }, { label: 'Química', content: <p className="type-body text-text-secondary">Contenido de la pestaña Química.</p> }, { label: 'Metodología', content: <p className="type-body text-text-secondary">Contenido de la pestaña Metodología.</p> }]} />
            <Tabs variant="pill" className="mt-8" tabs={[{ label: 'Mensual', content: <p className="type-body-sm text-text-muted">Variante pill.</p> }, { label: 'Ciclo', content: <p className="type-body-sm text-text-muted">Variante pill.</p> }]} />
          </Demo>
        </div>
        <Demo title="Breadcrumbs, alertas, modal y carga">
          <div className="space-y-6">
            <Breadcrumbs items={[{ label: 'Inicio', href: '#navegacion' }, { label: 'Cursos', href: '#contenido' }, { label: 'Matemáticas' }]} />
            <div className="grid gap-3 md:grid-cols-2">
              <Alert tone="info" title="Información">Mensaje informativo.</Alert>
              <Alert tone="warning" title="Atención">Formulario sin servicio conectado.</Alert>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <Button variant="outline" onClick={() => setModal(true)}>Abrir modal</Button>
              <Spinner />
              <div className="w-48 space-y-2"><Skeleton className="h-4" /><Skeleton className="h-4 w-3/4" /></div>
            </div>
          </div>
        </Demo>
        <Modal
          open={modal}
          onClose={() => setModal(false)}
          title="Solicitar información"
          description="Ejemplo de modal accesible con <dialog>."
          footer={<><Button variant="outline" onClick={() => setModal(false)}>Cancelar</Button><Button onClick={() => setModal(false)}>Entendido</Button></>}
        >
          Atrapa el foco, se cierra con Esc o clic fuera y devuelve el foco al botón que lo abrió.
        </Modal>
        <Spec rows={[
          ['Acordeón', 'Botón con aria-expanded + región etiquetada; animación de altura con grid-rows. Uno abierto a la vez por defecto.'],
          ['Tabs', 'Patrón WAI-ARIA: flechas, Inicio y Fin; indicador naranja (variante underline) o fondo blanco (variante pill).'],
          ['Alertas', 'info · success · warning · error. role="alert" solo para errores.'],
          ['Carga', 'Spinner con role="status" y texto; skeleton para bloques de contenido.'],
        ]} />
      </DocSection>
    </DocsShell>
  )
}
