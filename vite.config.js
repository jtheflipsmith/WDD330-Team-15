import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  server: {
    host: '0.0.0.0',
  },

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
<<<<<<< HEAD
        product: resolve(__dirname, "src/product_pages/index.html"
        ),
=======
        product: resolve(__dirname, "src/product_pages/index.html"),
>>>>>>> 84482de79634847e7d40ba1eecbcf67e7b429543
      },
    },
  },

  preview: {
    allowedHosts: ['wdd330-team-15-collaborators.onrender.com'],
  },
});
