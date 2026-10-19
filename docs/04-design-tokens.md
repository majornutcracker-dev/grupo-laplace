# 04 · Design tokens — Grupo Laplace

**Fuente única:** `packages/tokens/tokens.json` (paquete `@grupo-laplace/tokens`) (formato tipo W3C Design Tokens, con `$value` y referencias `{color.navy.900}`).
`yarn build` genera `packages/tokens/dist/tokens.css`: las variables quedan en `@theme` de Tailwind v4, así que cada token es también una utilidad (`bg-surface-default`, `text-text-primary`, `border-border-default`, `rounded-xl`, `shadow-md`, `md:`…). Turbo lo construye antes de `dev` y `build` de la web.

> Tablas extraídas de `tokens.json` el 2026-10-19. La página `/ui-kit` lee el JSON directamente y siempre está al día; si cambias tokens, actualiza también estas tablas.

## Estructura

```
color.<primitivo>.<paso>      navy · celeste · orange · neutral (50–950), green, red, white, whatsapp
color.<rol>.<variante>        brand · action · surface · text · border · feedback   ← usar estos en componentes
font.family.* / font.weight.*
text.<nivel>.{size,line-height,tracking,weight,family}
space.* · radius.* · shadow.* · container.* · breakpoint.* · z.* · motion.* · state.*
```

Regla: **los componentes usan tokens semánticos**, no primitivos. Cambiar `action.primary` cambia todos los botones principales.

## Color · primitivos (OKLCH anclados en los oficiales)

| Paso | navy | celeste | orange | neutral |
|---|---|---|---|---|
| 50 | `#F2F7FF` | `#ECF9FF` | `#FFF4EC` | `#F7FAFF` |
| 100 | `#E3EEFE` | `#D6F2FE` | `#FFE8DB` | `#E8EDF5` |
| 200 | `#CFDCEE` | `#A9E5FF` | `#FED0B6` | `#D6DBE3` |
| 300 | `#B6C5DB` | `#7CD1F3` | `#FDB083` | `#BFC4CC` |
| 400 | `#97A9C3` | `#51B5DB` | `#FF8A3D` ● | `#A3A8AF` |
| 500 | `#798EAB` | `#33A5CC` ● | `#D16D29` | `#858D99` |
| 600 | `#5C7393` | `#1A7D9D` | `#AD5617` | `#6A727D` |
| 700 | `#445C7F` | `#066480` | `#8E4206` | `#545B66` |
| 800 | `#2C466A` | `#014D63` | `#6E3101` | `#3E4650` |
| 900 | `#102C53` ● | `#023646` | `#4F2201` | `#2A313B` |
| 950 | `#031C3E` | `#01212C` | `#321301` | `#171D26` |

● = color oficial. Generadas con `packages/tokens/scripts/color-scales.py` (reporta contraste de cada paso).

## Color · semánticos

### color.brand

| Token | Referencia | Valor | Utilidad Tailwind |
|---|---|---|---|
| `color.brand.primary` | `color.navy.900` | `#102C53` | `bg-brand-primary` |
| `color.brand.secondary` | `color.celeste.500` | `#33A5CC` | `bg-brand-secondary` |
| `color.brand.accent` | `color.orange.400` | `#FF8A3D` | `bg-brand-accent` |

### color.action

| Token | Referencia | Valor | Utilidad Tailwind |
|---|---|---|---|
| `color.action.primary` | `color.orange.400` | `#FF8A3D` | `bg-action-primary` |
| `color.action.primary-hover` | `color.orange.300` | `#FDB083` | `bg-action-primary-hover` |
| `color.action.primary-active` | `color.orange.200` | `#FED0B6` | `bg-action-primary-active` |
| `color.action.on-primary` | `color.navy.900` | `#102C53` | `bg-action-on-primary` |
| `color.action.secondary` | `color.navy.900` | `#102C53` | `bg-action-secondary` |
| `color.action.secondary-hover` | `color.navy.800` | `#2C466A` | `bg-action-secondary-hover` |
| `color.action.secondary-active` | `color.navy.950` | `#031C3E` | `bg-action-secondary-active` |
| `color.action.on-secondary` | `color.white` | `#FFFFFF` | `bg-action-on-secondary` |
| `color.action.tertiary-hover` | `color.navy.50` | `#F2F7FF` | `bg-action-tertiary-hover` |
| `color.action.disabled` | `color.neutral.100` | `#E8EDF5` | `bg-action-disabled` |
| `color.action.on-disabled` | `color.neutral.500` | `#858D99` | `bg-action-on-disabled` |

### color.surface

| Token | Referencia | Valor | Utilidad Tailwind |
|---|---|---|---|
| `color.surface.default` | `color.white` | `#FFFFFF` | `bg-surface-default` |
| `color.surface.subtle` | `color.neutral.50` | `#F7FAFF` | `bg-surface-subtle` |
| `color.surface.muted` | `color.navy.50` | `#F2F7FF` | `bg-surface-muted` |
| `color.surface.accent` | `color.celeste.50` | `#ECF9FF` | `bg-surface-accent` |
| `color.surface.highlight` | `color.orange.50` | `#FFF4EC` | `bg-surface-highlight` |
| `color.surface.inverse` | `color.navy.900` | `#102C53` | `bg-surface-inverse` |
| `color.surface.inverse-raised` | `color.navy.800` | `#2C466A` | `bg-surface-inverse-raised` |
| `color.surface.inverse-deep` | `color.navy.950` | `#031C3E` | `bg-surface-inverse-deep` |

### color.text

| Token | Referencia | Valor | Utilidad Tailwind |
|---|---|---|---|
| `color.text.primary` | `color.navy.900` | `#102C53` | `text-text-primary` |
| `color.text.secondary` | `color.neutral.700` | `#545B66` | `text-text-secondary` |
| `color.text.muted` | `color.neutral.600` | `#6A727D` | `text-text-muted` |
| `color.text.inverse` | `color.white` | `#FFFFFF` | `text-text-inverse` |
| `color.text.inverse-muted` | `color.navy.200` | `#CFDCEE` | `text-text-inverse-muted` |
| `color.text.link` | `color.celeste.700` | `#066480` | `text-text-link` |
| `color.text.link-hover` | `color.navy.900` | `#102C53` | `text-text-link-hover` |
| `color.text.accent-on-dark` | `color.celeste.400` | `#51B5DB` | `text-text-accent-on-dark` |
| `color.text.emphasis` | `color.orange.700` | `#8E4206` | `text-text-emphasis` |

### color.border

| Token | Referencia | Valor | Utilidad Tailwind |
|---|---|---|---|
| `color.border.subtle` | `color.neutral.100` | `#E8EDF5` | `border-border-subtle` |
| `color.border.default` | `color.neutral.200` | `#D6DBE3` | `border-border-default` |
| `color.border.strong` | `color.neutral.300` | `#BFC4CC` | `border-border-strong` |
| `color.border.inverse` | `color.navy.700` | `#445C7F` | `border-border-inverse` |
| `color.border.focus` | `color.celeste.600` | `#1A7D9D` | `border-border-focus` |
| `color.border.focus-on-dark` | `color.celeste.400` | `#51B5DB` | `border-border-focus-on-dark` |

### color.feedback

| Token | Referencia | Valor | Utilidad Tailwind |
|---|---|---|---|
| `color.feedback.success` | `color.green.700` | `#146C43` | `text-feedback-success` |
| `color.feedback.success-surface` | `color.green.50` | `#E8F6EE` | `text-feedback-success-surface` |
| `color.feedback.success-border` | `color.green.200` | `#9FD8B8` | `text-feedback-success-border` |
| `color.feedback.error` | `color.red.700` | `#B42318` | `text-feedback-error` |
| `color.feedback.error-surface` | `color.red.50` | `#FDECEA` | `text-feedback-error-surface` |
| `color.feedback.error-border` | `color.red.200` | `#F5B5AE` | `text-feedback-error-border` |
| `color.feedback.warning` | `color.orange.700` | `#8E4206` | `text-feedback-warning` |
| `color.feedback.warning-surface` | `color.orange.50` | `#FFF4EC` | `text-feedback-warning-surface` |
| `color.feedback.warning-border` | `color.orange.200` | `#FED0B6` | `text-feedback-warning-border` |
| `color.feedback.info` | `color.celeste.700` | `#066480` | `text-feedback-info` |
| `color.feedback.info-surface` | `color.celeste.50` | `#ECF9FF` | `text-feedback-info-surface` |
| `color.feedback.info-border` | `color.celeste.200` | `#A9E5FF` | `text-feedback-info-border` |

## Tipografía

| Token | Familia |
|---|---|
| `font.family.display` | 'Montserrat Variable' — Titulares. Continuidad con la guía original. |
| `font.family.body` | 'Inter Variable' — Texto, UI y material académico. |
| `font.family.accent` | 'Fredoka' — Acento de marca: cifras grandes y piezas sociales. Nunca en párrafos. |

| Nivel | Tamaño | Interlineado | Tracking | Peso | Familia | Clase |
|---|---|---|---|---|---|---|
| display | `clamp(2.375rem, 1.5rem + 2.6vw, 3.5rem)` | 1.05 | -0.025em | 700 | display | `.type-display` |
| h1 | `clamp(2rem, 1.5rem + 1.9vw, 3rem)` | 1.1 | -0.02em | 700 | display | `.type-h1` |
| h2 | `clamp(1.75rem, 1.4rem + 1.4vw, 2.5rem)` | 1.15 | -0.015em | 700 | display | `.type-h2` |
| h3 | `clamp(1.375rem, 1.2rem + 0.6vw, 1.75rem)` | 1.25 | -0.01em | 600 | display | `.type-h3` |
| h4 | `1.25rem` | 1.3 | -0.005em | 600 | display | `.type-h4` |
| subtitle | `clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)` | 1.55 | 0 | 400 | body | `.type-subtitle` |
| body-lg | `1.125rem` | 1.65 | 0 | 400 | body | `.type-body-lg` |
| body | `1rem` | 1.6 | 0 | 400 | body | `.type-body` |
| body-sm | `0.875rem` | 1.55 | 0 | 400 | body | `.type-body-sm` |
| label | `0.875rem` | 1.4 | 0 | 600 | body | `.type-label` |
| overline | `0.75rem` | 1.4 | 0.12em | 700 | display | `.type-overline` |
| button | `1rem` | 1.25 | 0 | 600 | body | `.type-button` |
| caption | `0.8125rem` | 1.45 | 0.005em | 500 | body | `.type-caption` |
| academic | `1.0625rem` | 1.75 | 0 | 400 | body | `.type-academic` |

Pesos: regular 400, medium 500, semibold 600, bold 700, extrabold 800

## Espaciado

| Token | Valor |
|---|---|
| `space.base` | `0.25rem` |
| `space.section-y` | `clamp(4rem, 2.5rem + 6vw, 7.5rem)` |
| `space.section-y-sm` | `clamp(3rem, 2rem + 4vw, 5rem)` |
| `space.gutter` | `clamp(1rem, 0.5rem + 2.5vw, 2rem)` |
| `space.stack` | `1.5rem` |

Además, toda la escala de Tailwind (`p-4` = 16 px…) sigue la base de 4 px.

## Radios

| Token | Valor |
|---|---|
| `radius.xs` | `4px` |
| `radius.sm` | `8px` |
| `radius.md` | `12px` |
| `radius.lg` | `16px` |
| `radius.xl` | `24px` |
| `radius.2xl` | `32px` |
| `radius.pill` | `9999px` |

## Sombras

| Token | Valor |
|---|---|
| `shadow.xs` | `0 1px 2px rgb(16 44 83 / 0.06)` |
| `shadow.sm` | `0 1px 3px rgb(16 44 83 / 0.08), 0 1px 2px rgb(16 44 83 / 0.04)` |
| `shadow.md` | `0 6px 16px -4px rgb(16 44 83 / 0.10), 0 2px 4px -2px rgb(16 44 83 / 0.06)` |
| `shadow.lg` | `0 18px 40px -12px rgb(16 44 83 / 0.18)` |
| `shadow.focus` | `0 0 0 3px rgb(26 125 157 / 0.35)` |

## Contenedores / anchos máximos

| Token | Valor |
|---|---|
| `container.prose` | `42rem` |
| `container.narrow` | `56rem` |
| `container.default` | `72rem` |
| `container.wide` | `80rem` |

## Breakpoints

| Token | Valor |
|---|---|
| `breakpoint.sm` | `40rem` |
| `breakpoint.md` | `48rem` |
| `breakpoint.lg` | `64rem` |
| `breakpoint.xl` | `80rem` |
| `breakpoint.2xl` | `90rem` |

## Capas (z-index)

| Token | Valor |
|---|---|
| `z.base` | `0` |
| `z.raised` | `10` |
| `z.sticky` | `100` |
| `z.overlay` | `900` |
| `z.modal` | `1000` |
| `z.toast` | `1100` |

## Transiciones · duración

| Token | Valor |
|---|---|
| `motion.duration.fast` | `120ms` |
| `motion.duration.base` | `200ms` |
| `motion.duration.slow` | `320ms` |

## Transiciones · curvas

| Token | Valor |
|---|---|
| `motion.easing.standard` | `cubic-bezier(0.2, 0, 0, 1)` |
| `motion.easing.emphasized` | `cubic-bezier(0.3, 0, 0, 1)` |
| `motion.easing.exit` | `cubic-bezier(0.4, 0, 1, 1)` |

## Estados interactivos

| Token | Valor |
|---|---|
| `state.disabled-opacity` | `0.5` |
| `state.pressed-scale` | `0.98` |
| `state.hover-lift` | `-2px` |
| `state.focus-ring-width` | `2px` |
| `state.focus-ring-offset` | `2px` |

## Estados interactivos (patrón)

| Estado | Tratamiento |
|---|---|
| Hover | Botón principal → `action.primary-hover`; secundario → `action.secondary-hover`; superficies → `action.tertiary-hover`; tarjetas interactivas suben `state.hover-lift` + `shadow.md`. |
| Active | `action.*-active` + escala `state.pressed-scale`. |
| Focus visible | Contorno `state.focus-ring-width` de `border.focus` con separación `state.focus-ring-offset`; sobre oscuro `border.focus-on-dark`. Inputs: borde `border.focus` + `shadow.focus`. |
| Disabled | Opacidad `state.disabled-opacity`, sin eventos de puntero. |
| Error / éxito | `feedback.error` / `feedback.success` en borde, icono y mensaje. |
| Movimiento reducido | Todas las duraciones → 0.01 ms con `prefers-reduced-motion`. |

## Regenerar

```bash
yarn turbo run build --filter=@grupo-laplace/tokens   # JSON → dist/tokens.css
python3 packages/tokens/scripts/color-scales.py      # recalcula escalas y contrastes
```
