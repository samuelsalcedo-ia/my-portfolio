// src/lib/data.ts

// 1. Definimos todas las plantillas (interfaces) para nuestros datos

interface PersonalInfo {
  name: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  profilePicture: string;
  heroDescription: string;
  cvUrl: string;
}

interface WorkExperience {
  company: string;
  location: string;
  position: string;
  period: string;
  achievements: string[];
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

interface Project {
  title: string;
  slug: string;
  githubUrl: string;
  liveUrl?: string;
  description: string[];
  detailedDescription: string;
  challenge: string;
  imageUrl?: string;
  technologies: string[];
  status?: "En desarrollo";
  youtubeVideoId?: string;
}

interface Award {
  name: string;
  issuer: string;
  date: string;
  type: 'International' | 'National';
  position: string;
}

// Interfaces para Habilidades (Actualizadas)
interface Skill {
  name: string;      // El texto descriptivo que se mostrará
  iconKey: string;   // La clave simple para buscar el icono
}

interface TechnicalSkillItem {
  category: string;
  skills: Skill[]; // Ahora es un array de objetos 'Skill'
}

interface InterpersonalSkillItem {
  category: string;
  skills: string[]; // Se mantiene como array de strings
}

interface SkillsData {
  technicalSkills: TechnicalSkillItem[];
  interpersonalSkills: InterpersonalSkillItem[];
}


// 2. Aplicamos las plantillas a nuestras constantes
export const personalInfo: PersonalInfo = {
  name: "Samuel Salcedo",
  location: "Logroño, La Rioja, España",
  email: "ssalcedodaw@gmail.com",
  github: "https://github.com/samuelsalcedo-ia",
  linkedin: "https://www.linkedin.com/in/samuel-salcedo",
  profilePicture: "/profile.webp",
  cvUrl: "/cv-samuel-salcedo.pdf",
  heroDescription:
    "Soy un desarrollador que disfruta construyendo soluciones tecnológicas con un impacto real. Mi experiencia liderando equipos me ha enseñado la importancia de la eficiencia y la estrategia, habilidades que ahora aplico en el desarrollo de software. Actualmente, estoy centrando mi carrera en el desarrollo backend con Python, profundizando de manera autodidacta en Inteligencia Artificial y Big Data para automatizar procesos y crear sistemas que escalen. Me motiva transformar datos en decisiones inteligentes y llevar proyectos desde la idea hasta un producto funcional.",
};

export const workExperience: WorkExperience[] = [
  {
    company: "DM Rural",
    location: "Logroño, La Rioja",
    position: "Técnico Desarrollador de Aplicaciones Web",
    period: "Octubre 2024 - Actual",
    achievements: [
      "Defino y lidero la estrategia tecnológica de la empresa.",
      "Creación y lanzamiento de la 'Guía Servicios Rurales', un directorio de referencia en La Rioja.",
      "Diseño y desarrollo de aplicaciones web a medida (PHP, JS, WordPress) para dar respuesta a las necesidades del negocio.",
      "Gestión de la infraestructura tecnológica y exploración de nuevas herramientas para optimizar procesos internos.",
    ],
  },
  {
    company: "Establecimientos de Hostelería",
    location: "Logroño, La Rioja",
    position: "Supervisor de Equipo y Operaciones",
    period: "Junio 2021 - Marzo 2024",
    achievements: [
      "Lideré y formé equipos de 5-6 personas, fomentando un ambiente de trabajo colaborativo y eficiente.",
      "Gestioné operaciones diarias incluyendo pedidos, reservas y servicio al cliente.",
      "Aseguré una alta satisfacción del cliente, lo que se reflejó en una excelente reputación online.",
      "Fui responsable de mantener la calidad y eficiencia del servicio en un entorno de alta demanda.",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "IES Comercio",
    degree: "Curso de Especialización en Inteligencia Artificial y Big Data",
    period: "Septiembre 2025 - Junio 2026 (Estimado)",
    description: "Formación técnica avanzada centrada en la programación y aplicación de sistemas inteligentes para optimizar la gestión de la información y la explotación de datos masivos. El programa profundiza en modelos de IA, sistemas de aprendizaje automático y la implementación de soluciones de Big Data."
  },
  {
    institution: "IES Comercio",
    degree: "Grado Superior en Desarrollo de Aplicaciones Web",
    period: "Septiembre 2023 - Junio 2025",
    description: "Sólida base en el ciclo completo del desarrollo de software. Formación integral en tecnologías backend como Java y PHP, así como en frontend (JavaScript, HTML, CSS), complementada con la gestión de bases de datos y la aplicación de metodologías ágiles."
  },
  {
    institution: "ADR Formación",
    degree: "Desarrollo de Aplicaciones con Tecnologías Web",
    period: "Finalizado en Septiembre 2024",
    description: "Curso práctico enfocado en la construcción de soluciones web interactivas y modernas, aplicando las tecnologías más actuales del ecosistema de desarrollo para crear aplicaciones funcionales y robustas."
  },
  {
    institution: "Platzi (Online)",
    degree: "Diseño de Interfaces UX/UI",
    period: "Finalizado en Abril 2023",
    description: "Adquisición de principios fundamentales de UX/UI para el diseño de interfaces intuitivas y eficientes. El curso se centró en mejorar la usabilidad a través de la investigación de usuarios y el prototipado."
  },
];

export const skills: SkillsData = {
  technicalSkills: [
    {
      category: "Stack de Desarrollo Backend y Datos",
      skills: [
        // Lenguajes
        { name: "Python", iconKey: "python" },
        { name: "Java", iconKey: "java" },
        { name: "PHP", iconKey: "php" },
        { name: "JavaScript", iconKey: "javascript" },
        // Frameworks y Librerías
        { name: "FastAPI", iconKey: "fastapi" },
        { name: "Pandas", iconKey: "pandas" },
        { name: "Playwright", iconKey: "playwright" },
        { name: "BeautifulSoup", iconKey: "beautifulsoup" },
        // Bases de Datos
        { name: "SQL (MySQL)", iconKey: "sql" },
      ],
    },
    {
      category: "Entornos y Despliegue",
      skills: [
        { name: "Despliegue en Render", iconKey: "render" },
        { name: "Servicios Cloud (AWS)", iconKey: "amazonaws" },
      ],
    },
    {
      category: "Frontend y Diseño",
      skills: [
        { name: "HTML5", iconKey: "html5" },
        { name: "CSS3 (Bootstrap)", iconKey: "css3" },
        { name: "Interfaces con Streamlit", iconKey: "streamlit" },
        { name: "Diseño (Figma)", iconKey: "figma" },
      ],
    },
    {
      category: "Herramientas y Plataformas",
      skills: [
        { name: "Git y GitHub", iconKey: "github" },
        { name: "Terminal Linux", iconKey: "linux" },
        { name: "Google App Script", iconKey: "googleappscript" },
        { name: "Airtable", iconKey: "airtable" },
        { name: "ArcGIS Online", iconKey: "arcgis" },
      ]
    }
  ],
  interpersonalSkills: [
    {
      category: "Liderazgo y Colaboración",
      skills: ["Liderazgo de Equipos", "Comunicación Efectiva", "Resolución de Problemas", "Toma de Decisiones Estratégicas", "Trabajo en Equipo", "Empatía"],
    },
    {
      category: "Autogestión y Crecimiento",
      skills: ["Aprendizaje Rápido y Autónomo", "Autonomía y Automotivación", "Proactividad e Iniciativa", "Adaptabilidad"],
    },
    {
      category: "Enfoque Profesional",
      skills: ["Atención al Detalle", "Creatividad para resolver retos"],
    },
  ],
};

export const projects: Project[] = [
  {
    title: "Analizador Predictivo de Negocios (FiveCLM)",
    slug: "analizador-predictivo-fiveclm",
    imageUrl: "/projects/analizador-de-negocio-fiveclm.webp",
    githubUrl: "#",
    liveUrl: "https://storymaps.arcgis.com/stories/c103ec62383d4607b9183127e52fd188",
    youtubeVideoId: "",
    description: [
      "Lidero el desarrollo técnico de un innovador SaaS que predice la viabilidad de nuevos negocios en zonas rurales.",
      "Construcción de un motor de análisis backend para procesar múltiples fuentes de datos."
    ],
    detailedDescription: "Mi rol se centra en la construcción del motor de análisis backend. La clave del proyecto es la integración y el procesamiento de múltiples fuentes de datos geoespaciales y demográficos para alimentar el modelo predictivo.",
    challenge: "La integración y normalización de APIs y fuentes de datos heterogéneas (geoespaciales, demográficas, etc.) para asegurar la calidad del input para el modelo predictivo.",
    technologies: ["Python", "FastAPI", "ArcGIS API", "Google Maps API"],
    status: "En desarrollo"
  },
  {
    title: "Asistente de Búsqueda de Empleo para InfoJobs",
    slug: "asistente-infojobs",
    imageUrl: "/projects/scraper-infojobs.webp",
    githubUrl: "https://github.com/samuelsalcedo-ia/infojobs-scraper.git",
    liveUrl: undefined,
    youtubeVideoId: "",
    description: [
      "Aplicación full-stack que automatiza la recopilación de ofertas en InfoJobs.",
      "Analiza y puntúa las ofertas con un algoritmo personalizado para filtrar el ruido.",
      "Presenta las oportunidades más relevantes en una interfaz interactiva."
    ],
    detailedDescription: "Un proyecto personal nacido de la necesidad de optimizar mi propia búsqueda de empleo. Desarrollé una aplicación que automatiza la recopilación de ofertas, las analiza y las presenta eficazmente.",
    challenge: "El principal desafío fue superar las medidas anti-scraping de un sitio dinámico y gestionar procesos de larga duración de forma asíncrona para no afectar la experiencia de usuario.",
    technologies: ["Python", "FastAPI", "Playwright", "BeautifulSoup", "Pandas", "Streamlit"]
  },
  {
    title: "Sistema de Fichaje y Gestión para DM Rural",
    slug: "sistema-fichaje-dmrural",
    imageUrl: "/projects/app-fichaje.webp",
    githubUrl: "#",
    liveUrl: undefined,
    youtubeVideoId: "",
    description: [
      "Sistema a medida para el control horario y la asignación de proyectos.",
      "Optimiza la gestión del tiempo y los recursos del equipo.",
      "Genera reportes clave para la toma de decisiones estratégicas."
    ],
    detailedDescription: "Al detectar una necesidad interna en DM Rural, desarrollé esta herramienta para optimizar la gestión del tiempo y los recursos del equipo. La solución proporciona una visión clara de la rentabilidad por proyecto y empleado, permitiendo a la dirección mejorar la planificación y la eficiencia operativa de la empresa.",
    challenge: "El reto fue crear una solución robusta y fácil de usar sin dependencias externas, utilizando únicamente las herramientas de la suite de Google.",
    technologies: ["Google App Script", "Google Sheets"]
  },
  {
    title: "Guía de Servicios Rurales de La Rioja",
    slug: "guia-servicios-rurales",
    imageUrl: "/projects/guia-servicios-rurales.webp",
    githubUrl: "#",
    liveUrl: "https://guiaserviciosrurales.es",
    youtubeVideoId: undefined,
    description: [
      "Plataforma web para conectar más de 500 servicios en el entorno rural de La Rioja.",
      "Trabajo completo desde el diseño UI/UX hasta la implementación técnica."
    ],
    detailedDescription: "Conceptualicé y lideré el desarrollo de esta plataforma. Mi trabajo abarcó desde la investigación y diseño UI/UX hasta la implementación técnica final, logrando el apoyo de entidades clave como el Gobierno de La Rioja.",
    challenge: "Crear una interfaz intuitiva y accesible para un público no técnico, asegurando al mismo tiempo una estructura de datos escalable para cientos de servicios.",
    technologies: ["WordPress", "PHP", "JavaScript", "UI/UX"]
  }
];

export const awards: Award[] = [];