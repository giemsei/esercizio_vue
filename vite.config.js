import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@css': '/css',
      '@comp': '/src/comp',
      '@eng': '/src/eng'
    }
  },
  plugins: [vue()]
})
