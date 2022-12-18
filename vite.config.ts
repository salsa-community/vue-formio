import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue2 from "@vitejs/plugin-vue2";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue2()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "esnext",
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "VueFormiojs",
      fileName: (format) => `vue-formiojs.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
