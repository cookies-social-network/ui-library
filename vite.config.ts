import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
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
})
