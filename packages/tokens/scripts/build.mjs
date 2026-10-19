// Genera dist/tokens.css a partir de tokens.json.
// Los tokens de color, tipografía, radios, sombras, contenedores y breakpoints se
// publican dentro de @theme para que Tailwind cree utilidades (bg-surface-default,
// text-text-primary, rounded-lg, shadow-md, md:…). El resto queda en :root.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const tokens = JSON.parse(readFileSync(resolve(root, 'tokens.json'), 'utf8'))

const get = (path) => path.split('.').reduce((o, k) => o?.[k], tokens)
const resolveValue = (v) => {
  const m = typeof v === 'string' && v.match(/^\{(.+)\}$/)
  if (!m) return v
  const target = get(m[1])
  if (!target || !('$value' in target)) throw new Error(`Referencia rota: ${v}`)
  return resolveValue(target.$value)
}

// Recorre un grupo y devuelve [[ruta, valor]] de las hojas con $value
const leaves = (node, prefix = []) =>
  Object.entries(node).flatMap(([k, v]) => {
    if (k.startsWith('$')) return []
    if (v && typeof v === 'object' && '$value' in v) return [[[...prefix, k], resolveValue(v.$value)]]
    if (v && typeof v === 'object') return leaves(v, [...prefix, k])
    return []
  })

const theme = ['  --color-*: initial;', '  --color-black: #000000;', '  --color-transparent: transparent;']
for (const [p, v] of leaves(tokens.color)) theme.push(`  --color-${p.join('-')}: ${v};`)

for (const [name, v] of Object.entries(tokens.font.family)) theme.push(`  --font-${name}: ${v.$value};`)

for (const [name, t] of Object.entries(tokens.text)) {
  if (name.startsWith('$')) continue
  theme.push(`  --text-${name}: ${t.size.$value};`)
  theme.push(`  --text-${name}--line-height: ${t['line-height'].$value};`)
  theme.push(`  --text-${name}--letter-spacing: ${t.tracking.$value};`)
  theme.push(`  --text-${name}--font-weight: ${t.weight.$value};`)
}
for (const [p, v] of leaves(tokens.radius)) theme.push(`  --radius-${p.join('-')}: ${v};`)
for (const [p, v] of leaves(tokens.shadow)) theme.push(`  --shadow-${p.join('-')}: ${v};`)
for (const [p, v] of leaves(tokens.container)) theme.push(`  --container-${p.join('-')}: ${v};`)
for (const [p, v] of leaves(tokens.breakpoint)) theme.push(`  --breakpoint-${p.join('-')}: ${v};`)
for (const [p, v] of leaves(tokens.motion.easing)) theme.push(`  --ease-${p.join('-')}: ${v};`)

const rootVars = []
for (const [p, v] of leaves(tokens.space)) rootVars.push(`  --space-${p.join('-')}: ${v};`)
for (const [p, v] of leaves(tokens.z)) rootVars.push(`  --z-${p.join('-')}: ${v};`)
for (const [p, v] of leaves(tokens.motion.duration)) rootVars.push(`  --duration-${p.join('-')}: ${v};`)
for (const [p, v] of leaves(tokens.state)) rootVars.push(`  --state-${p.join('-')}: ${v};`)
for (const [name, t] of Object.entries(tokens.text)) {
  if (!name.startsWith('$')) rootVars.push(`  --text-${name}--font-family: var(--font-${t.family.$value});`)
}

const css = `/* Archivo generado por @grupo-laplace/tokens (scripts/build.mjs) — no editar a mano.
   Edita packages/tokens/tokens.json y ejecuta: yarn build */

@theme {
${theme.join('\n')}
}

:root {
${rootVars.join('\n')}
}
`
mkdirSync(resolve(root, 'dist'), { recursive: true })
writeFileSync(resolve(root, 'dist/tokens.css'), css)
console.log(`dist/tokens.css generado (${theme.length + rootVars.length} variables)`)
