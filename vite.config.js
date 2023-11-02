import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    
alias: {
  '@assets': '/src/assets',
  '@components': '/src/components',
  '@guards': '/src/guards',
  '@helpers': '/src/helpers',
  '@layouts': '/src/layouts',
  '@pages': '/src/pages',
  '@routes': '/src/routes',
  '@shared': '/src/shared',
  '@store': '/src/store',
  '@styles': '/src/styles',
  '@src': '/src',
},
  },
})
