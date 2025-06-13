import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/Indovina-chi/", // Nome del tuo repository
  build: {
    outDir: "docs", // GitHub Pages legge da /docs
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
