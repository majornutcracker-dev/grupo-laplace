/**
 * Contenido de las páginas según el Figma «PAGINA WEB GRUPO ALPAS» (página PROTOTIPOS),
 * que el cliente entregó como versión final: Inicio, Escolar, Universitario, Orientación vocacional,
 * Contacto y Error 404. Los textos se copian tal cual del diseño.
 * Conócenos sigue pendiente de diseño y usa `content.ts`.
 */
import type { LucideIcon } from 'lucide-react'
import {
  Atom,
  Banknote,
  BookDown,
  BookOpen,
  Brain,
  Calculator,
  CalendarClock,
  ChartPie,
  Clock,
  FlaskConical,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Laptop,
  Lightbulb,
  ListChecks,
  MessagesSquare,
  Monitor,
  Navigation,
  Rocket,
  Route,
  Sigma,
  Sparkle,
  SquareFunction,
  Tangent,
  ThumbsUp,
  TriangleRight,
  UsersRound,
  Video,
} from 'lucide-react'

export type IconItem = { icon: LucideIcon; title: string; text: string }
export type Faq = { question: string; answer: string }
export type Area = { name: string; icon: LucideIcon }
export type Practical = { icon: LucideIcon; title: string; value: string }

/* ── Datos comunes ─────────────────────────────────────────────────── */

/** Modalidad, horarios e inversión (igual en los tres servicios del Figma). */
export const practical: Practical[] = [
  { icon: Laptop, title: 'Modalidad', value: 'Virtual' },
  { icon: CalendarClock, title: 'Horarios', value: 'Turno noche' },
  { icon: Banknote, title: 'Inversión', value: 'S/ 100.00 mensual' },
]

/** «¿Qué hacemos?» de Escolar y Universitario. */
export const howWeWork: IconItem[] = [
  { icon: BookOpen, title: 'Bases claras', text: 'Repasamos lo que sostiene cada tema nuevo.' },
  { icon: ListChecks, title: 'Práctica guiada', text: 'Ejercicios resueltos paso a paso, primero juntos.' },
  { icon: HeartHandshake, title: 'Seguimiento cercano', text: 'Docentes atentos a cómo avanza cada estudiante.' },
]

/* ── Inicio ────────────────────────────────────────────────────────── */
export const inicio = {
  hero: {
    tag: 'APRENDE · CRECE · AVANZA',
    description: 'Sabemos que aprender tiene sus retos. Te acompañamos a resolver tus dudas, fortalecer tus conocimientos y alcanzar tus metas, desde el colegio hasta la universidad.',
    checks: ['Atención personalizada', 'Horarios flexibles', 'Precios accesibles'],
  },
  metrics: [
    { icon: GraduationCap, value: '+ 10', label: 'años de experiencia' },
    { icon: ThumbsUp, value: '90%', label: 'satisfacción estudiantil' },
    { icon: HeartHandshake, value: '+200', label: 'estudiantes acompañados' },
  ],
  about: {
    eyebrow: 'SOBRE NOSOTROS',
    title: 'Aprender es el primer paso para alcanzar tus metas',
    body: [
      'ALPAS brinda servicios educativos para estudiantes de nivel escolar y universitario, y orientación vocacional para quienes están eligiendo su carrera.',
      'Acompañamos a cada estudiante en su proceso de aprendizaje para fortalecer sus conocimientos y ayudarlo a alcanzar sus objetivos académicos.',
    ],
    cta: 'Conoce cómo trabajamos',
  },
  services: {
    eyebrow: 'NUESTROS SERVICIOS',
    title: 'Un camino de aprendizaje para cada etapa',
    items: [
      { id: 'escolar', name: 'Escolar', text: 'Refuerzo académico y acompañamiento para estudiantes de nivel escolar.', to: '/servicios/escolar', icon: GraduationCap, tone: 'green' },
      { id: 'universitario', name: 'Universitario', text: 'Asesorías académicas en diferentes cursos universitarios para fortalecer tus conocimientos.', to: '/servicios/universitario', icon: Monitor, tone: 'fog' },
      { id: 'orientacion', name: 'Orientación vocacional', text: 'Asesoría para descubrir intereses y explorar opciones profesionales.', to: '/servicios/orientacion-vocacional', icon: Navigation, tone: 'green' },
    ] as const,
  },
  benefits: {
    eyebrow: 'BENEFICIOS',
    title: 'Descubre lo que hace diferente a ALPAS',
    items: [
      { icon: UsersRound, title: 'Atención personalizada', text: 'Nos adaptamos a tus necesidades y ritmo de aprendizaje.' },
      { icon: Lightbulb, title: 'Aprendizaje claro y práctico', text: 'Aprende paso a paso con explicaciones claras que facilitan la comprensión de cada tema.' },
      { icon: BookDown, title: 'Materiales y recursos de apoyo', text: 'Complementa tus clases con recursos educativos que facilitan la práctica y refuerzan lo aprendido.' },
      { icon: Clock, title: 'Horarios flexibles y precios accesibles', text: 'Encuentra opciones de aprendizaje que se adapten a tu disponibilidad y presupuesto.' },
    ] satisfies IconItem[],
  },
  team: {
    eyebrow: 'NUESTRO EQUIPO',
    title: 'Detrás de cada aprendizaje, hay un equipo que te acompaña',
    description: 'En ALPAS encontrarás el acompañamiento que necesitas para fortalecer tus conocimientos, superar nuevos retos y seguir creciendo.',
    cta: 'Conoce al equipo',
    /** Tal como en el Figma: las tres cards muestran al mismo docente. */
    members: Array.from({ length: 3 }, () => ({ name: 'Roberto Alpas Lobaton', role: 'Profesor de matemáticas y ciencias' })),
  },
  faqs: [
    { question: '¿Qué servicios ofrece ALPAS?', answer: 'Contamos con refuerzo escolar, acompañamiento universitario y orientación vocacional.' },
    { question: '¿A quiénes están dirigidos sus servicios?', answer: 'A estudiantes de nivel secundario, universitario y jóvenes que buscan orientación para elegir su futuro profesional.' },
    { question: '¿Cómo puedo solicitar información sobre sus servicios?', answer: 'Puedes comunicarte con nuestro equipo a través de WhatsApp para conocer más detalles y resolver tus consultas.' },
    { question: '¿Los servicios tienen diferentes modalidades y horarios?', answer: 'Cada servicio cuenta con características y opciones propias. Escríbenos para conocer los detalles y las alternativas disponibles.' },
  ] satisfies Faq[],
  cta: { title: '¡Tu próximo paso comienza aquí!', description: 'Conoce cómo podemos acompañarte en tu aprendizaje. Estamos listos para ayudarte.' },
}

/* ── Escolar ───────────────────────────────────────────────────────── */
export const escolarFigma = {
  hero: {
    tag: 'ESCOLAR',
    description: 'Grupo Laplace, parte de ALPAS, acompaña a estudiantes de secundaria con explicaciones claras y seguimiento cercano en 10 áreas académicas.',
  },
  whatTitle: 'Reforzamos tu aprendizaje, paso a paso',
  areas: [
    { name: 'Álgebra', icon: SquareFunction },
    { name: 'Aritmética', icon: Calculator },
    { name: 'Geometría', icon: TriangleRight },
    { name: 'Trigonometría', icon: Tangent },
    { name: 'Estadística', icon: ChartPie },
    { name: 'Aptitud matemática', icon: Brain },
    { name: 'Física', icon: Atom },
    { name: 'Química', icon: FlaskConical },
  ] satisfies Area[],
  benefits: [
    { icon: Video, title: 'Clases virtuales', text: 'Refuerza tus conocimientos desde casa mediante sesiones virtuales.' },
    { icon: BookDown, title: 'Clases grabadas y recursos educativos', text: 'Accede a las grabaciones y materiales de apoyo organizados en Google Classroom.' },
    { icon: Clock, title: 'Horarios y precios accesibles', text: 'Encuentra opciones que se adapten a tu disponibilidad y presupuesto.' },
    { icon: UsersRound, title: 'Clases individuales o grupales', text: 'Elige la modalidad que mejor se adapte a tus necesidades de aprendizaje.' },
  ] satisfies IconItem[],
  faqs: [
    { question: '¿A qué estudiantes están dirigidas las clases?', answer: 'A estudiantes de nivel secundario que desean reforzar sus conocimientos y mejorar su comprensión de los cursos.' },
    { question: '¿Qué cursos puedo reforzar?', answer: 'Brindamos refuerzo académico en matemática y ciencias.' },
    { question: '¿Las clases son virtuales o presenciales?', answer: 'Las clases se desarrollan en modalidad virtual, para que puedas aprender desde la comodidad de tu casa.' },
    { question: '¿Puedo elegir entre clases individuales o grupales?', answer: 'Sí, contamos con ambas modalidades para adaptarnos a tus necesidades de aprendizaje.' },
    { question: '¿Las clases quedan grabadas?', answer: 'Sí, contamos con clases grabadas y recursos educativos organizados en Google Classroom para facilitar el repaso.' },
  ] satisfies Faq[],
  cta: {
    title: '¿Quieres reforzar los cursos del colegio?',
    description: 'Escríbenos por WhatsApp, cuéntanos el grado y los cursos, y te enviamos la información del servicio Escolar',
  },
}

/* ── Universitario ─────────────────────────────────────────────────── */
export const universitarioFigma = {
  hero: {
    tag: 'UNIVERSITARIO',
    description: 'En ALPAS te brindamos asesoría académica y refuerzo universitario para fortalecer tus conocimientos y superar tus retos académicos.',
  },
  whatTitle: 'Te acompañamos en cada desafío universitario',
  areas: [
    { name: 'Matemática', icon: SquareFunction },
    { name: 'Matemática 1', icon: Tangent },
    { name: 'Matemática 2', icon: Sigma },
    { name: 'Física básica', icon: FlaskConical },
    { name: 'Física 1', icon: TriangleRight },
    { name: 'Física 2', icon: FlaskConical },
    { name: 'Química básica', icon: Atom },
    { name: 'Química orgánica', icon: Atom },
    { name: 'Termodinámica aplicada', icon: FlaskConical },
  ] satisfies Area[],
  benefits: [
    { icon: BookOpen, title: 'Asesorías académicas', text: 'Refuerza los contenidos de tus cursos universitarios, resuelve dudas y profundiza en los temas que necesitas comprender.' },
    { icon: GraduationCap, title: 'Docentes especializados', text: 'Recibe orientación académica de docentes con experiencia en las distintas áreas de enseñanza.' },
    { icon: Laptop, title: 'Clases virtuales', text: 'Accede a sesiones de aprendizaje desde casa y organiza mejor tu tiempo de estudio.' },
    { icon: Video, title: 'Clases grabadas', text: 'Repasa las sesiones desarrolladas y vuelve a consultar los contenidos cuando lo necesites.' },
    { icon: Banknote, title: 'Precios accesibles', text: 'Encuentra alternativas de acompañamiento académico que se ajusten a tu presupuesto.' },
  ] satisfies IconItem[],
  faqs: [
    { question: '¿A quiénes están dirigidas las asesorías universitarias?', answer: 'A estudiantes universitarios que necesitan reforzar los contenidos de sus cursos, resolver dudas o prepararse para sus evaluaciones.' },
    { question: '¿Qué cursos universitarios puedo reforzar?', answer: 'Brindamos acompañamiento en matemática, física y química, incluyendo cursos como Matemática 1 y 2, Física 1 y 2, Química básica, Química orgánica y Termodinámica aplicada.' },
    { question: '¿Las asesorías son personalizadas?', answer: 'El acompañamiento puede enfocarse en los temas y dificultades académicas que necesites trabajar.' },
    { question: '¿Puedo consultar sobre un tema específico de mi curso?', answer: 'Sí, puedes indicarnos qué tema necesitas reforzar para que podamos orientarte sobre el acompañamiento disponible.' },
  ] satisfies Faq[],
  cta: {
    title: '¿Quieres reforzar tus conocimientos?',
    description: 'Fortalece lo aprendido en tus cursos y avanza con mayor seguridad en tu formación universitaria.',
  },
}

/* ── Orientación vocacional ────────────────────────────────────────── */
export const orientacionFigma = {
  hero: {
    tag: 'ORIENTACIÓN VOCACIONAL',
    description: 'Te acompañamos a explorar tus intereses y reconocer tus opciones para tomar decisiones sobre tu futuro profesional.',
  },
  audience: {
    eyebrow: '¿A QUIÉN ESTÁ DIRIGIDO?',
    title: 'Para quienes están eligiendo qué estudiar',
    items: [
      { icon: BookOpen, text: 'Estudiantes de los últimos años de secundaria' },
      { icon: ListChecks, text: 'Jóvenes que tienen dudas entre varias carreras' },
      { icon: HeartHandshake, text: 'Familias que acompañan a sus hijos en su elección' },
    ],
  },
  process: {
    eyebrow: 'EL PROCESO',
    title: '¿Qué te ofrece este servicio?',
    steps: [
      { icon: MessagesSquare, title: 'Explorar tus intereses', text: 'Conversaciones para reconocer qué te motiva.', tone: 'green' },
      { icon: Navigation, title: 'Conocer tus opciones', text: 'Información sobre carreras y caminos profesionales.', tone: 'mist' },
      { icon: Rocket, title: 'Decidir con confianza', text: 'Acompañamiento para dar el siguiente paso.', tone: 'green' },
    ] as const,
  },
  benefits: {
    eyebrow: 'BENEFICIOS',
    title: 'Cómo te ayuda la orientación vocacional',
    items: [
      { icon: Sparkle, title: 'Conócete mejor', text: 'Identifica tus intereses, habilidades y aptitudes.' },
      { icon: Route, title: 'Opciones claras', text: 'Conoce carreras y caminos profesionales según tu perfil e intereses.' },
      { icon: HandHeart, title: 'Acompañamiento cercano', text: 'Te guiamos durante tu proceso de decisión, sin presiones.' },
    ] satisfies IconItem[],
  },
  faqs: [
    { question: '¿A quién está dirigido el servicio de orientación vocacional?', answer: 'A estudiantes que están por terminar la secundaria, jóvenes que tienen dudas sobre qué estudiar y familias que desean acompañarlos.' },
    { question: '¿En qué consiste la orientación vocacional?', answer: 'Es un proceso de acompañamiento que te ayuda a reconocer tus intereses, habilidades y aptitudes, y explorar distintas opciones profesionales.' },
    { question: '¿La orientación vocacional me ayudará a elegir una carrera?', answer: 'Te brindará herramientas e información para que puedas evaluar tus opciones y tomar una decisión más consciente sobre tu futuro.' },
    { question: '¿Necesito tener una carrera en mente para comenzar?', answer: 'No. Puedes iniciar el proceso incluso si todavía no tienes claro qué te gustaría estudiar.' },
    { question: '¿Puedo participar si tengo dudas entre varias carreras?', answer: '¡Por supuesto! La orientación te ayudará a explorar tus alternativas y reconocer cuáles conectan mejor con tus intereses y habilidades.' },
  ] satisfies Faq[],
  cta: {
    title: '¡Tu futuro profesional comienza hoy!',
    description: 'Descubre tus intereses, explora nuevas posibilidades y encuentra el camino profesional que conecte contigo.',
  },
}

/* ── Contacto y 404 ────────────────────────────────────────────────── */
export const contactoFigma = {
  eyebrow: 'CONTACTO',
  description: '¿Tienes dudas sobre nuestros servicios? Escríbenos y te orientaremos para encontrar la opción que mejor se adapte a tus necesidades.',
}

export const error404 = {
  title: 'No encontramos lo que buscas',
  description: 'Es posible que la página haya cambiado de lugar o que el enlace no sea correcto. Te ayudamos a volver al camino.',
}
