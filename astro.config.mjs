// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    integrations: [
    // comentamos o quitamos la integración:
    // toolbar(),
  ],
vite: {
    plugins: [tailwindcss()],
  },

});
