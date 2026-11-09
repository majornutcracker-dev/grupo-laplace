import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/plus-jakarta-sans/600.css'
import './styles/global.css'
import { SiteLayout } from './components/SiteLayout'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Escolar from './pages/Escolar'
import Universitario from './pages/Universitario'
import Orientacion from './pages/Orientacion'
import Conocenos from './pages/Conocenos'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="servicios/escolar" element={<Escolar />} />
          <Route path="servicios/universitario" element={<Universitario />} />
          <Route path="servicios/orientacion-vocacional" element={<Orientacion />} />
          <Route path="conocenos" element={<Conocenos />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
