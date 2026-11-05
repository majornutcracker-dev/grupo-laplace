# 07 · Sitio web de Grupo ALPAS

Sitio institucional de **Grupo ALPAS** en `apps/web`. Reemplaza a la web anterior de Grupo Laplace; **Grupo Laplace** queda como marca independiente en la página Escolar.

**Fuente de diseño:** Figma «PAGINA WEB GRUPO ALPAS» (`nYMryCzRUJLh5l7IK4Pd1O`): variables (tokens), página **COMPONENTES** (UI kit `az-*`), **PROTOTIPOS** (hero y navegación) y **MOODOARD** (referencias).

## Páginas
| Ruta | Página |
|---|---|
| `/` | Inicio: hero, presentación, servicios, por qué elegirnos, equipo, CTA |
| `/servicios` | Catálogo de los 4 servicios (Cursos grabados: próximamente) |
| `/servicios/escolar` | Servicio Escolar con la identidad de Grupo Laplace (`data-brand="laplace"`) |
| `/servicios/universitario` | Matemática, cálculo, química y física |
| `/servicios/orientacion-vocacional` | Orientación vocacional |
| `/conocenos` | Quiénes somos, propuesta, propósito, valores, equipo |
| `/contacto` | WhatsApp como canal principal, otros canales y redes |

## Tokens (desde Figma)
- `packages/tokens/tokens.json`: `Color/Primary/1–6` (#011D35 base), `Color/Secondary/first-*` (verde #4F876C), `Color/Neutral/*`, `Color/Semantic/*`, Poppins (`Body`, `H4`, `H5`, `Description`), espaciados `space-xs…xl` (8–80), radio `System/border` 24, sombras `shadow-primary` y `shadow-neutral`.
- Derivados por accesibilidad: `green.deep` #3F6E57 (botones verdes con texto blanco: el verde de marca da 4.2:1, bajo AA en 16 px) y `neutral.muted` #5B6B7C (texto secundario: `subordinary` da 2.9:1).
- `themes.laplace`: redefine los tokens semánticos con la paleta de Laplace (#3566A8, #A8C96A, #ED964C) solo dentro de `[data-brand="laplace"]`.

## UI kit (`packages/ui`)
`Button` / `ButtonLink` / `buttonClasses` (az-boton: primary, secondary, neutral, outlined, text, link), `Tag` (az-etiqueta), `Note` (az-nota), `Accordion` (FAQ), `Breadcrumbs`, `Steps` (az-pasos), `PhotoFrame`, `PlusMark`, `IconBadge`. El recurso de marca es la «pestaña» del A+ del logotipo: marcos con la esquina inferior derecha recta (`.frame-tab`) y el «+» verde.

## Contenido pendiente (no se inventa)
Edita `apps/web/src/config/site.ts` y `apps/web/src/data/content.ts`:
- **WhatsApp**, teléfono, correo, dirección y redes de ALPAS. Sin número, los botones «Consultar por WhatsApp» llevan a Contacto, donde se indica que está pendiente.
- **Logotipo de Grupo Laplace** (`laplaceConfig.logoSrc`); mientras falte se muestra el nombre en texto con sus Δ.
- **Fotografías**: cada `PhotoFrame` describe la foto que falta; pasa `src` cuando existan.
- **Docentes** (nombre, especialidad, experiencia, foto), modalidad, horarios e inversión.
- Los textos marcados como PROPUESTA en `content.ts` (metodología, proceso, valores) deben validarse con ALPAS.

## Deploy
Push a `main` → GitHub Actions (`deploy.yml`) corre lint, typecheck y build, y publica `apps/web/dist` en GitHub Pages.
