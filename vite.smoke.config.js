import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Renders the app in Node to catch runtime errors that `vite build` misses.
export default defineConfig({
  plugins: [react()],
  build: {
    ssr: 'scripts/smoke-test.jsx',
    outDir: '.smoke',
    emptyOutDir: true,
    rollupOptions: { output: { entryFileNames: 'smoke.mjs' } },
  },
})