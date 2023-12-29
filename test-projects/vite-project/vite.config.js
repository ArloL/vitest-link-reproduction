import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom', 'react/jsx-runtime'],
    preserveSymlinks: true,
  },
  test: {
    environment: 'jsdom',
    server: {
      deps: {
        inline: [/vitest-link-reproduction/],
      },
    },
  },
})
