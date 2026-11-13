import { Link } from 'react-router-dom'
import { buttonClasses, cn } from '@grupo-alpas/ui'
import checkIcon from '../assets/figma/check.svg'
import chevronRight from '../assets/figma/icons/chevron-right.svg'
import chipCohete from '../assets/figma/icons/chip-cohete.svg'
import chipUsuarios from '../assets/figma/icons/chip-usuarios.svg'
import flechaServicios from '../assets/figma/flecha-servicios.svg'
import docenteRoberto from '../assets/figma/docente-roberto.webp'
import fotoEstudiantes from '../assets/figma/hero-estudiantes.webp'
import fotoDocente from '../assets/figma/nosotros-docente.webp'
import fotoEscolar from '../assets/figma/servicio-escolar.webp'
import fotoOrientacion from '../assets/figma/servicio-orientacion.webp'
import fotoUniversitario from '../assets/figma/servicio-universitario.webp'
import tileFx from '../assets/figma/tile-fx.svg'
import tileIntegral from '../assets/figma/tile-integral.svg'
import { PhotoComposition } from '../components/site/SiteBlocks'
import { BenefitsBand, CtaCard, FaqSection, Green, HeroShowcase, HeroSplit, IconCircle, SectionHead, TeamCard } from '../components/site/Sections'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { inicio } from '../data/paginas'
import { whatsappUrl } from '../lib/contact'
import { delay } from '../lib/motion'
import { usePageMeta } from '../lib/usePageMeta'

const servicePhotos = { escolar: fotoEscolar, universitario: fotoUniversitario, orientacion: fotoOrientacion }

export default function Home() {
  usePageMeta(
    'Grupo ALPAS · Refuerzo escolar, universitario y orientación vocacional',
    'Grupo ALPAS acompaña tu aprendizaje: refuerzo escolar, asesorías universitarias y orientación vocacional. Clases virtuales con atención personalizada.',
  )
  const { hero, metrics, about, services, benefits, team, faqs, cta } = inicio
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="page-title" className="overflow-hidden bg-white">
        <div className="container-wide pt-10 pb-10 lg:pt-10">
          <HeroSplit
            tag={hero.tag}
            title={<>Potenciamos tu <Green>aprendizaje,</Green> construimos tu futuro</>}
            description={hero.description}
            actions={
              <>
                <WhatsAppButton label="Consulta por WhatsApp" variant="primary" pill hideIcon className="sm:flex-1" />
                <a href="#servicios" className={buttonClasses({ variant: 'neutral', pill: true }, 'sm:w-45')}>Ver servicios</a>
              </>
            }
            extra={
              <ul className="pop-in mt-6 flex flex-wrap gap-x-4 gap-y-2" style={delay(240)} aria-label="Por qué elegir ALPAS">
                {hero.checks.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm leading-normal text-site-ink">
                    <img src={checkIcon} alt="" className="size-6" />
                    {c}
                  </li>
                ))}
              </ul>
            }
            media={
              <HeroShowcase
                variant="home"
                photo={fotoEstudiantes}
                photoAlt="Dos estudiantes de Grupo ALPAS con polos de la marca, mochilas y cuadernos"
                photoStyle={{ left: '15.1%', top: '0%', width: '69.8%', height: '94%' }}
                tiles={[{ src: tileIntegral, tone: 'green' }, { src: tileFx, tone: 'navy' }]}
                chips={[
                  { icon: chipUsuarios, label: ['Acompañamiento', 'constante'], tone: 'soft' },
                  { icon: chipCohete, label: ['Crecimiento', 'académico'], tone: 'mist' },
                ]}
              />
            }
          />
        </div>
      </section>

      {/* Cifras */}
      <section aria-label="ALPAS en cifras" className="bg-white">
        <div className="container-wide py-10">
          <ul className="reveal grid gap-8 rounded-[1.5rem] bg-site-navy p-8 shadow-overlay sm:p-10 md:grid-cols-3 md:gap-0">
            {metrics.map((m, i) => (
              <li key={m.label} className={cn('flex items-center gap-4 px-4 py-2 md:justify-center', i > 0 && 'md:border-l md:border-site-slate/70')}>
                <IconCircle icon={m.icon} tone="green" />
                <p className="text-white">
                  <span className="block text-[1.6875rem] leading-[1.4] font-medium">{m.value}</span>
                  <span className="mt-1 block text-base leading-normal">{m.label}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sobre nosotros */}
      <section aria-labelledby="about-title" className="bg-white">
        <div className="container-wide grid items-center gap-14 py-10 lg:grid-cols-[minmax(0,34rem)_1fr] lg:gap-20">
          <div className="reveal">
            <PhotoComposition ratio="1312/1199" src={fotoDocente} alt="Docente de Grupo ALPAS saludando con un libro de Matemáticas" />
          </div>
          <div className="reveal">
            <SectionHead id="about-title" eyebrow={about.eyebrow} title={about.title} />
            <div className="mt-6 space-y-6 text-base leading-normal text-site-ink">
              {about.body.map((p) => <p key={p}>{p}</p>)}
            </div>
            <Link to="/conocenos" className={buttonClasses({ variant: 'primary', pill: true }, 'mt-6')}>
              {about.cta}
              <img src={chevronRight} alt="" aria-hidden className="size-4 brightness-0 invert" />
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" aria-labelledby="services-title" className="scroll-mt-24 bg-white">
        <div className="container-wide relative py-10">
          <SectionHead id="services-title" eyebrow={services.eyebrow} title={services.title} />
          <img aria-hidden src={flechaServicios} alt="" className="absolute top-[4.5rem] right-[15%] hidden w-[5.625rem] lg:block" />
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {services.items.map((s, i) => (
              <li key={s.id} className="reveal" style={delay(i * 90)}>
                <article className="lift flex h-full flex-col gap-6 rounded-[1.5rem] border border-site-wash bg-white p-6 shadow-overlay">
                  <div className="relative">
                    <img src={servicePhotos[s.id]} alt="" loading="lazy" className="aspect-[326/218] w-full rounded-[1rem] object-cover" />
                    {/* Muesca blanca con el ícono del servicio, como en el Figma */}
                    <span className="absolute top-0 right-0 rounded-bl-[1.25rem] bg-white pb-2.5 pl-2.5">
                      <span className={cn('grid h-[4.5rem] w-20 place-items-center rounded-[1rem]', s.tone === 'green' ? 'bg-site-green-soft' : 'bg-site-fog')}>
                        <img src={s.icon} alt="" aria-hidden className="size-8" />
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <h3 className="text-lg leading-normal font-medium text-site-ink">{s.name}</h3>
                    <p className="text-base leading-normal text-site-ink">{s.text}</p>
                  </div>
                  <Link to={s.to} className={buttonClasses({ variant: 'neutral', pill: true }, 'self-start')}>
                    Conocer más<span className="sr-only"> sobre {s.name}</span>
                    <img src={chevronRight} alt="" aria-hidden className="size-4" />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="h-10 bg-white" />

      {/* Beneficios */}
      <BenefitsBand id="benefits-title" eyebrow={benefits.eyebrow} title={benefits.title} items={benefits.items} layout="row" />

      {/* Equipo */}
      <section aria-labelledby="team-title" className="bg-white">
        <div className="container-wide py-16 sm:py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHead id="team-title" eyebrow={team.eyebrow} title={team.title} description={team.description} />
            <Link to="/conocenos" className={buttonClasses({ variant: 'outlined', pill: true }, 'self-start lg:self-auto')}>
              {team.cta}
              <img src={chevronRight} alt="" aria-hidden className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {team.members.map((m, i) => <TeamCard key={i} index={i} name={m.name} role={m.role} photo={docenteRoberto} />)}
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <FaqSection items={faqs} />

      {/* CTA final */}
      <CtaCard title={cta.title} description={cta.description} whatsappUrl={whatsappUrl()} withIcon />
      <div className="h-10 bg-white" />
    </>
  )
}
