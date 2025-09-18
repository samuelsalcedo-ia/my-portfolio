import React, { useRef } from "react";
import { projects } from "@/lib/data";
import { CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import { Github, Link } from "lucide-react";
import TechIcon from "./ui/TechIcon";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
            🚀 Proyectos
          </h2>
        </MotionWrapper>

        <div className="project-grid grid grid-cols-1 gap-8">
          {projects.map((project, index) => {
            const summaryRef = useRef<HTMLElement>(null);

            return (
              <MotionWrapper key={project.title} delay={index * 0.2}>
                <GlassCard
                  className="group overflow-hidden dark:border-purple-500/10 h-full flex flex-col cursor-pointer"
                  onClick={() => summaryRef.current?.click()}
                >
                  <CardHeader className="bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                    <div className="flex justify-between items-center gap-2">
                      <CardTitle className="text-2xl font-semibold group-hover:text-purple-500 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      
                      {project.status && (
                        <span className="text-xs bg-yellow-400/10 text-yellow-500 font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                          {project.status}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  
                  {project.imageUrl && (
                    <div className="overflow-hidden aspect-video relative mx-6 rounded-md -mt-4">
                      <img
                        src={`${import.meta.env.BASE_URL}${project.imageUrl}`}
                        alt={`Imagen del proyecto ${project.title}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <CardContent className="flex-grow p-6 pt-4">
                    {/* 1. La lista de descripción AHORA ESTÁ AQUÍ, fuera del <details> */}
                    <ul className="list-disc ml-4 space-y-1 text-lg">
                      {project.description.map((desc, i) => (
                        <li key={i} className="text-muted-foreground">{desc}</li>
                      ))}
                    </ul>
                    
                    <details>
                      {/* 2. El <summary> ahora solo contiene la etiqueta para hacer clic */}
                      <summary ref={summaryRef} className="list-none">
                      </summary>
                      
                      {/* 3. El contenido detallado sigue aquí, y se desplegará correctamente */}
                      <div className="mt-4 pt-4 border-t border-border/20" onClick={(e) => e.stopPropagation()}>
                        <h4 className="mb-2">Descripción Detallada</h4>
                        <p className="text-lg text-muted-foreground mb-4">{project.detailedDescription}</p>
                        
                        <h4 className="mb-2">Reto Técnico</h4>
                        <p className="text-lg text-muted-foreground mb-4">{project.challenge}</p>

                        <h4 className="mb-2">Tecnologías</h4>
                        <div className="flex flex-wrap gap-3 mb-4 items-center">
                          {project.technologies.map(tech => (
                            <TechIcon key={tech} displayName={tech} />
                          ))}
                        </div>

                        {project.youtubeVideoId && (
                          <>
                            <div className="aspect-video w-full rounded-md overflow-hidden">
                              <iframe src={`https://www.youtube.com/embed/${project.youtubeVideoId}`} title={`Demo de ${project.title}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
                            </div>
                          </>
                        )}
                      </div>
                    </details>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-4 justify-start items-center border-t border-border/30 bg-gradient-to-r from-purple-500/5 to-pink-500/5 p-4">
                    {project.githubUrl && project.githubUrl !== "#" && (
                       <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-muted-foreground hover:text-purple-500 transition-colors font-medium" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={(e) => e.stopPropagation()}>
                         <Github className="h-4 w-4 mr-2" />
                         Ver Código en GitHub
                       </motion.a>
                    )}
                     {project.liveUrl && project.liveUrl !== "#" && (
                       <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-muted-foreground hover:text-purple-500 transition-colors font-medium" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={(e) => e.stopPropagation()}>
                         <Link className="h-4 w-4 mr-2" />
                         Ir a la web
                       </motion.a>
                    )}
                  </CardFooter>
                </GlassCard>
              </MotionWrapper>
            )
          })}
        </div>
      </div>
    </section>
  );
}