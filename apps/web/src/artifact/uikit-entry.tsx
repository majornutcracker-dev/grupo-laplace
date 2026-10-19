// Entrada del artefacto: solo el UI Kit, sin router ni navbar del sitio.
// Las fuentes se cargan desde Google Fonts en el HTML del artefacto.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/global.css'
import { Logo } from '@grupo-laplace/ui'
import UiKit from '../pages/UiKit'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="border-b border-border-default bg-white">
      <div className="container-page flex h-16 max-w-[var(--container-wide)] items-center justify-between gap-4">
        <Logo height={32} />
        <span className="type-caption text-text-muted">Design system · v1.0</span>
      </div>
    </div>
    <main id="contenido">
      <UiKit />
    </main>
  </StrictMode>,
)
