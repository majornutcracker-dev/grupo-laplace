import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@fontsource-variable/inter/index.css'
import '@fontsource-variable/montserrat/index.css'
import '@fontsource/fredoka/500.css'
import '@fontsource/fredoka/600.css'
import './styles/global.css'
import { SiteLayout } from './components/layout/SiteLayout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { Spinner } from '@grupo-laplace/ui'

const UiKit = lazy(() => import('./pages/UiKit'))
const BrandGuide = lazy(() => import('./pages/BrandGuide'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Suspense fallback={<div className="grid min-h-[60vh] place-items-center"><Spinner /></div>}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<Home />} />
            <Route path="ui-kit" element={<UiKit />} />
            <Route path="marca" element={<BrandGuide />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
