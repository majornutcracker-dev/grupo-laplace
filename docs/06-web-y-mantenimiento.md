# 06 · Web informativa — ejecutar, editar y mantener

## Stack
Monorepo **Turborepo** + **Yarn Classic** (workspaces). React 19 · TypeScript · Vite 6 · Tailwind CSS 4 · React Router 7 · Lucide · fuentes autoalojadas con Fontsource (Montserrat, Inter, Fredoka). Sin backend. Node 22 (`.nvmrc`).

## Ejecutar
Desde `grupo-laplace/`:
```bash
yarn install
yarn dev             # web en http://localhost:5173 (construye antes los tokens)
yarn build           # turbo: tokens → web (apps/web/dist)
yarn lint
yarn typecheck
yarn verify          # lint + typecheck + build, lo mismo que corre CI
yarn artifacts       # regenera artifacts/ui-kit.html y artifacts/web.html
yarn clean
```
Un solo paquete: `yarn workspace @grupo-laplace/web preview`, `yarn turbo run build --filter=@grupo-laplace/tokens`, etc.

## Paquetes
| Workspace | Qué es | Tareas |
|---|---|---|
| `packages/tokens` (`@grupo-laplace/tokens`) | `tokens.json` (fuente) → `dist/tokens.css` (`@theme` de Tailwind) | `build`, `clean` |
| `packages/ui` (`@grupo-laplace/ui`) | UI Kit: componentes, logos, patrones, `styles.css` (base y tipografía). Se consume como código fuente TS, sin build propio. | `lint`, `typecheck` |
| `apps/web` (`@grupo-laplace/web`) | Web informativa + `/ui-kit` + `/marca` | `dev`, `build`, `lint`, `typecheck`, `artifacts` |

Turbo ordena las tareas por dependencias (`dependsOn: ["^build"]`): los tokens se construyen antes que la web, y los resultados quedan en caché (`.turbo/`).

Para usar el UI Kit en otra app del monorepo: añade `@grupo-laplace/ui` y `@grupo-laplace/tokens` como dependencias y en su CSS:
```css
@import 'tailwindcss';
@import '@grupo-laplace/tokens/tokens.css';
@import '@grupo-laplace/ui/styles.css';
@source '../../../../packages/ui/src';   /* ruta relativa al código del UI Kit */
```

## Rutas
| Ruta | Contenido |
|---|---|
| `/` | Web informativa (hero, nosotros, cursos, metodología, beneficios, docentes, testimonios, FAQ, CTA, contacto) |
| `/ui-kit` | Design system y componentes |
| `/marca` | Guía de marca visual |

El build copia `index.html` como `404.html` para que GitHub Pages sirva las rutas de la SPA. Si no quieres que `/ui-kit` y `/marca` sean públicas, quita sus rutas de `apps/web/src/main.tsx` y sus enlaces del footer.

## Deploy (GitHub Actions → GitHub Pages)
- **`.github/workflows/ci.yml`**: en cada pull request a `main` corre `lint`, `typecheck` y `build`.
- **`.github/workflows/deploy.yml`**: en cada push a `main` (o a mano con *Run workflow*) verifica, construye y publica `apps/web/dist` en GitHub Pages.
- El base path lo calcula `actions/configure-pages` y llega a Vite como `BASE_PATH` (`/<repo>` en un sitio de proyecto, vacío con dominio propio). Router, enlaces y assets lo respetan.

Pasos para activarlo (una sola vez):
1. Crea el repositorio en GitHub con el contenido de `grupo-laplace/` en la raíz (los workflows deben quedar en `.github/workflows/` de la raíz del repo).
2. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Haz push a `main`. La URL aparece en el job *Deploy*.
4. Dominio propio (opcional): configúralo en Settings → Pages; el base path pasa a vacío automáticamente.

## Estructura
```
grupo-laplace/
├─ .github/workflows/          ← ci.yml · deploy.yml
├─ package.json · turbo.json · yarn.lock · .nvmrc
├─ packages/
│  ├─ tokens/
│  │  ├─ tokens.json           ← FUENTE de design tokens
│  │  └─ scripts/              ← build.mjs (JSON → dist/tokens.css) · color-scales.py
│  └─ ui/src/
│     ├─ components/ui/        ← Button, Cards, Form, Interactive, Primitives
│     ├─ components/brand/     ← Logo, patrones, curva
│     ├─ assets/brand/         ← logos SVG (generados por scripts/build-logos.py)
│     ├─ styles.css            ← base, tipografía, utilidades de layout
│     ├─ types.ts · index.ts
├─ apps/web/
│  ├─ scripts/build-artifacts.mjs
│  └─ src/
│     ├─ config/site.ts        ← CONTACTO, WhatsApp, redes, endpoint del formulario, legales
│     ├─ data/content.ts       ← TODO el texto editable (cursos, metodología, docentes, FAQ…)
│     ├─ components/layout/    ← Navbar, Footer, layouts de documentación
│     ├─ components/sections/  ← secciones de la home
│     ├─ pages/                ← Home, UiKit, BrandGuide, NotFound
│     ├─ artifact/             ← entradas de los HTML autocontenidos
│     └─ lib/                  ← contacto, validación, meta, reveal
├─ brand/                      ← export de Figma y logos limpios
├─ scripts/build-logos.py
├─ docs/                       ← esta documentación
└─ artifacts/                  ← HTML autocontenidos (UI Kit y web)
```

## Tareas habituales

### Completar datos de contacto
Edita `apps/web/src/config/site.ts`:
```ts
contact: { whatsappNumber: '51XXXXXXXXX', email: '…', phone: '…', address: '…', mapUrl: '…' },
social: { instagram: 'https://…', facebook: '', tiktok: '', youtube: '' },
form: { endpoint: 'https://formspree.io/f/xxxx' },   // u otro servicio
legal: { privacyUrl: '/privacidad', termsUrl: '' },
```
Los campos vacíos se ocultan solos: no hay que tocar componentes.

### Conectar el formulario
Cualquier servicio que acepte `POST` JSON (Formspree, Basin, Getform, API propia). El cuerpo enviado: `{ name, relation, phone, email, course, grade, message, consent }`. Sin endpoint, el formulario **no** finge un envío.

### Editar textos, cursos, docentes, testimonios y FAQ
`apps/web/src/data/content.ts`. Cada bloque indica su estado (CONFIRMADO / PROPUESTA / DEMOSTRATIVO / PENDIENTE).
- **Docentes:** reemplaza `name`, `bio`, añade `photo` (importa la imagen en `apps/web/src/assets/` o usa una URL) y cambia `status` a `'confirmado'`.
- **Testimonios:** reemplaza por reales (con autorización) y cambia `status` a `'confirmado'` para quitar la etiqueta «Contenido demostrativo».
- **Cursos:** completa temas/horarios/modalidad en `benefits` o elimina elementos de `pending` cuando se confirmen.

### Cambiar colores, tipografía, radios…
1. Edita `packages/tokens/tokens.json`.
2. `yarn build` (o `yarn dev`, que construye los tokens antes de arrancar).
3. Revisa `/ui-kit`. Para nuevas escalas de color: `python3 packages/tokens/scripts/color-scales.py`.

### Actualizar el logotipo
Si cambia el logo en Figma, exporta el frame del logotipo horizontal a `brand/figma-source/logo-horizontal-color.svg` y ejecuta `python3 scripts/build-logos.py` desde `grupo-laplace/`: escribe `brand/logos/` y copia los SVG a `packages/ui/src/assets/brand/`.

### Añadir fotografía real
Guarda las imágenes optimizadas (WebP/AVIF, ≤ 200 KB) en `apps/web/src/assets/photos/`, impórtalas y pásalas a los componentes. Toda imagen con contenido necesita `alt` descriptivo. Para menores de edad, obtener autorización de los padres.

## Calidad verificada (2026-10-19)
- Sin desbordamiento horizontal a 360, 375, 768, 1280 y 1440 px en `/`, `/ui-kit` y `/marca`.
- Menú móvil: abre, bloquea scroll, cierra con Esc y devuelve el foco.
- Formulario: validación, foco al primer error, etiquetas asociadas, aviso sin servicio conectado.
- `yarn verify` (lint + typecheck + build en los 3 workspaces) sin errores ni avisos. Sin errores en consola.
- Build con `BASE_PATH=/grupo-laplace` servido bajo esa ruta: rutas, anclas y logos correctos.
- `prefers-reduced-motion` desactiva transiciones y la animación de entrada.
- SEO: `lang="es-PE"`, título y meta descripción por página, Open Graph básico, encabezados jerárquicos, landmarks.

**No verificado / pendiente:** pruebas con lector de pantalla real, Lighthouse en producción, imagen Open Graph (crear 1200 × 630 cuando haya fotografía), `sitemap.xml`/`robots.txt` (dependen del dominio final).

## Checklist antes de publicar
- [ ] Datos de contacto, WhatsApp y redes en `site.ts`
- [ ] Endpoint del formulario conectado y probado
- [ ] Textos de PROPUESTA validados por la academia
- [ ] Docentes reales (nombre, foto, presentación)
- [ ] Testimonios reales o sección retirada
- [ ] Temas, horarios, modalidad e inversión confirmados (o mantener «por confirmar al consultar»)
- [ ] Política de privacidad (el formulario recoge datos personales)
- [ ] Imagen Open Graph, dominio, `sitemap.xml`, `robots.txt`
- [ ] Decidir si `/ui-kit` y `/marca` serán públicas
