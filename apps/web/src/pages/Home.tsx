import { Hero } from '../components/sections/Hero'
import { About, Benefits, Courses, Faq, FinalCta, Methodology, Teachers, Testimonials } from '../components/sections/HomeSections'
import { Contact } from '../components/sections/Contact'
import { usePageMeta } from '../lib/usePageMeta'

export default function Home() {
  usePageMeta(
    'Grupo Laplace · Reforzamiento de Matemáticas y Química para secundaria',
    'Academia de reforzamiento en matemáticas y química para estudiantes de secundaria. Aprendizaje guiado, comprensión conceptual y acompañamiento cercano.',
  )
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <Methodology />
      <Benefits />
      <Teachers />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Contact />
    </>
  )
}
