// Entrada del artefacto: solo la web informativa (home), sin rutas de documentación.
// MemoryRouter mantiene a Navbar/Footer en "/" para que los enlaces sean anclas simples (#cursos…).
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router-dom'
import '../styles/global.css'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import Home from '../pages/Home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MemoryRouter>
      <Navbar />
      <main id="contenido" tabIndex={-1} className="outline-none">
        <Home />
      </main>
      <Footer showDocsLinks={false} />
    </MemoryRouter>
  </StrictMode>,
)
