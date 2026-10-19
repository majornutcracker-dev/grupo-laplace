import { useState, type FormEvent } from 'react'
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { hasWhatsapp, whatsappUrl } from '../../lib/contact'
import { isEmail, isPhone, type FieldErrors } from '../../lib/validation'
import { Alert, Button, Checkbox, Field, Input, RadioGroup, SectionHeader, Select, Textarea } from '@grupo-laplace/ui'

type Values = { name: string; relation: string; phone: string; email: string; course: string; grade: string; message: string; consent: boolean }
type Key = keyof Values
const initial: Values = { name: '', relation: '', phone: '', email: '', course: '', grade: '', message: '', consent: false }

function validate(v: Values): FieldErrors<Key> {
  const e: FieldErrors<Key> = {}
  if (v.name.trim().length < 2) e.name = 'Escribe tu nombre.'
  if (!v.relation) e.relation = 'Indica si eres estudiante o padre/madre/apoderado.'
  if (!isPhone(v.phone)) e.phone = 'Escribe un número de teléfono válido (solo números, de 7 a 15 dígitos).'
  if (v.email && !isEmail(v.email)) e.email = 'Revisa el formato del correo. Ej.: nombre@correo.com'
  if (!v.course) e.course = 'Selecciona el curso de interés.'
  if (!v.consent) e.consent = 'Necesitamos tu autorización para responder tu consulta.'
  return e
}

type Result = { tone: 'success' | 'error' | 'warning' | 'info'; title: string; text: string } | null

export function Contact() {
  const [values, setValues] = useState<Values>(initial)
  const [touched, setTouched] = useState<Partial<Record<Key, boolean>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState<Result>(null)

  const errors = validate(values)
  const show = (k: Key) => (submitted || touched[k] ? errors[k] : undefined)
  const set = <K extends Key>(k: K, v: Values[K]) => setValues((p) => ({ ...p, [k]: v }))
  const blur = (k: Key) => () => setTouched((t) => ({ ...t, [k]: true }))

  const summary = () =>
    [
      `Hola, Grupo Laplace. Soy ${values.name} (${values.relation}).`,
      `Me interesa: ${values.course}${values.grade ? ` · ${values.grade}` : ''}.`,
      values.message && `Consulta: ${values.message}`,
      `Teléfono: ${values.phone}${values.email ? ` · Correo: ${values.email}` : ''}`,
    ]
      .filter(Boolean)
      .join('\n')

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setResult(null)
    if (Object.keys(errors).length) {
      const first = Object.keys(errors)[0]
      document.getElementById(`f-${first}`)?.focus()
      return
    }
    const { endpoint } = siteConfig.form
    if (endpoint) {
      // Envío real a un servicio configurado
      try {
        setSending(true)
        const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(values) })
        if (!res.ok) throw new Error(String(res.status))
        setResult({ tone: 'success', title: 'Consulta enviada', text: 'Recibimos tu mensaje. Te responderemos por el medio que indicaste.' })
        setValues(initial)
        setTouched({})
        setSubmitted(false)
      } catch {
        setResult({ tone: 'error', title: 'No pudimos enviar tu consulta', text: 'Inténtalo nuevamente en unos minutos o escríbenos por otro medio.' })
      } finally {
        setSending(false)
      }
      return
    }
    const wa = whatsappUrl(summary())
    if (wa) {
      // Sin servicio de formulario: se abre WhatsApp con el mensaje prellenado (el usuario decide enviarlo)
      window.open(wa, '_blank', 'noopener,noreferrer')
      setResult({ tone: 'info', title: 'Abrimos WhatsApp con tu consulta', text: 'Revisa el mensaje y envíalo desde WhatsApp para que podamos responderte.' })
      return
    }
    setResult({
      tone: 'warning',
      title: 'Formulario aún sin servicio conectado',
      text: import.meta.env.DEV
        ? 'Tus datos son válidos, pero esta versión no envía información todavía. Configura form.endpoint o el número de WhatsApp en src/config/site.ts.'
        : 'Por ahora no podemos recibir consultas desde la web. Escríbenos por nuestros canales de contacto.',
    })
  }

  const { contact } = siteConfig
  const channels = [
    hasWhatsapp() && { icon: MessageCircle, label: 'WhatsApp', value: 'Escríbenos directamente', href: whatsappUrl() ?? undefined },
    contact.phone && { icon: Phone, label: 'Teléfono', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
    contact.email && { icon: Mail, label: 'Correo', value: contact.email, href: `mailto:${contact.email}` },
    contact.address && { icon: MapPin, label: 'Ubicación', value: contact.address, href: contact.mapUrl || undefined },
  ].filter(Boolean) as Array<{ icon: typeof Mail; label: string; value: string; href?: string }>

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="section-y bg-surface-subtle">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader id="contacto-title" overline="Contacto" title="Solicita información" lead="Déjanos tus datos y te orientamos sobre el curso que necesita el estudiante." />
          <div className="mt-8 space-y-3">
            {channels.length > 0 ? (
              channels.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="inline-grid size-11 shrink-0 place-items-center rounded-lg bg-white text-celeste-700 ring-1 ring-border-default"><Icon className="size-5" aria-hidden /></span>
                    <span><span className="type-label block text-text-primary">{label}</span><span className="type-body-sm text-text-secondary">{value}</span></span>
                  </>
                )
                return href ? (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-4 rounded-lg p-2 -m-2 transition-colors hover:bg-white">{inner}</a>
                ) : (
                  <div key={label} className="flex items-center gap-4">{inner}</div>
                )
              })
            ) : import.meta.env.DEV && (
              <Alert tone="info" title="Canales de contacto pendientes (nota visible solo en desarrollo)">
                WhatsApp, correo, redes y ubicación se muestran aquí al completarlos en <code>src/config/site.ts</code>.
              </Alert>
            )}
          </div>
        </div>

        <form noValidate onSubmit={onSubmit} className="rounded-2xl border border-border-default bg-white p-6 shadow-sm sm:p-8 lg:col-span-7" aria-describedby="form-nota">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="f-name" label="Nombre completo" required error={show('name')} className="sm:col-span-2">
              <Input id="f-name" name="name" autoComplete="name" value={values.name} onChange={(e) => set('name', e.target.value)} onBlur={blur('name')} error={show('name')} />
            </Field>

            <div className="sm:col-span-2">
              <RadioGroup
                legend="¿Quién hace la consulta? *"
                name="relation"
                inline
                value={values.relation}
                onChange={(v) => { set('relation', v); setTouched((t) => ({ ...t, relation: true })) }}
                error={show('relation')}
                options={[{ value: 'Estudiante', label: 'Estudiante' }, { value: 'Padre, madre o apoderado', label: 'Padre, madre o apoderado' }]}
              />
            </div>

            <Field id="f-phone" label="Teléfono o WhatsApp" required error={show('phone')}>
              <Input id="f-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={(e) => set('phone', e.target.value)} onBlur={blur('phone')} error={show('phone')} />
            </Field>
            <Field id="f-email" label="Correo electrónico" optional error={show('email')}>
              <Input id="f-email" name="email" type="email" autoComplete="email" value={values.email} onChange={(e) => set('email', e.target.value)} onBlur={blur('email')} error={show('email')} />
            </Field>

            <Field id="f-course" label="Curso de interés" required error={show('course')}>
              <Select id="f-course" name="course" value={values.course} onChange={(e) => { set('course', e.target.value); setTouched((t) => ({ ...t, course: true })) }} error={show('course')}>
                <option value="" disabled>Selecciona una opción</option>
                <option>Matemáticas</option>
                <option>Química</option>
                <option>Matemáticas y Química</option>
                <option>Aún no lo sé</option>
              </Select>
            </Field>
            <Field id="f-grade" label="Grado del estudiante" optional hint="Nos ayuda a orientarte mejor.">
              <Select id="f-grade" name="grade" value={values.grade} onChange={(e) => set('grade', e.target.value)} hint="Nos ayuda a orientarte mejor.">
                <option value="">Selecciona el grado</option>
                {['1.º de secundaria', '2.º de secundaria', '3.º de secundaria', '4.º de secundaria', '5.º de secundaria'].map((g) => <option key={g}>{g}</option>)}
              </Select>
            </Field>

            <Field id="f-message" label="¿En qué podemos ayudarte?" optional className="sm:col-span-2">
              <Textarea id="f-message" name="message" rows={4} placeholder="Temas que cuestan más, dudas sobre los cursos…" value={values.message} onChange={(e) => set('message', e.target.value)} />
            </Field>

            <Checkbox
              id="f-consent"
              className="sm:col-span-2"
              checked={values.consent}
              onChange={(e) => { set('consent', e.target.checked); setTouched((t) => ({ ...t, consent: true })) }}
              error={show('consent')}
              label="Autorizo a Grupo Laplace a contactarme para responder esta consulta."
            />
          </div>

          {result && <Alert tone={result.tone} title={result.title} className="mt-6">{result.text}</Alert>}

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p id="form-nota" className="type-caption text-text-muted">Los campos con * son obligatorios.</p>
            <Button type="submit" size="lg" loading={sending} iconRight={<Send className="size-4" aria-hidden />}>
              Enviar consulta
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
