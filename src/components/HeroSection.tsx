import { personalInfo } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin, Download } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { Button } from "@/components/ui/button"; // 1. Importamos el componente de botón

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="mb-2 text-4xl font-bold tracking-tight md:text-5xl"
              variants={childVariants}
            >
              {personalInfo.name}{" "}
              <span className="inline-block animate-pulse">🤖</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-6"
              variants={childVariants}
            >
              Desarrollador Backend | AI & Big Data
            </motion.p>
            
            {/* --- INICIO DE LA MODIFICACIÓN --- */}
            <motion.div
              className="mt-6 flex flex-col items-center gap-4 md:items-start"
              variants={childVariants}
            >
                {/* Lista de enlaces de texto */}
                <div className="flex flex-col gap-2 items-center md:items-start">
                    <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {personalInfo.location}
                    </div>
                    <a href={`mailto:${personalInfo.email}`} className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <Mail className="h-4 w-4 mr-2" />
                        {personalInfo.email}
                    </a>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                    </a>
                </div>

                {/* Botón de descarga del CV, ahora estilizado */}
                <Button asChild variant="outline" className="mt-2">
                    <a href={personalInfo.cvUrl} download>
                        <Download className="h-4 w-4 mr-2" />
                        Descargar CV
                    </a>
                </Button>
            </motion.div>
            {/* --- FIN DE LA MODIFICACIÓN --- */}

          </div>

          <motion.div
            className="mt-8 md:mt-0 flex justify-center"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={personalInfo.profilePicture}
                alt="Foto de Perfil"
                className="w-48 md:w-60 h-48 md:h-60 rounded-full relative ring-2 ring-purple-500/50 object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        <MotionWrapper>
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm backdrop-filter p-4 rounded-lg border border-purple-500/20 dark:border-purple-500/10 shadow-sm">
            <p className="text-muted-foreground pl-4 py-2 mb-4 relative text-base">
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              {personalInfo.heroDescription}
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}