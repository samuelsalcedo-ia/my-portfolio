# Mi Portfolio Personal - Samuel Salcedo

Este es el repositorio de mi portfolio personal, un sitio web moderno y responsive que muestra mis proyectos, habilidades y experiencia profesional.

## ✨ Características

- **Diseño Moderno** – Layout limpio y profesional con efectos de *glassmorphism*.
- **Animaciones** – Transiciones suaves e interacciones con Framer Motion.
- **Modo Claro/Oscuro** – Adaptación automática según las preferencias del sistema.
- **Totalmente Responsive** – Optimizado para móviles, tablets y escritorio.
- **Rendimiento Superior** – Construido con Astro para una velocidad de carga excelente.
- **Estructura Modular** – Pensado para ser fácil de personalizar y escalar.
- **SEO Friendly** – Contenido estructurado y meta etiquetas para una mejor visibilidad.

## 🚀 Demo

Puedes ver la versión en vivo de mi portfolio aquí:
👉 **[https://samuelsalcedo-ia.github.io/portfolio/](https://my-portfolio-flax-eight-86.vercel.app/)**

## 🛠️ Cómo Empezar (Instalación Local)

### Prerrequisitos
- Node.js (v18 o superior)
- npm

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/samuelsalcedo-ia/my-portfolio.git
    cd my-portfolio
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  Abre `http://localhost:4321/my-portfolio/` en tu navegador.

## 🧩 Cómo Personalizar el Contenido

Toda la información personal, experiencia, proyectos y habilidades se gestionan desde un único archivo: `src/lib/data.ts`. Simplemente modifica los objetos en este archivo para actualizar el contenido del sitio.

La estructura de datos es la siguiente:

### 1. Información Personal (`personalInfo`)
```ts
export const personalInfo = {
  name: "Samuel Salcedo",
  location: "Logroño, La Rioja, España",
  email: "ssalcedodaw@gmail.com",
  github: "[https://github.com/samuelsalcedo-ia](https://github.com/samuelsalcedo-ia)",
  linkedin: "[https://www.linkedin.com/in/samuel-salcedo](https://www.linkedin.com/in/samuel-salcedo)",
  profilePicture: "/profile.webp", // Ruta en la carpeta `public`
  cvUrl: "/cv-samuel-salcedo.pdf", // Ruta en la carpeta `public`
  heroDescription: "Soy un desarrollador que...",
};

## 🙏 Agradecimientos

Este es el repositorio de mi portfolio personal, un sitio web moderno y responsive construido con **Astro**, **React**, y **Tailwind CSS**.

El proyecto original es una plantilla de [Rishikesh S.](https://github.com/rishikesh2003/my-portfolio.git), que he adaptado y personalizado con mi propia información y estructura de datos.
