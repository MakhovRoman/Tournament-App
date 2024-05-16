import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {TanStackRouterVite} from "@tanstack/router-vite-plugin";
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": resolve(__dirname, '/src'),
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages'),
      '@routes': resolve(__dirname, './src/routes'),
      '@theme': resolve(__dirname, './src/theme'),
      '@utils': resolve(__dirname, './src/utils'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@theme/main.scss";
        `
      }
    }
  }
})
