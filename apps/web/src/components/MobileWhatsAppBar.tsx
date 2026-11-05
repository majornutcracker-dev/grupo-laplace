import { WhatsAppButton } from './WhatsAppButton'

/** En móvil y tablet el CTA de WhatsApp queda siempre a mano, fijo al pie de la pantalla. */
export function MobileWhatsAppBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] border-t border-border-default bg-white/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
      <WhatsAppButton fullWidth />
    </div>
  )
}
