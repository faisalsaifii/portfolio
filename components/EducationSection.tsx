"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, GraduationCap, Trophy } from "lucide-react";

const education = [
  {
    title: "Bachelor of Technology — Information Technology",
    institution: "Inderprastha Engineering College",
    period: "Sept 2020 - June 2024",
    achievement: "Won Hack n Crack Hackathon with project DevMeet",
    url: "https://www.ipec.org.in",
  },
  {
    title: "10+2 (PCM)",
    institution: "Bharti Public School",
    period: "April 2008 - 2020",
    achievement: "Won website development contest",
    url: "https://bps.edu.in",
  },
];

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
          {education.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group p-6 md:p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-1">
                      {item.institution}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono mb-3">
                      {item.period}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-secondary-foreground">
                      <Trophy size={14} className="text-primary" />
                      {item.achievement}
                    </div>
                  </div>
                </div>
                <ExternalLink
                  size={18}
                  className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
