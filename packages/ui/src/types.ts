import type { LucideIcon } from 'lucide-react'

/** Estado editorial de un contenido: qué está confirmado por la academia y qué no. */
export type ContentStatus = 'confirmado' | 'propuesta' | 'demostrativo' | 'pendiente'

/** Curso que muestra CourseCard. */
export type Course = {
  id: string
  icon: LucideIcon
  name: string
  tone: 'celeste' | 'navy'
  description: string
  benefits: string[]
  /** Temas, niveles, horarios, modalidad y precios: PENDIENTES de la academia */
  pending: string[]
}

/** Docente que muestra TeacherCard. */
export type Teacher = { name: string; area: string; bio: string; photo?: string; status: ContentStatus }

/** Testimonio que muestra TestimonialCard. */
export type Testimonial = { quote: string; author: string; role: string; status: ContentStatus }
