/**
 * Datos de contacto de Grupo ALPAS.
 * Todo campo vacío ('') es información PENDIENTE de la organización: la web lo oculta
 * o lo marca como pendiente en lugar de inventarlo.
 */
export const siteConfig = {
  name: 'Grupo ALPAS',
  description:
    'Servicios educativos para estudiantes escolares y universitarios, y orientación vocacional. Acompañamos tu aprendizaje en cada etapa.',

  contact: {
    /** Número de WhatsApp con código de país, solo dígitos (dato del Figma «PROTOTIPOS», footer). */
    whatsappNumber: '51990272466',
    /** Mensaje con el que se abre la conversación */
    whatsappMessage: 'Hola, Grupo ALPAS. Quisiera información sobre sus servicios.',
    /** Número visible para llamadas (el mismo de WhatsApp, según el Figma). */
    phone: '+51 990 272 466',
    email: 'alpasmate@gmail.com',
    /** Dirección o referencia de la sede, si corresponde. Pendiente. */
    address: '',
    mapUrl: '',
  },

  social: {
    /** En el Figma figura la cuenta «grupoalpas»: confirmar que esta sea la URL exacta de la página. */
    facebook: 'https://www.facebook.com/grupoalpas',
    instagram: '',
    tiktok: '',
    youtube: '',
  },
}

/** Grupo Laplace: marca educativa independiente que colabora con ALPAS en el servicio Escolar. */
export const laplaceConfig = {
  name: 'Grupo Laplace',
  tagline: '¡Todo empieza cuando lo entiendes!',
  /** Logotipo oficial de Laplace (ruta o URL). Mientras falte, se muestra el nombre en texto. */
  logoSrc: '',
  /** WhatsApp propio de Laplace, si tiene uno. Vacío: se usa el de ALPAS. */
  whatsappNumber: '',
}
