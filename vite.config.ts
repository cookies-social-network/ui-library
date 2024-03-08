/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, InlineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { fileURLToPath, URL } from 'node:url'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
    libInjectCss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CookiesUiLib',
      fileName: 'cookies-ui-lib',
      formats: ['es', 'cjs', 'umd', 'iife']
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }
} as VitestConfigExport)
