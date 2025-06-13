import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/Indovina-chi/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        assetFileNames: "assets/[name].[hash][extname]",
      },
    },
  },
  server: {
    open: true,
  },
});
