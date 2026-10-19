// Empaqueta páginas en HTML autocontenidos para publicarlas como artefactos.
// Uso: yarn workspace @grupo-laplace/web artifacts  →  artifacts/ui-kit.html y artifacts/web.html (raíz del monorepo)
import { build } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { mkdirSync, readFileSync, writeFileSync, readdirSync, rmSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const srcDir = resolve(root, 'src/artifact')
const outRoot = resolve(root, '../../artifacts')

const pages = [
  { entry: 'uikit-entry.tsx', out: 'ui-kit.html', title: 'UI Kit Grupo Laplace', description: 'Design system de Grupo Laplace: tokens, tipografía y componentes.' },
  { entry: 'home-entry.tsx', out: 'web.html', title: 'Grupo Laplace Web', description: 'Web informativa de Grupo Laplace: reforzamiento de matemáticas y química para secundaria.' },
]

const template = readFileSync(resolve(srcDir, 'index.html'), 'utf8')
mkdirSync(outRoot, { recursive: true })

for (const page of pages) {
  const tmpHtml = resolve(srcDir, `_${page.out}`)
  writeFileSync(tmpHtml, template.replace('./ENTRY', `./${page.entry}`))
  const outDir = resolve(root, `node_modules/.artifact-${page.out}`)
  try {
    await build({
      configFile: false,
      root: srcDir,
      base: './',
      logLevel: 'warn',
      plugins: [react(), tailwindcss()],
      build: {
        outDir,
        emptyOutDir: true,
        assetsInlineLimit: 100_000_000, // logos e imágenes como data: URI
        cssCodeSplit: false,
        modulePreload: false,
        rollupOptions: { input: tmpHtml, output: { inlineDynamicImports: true } },
      },
    })
  } finally {
    rmSync(tmpHtml)
  }
  const files = readdirSync(resolve(outDir, 'assets'))
  const read = (ext) => readFileSync(resolve(outDir, 'assets', files.find((f) => f.endsWith(ext))), 'utf8')
  const js = read('.js').replace(/<\/script/gi, '<\\/script')
  const css = read('.css')

  // Al publicarse se envuelve en <!doctype><head><body>: aquí solo va el contenido.
  // .reveal se fuerza visible: el artefacto debe verse completo sin depender del scroll.
  const html = `<title>${page.title}</title>
<meta name="description" content="${page.description}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600&family=Inter:wght@400..700&family=Montserrat:wght@500..800&display=swap">
<style>
${css}
body { background: #ffffff; color: #102C53; }
.reveal { opacity: 1 !important; transform: none !important; }
</style>
<div id="root"></div>
<script type="module">
${js}
</script>
`
  writeFileSync(resolve(outRoot, page.out), html)
  console.log(`artifacts/${page.out} (${(html.length / 1024).toFixed(0)} KB)`)
}
