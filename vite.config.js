// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'other-file/about/about.html'),
        work: resolve(__dirname, 'other-file/work/work.html'),
        contact: resolve(__dirname, 'other-file/contact/contact.html'),
      },
    },
  },
})