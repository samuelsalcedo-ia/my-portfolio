import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";


export default defineConfig({
  site: 'https://samuelsalcedo-ia.github.io',
  base: '/Portfolio/', 
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()]
});