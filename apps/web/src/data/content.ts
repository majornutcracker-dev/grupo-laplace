/**
 * Contenido editable de la web.
 *
 * Estado de cada bloque:
 *  - CONFIRMADO: dato entregado por la academia (nombre, áreas, público, concepto, paleta).
 *  - PROPUESTA: texto de comunicación redactado por diseño; debe validarlo la academia.
 *  - DEMOSTRATIVO: contenido de ejemplo; reemplazar antes de publicar.
 *  - PENDIENTE: información que solo la academia puede dar (no se inventa).
 */
import type { LucideIcon } from 'lucide-react'
import type { Course, Teacher, Testimonial } from '@grupo-laplace/ui'
import {
  Atom,
  BookOpenCheck,
  Compass,
  FlaskConical,
  HeartHandshake,
  Lightbulb,
  ListChecks,
  MessagesSquare,
  PencilRuler,
  Sigma,
  Target,
  UsersRound,
} from 'lucide-react'

export type { ContentStatus, Course, Teacher, Testimonial } from '@grupo-laplace/ui'

export const nav = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Docentes', href: '#docentes' },
  { label: 'Preguntas', href: '#preguntas' },
  { label: 'Contacto', href: '#contacto' },
] as const

// ── Hero ─────────────────────────────────────────── PROPUESTA
export const hero = {
  eyebrow: 'Reforzamiento en Matemáticas y Química · Secundaria',
  title: 'Comprende las ciencias. Confía en tu capacidad.',
  titleAccent: 'Llega más lejos.',
  subtitle:
    'En Grupo Laplace acompañamos a cada estudiante a entender el porqué de cada fórmula, practicar con guía y ganar seguridad para avanzar en el colegio.',
  primaryCta: 'Solicitar información',
  secondaryCta: 'Conocer nuestros cursos',
}

// ── Sobre nosotros ──────────────────────────────── PROPUESTA
export const about = {
  title: 'Una academia para entender, no solo para memorizar',
  lead:
    'Grupo Laplace es una academia de reforzamiento especializada en matemáticas y química para estudiantes de secundaria.',
  body: [
    'Creemos que las ciencias se aprenden mejor cuando alguien te acompaña a razonar paso a paso. Por eso trabajamos con explicaciones claras, ejercicios guiados y un trato cercano entre docente y estudiante.',
    'Nuestro objetivo es que cada estudiante comprenda los conceptos, desarrolle habilidades para resolver problemas por sí mismo y recupere la confianza en su capacidad.',
  ],
  pillars: [
    { icon: Lightbulb, title: 'Comprensión', text: 'Primero el concepto, luego la fórmula.' },
    { icon: HeartHandshake, title: 'Cercanía', text: 'Docentes que escuchan y acompañan.' },
    { icon: Target, title: 'Progreso', text: 'Metas claras para avanzar con seguridad.' },
  ] satisfies Array<{ icon: LucideIcon; title: string; text: string }>,
}

// ── Cursos ──────────────────────────────────────── CONFIRMADO (áreas) + PROPUESTA (textos)

export const courses: Course[] = [
  {
    id: 'matematicas',
    icon: Sigma,
    name: 'Matemáticas',
    tone: 'celeste',
    description:
      'Reforzamiento para comprender los temas del curso escolar, desarrollar razonamiento lógico y resolver problemas con método.',
    benefits: [
      'Explicación del concepto antes del procedimiento',
      'Práctica guiada con ejercicios de dificultad progresiva',
      'Refuerzo de las bases que el estudiante necesita',
    ],
    pending: ['Temas por grado', 'Horarios', 'Modalidad', 'Inversión'],
  },
  {
    id: 'quimica',
    icon: FlaskConical,
    name: 'Química',
    tone: 'navy',
    description:
      'Reforzamiento para entender la materia y sus transformaciones, conectar la teoría con ejemplos cotidianos y ganar soltura en los ejercicios.',
    benefits: [
      'Conceptos explicados con ejemplos cercanos',
      'Resolución paso a paso de problemas y cálculos',
      'Repaso enfocado en las dudas de cada estudiante',
    ],
    pending: ['Temas por grado', 'Horarios', 'Modalidad', 'Inversión'],
  },
]

// ── Metodología ─────────────────────────────────── PROPUESTA (validar con la academia)
export const methodology = {
  title: 'Cómo aprendemos juntos',
  // Propuesta de comunicación: la academia debe validarla con su forma real de enseñar.
  lead: 'Una ruta de cuatro momentos que convierte las dudas en comprensión.',
  steps: [
    {
      icon: Compass,
      title: 'Diagnóstico de dudas',
      text: 'Identificamos qué temas cuestan más y desde dónde conviene empezar.',
    },
    {
      icon: Lightbulb,
      title: 'Comprensión conceptual',
      text: 'Explicamos la idea detrás de cada fórmula con ejemplos claros.',
    },
    {
      icon: PencilRuler,
      title: 'Resolución guiada',
      text: 'Resolvemos ejercicios paso a paso, primero juntos y luego con autonomía.',
    },
    {
      icon: MessagesSquare,
      title: 'Acompañamiento continuo',
      text: 'Seguimos el avance y resolvemos dudas para consolidar lo aprendido.',
    },
  ] satisfies Array<{ icon: LucideIcon; title: string; text: string }>,
}

// ── Beneficios ──────────────────────────────────── PROPUESTA
export const benefits = {
  title: 'Por qué estudiar en Grupo Laplace',
  featured: {
    icon: UsersRound,
    title: 'Acompañamiento cercano',
    text: 'El estudiante no aprende solo: cuenta con docentes que se toman el tiempo de explicar, preguntar y volver a explicar cuando hace falta.',
  },
  items: [
    { icon: BookOpenCheck, title: 'Bases sólidas', text: 'Reforzamos los temas previos que sostienen lo nuevo.' },
    { icon: ListChecks, title: 'Práctica con método', text: 'Ejercicios ordenados por dificultad y con retroalimentación.' },
    { icon: Atom, title: 'Ciencia con sentido', text: 'Conectamos fórmulas y conceptos con situaciones reales.' },
    { icon: Target, title: 'Confianza para avanzar', text: 'Cada logro se nota en clase y en las evaluaciones.' },
  ] satisfies Array<{ icon: LucideIcon; title: string; text: string }>,
}

// ── Docentes ────────────────────────────────────── PENDIENTE (no inventar nombres ni credenciales)
export const teachers: Teacher[] = [
  { name: 'Nombre del docente', area: 'Matemáticas', bio: 'Breve presentación: experiencia, enfoque de enseñanza y lo que más disfruta de enseñar.', status: 'pendiente' },
  { name: 'Nombre del docente', area: 'Química', bio: 'Breve presentación: experiencia, enfoque de enseñanza y lo que más disfruta de enseñar.', status: 'pendiente' },
  { name: 'Nombre del docente', area: 'Matemáticas y Química', bio: 'Breve presentación: experiencia, enfoque de enseñanza y lo que más disfruta de enseñar.', status: 'pendiente' },
]

// ── Testimonios ─────────────────────────────────── DEMOSTRATIVO
export const testimonials: Testimonial[] = [
  {
    quote: 'Texto de ejemplo: aquí irá la experiencia real de un estudiante sobre cómo mejoró su comprensión del curso.',
    author: 'Estudiante (ejemplo)',
    role: 'Secundaria',
    status: 'demostrativo',
  },
  {
    quote: 'Texto de ejemplo: aquí irá la opinión real de un padre o madre de familia sobre el acompañamiento recibido.',
    author: 'Madre de familia (ejemplo)',
    role: 'Apoderada',
    status: 'demostrativo',
  },
  {
    quote: 'Texto de ejemplo: aquí irá un testimonio real sobre la metodología y el trato de los docentes.',
    author: 'Estudiante (ejemplo)',
    role: 'Secundaria',
    status: 'demostrativo',
  },
]

// ── Preguntas frecuentes ────────────────────────── PROPUESTA (respuestas sin afirmar políticas no confirmadas)
export const faqs: Array<{ q: string; a: string }> = [
  {
    q: '¿A quién están dirigidos los cursos?',
    a: 'A estudiantes de secundaria que quieren reforzar matemáticas o química, ya sea para ponerse al día, resolver dudas puntuales o afianzar sus bases.',
  },
  {
    q: '¿Qué cursos ofrecen?',
    a: 'Reforzamiento en Matemáticas y en Química. Escríbenos para conocer los temas que se trabajan según el grado del estudiante.',
  },
  {
    q: '¿Cómo es la metodología de enseñanza?',
    a: 'Priorizamos la comprensión de los conceptos, la resolución guiada de ejercicios y el acompañamiento cercano del docente. Te contamos el detalle al solicitar información.',
  },
  {
    q: '¿Cuáles son los horarios y la modalidad?',
    a: 'Los horarios y la modalidad se informan directamente al consultar, para darte la información vigente.',
  },
  {
    q: '¿Cómo es el proceso de inscripción?',
    a: 'Envíanos tu consulta por el formulario o por WhatsApp. Te responderemos con la información de los cursos y los pasos para inscribirte.',
  },
  {
    q: '¿Los padres pueden hacer la consulta?',
    a: 'Sí. Padres, madres o apoderados pueden escribirnos para resolver sus dudas sobre los cursos y el acompañamiento.',
  },
]

// ── CTA final ───────────────────────────────────── PROPUESTA
export const finalCta = {
  title: 'Da el siguiente paso en matemáticas y química',
  text: 'Cuéntanos qué necesita el estudiante y te orientamos sobre el curso más adecuado.',
}
