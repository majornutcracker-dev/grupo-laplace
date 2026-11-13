/**
 * Contenido de las páginas según el Figma «PAGINA WEB GRUPO ALPAS» (página PROTOTIPOS),
 * que el cliente entregó como versión final: Inicio, Escolar, Universitario, Orientación vocacional,
 * Contacto y Error 404. Los textos se copian tal cual del diseño.
 * Conócenos sigue pendiente de diseño y usa `content.ts`.
 */
/* Íconos exportados del Figma (cada uno con el color que tiene en el diseño) */
import icCifra1 from '../assets/figma/icons/cifra-1.svg'
import icCifra2 from '../assets/figma/icons/cifra-2.svg'
import icCifra3 from '../assets/figma/icons/cifra-3.svg'
import icServEscolar from '../assets/figma/icons/inicio-servicio-escolar.svg'
import icServUniversitario from '../assets/figma/icons/inicio-servicio-universitario.svg'
import icServOrientacion from '../assets/figma/icons/inicio-servicio-orientacion.svg'
import icInicioBen1 from '../assets/figma/icons/inicio-beneficio-1.svg'
import icInicioBen2 from '../assets/figma/icons/inicio-beneficio-2.svg'
import icInicioBen3 from '../assets/figma/icons/inicio-beneficio-3.svg'
import icInicioBen4 from '../assets/figma/icons/inicio-beneficio-4.svg'
import icPracModalidad from '../assets/figma/icons/practica-modalidad.svg'
import icPracHorarios from '../assets/figma/icons/practica-horarios.svg'
import icPracInversion from '../assets/figma/icons/practica-inversion.svg'
import icTrabajo1 from '../assets/figma/icons/trabajo-1.svg'
import icTrabajo2 from '../assets/figma/icons/trabajo-2.svg'
import icTrabajo3 from '../assets/figma/icons/trabajo-3.svg'
import icEscAlgebra from '../assets/figma/icons/esc-area-algebra.svg'
import icEscAritmetica from '../assets/figma/icons/esc-area-aritmetica.svg'
import icEscGeometria from '../assets/figma/icons/esc-area-geometria.svg'
import icEscTrigonometria from '../assets/figma/icons/esc-area-trigonometria.svg'
import icEscEstadistica from '../assets/figma/icons/esc-area-estadistica.svg'
import icEscAptitud from '../assets/figma/icons/esc-area-aptitud.svg'
import icEscFisica from '../assets/figma/icons/esc-area-fisica.svg'
import icEscQuimica from '../assets/figma/icons/esc-area-quimica.svg'
import icEscBen1 from '../assets/figma/icons/esc-beneficio-1.svg'
import icEscBen2 from '../assets/figma/icons/esc-beneficio-2.svg'
import icEscBen3 from '../assets/figma/icons/esc-beneficio-3.svg'
import icEscBen4 from '../assets/figma/icons/esc-beneficio-4.svg'
import icUniMatematica from '../assets/figma/icons/uni-area-matematica.svg'
import icUniMatematica1 from '../assets/figma/icons/uni-area-matematica-1.svg'
import icUniMatematica2 from '../assets/figma/icons/uni-area-matematica-2.svg'
import icUniFisicaBasica from '../assets/figma/icons/uni-area-fisica-basica.svg'
import icUniFisica1 from '../assets/figma/icons/uni-area-fisica-1.svg'
import icUniFisica2 from '../assets/figma/icons/uni-area-fisica-2.svg'
import icUniQuimicaBasica from '../assets/figma/icons/uni-area-quimica-basica.svg'
import icUniQuimicaOrganica from '../assets/figma/icons/uni-area-quimica-organica.svg'
import icUniBen1 from '../assets/figma/icons/uni-beneficio-1.svg'
import icUniBen2 from '../assets/figma/icons/uni-beneficio-2.svg'
import icUniBen3 from '../assets/figma/icons/uni-beneficio-3.svg'
import icUniBen4 from '../assets/figma/icons/uni-beneficio-4.svg'
import icUniBen5 from '../assets/figma/icons/uni-beneficio-5.svg'
import icOriDirigido1 from '../assets/figma/icons/ori-dirigido-1.svg'
import icOriDirigido2 from '../assets/figma/icons/ori-dirigido-2.svg'
import icOriDirigido3 from '../assets/figma/icons/ori-dirigido-3.svg'
import icProceso1 from '../assets/figma/icons/proceso-1.svg'
import icProceso2 from '../assets/figma/icons/proceso-2.svg'
import icProceso3 from '../assets/figma/icons/proceso-3.svg'
import icOriBen1 from '../assets/figma/icons/ori-beneficio-1.svg'
import icOriBen2 from '../assets/figma/icons/ori-beneficio-2.svg'
import icOriBen3 from '../assets/figma/icons/ori-beneficio-3.svg'

export type IconItem = { icon: string; title: string; text: string }
export type Faq = { question: string; answer: string }
export type Area = { name: string; icon: string }
export type Practical = { icon: string; title: string; value: string }

/* ── Datos comunes ─────────────────────────────────────────────────── */

/** Modalidad, horarios e inversión (igual en los tres servicios del Figma). */
export const practical: Practical[] = [
  { icon: icPracModalidad, title: 'Modalidad', value: 'Virtual' },
  { icon: icPracHorarios, title: 'Horarios', value: 'Turno noche' },
  { icon: icPracInversion, title: 'Inversión', value: 'S/ 100.00 mensual' },
]

/** «¿Qué hacemos?» de Escolar y Universitario. */
export const howWeWork: IconItem[] = [
  { icon: icTrabajo1, title: 'Bases claras', text: 'Repasamos lo que sostiene cada tema nuevo.' },
  { icon: icTrabajo2, title: 'Práctica guiada', text: 'Ejercicios resueltos paso a paso, primero juntos.' },
  { icon: icTrabajo3, title: 'Seguimiento cercano', text: 'Docentes atentos a cómo avanza cada estudiante.' },
]

/* ── Inicio ────────────────────────────────────────────────────────── */
export const inicio = {
  hero: {
    tag: 'APRENDE · CRECE · AVANZA',
    description: 'Sabemos que aprender tiene sus retos. Te acompañamos a resolver tus dudas, fortalecer tus conocimientos y alcanzar tus metas, desde el colegio hasta la universidad.',
    checks: ['Atención personalizada', 'Horarios flexibles', 'Precios accesibles'],
  },
  metrics: [
    { icon: icCifra1, value: '+ 10', label: 'años de experiencia' },
    { icon: icCifra2, value: '90%', label: 'satisfacción estudiantil' },
    { icon: icCifra3, value: '+200', label: 'estudiantes acompañados' },
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
      { id: 'escolar', name: 'Escolar', text: 'Refuerzo académico y acompañamiento para estudiantes de nivel escolar.', to: '/servicios/escolar', icon: icServEscolar, tone: 'green' },
      { id: 'universitario', name: 'Universitario', text: 'Asesorías académicas en diferentes cursos universitarios para fortalecer tus conocimientos.', to: '/servicios/universitario', icon: icServUniversitario, tone: 'fog' },
      { id: 'orientacion', name: 'Orientación vocacional', text: 'Asesoría para descubrir intereses y explorar opciones profesionales.', to: '/servicios/orientacion-vocacional', icon: icServOrientacion, tone: 'green' },
    ] as const,
  },
  benefits: {
    eyebrow: 'BENEFICIOS',
    title: 'Descubre lo que hace diferente a ALPAS',
    items: [
      { icon: icInicioBen1, title: 'Atención personalizada', text: 'Nos adaptamos a tus necesidades y ritmo de aprendizaje.' },
      { icon: icInicioBen2, title: 'Aprendizaje claro y práctico', text: 'Aprende paso a paso con explicaciones claras que facilitan la comprensión de cada tema.' },
      { icon: icInicioBen3, title: 'Materiales y recursos de apoyo', text: 'Complementa tus clases con recursos educativos que facilitan la práctica y refuerzan lo aprendido.' },
      { icon: icInicioBen4, title: 'Horarios flexibles y precios accesibles', text: 'Encuentra opciones de aprendizaje que se adapten a tu disponibilidad y presupuesto.' },
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
    { name: 'Álgebra', icon: icEscAlgebra },
    { name: 'Aritmética', icon: icEscAritmetica },
    { name: 'Geometría', icon: icEscGeometria },
    { name: 'Trigonometría', icon: icEscTrigonometria },
    { name: 'Estadística', icon: icEscEstadistica },
    { name: 'Aptitud matemática', icon: icEscAptitud },
    { name: 'Física', icon: icEscFisica },
    { name: 'Química', icon: icEscQuimica },
  ] satisfies Area[],
  benefits: [
    { icon: icEscBen1, title: 'Clases virtuales', text: 'Refuerza tus conocimientos desde casa mediante sesiones virtuales.' },
    { icon: icEscBen2, title: 'Clases grabadas y recursos educativos', text: 'Accede a las grabaciones y materiales de apoyo organizados en Google Classroom.' },
    { icon: icEscBen3, title: 'Horarios y precios accesibles', text: 'Encuentra opciones que se adapten a tu disponibilidad y presupuesto.' },
    { icon: icEscBen4, title: 'Clases individuales o grupales', text: 'Elige la modalidad que mejor se adapte a tus necesidades de aprendizaje.' },
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
    { name: 'Matemática', icon: icUniMatematica },
    { name: 'Matemática 1', icon: icUniMatematica1 },
    { name: 'Matemática 2', icon: icUniMatematica2 },
    { name: 'Física básica', icon: icUniFisicaBasica },
    { name: 'Física 1', icon: icUniFisica1 },
    { name: 'Física 2', icon: icUniFisica2 },
    { name: 'Química básica', icon: icUniQuimicaBasica },
    { name: 'Química orgánica', icon: icUniQuimicaOrganica },
    { name: 'Termodinámica aplicada', icon: icUniFisica2 },
  ] satisfies Area[],
  benefits: [
    { icon: icUniBen1, title: 'Asesorías académicas', text: 'Refuerza los contenidos de tus cursos universitarios, resuelve dudas y profundiza en los temas que necesitas comprender.' },
    { icon: icUniBen2, title: 'Docentes especializados', text: 'Recibe orientación académica de docentes con experiencia en las distintas áreas de enseñanza.' },
    { icon: icUniBen3, title: 'Clases virtuales', text: 'Accede a sesiones de aprendizaje desde casa y organiza mejor tu tiempo de estudio.' },
    { icon: icUniBen4, title: 'Clases grabadas', text: 'Repasa las sesiones desarrolladas y vuelve a consultar los contenidos cuando lo necesites.' },
    { icon: icUniBen5, title: 'Precios accesibles', text: 'Encuentra alternativas de acompañamiento académico que se ajusten a tu presupuesto.' },
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
      { icon: icOriDirigido1, text: 'Estudiantes de los últimos años de secundaria' },
      { icon: icOriDirigido2, text: 'Jóvenes que tienen dudas entre varias carreras' },
      { icon: icOriDirigido3, text: 'Familias que acompañan a sus hijos en su elección' },
    ],
  },
  process: {
    eyebrow: 'EL PROCESO',
    title: '¿Qué te ofrece este servicio?',
    steps: [
      { icon: icProceso1, title: 'Explorar tus intereses', text: 'Conversaciones para reconocer qué te motiva.', tone: 'green' },
      { icon: icProceso2, title: 'Conocer tus opciones', text: 'Información sobre carreras y caminos profesionales.', tone: 'mist' },
      { icon: icProceso3, title: 'Decidir con confianza', text: 'Acompañamiento para dar el siguiente paso.', tone: 'green' },
    ] as const,
  },
  benefits: {
    eyebrow: 'BENEFICIOS',
    title: 'Cómo te ayuda la orientación vocacional',
    items: [
      { icon: icOriBen1, title: 'Conócete mejor', text: 'Identifica tus intereses, habilidades y aptitudes.' },
      { icon: icOriBen2, title: 'Opciones claras', text: 'Conoce carreras y caminos profesionales según tu perfil e intereses.' },
      { icon: icOriBen3, title: 'Acompañamiento cercano', text: 'Te guiamos durante tu proceso de decisión, sin presiones.' },
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
