# Grupo Laplace · Ecosistema de marca

**Branding → design system → UI Kit → web**, a partir del Figma *Branding - Grupo Laplace* (página 05 - Claude Context).

## Entregables

| # | Entregable | Dónde |
|---|---|---|
| 1 | Auditoría del branding existente | [`docs/01-auditoria-branding.md`](docs/01-auditoria-branding.md) |
| 2 | Propuesta de identidad (estrategia + dirección visual) | [`docs/02-estrategia-de-marca.md`](docs/02-estrategia-de-marca.md) |
| 3 | Guía de marca actualizada | [`docs/03-guia-de-marca.md`](docs/03-guia-de-marca.md) · visual en `/marca` |
| 4 | Design system con tokens documentados | [`docs/04-design-tokens.md`](docs/04-design-tokens.md) · [`packages/tokens/tokens.json`](packages/tokens/tokens.json) |
| 5 | UI Kit con componentes y variantes | [`docs/05-ui-kit.md`](docs/05-ui-kit.md) · vivo en `/ui-kit` |
| 6 | Prototipo visual de la home | [`docs/prototipo/home-desktop-1440.png`](docs/prototipo/home-desktop-1440.png) · vivo en `/` |
| 7 | Web informativa funcional y responsive | [`apps/web/`](apps/web/) |
| 8 | Componentes reutilizables | [`packages/ui/`](packages/ui/src/index.ts) |
| 9 | Recursos gráficos organizados | [`brand/`](brand/) |
| 10 | Instrucciones para ejecutar, editar y mantener | [`docs/06-web-y-mantenimiento.md`](docs/06-web-y-mantenimiento.md) |

## Estructura (monorepo Turborepo + Yarn workspaces)
```
grupo-laplace/
├─ apps/web/            web informativa + /ui-kit + /marca (Vite + React + Tailwind 4)
├─ packages/tokens/     @grupo-laplace/tokens — tokens.json → dist/tokens.css
├─ packages/ui/         @grupo-laplace/ui — componentes, logos, patrones, estilos base
├─ brand/               export original de Figma y 15 SVG limpios del logotipo
├─ docs/                auditoría, estrategia, guía, tokens, UI Kit, mantenimiento, prototipo
├─ scripts/             build-logos.py
├─ artifacts/           HTML autocontenidos (UI Kit y web)
└─ .github/workflows/   ci.yml (PR) · deploy.yml (GitHub Pages)
```

## Ejecutar
```bash
yarn install
yarn dev        # desarrollo
yarn verify     # lint + typecheck + build (lo mismo que CI)
```

## Deploy
Push a `main` → GitHub Actions construye y publica en GitHub Pages. Activar en el repo: **Settings → Pages → Source: GitHub Actions**. Detalle en [`docs/06-web-y-mantenimiento.md`](docs/06-web-y-mantenimiento.md#deploy-github-actions--github-pages).

## Estado del contenido
- **Confirmado:** nombre, áreas (matemáticas, química), público (secundaria), concepto «Aprender juntos, llegar más lejos», paleta, logotipo.
- **Propuesta de diseño:** textos web, metodología, mensajes, versión vertical del logo, roles tipográficos.
- **Demostrativo:** testimonios.
- **Pendiente de la academia:** docentes, contacto, horarios, modalidad, precios, temas por grado, políticas.
