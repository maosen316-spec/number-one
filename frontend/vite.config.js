import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [vue()],
  // Cloudflare Pages serves assets from the site root; Django serves them
  // through /static/ when using the integrated local deployment.
  base: process.env.CF_PAGES === '1' ? '/' : (command === 'build' ? '/static/' : '/'),
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:8000',
    },
  },
}))
