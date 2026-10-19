/**
 * Configuración editable de la academia.
 * Todo dato vacío ('') se considera PENDIENTE: la web oculta o desactiva el elemento
 * en lugar de inventar información. Completa estos campos con datos reales.
 */
export const siteConfig = {
  name: 'Grupo Laplace',
  tagline: 'Aprender juntos, llegar más lejos.',
  description:
    'Academia de reforzamiento en matemáticas y química para estudiantes de secundaria.',

  contact: {
    /** Número con código de país, solo dígitos. Ej.: '51987654321' (pendiente) */
    whatsappNumber: '',
    /** Mensaje inicial que se precarga en WhatsApp */
    whatsappMessage: 'Hola, Grupo Laplace. Quisiera recibir información sobre sus cursos.',
    email: '',
    phone: '',
    /** Dirección o referencia de la sede (pendiente) */
    address: '',
    /** URL de Google Maps u otro mapa (pendiente) */
    mapUrl: '',
    /** Horario de atención (pendiente — no inventar) */
    officeHours: '',
  },

  social: {
    facebook: '',
    instagram: '',
    tiktok: '',
    youtube: '',
  },

  form: {
    /**
     * Endpoint que recibe el formulario de contacto (Formspree, API propia, etc.).
     * Mientras esté vacío, el formulario NO simula un envío: ofrece WhatsApp si está
     * configurado o informa que aún no hay un servicio conectado.
     */
    endpoint: '',
  },

  legal: {
    privacyUrl: '',
    termsUrl: '',
  },
}

export type SiteConfig = typeof siteConfig
