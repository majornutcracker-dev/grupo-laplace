# @grupo-alpas/web

Web informativa de Grupo Laplace (`/`), UI Kit (`/ui-kit`) y guía de marca (`/marca`). React + TypeScript + Vite + Tailwind CSS 4, dentro del monorepo Turborepo.

Desde la raíz del monorepo:

```bash
yarn dev         # desarrollo
yarn build       # producción → apps/web/dist
yarn verify      # lint + typecheck + build
```

- Contacto, WhatsApp, redes y endpoint del formulario: `src/config/site.ts`
- Textos editables: `src/data/content.ts`
- Componentes: `@grupo-alpas/ui` (`packages/ui`) · Tokens: `@grupo-alpas/tokens` (`packages/tokens`)

Guía completa y deploy: [`../../docs/06-web-y-mantenimiento.md`](../../docs/06-web-y-mantenimiento.md)
