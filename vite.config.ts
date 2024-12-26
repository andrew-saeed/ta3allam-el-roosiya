import { fileURLToPath, URL } from 'node:url'

import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 4200
  },
  plugins: [ vue(), vueDevTools(), VitePWA({
    scope: '/',
    srcDir: 'src',
    filename: 'sw.ts',
    strategies: 'injectManifest',
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    },

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'ta3allam-el-roosiya',
      short_name: 'telroosiya',
      description: 'your journey with the Russian language begins here with a variety of lessons and exercises.',
      theme_color: '#ffffff'
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true
    },

    devOptions: {
      enabled: true,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
