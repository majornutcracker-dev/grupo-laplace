import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { BookOpenCheck, UsersRound } from 'lucide-react'
import { PhotoFrame, PlusMark, buttonClasses, cn } from '@grupo-laplace/ui'
import { CtaBand, PageHero, SectionDivider, SectionHeading, TeacherCard } from '../components/Blocks'
import { delay } from '../lib/motion'
import { conocenos as c, teachers } from '../data/content'
import { StudyGroupScene } from '../illustrations/Scenes'
import { usePageMeta } from '../lib/usePageMeta'

function IconCircle({ icon: Icon, tone = 'navy' }: { icon: LucideIcon; tone?: 'navy' | 'green' }) {
  return (
    <span aria-hidden className={cn('grid size-12 place-items-center rounded-pill bg-white shadow-neutral ring-1 ring-border-subtle [&_svg]:size-5.5', tone === 'green' ? 'text-green-deep' : 'text-primary-5')}>
      <Icon />
    </span>
  )
}

export default function Conocenos() {
  usePageMeta('Conócenos · Grupo ALPAS', c.who)
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Inicio', href: '/' }, { label: 'Conócenos' }]}
        title={c.hero.title}
        description={c.hero.description}
        art={<StudyGroupScene />}
        actions={<Link to="/servicios" className={buttonClasses({ variant: 'primary' })}>Explorar servicios</Link>}
      />

      {/* Presentación en dos cards */}
      <section aria-labelledby="who-title" className="container-wide section-y grid gap-5 lg:grid-cols-2">
        <article className="reveal card flex flex-col p-7 sm:p-10">
          <IconCircle icon={UsersRound} />
          <h2 id="who-title" className="type-h3 mt-8">Quiénes somos</h2>
          <p className="type-body-lg mt-4 max-w-[34rem] text-text-body">{c.who}</p>
        </article>
        <article className="reveal card flex flex-col p-7 sm:p-10" style={delay(90)}>
          <IconCircle icon={BookOpenCheck} tone="green" />
          <h2 className="type-h3 mt-8">Nuestra propuesta educativa</h2>
          <p className="type-body-lg mt-4 max-w-[34rem] text-text-body">{c.proposal}</p>
        </article>
      </section>

      {/* Propósito: card destacada en verde ALPAS */}
      <section aria-labelledby="purpose-title" className="container-wide">
        <div className="reveal frame-tab relative grid items-center gap-8 overflow-hidden bg-surface-accent px-7 py-12 sm:px-12 lg:grid-cols-[auto_1fr] lg:gap-14 lg:px-16 lg:py-16">
          <PlusMark className="size-16 sm:size-20" />
          <div>
            <h2 id="purpose-title" className="type-label text-text-accent">Nuestro propósito</h2>
            <p className="type-h2 mt-3 max-w-[24ch] text-text-heading">{c.purpose}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="values-title" className="container-wide section-y grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <SectionHeading id="values-title" eyebrow="Lo que nos mueve" title="Valores y principios" />
          <div className="card card-frame mt-10 hidden lg:block">
            <PhotoFrame alt="Foto pendiente: docente de ALPAS explicando en clase" ratio="4/3" className="rounded-[1rem]" />
          </div>
        </div>
        <dl className="grid gap-4 self-start sm:grid-cols-2 sm:gap-5">
          {c.values.map((v, i) => (
            <div key={v.title} className="reveal card p-6 sm:p-8" style={delay(i * 90)}>
              <dt className="type-h4">{v.title}</dt>
              <dd className="type-body mt-2 text-text-body">{v.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <SectionDivider />

      <section aria-labelledby="team-title" className="container-wide section-y">
        <SectionHeading id="team-title" title="Equipo docente" description="Pronto presentaremos aquí a cada docente: su especialidad y su experiencia." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((t, i) => <TeacherCard key={i} index={i} teacher={t} />)}
        </div>
      </section>

      <CtaBand title="Hablemos de tus objetivos" description="Cuéntanos qué necesitas y te orientamos hacia el servicio adecuado." />
    </>
  )
}
