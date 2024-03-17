// vite.config.ts
import { defineConfig } from "file:///D:/web/practice/social-network/fme-vite/cookies-lib/node_modules/.pnpm/vite@5.0.12_@types+node@20.11.16_sass@1.70.0/node_modules/vite/dist/node/index.js";
import react from "file:///D:/web/practice/social-network/fme-vite/cookies-lib/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@5.0.12/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import dts from "file:///D:/web/practice/social-network/fme-vite/cookies-lib/node_modules/.pnpm/vite-plugin-dts@3.7.2_@types+node@20.11.16_typescript@5.3.3_vite@5.0.12/node_modules/vite-plugin-dts/dist/index.mjs";
import { fileURLToPath, URL } from "node:url";
import { libInjectCss } from "file:///D:/web/practice/social-network/fme-vite/cookies-lib/node_modules/.pnpm/vite-plugin-lib-inject-css@1.3.0_vite@5.0.12/node_modules/vite-plugin-lib-inject-css/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\web\\practice\\social-network\\fme-vite\\cookies-lib\\packages\\components";
var __vite_injected_original_import_meta_url = "file:///D:/web/practice/social-network/fme-vite/cookies-lib/packages/components/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true
    }),
    libInjectCss()
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "CookiesUiLib",
      fileName: "cookies-ui-lib",
      formats: ["es", "cjs", "umd", "iife"]
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"]
    }
  },
  test: {
    globals: true,
    environment: "happy-dom"
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3ZWJcXFxccHJhY3RpY2VcXFxcc29jaWFsLW5ldHdvcmtcXFxcZm1lLXZpdGVcXFxcY29va2llcy1saWJcXFxccGFja2FnZXNcXFxcY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcd2ViXFxcXHByYWN0aWNlXFxcXHNvY2lhbC1uZXR3b3JrXFxcXGZtZS12aXRlXFxcXGNvb2tpZXMtbGliXFxcXHBhY2thZ2VzXFxcXGNvbXBvbmVudHNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3dlYi9wcmFjdGljZS9zb2NpYWwtbmV0d29yay9mbWUtdml0ZS9jb29raWVzLWxpYi9wYWNrYWdlcy9jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlL2NsaWVudFwiIC8+XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZywgSW5saW5lQ29uZmlnLCBVc2VyQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcbmltcG9ydCB7IGxpYkluamVjdENzcyB9IGZyb20gJ3ZpdGUtcGx1Z2luLWxpYi1pbmplY3QtY3NzJ1xuXG5pbnRlcmZhY2UgVml0ZXN0Q29uZmlnRXhwb3J0IGV4dGVuZHMgVXNlckNvbmZpZyB7XG4gIHRlc3Q6IElubGluZUNvbmZpZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgZHRzKHtcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXG4gICAgICByb2xsdXBUeXBlczogdHJ1ZSxcbiAgICB9KSxcbiAgICBsaWJJbmplY3RDc3MoKSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50cycpLFxuICAgICAgbmFtZTogJ0Nvb2tpZXNVaUxpYicsXG4gICAgICBmaWxlTmFtZTogJ2Nvb2tpZXMtdWktbGliJyxcbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAnY2pzJywgJ3VtZCcsICdpaWZlJ11cbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbJ3JlYWN0JywgJ3JlYWN0L2pzeC1ydW50aW1lJ10sXG4gICAgfVxuICB9LFxuICB0ZXN0OiB7XG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICBlbnZpcm9ubWVudDogJ2hhcHB5LWRvbScsXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgfVxuICB9XG59IGFzIFZpdGVzdENvbmZpZ0V4cG9ydClcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFHQSxTQUFTLG9CQUE4QztBQUN2RCxPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sU0FBUztBQUNoQixTQUFTLGVBQWUsV0FBVztBQUNuQyxTQUFTLG9CQUFvQjtBQVI3QixJQUFNLG1DQUFtQztBQUE0TixJQUFNLDJDQUEyQztBQWN0VCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsTUFDRixrQkFBa0I7QUFBQSxNQUNsQixhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsSUFDRCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsTUFBTSxPQUFPLE9BQU8sTUFBTTtBQUFBLElBQ3RDO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxtQkFBbUI7QUFBQSxJQUN6QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQXVCOyIsCiAgIm5hbWVzIjogW10KfQo=
