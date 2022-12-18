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
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      "~bootswatch": path.resolve(__dirname, "node_modules/bootswatch"),
      "~bootstrap-vue": path.resolve(__dirname, "node_modules/bootstrap-vue"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue", ".css"],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "VueFormiojs",
      fileName: (format) => `vue-formiojs.${format}.js`,
    },
    rollupOptions: {
      external: [
        "vue",
        "vue-cookie",
        "vue-i18n",
        "vue-infinite-loading",
        "vue-router",
        "vue2-filters",
        "vuelidate",
        "vuex",
        "bootswatch",
        "bootstrap-vue",
        "bootstrap",
        "@fortawesome/vue-fontawesome",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/fontawesome-svg-core",
        "formiojs",
        "core-js",
      ],
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
