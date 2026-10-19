import { ArrowRight, Check, UsersRound } from 'lucide-react'
import { hero } from '../../data/content'
import { BrandCurve, BrandPattern, Button } from '@grupo-laplace/ui'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-white">
      <div className="container-page grid items-center gap-12 pt-10 pb-16 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-20 lg:pb-24">
        <div>
          <p className="type-overline inline-flex items-center gap-2 text-celeste-700">
            <span className="h-0.5 w-6 rounded-full bg-current" aria-hidden />
            {hero.eyebrow}
          </p>
          <h1 id="hero-title" className="type-display mt-5 text-navy-900">
            {hero.title} <span className="relative inline-block text-celeste-600">
              {hero.titleAccent}
              <svg aria-hidden viewBox="0 0 200 12" preserveAspectRatio="none" className="absolute -bottom-1.5 left-0 h-2.5 w-full text-orange-400">
                <path d="M2 9 C 50 2, 120 2, 198 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="type-subtitle mt-6 max-w-[36rem] text-text-secondary">{hero.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contacto" size="lg" iconRight={<ArrowRight className="size-5" aria-hidden />}>
              {hero.primaryCta}
            </Button>
            <Button href="#cursos" size="lg" variant="outline">
              {hero.secondaryCta}
            </Button>
          </div>
          <ul className="type-body-sm mt-8 flex flex-wrap gap-x-6 gap-y-2 text-text-secondary">
            {['Matemáticas', 'Química', 'Nivel secundaria'].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <Check className="size-4 text-celeste-600" strokeWidth={2.5} aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

/** Composición: una hoja de trabajo resuelta con acompañamiento sobre el panel de marca. */
function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none" aria-hidden>
      <div className="on-dark relative aspect-[4/4.6] overflow-hidden rounded-2xl bg-navy-900 sm:aspect-[5/4]">
        <BrandPattern variant="red" tone="dark" />
        <BrandCurve className="absolute -bottom-4 -left-6 w-[70%] opacity-90" />
        <div className="absolute top-5 right-5 flex items-center gap-2 rounded-pill bg-white/10 px-3 py-1.5 text-white backdrop-blur-sm sm:top-6 sm:right-6">
          <UsersRound className="size-4 text-celeste-300" />
          <span className="type-caption">Aprender juntos</span>
        </div>
      </div>

      {/* Hoja de trabajo */}
      <div className="absolute top-[13%] left-[5%] w-[88%] rounded-xl sm:top-[14%] sm:left-[6%] sm:w-[72%] bg-white p-4 shadow-lg sm:p-6">
        <div className="flex items-center justify-between">
          <p className="type-overline text-celeste-700">Resolvamos juntos</p>
          <span className="inline-flex gap-1"><i className="size-1.5 rounded-full bg-neutral-300" /><i className="size-1.5 rounded-full bg-neutral-300" /><i className="size-1.5 rounded-full bg-orange-400" /></span>
        </div>
        <ol className="type-academic mt-3 space-y-1.5 font-medium text-navy-900 sm:mt-4 sm:space-y-2">
          <li className="flex items-baseline gap-3"><span className="type-caption w-4 text-neutral-500">1</span><span>x² − 5x + 6 = 0</span></li>
          <li className="flex items-baseline gap-3"><span className="type-caption w-4 text-neutral-500">2</span><span>(x − 2)(x − 3) = 0</span></li>
          <li className="flex items-baseline gap-3">
            <span className="type-caption w-4 text-neutral-500">3</span>
            <span className="rounded-sm bg-orange-50 px-1.5 text-navy-900 ring-1 ring-orange-200">x = 2 &nbsp;ó&nbsp; x = 3</span>
            <Check className="size-4 text-feedback-success" strokeWidth={3} />
          </li>
        </ol>
        <div className="mt-3 rounded-md border-l-2 border-celeste-500 bg-celeste-50 px-3 py-2 sm:mt-4">
          <p className="type-caption text-celeste-800">¿Por qué factorizamos? Buscamos los valores que hacen cero el producto.</p>
        </div>
      </div>

      {/* Tarjeta de química */}
      <div className="absolute right-[5%] bottom-[5%] flex w-[58%] sm:bottom-[9%] sm:w-[46%] items-center gap-3 rounded-xl bg-white p-3 shadow-lg sm:p-4">
        <svg viewBox="0 0 64 48" className="h-10 w-14 shrink-0 sm:h-12 sm:w-16">
          <line x1="32" y1="18" x2="12" y2="36" stroke="#102C53" strokeWidth="2.5" />
          <line x1="32" y1="18" x2="52" y2="36" stroke="#102C53" strokeWidth="2.5" />
          <circle cx="32" cy="18" r="11" fill="#33A5CC" />
          <circle cx="12" cy="36" r="7" fill="#102C53" />
          <circle cx="52" cy="36" r="7" fill="#102C53" />
          <text x="32" y="22" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff" fontFamily="Inter, sans-serif">O</text>
        </svg>
        <div className="min-w-0">
          <p className="type-label text-navy-900">H₂O</p>
          <p className="type-caption text-text-muted">Enlace covalente</p>
        </div>
      </div>
    </div>
  )
}
