import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * On GitHub Pages your site is served from
 * https://<user>.github.io/<repo>/ — not the domain root.
 * Vite needs to know that prefix or every asset URL 404s.
 *
 * Set the repo name once, at build time:
 *   set REPO=portfolio && npm run build        (Windows cmd)
 *   REPO=portfolio npm run build               (PowerShell / bash)
 *
 * Leave it unset for local dev and other hosts (Netlify, Vercel), which do
 * serve from the root.
 */
const repo = process.env.REPO
const base = repo ? `/${repo}/` : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
})