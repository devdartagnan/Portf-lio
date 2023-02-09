import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "sobre.html"),
        contact: resolve(__dirname, "contato.html"),
        datails: resolve(__dirname, "detalhes.html")
      },
    },
  },
});
