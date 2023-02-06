import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'nested/sobre.html'),
        contact: resolve(__dirname, 'nested/contato.html'),
      },
    },
  },
})