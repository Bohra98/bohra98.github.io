/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-dom/client',
      'framer-motion',
      'gsap',
      'lenis',
      'three',
      '@react-three/fiber',
      '@react-three/drei',
    ],
  },
  server: {
    watch: {
      ignored: ['**/.cursor/**', '**/.claude/**', '**/docs/**'],
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test-setup.ts',
  },
})
