import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./", // Usa percorsi relativi invece di assoluti
  build: {
    outDir: "docs", // Usa docs invece di dist per GitHub Pages
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
