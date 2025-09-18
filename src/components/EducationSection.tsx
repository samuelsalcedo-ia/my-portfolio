import { education } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import MotionWrapper from "./MotionWrapper";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-12 bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="mb-8 text-center md:text-left">
            🎓 Formación
          </h2>
        </MotionWrapper>

        <div className="mb-8">
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.institution + edu.degree}
              title={edu.degree}
              subtitle={edu.institution}
              date={edu.period}
              isLast={index === education.length - 1}
              index={index}
            >
              <p className="text-muted-foreground mt-2">
                {edu.description}
              </p>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}