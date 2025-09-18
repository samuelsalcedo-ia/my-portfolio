import React from "react";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import TechIcon from "./ui/TechIcon";

function SkillTag({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.05 * index,
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-3 py-1 bg-muted/80 backdrop-blur-sm rounded-md border border-purple-500/10 shadow-sm"
      viewport={{ once: true }}
    >
      {skill}
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-12 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="mb-8 text-center md:text-left">
            🛠️ Habilidades
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <MotionWrapper>
            <GlassCard className="p-6 h-full">
              <h3 className="mb-6 text-center md:text-left">
                Habilidades Técnicas
              </h3>
              <div className="space-y-6">
                {skills.technicalSkills.map((categoryGroup) => (
                  <div key={categoryGroup.category}>
                    <h4 className="mb-3 text-purple-400">{categoryGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {categoryGroup.skills.map((skill) => (
                        <TechIcon
                          key={skill.name}
                          displayName={skill.name}
                          lookupName={skill.iconKey}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
             <GlassCard className="p-6 h-full">
              <h3 className="mb-6 text-center md:text-left">
                Habilidades Interpersonales
              </h3>
              <div className="space-y-6">
                {skills.interpersonalSkills.map((categoryGroup) => (
                  <div key={categoryGroup.category}>
                    <h4 className="mb-3 text-purple-400">{categoryGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {categoryGroup.skills.map((skill, index) => (
                        <SkillTag key={skill} skill={skill} index={index} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </MotionWrapper>

        </div>
      </div>
    </section>
  );
}