import { defineConfig } from 'vite'

export default defineConfig({
  root: '.', // Ensure this points to the root directory where index.html is located
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3000
  }
})
