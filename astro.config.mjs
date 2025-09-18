import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // Configuración hardcodeada para el despliegue en GitHub Pages
  site: 'https://samuelsalcedo-ia.github.io',
  base: '/my-portfolio/', // Ruta de producción
  
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()]
});