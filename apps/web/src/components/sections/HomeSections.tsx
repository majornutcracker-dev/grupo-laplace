import { ArrowRight, MessageCircle } from 'lucide-react'
import { about, benefits, courses, faqs, finalCta, methodology, teachers, testimonials } from '../../data/content'
import { whatsappUrl } from '../../lib/contact'
import { useReveal } from '../../lib/useReveal'
import { Accordion, Alert, BenefitCard, BrandCurve, BrandPattern, Button, CourseCard, IconTile, Logo, SectionHeader, TeacherCard, TestimonialCard, cn } from '@grupo-laplace/ui'

function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal<HTMLDivElement>()
  return <div ref={ref} className={cn('reveal', className)}>{children}</div>
}

/* ── 2. Sobre nosotros ───────────────────────────────────────────────── */
export function About() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-title" className="section-y bg-surface-subtle">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <SectionHeader id="nosotros-title" overline="Sobre nosotros" title={about.title} />
          <p className="type-body-lg mt-6 font-medium text-text-primary">{about.lead}</p>
          {about.body.map((p) => (
            <p key={p} className="type-body-lg mt-4 text-text-secondary">{p}</p>
          ))}
        </Reveal>
        <Reveal className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-2xl border border-border-default bg-white p-6 sm:p-8">
            <div className="flex items-center gap-4 border-b border-border-subtle pb-6">
              <Logo layout="isotipo" height={44} decorative />
              <p className="type-h4 text-navy-900">Aprender juntos,<br />llegar más lejos.</p>
            </div>
            <ul className="mt-2 divide-y divide-border-subtle">
              {about.pillars.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-start gap-4 py-5">
                  <IconTile tone="celeste"><Icon /></IconTile>
                  <div>
                    <h3 className="type-h4 text-text-primary">{title}</h3>
                    <p className="type-body mt-1 text-text-secondary">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ── 3. Cursos ───────────────────────────────────────────────────────── */
export function Courses() {
  return (
    <section id="cursos" aria-labelledby="cursos-title" className="section-y bg-white">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            id="cursos-title"
            overline="Nuestros cursos"
            title="Dos áreas, un mismo objetivo: que comprendas"
            lead="Reforzamiento especializado para estudiantes de secundaria. Escríbenos y te contamos los temas que trabajamos según el grado."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {courses.map((c) => (
            <Reveal key={c.id}><CourseCard course={c} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 4. Metodología ──────────────────────────────────────────────────── */
export function Methodology() {
  return (
    <section id="metodologia" aria-labelledby="metodologia-title" className="on-dark section-y relative overflow-hidden bg-navy-900 text-white">
      <BrandPattern variant="orbitas" tone="dark" intensity="subtle" className="[mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
      <div className="container-page relative">
        <Reveal>
          <SectionHeader id="metodologia-title" inverse overline="Nuestra metodología" title={methodology.title} lead={methodology.lead} />
        </Reveal>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {methodology.steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="relative flex flex-col bg-navy-900 p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <IconTile tone="inverse"><Icon /></IconTile>
                <span className="type-accent-number text-[2.5rem] text-white/15" aria-hidden>0{i + 1}</span>
              </div>
              <h3 className="type-h4 mt-8 text-white"><span className="sr-only">Paso {i + 1}: </span>{title}</h3>
              <p className="type-body mt-2 text-text-inverse-muted">{text}</p>
              <span className={cn('absolute top-0 left-0 h-1 bg-celeste-500', ['w-1/4', 'w-2/4', 'w-3/4', 'w-full'][i])} aria-hidden />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ── 5. Beneficios ───────────────────────────────────────────────────── */
export function Benefits() {
  return (
    <section aria-labelledby="beneficios-title" className="section-y bg-white">
      <div className="container-page">
        <Reveal>
          <SectionHeader id="beneficios-title" overline="Beneficios" title={benefits.title} />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <Reveal className="lg:row-span-2"><BenefitCard featured {...benefits.featured} /></Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {benefits.items.map((b) => (
              <Reveal key={b.title}><BenefitCard {...b} /></Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── 6. Docentes ─────────────────────────────────────────────────────── */
export function Teachers() {
  return (
    <section id="docentes" aria-labelledby="docentes-title" className="section-y bg-surface-subtle">
      <div className="container-page">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader id="docentes-title" overline="Docentes" title="Quienes te acompañan" lead="Un equipo que explica con paciencia y conoce las dificultades más comunes de cada curso." />
        </Reveal>
        {import.meta.env.DEV && (
          <Alert tone="info" title="Espacio editable (nota visible solo en desarrollo)" className="mt-8 max-w-2xl">
            Los nombres, fotografías y presentaciones del equipo docente se completan en <code>src/data/content.ts</code> con información real de la academia.
          </Alert>
        )}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((t, i) => (
            <Reveal key={i}><TeacherCard teacher={t} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 7. Testimonios ──────────────────────────────────────────────────── */
export function Testimonials() {
  return (
    <section aria-labelledby="testimonios-title" className="section-y bg-white">
      <div className="container-page">
        <Reveal>
          <SectionHeader id="testimonios-title" overline="Testimonios" title="Lo que dicen estudiantes y familias" lead="Estructura lista para testimonios reales. Los textos actuales son demostrativos." />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i}><TestimonialCard t={t} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 8. Preguntas frecuentes ─────────────────────────────────────────── */
export function Faq() {
  const wa = whatsappUrl('Hola, Grupo Laplace. Tengo una consulta sobre los cursos.')
  return (
    <section id="preguntas" aria-labelledby="preguntas-title" className="section-y bg-surface-subtle">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeader id="preguntas-title" overline="Preguntas frecuentes" title="Resolvemos tus dudas" lead="¿No encuentras lo que buscas? Escríbenos y te respondemos." />
          <div className="mt-6">
            {wa ? (
              <Button href={wa} variant="outline" iconLeft={<MessageCircle className="size-4" aria-hidden />}>Preguntar por WhatsApp</Button>
            ) : (
              <Button href="#contacto" variant="outline" iconRight={<ArrowRight className="size-4" aria-hidden />}>Ir al formulario</Button>
            )}
          </div>
        </div>
        <div className="lg:col-span-8">
          <Accordion items={faqs.map((f) => ({ title: f.q, content: f.a }))} />
        </div>
      </div>
    </section>
  )
}

/* ── 9. CTA final ────────────────────────────────────────────────────── */
export function FinalCta() {
  const wa = whatsappUrl()
  return (
    <section aria-labelledby="cta-title" className="bg-white pb-[var(--space-section-y-sm)]">
      <div className="container-page">
        <div className="on-dark relative overflow-hidden rounded-2xl bg-navy-900 px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
          <BrandPattern variant="red" tone="dark" className="[mask-image:linear-gradient(to_left,black,transparent_75%)]" />
          <BrandCurve className="absolute -right-8 bottom-0 hidden w-80 lg:block" />
          <div className="relative max-w-2xl">
            <h2 id="cta-title" className="type-h1 text-white">{finalCta.title}</h2>
            <p className="type-subtitle mt-4 text-text-inverse-muted">{finalCta.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#contacto" size="lg" iconRight={<ArrowRight className="size-5" aria-hidden />}>Solicitar información</Button>
              {wa && (
                <Button href={wa} size="lg" variant="inverse" iconLeft={<MessageCircle className="size-5" aria-hidden />}>Escribir por WhatsApp</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
