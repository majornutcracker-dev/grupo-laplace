import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// BASE_PATH lo entrega actions/configure-pages: "/<repo>" en un sitio de proyecto,
// "" en <owner>.github.io o con dominio propio.
const basePath = (process.env.BASE_PATH ?? '').replace(/\/$/, '')

export default defineConfig({
  base: `${basePath}/`,
  plugins: [react(), tailwindcss()],
})
