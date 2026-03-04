import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Trophy } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Education
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Academic <span className="text-gradient">journey</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 md:p-8 rounded-2xl bg-gradient-card border border-border/50"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Bachelor of Technology — Information Technology
                </h3>
                <p className="text-primary text-sm font-medium mb-1">
                  Inderprastha Engineering College
                </p>
                <p className="text-xs text-muted-foreground font-mono mb-3">
                  Sept 2020 – June 2024
                </p>
                <div className="flex items-center gap-2 text-sm text-secondary-foreground">
                  <Trophy size={14} className="text-primary" />
                  Won Hack n Crack Hackathon with project DevMeet
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="p-6 md:p-8 rounded-2xl bg-gradient-card border border-border/50"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  10+2 (PCM)
                </h3>
                <p className="text-primary text-sm font-medium mb-1">
                  Bharti Public School
                </p>
                <p className="text-xs text-muted-foreground font-mono mb-3">
                  April 2008 – 2020
                </p>
                <div className="flex items-center gap-2 text-sm text-secondary-foreground">
                  <Trophy size={14} className="text-primary" />
                  Won website development contest
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
