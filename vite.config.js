import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./", // Usa percorsi relativi
  build: {
    outDir: "docs",
    emptyOutDir: true,
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
