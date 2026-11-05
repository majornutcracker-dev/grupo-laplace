import { Link } from 'react-router-dom'
import { PhotoFrame, PlusMark, buttonClasses } from '@grupo-laplace/ui'
import { CtaBand, PageHero, SectionHeading, TeacherCard } from '../components/Blocks'
import { conocenos as c, teachers } from '../data/content'
import { usePageMeta } from '../lib/usePageMeta'

export default function Conocenos() {
  usePageMeta('Conócenos · Grupo ALPAS', c.who)
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Inicio', href: '/' }, { label: 'Conócenos' }]}
        title={c.hero.title}
        description={c.hero.description}
        photoNote={c.hero.photoNote}
        actions={<Link to="/servicios" className={buttonClasses({ variant: 'primary' })}>Explorar servicios</Link>}
      />

      <section aria-labelledby="who-title" className="container-wide section-y grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 id="who-title" className="type-h2">Quiénes somos</h2>
          <p className="type-body-lg mt-5 max-w-[34rem] text-text-body">{c.who}</p>
        </div>
        <div>
          <h2 className="type-h2">Nuestra propuesta educativa</h2>
          <p className="type-body-lg mt-5 max-w-[34rem] text-text-body">{c.proposal}</p>
        </div>
      </section>

      <section aria-labelledby="purpose-title" className="bg-surface-accent">
        <div className="container-wide section-y grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <PlusMark className="size-16 sm:size-20" />
          <div>
            <h2 id="purpose-title" className="type-label text-text-accent">Nuestro propósito</h2>
            <p className="type-h2 mt-3 max-w-[24ch] text-text-heading">{c.purpose}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="values-title" className="container-wide section-y grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <SectionHeading id="values-title" title="Valores y principios" />
          <PhotoFrame alt="Foto pendiente: docente de ALPAS explicando en clase" ratio="4/3" className="mt-10 hidden lg:block" />
        </div>
        <dl className="grid gap-px self-start overflow-hidden rounded-xl bg-border-default sm:grid-cols-2">
          {c.values.map((v) => (
            <div key={v.title} className="bg-white p-6 sm:p-8">
              <dt className="type-h4">{v.title}</dt>
              <dd className="type-body mt-2 text-text-body">{v.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="team-title" className="bg-surface-subtle">
        <div className="container-wide section-y">
          <SectionHeading id="team-title" title="Equipo docente" description="Pronto presentaremos aquí a cada docente: su especialidad y su experiencia." />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((t, i) => <TeacherCard key={i} teacher={t} />)}
          </div>
        </div>
      </section>

      <div className="pt-[var(--space-section-y)]">
        <CtaBand title="Hablemos de tus objetivos" description="Cuéntanos qué necesitas y te orientamos hacia el servicio adecuado." />
      </div>
    </>
  )
}
