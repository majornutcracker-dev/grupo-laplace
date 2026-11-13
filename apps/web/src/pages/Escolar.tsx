import fotoEscolar from '../assets/figma/hero-escolar.webp'
import tileAtom from '../assets/figma/tile-atom.svg'
import tileXy from '../assets/figma/tile-xy.svg'
import { AcademicServicePage } from '../components/site/ServiceLayout'
import { Green } from '../components/site/Sections'
import { escolarFigma as e } from '../data/paginas'
import { laplaceWhatsappUrl } from '../lib/contact'
import { usePageMeta } from '../lib/usePageMeta'

export default function Escolar() {
  usePageMeta('Escolar · Grupo ALPAS', e.hero.description)
  return (
    <AcademicServicePage
      whatsappUrl={laplaceWhatsappUrl('Hola, Grupo ALPAS. Quisiera información sobre el servicio Escolar.')}
      hero={{
        tag: e.hero.tag,
        title: <>Refuerzo escolar en <Green>matemáticas y ciencias</Green></>,
        description: <><Green>Grupo Laplace</Green>{e.hero.description.replace(/^Grupo Laplace/, '')}</>,
        secondary: { label: 'Ver cursos', href: '#cursos' },
        showcase: {
          photo: fotoEscolar,
          photoAlt: 'Dos estudiantes de Grupo Laplace celebrando con sus cuadernos',
          photoStyle: { left: '0%', top: '10.1%', width: '99.2%', height: '87%' },
          tiles: [tileXy, tileAtom],
        },
      }}
      whatTitle={e.whatTitle}
      areas={e.areas}
      benefits={e.benefits}
      benefitsTitle="¿Por qué estudiar con Grupo Laplace?"
      benefitsLayout="row"
      faqs={e.faqs}
      cta={e.cta}
    />
  )
}
