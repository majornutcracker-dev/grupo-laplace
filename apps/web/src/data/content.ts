/**
 * Contenido editable del sitio de Grupo ALPAS.
 * Los textos marcados BRIEF vienen tal cual del cliente. El resto es redacción propuesta para validar.
 * Lo que solo ALPAS puede dar (docentes, horarios, inversión, contacto) queda PENDIENTE y no se inventa.
 */
import type { LucideIcon } from 'lucide-react'
import {
  Atom,
  BookOpenCheck,
  Calculator,
  Compass,
  FlaskConical,
  GraduationCap,
  HandHeart,
  Lightbulb,
  ListChecks,
  MessagesSquare,
  PlayCircle,
  School,
  Sigma,
  Target,
  UserRoundSearch,
  UsersRound,
} from 'lucide-react'

export const nav = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Conócenos', to: '/conocenos' },
  { label: 'Contacto', to: '/contacto' },
] as const

/* ── Servicios ─────────────────────────────────────────── BRIEF */
export type Service = {
  id: 'escolar' | 'universitario' | 'orientacion' | 'grabados'
  name: string
  summary: string
  /** Descripción breve para el menú desplegable de Servicios */
  menuText: string
  to?: string
  icon: LucideIcon
  audience: string
  comingSoon?: boolean
  /** Foto del servicio (pendiente) */
  photo?: string
  photoNote: string
}

export const services: Service[] = [
  {
    id: 'escolar',
    name: 'Escolar',
    menuText: 'Acompañamiento escolar con Grupo Laplace',
    summary: 'Refuerzo académico y acompañamiento para estudiantes de nivel escolar.',
    to: '/servicios/escolar',
    icon: School,
    audience: 'Con Grupo Laplace',
    photoNote: 'Foto pendiente: estudiante escolar resolviendo un ejercicio con su docente',
  },
  {
    id: 'universitario',
    name: 'Universitario',
    menuText: 'Matemática, cálculo, química y física',
    summary: 'Acompañamiento en cursos de matemática, cálculo, química y física.',
    to: '/servicios/universitario',
    icon: GraduationCap,
    audience: 'Estudiantes universitarios',
    photoNote: 'Foto pendiente: estudiantes universitarios en una sesión de cálculo',
  },
  {
    id: 'orientacion',
    name: 'Orientación vocacional',
    menuText: 'Explora tus opciones profesionales',
    summary: 'Asesoría para descubrir intereses y explorar opciones profesionales.',
    to: '/servicios/orientacion-vocacional',
    icon: Compass,
    audience: 'Jóvenes que eligen carrera',
    photoNote: 'Foto pendiente: joven conversando con su orientador',
  },
  {
    id: 'grabados',
    name: 'Cursos grabados',
    menuText: 'Próxima propuesta de aprendizaje digital',
    summary: 'Una futura propuesta de aprendizaje mediante clases y materiales digitales.',
    icon: PlayCircle,
    audience: 'Próximo lanzamiento',
    comingSoon: true,
    photoNote: 'Imagen pendiente: vista de una clase grabada',
  },
]

/* ── Inicio ─────────────────────────────────────────────── BRIEF */
export const home = {
  hero: {
    tag: 'APRENDE · CRECE · AVANZA',
    title: 'Aprender mejor hoy. Llegar más lejos mañana.',
    description: 'Potenciamos tu aprendizaje con acompañamiento académico y orientación para cada etapa de tu formación.',
    complement: ['Refuerzo académico', 'Formación universitaria', 'Orientación vocacional'],
    photoNote: 'Foto pendiente: docente acompañando a un estudiante en una situación real de clase',
  },
  about: {
    title: 'Aprender es el primer paso para alcanzar tus metas.',
    // PROPUESTA
    body: [
      'Grupo ALPAS brinda servicios educativos para estudiantes de nivel escolar y universitario, y orientación vocacional para quienes están eligiendo su carrera.',
      'Acompañamos a cada estudiante en su proceso de aprendizaje para fortalecer sus conocimientos y ayudarlo a alcanzar sus objetivos académicos.',
    ],
    photoNote: 'Foto pendiente: grupo de estudio de ALPAS',
  },
  services: {
    title: 'Encuentra el acompañamiento que necesitas.',
    description: 'Conoce nuestras propuestas educativas y descubre cómo podemos ayudarte a avanzar.',
  },
  why: {
    title: 'Tu aprendizaje, acompañado en cada paso.',
    items: [
      { icon: HandHeart, title: 'Acompañamiento cercano', text: 'Docentes que conocen a cada estudiante y lo siguen de cerca.' },
      { icon: Lightbulb, title: 'Enseñanza orientada a la comprensión', text: 'Primero entender el porqué; después practicar el cómo.' },
      { icon: UserRoundSearch, title: 'Atención a tus necesidades', text: 'Partimos de lo que el estudiante necesita reforzar.' },
      { icon: Target, title: 'Compromiso con el aprendizaje', text: 'Trabajamos con el objetivo académico de cada estudiante.' },
    ] satisfies Array<{ icon: LucideIcon; title: string; text: string }>,
  },
  team: { title: 'Detrás de cada aprendizaje, hay un equipo que te acompaña.' },
  cta: {
    title: 'Estamos aquí para ayudarte a dar el siguiente paso.',
    description: '¿Quieres conocer nuestros servicios o encontrar la opción adecuada para ti? Conversemos.',
  },
}

/* ── Docentes ───────────────────────────────────────────── PENDIENTE (no inventar nombres ni credenciales) */
export type Teacher = { name?: string; specialty?: string; bio?: string; photo?: string }
export const teachers: Teacher[] = [{}, {}, {}]

/* ── Servicios (página) ─────────────────────────────────── BRIEF */
export const servicesPage = {
  title: 'Encuentra el camino que te ayudará a avanzar.',
  description: 'Explora nuestras propuestas educativas y encuentra el acompañamiento que necesitas para alcanzar tus objetivos.',
}

/* ── Escolar · Grupo Laplace ────────────────────────────── BRIEF + PROPUESTA */
export const escolar = {
  intro:
    'Grupo Laplace es una marca educativa dedicada a estudiantes de nivel escolar, que trabaja junto a Grupo ALPAS para ofrecer el servicio Escolar.',
  approach: {
    title: 'Un acompañamiento que empieza por entender',
    text: 'Reforzamos los cursos del colegio con explicaciones claras y práctica guiada, para que el estudiante comprenda lo que aprende y gane confianza.',
  },
  areas: [
    { name: 'Álgebra', icon: Sigma },
    { name: 'Aritmética', icon: Calculator },
    { name: 'Geometría', icon: ListChecks },
    { name: 'Trigonometría', icon: Compass },
    { name: 'Estadística', icon: BookOpenCheck },
    { name: 'Aptitud matemática', icon: Lightbulb },
    { name: 'Física', icon: Atom },
    { name: 'Química', icon: FlaskConical },
  ] satisfies Array<{ name: string; icon: LucideIcon }>,
  benefits: [
    { title: 'Bases claras', text: 'Repasamos lo que sostiene cada tema nuevo.' },
    { title: 'Práctica guiada', text: 'Ejercicios resueltos paso a paso, primero juntos.' },
    { title: 'Seguimiento cercano', text: 'Docentes atentos a cómo avanza cada estudiante.' },
  ],
  photoNote: 'Foto pendiente: estudiante escolar con su docente de Grupo Laplace',
}

/* ── Universitario ──────────────────────────────────────── BRIEF + PROPUESTA */
export const universitario = {
  hero: {
    title: 'Comprende tus cursos. Avanza con confianza.',
    description: 'Encuentra el acompañamiento académico que necesitas para afrontar los desafíos de tu formación universitaria.',
    photoNote: 'Foto pendiente: estudiantes universitarios trabajando un problema de física',
  },
  intro:
    'Acompañamos a estudiantes universitarios que necesitan reforzar o comprender mejor sus cursos de ciencias y matemáticas.',
  areas: [
    { name: 'Matemática', icon: Sigma, text: 'Bases y temas del curso que necesitas reforzar.' },
    { name: 'Cálculo', icon: Calculator, text: 'Comprensión de los conceptos y resolución de problemas.' },
    { name: 'Química', icon: FlaskConical, text: 'Teoría y ejercicios explicados con claridad.' },
    { name: 'Física', icon: Atom, text: 'Conceptos, planteamiento y desarrollo de problemas.' },
  ] satisfies Array<{ name: string; icon: LucideIcon; text: string }>,
  // PROPUESTA de comunicación: validar con ALPAS
  method: [
    { title: 'Cuéntanos tu curso', text: 'Nos dices qué curso llevas y qué temas te están costando.' },
    { title: 'Explicación clara', text: 'Trabajamos los conceptos hasta que tengan sentido.' },
    { title: 'Práctica acompañada', text: 'Resolvemos problemas juntos y luego por tu cuenta.' },
  ],
  benefits: [
    { icon: Lightbulb, title: 'Entender, no memorizar', text: 'El foco está en comprender cada tema del curso.' },
    { icon: MessagesSquare, title: 'Resolver tus dudas', text: 'Espacio para preguntar lo que en clase no quedó claro.' },
    { icon: UsersRound, title: 'Acompañamiento cercano', text: 'Docentes que siguen tu avance.' },
  ] satisfies Array<{ icon: LucideIcon; title: string; text: string }>,
  faqs: [
    { question: '¿Qué cursos puedo reforzar?', answer: 'Matemática, cálculo, química y física. Escríbenos con el nombre de tu curso y te orientamos.' },
    { question: '¿Cuáles son los horarios y la modalidad?', answer: 'Te damos la información vigente de horarios y modalidad cuando nos escribes por WhatsApp.' },
    { question: '¿Cuánto cuesta?', answer: 'La inversión depende del curso y del tipo de acompañamiento. Consúltanos por WhatsApp para recibir el detalle.' },
    { question: '¿Cómo empiezo?', answer: 'Escríbenos por WhatsApp, cuéntanos qué curso llevas y te explicamos los siguientes pasos.' },
  ],
}

/* ── Orientación vocacional ─────────────────────────────── BRIEF + PROPUESTA (sin pruebas ni metodologías no confirmadas) */
export const orientacion = {
  hero: {
    title: 'Descubre tu camino. Construye tu futuro.',
    description: 'Te acompañamos a explorar tus intereses y reconocer tus opciones para tomar decisiones sobre tu futuro profesional.',
    photoNote: 'Foto pendiente: joven conversando con su orientador vocacional',
  },
  intro:
    'Elegir una carrera es una decisión importante. Te acompañamos para que la tomes con más información y más confianza.',
  audience: [
    { title: 'Estudiantes de los últimos años del colegio', text: 'Que empiezan a pensar en qué estudiar.' },
    { title: 'Jóvenes que dudan entre varias carreras', text: 'Y quieren comparar sus opciones con calma.' },
    { title: 'Familias que quieren acompañar la decisión', text: 'Y buscan una orientación cercana para sus hijos.' },
  ],
  offers: [
    { icon: Compass, title: 'Explorar tus intereses', text: 'Conversaciones para reconocer qué te motiva.' },
    { icon: BookOpenCheck, title: 'Conocer tus opciones', text: 'Información sobre carreras y caminos profesionales.' },
    { icon: Target, title: 'Decidir con confianza', text: 'Acompañamiento para dar el siguiente paso.' },
  ] satisfies Array<{ icon: LucideIcon; title: string; text: string }>,
  benefits: [
    'Un espacio para pensar tu futuro sin presión.',
    'Información clara para comparar opciones.',
    'Acompañamiento cercano durante el proceso.',
  ],
  // PROPUESTA de comunicación del proceso: validar con ALPAS
  process: [
    { title: 'Nos escribes', text: 'Por WhatsApp nos cuentas en qué etapa estás.' },
    { title: 'Conversamos', text: 'Conocemos tus intereses, dudas y expectativas.' },
    { title: 'Exploramos opciones', text: 'Revisamos juntos las carreras que te interesan.' },
    { title: 'Das el siguiente paso', text: 'Tomas tu decisión con más claridad.' },
  ],
  faqs: [
    { question: '¿A partir de qué edad puedo recibir orientación?', answer: 'Está pensada para jóvenes que están por terminar el colegio o eligiendo qué estudiar. Escríbenos y vemos tu caso.' },
    { question: '¿Mis padres pueden participar?', answer: 'Sí. La familia puede acompañar el proceso; cuéntanos cómo les gustaría participar.' },
    { question: '¿Cuánto dura y cuánto cuesta?', answer: 'Te damos esa información por WhatsApp, según lo que necesites.' },
  ],
}

/* ── Conócenos ──────────────────────────────────────────── PROPUESTA (validar) */
export const conocenos = {
  hero: {
    title: 'Un equipo que acompaña cada etapa del aprendizaje',
    description: 'Somos Grupo ALPAS. Creemos que aprender bien abre caminos, y que nadie debería recorrerlos solo.',
    photoNote: 'Foto pendiente: equipo de Grupo ALPAS',
  },
  who: 'Grupo ALPAS es una organización que brinda servicios educativos para estudiantes de nivel escolar y universitario, además de orientación vocacional.',
  proposal: 'Acompañamos a los estudiantes en su proceso de aprendizaje, fortalecemos sus conocimientos y los ayudamos a alcanzar sus objetivos académicos.',
  purpose: 'Que cada estudiante aprenda mejor hoy para llegar más lejos mañana.',
  values: [
    { title: 'Confianza', text: 'Para estudiantes y familias.' },
    { title: 'Cercanía', text: 'Un trato humano y atento.' },
    { title: 'Compromiso', text: 'Con el aprendizaje de cada estudiante.' },
    { title: 'Crecimiento', text: 'Aprender para seguir avanzando.' },
  ],
}

/* ── Contacto ───────────────────────────────────────────── BRIEF */
export const contacto = {
  title: 'Estamos listos para escucharte',
  description: 'Cuéntanos qué necesitas y te ayudamos a encontrar el servicio adecuado. La forma más rápida es escribirnos por WhatsApp.',
}
