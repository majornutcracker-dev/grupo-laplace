import fotoUniversitario from '../assets/figma/hero-universitario.webp'
import tileFy from '../assets/figma/tile-fy.svg'
import tileIntegrals from '../assets/figma/tile-integrals.svg'
import { AcademicServicePage } from '../components/site/ServiceLayout'
import { Green } from '../components/site/Sections'
import { universitarioFigma as u } from '../data/paginas'
import { whatsappUrl } from '../lib/contact'
import { usePageMeta } from '../lib/usePageMeta'

export default function Universitario() {
  usePageMeta('Universitario · Grupo ALPAS', u.hero.description)
  return (
    <AcademicServicePage
      whatsappUrl={whatsappUrl('Hola, Grupo ALPAS. Quisiera información sobre las asesorías universitarias.')}
      hero={{
        tag: u.hero.tag,
        title: <>¡Supera tus retos universitarios <Green>y avanza con confianza!</Green></>,
        description: u.hero.description,
        secondary: { label: 'Ver cursos', href: '#cursos' },
        showcase: {
          photo: fotoUniversitario,
          photoAlt: 'Estudiante universitaria en una clase virtual de Física I con su docente',
          photoStyle: { left: '5.6%', top: '10.1%', width: '87.2%', height: '88.6%' },
          tiles: [tileFy, tileIntegrals],
        },
      }}
      whatTitle={u.whatTitle}
      areas={u.areas}
      benefits={u.benefits}
      benefitsLayout="univ"
      areaSize="universitario"
      faqs={u.faqs}
      cta={u.cta}
    />
  )
}
