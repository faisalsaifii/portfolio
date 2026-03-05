"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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

const EducationCard = ({
  item,
  index,
  isInView,
}: {
  item: (typeof education)[0];
  index: number;
  isInView: boolean;
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
      className="group relative p-6 md:p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300 overflow-hidden"
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

      {/* Cursor-tracking glow */}
      <div
        className="absolute w-40 h-40 bg-gradient-to-r from-primary/40 to-primary/10 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </motion.a>
  );
};

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
            <EducationCard
              key={item.title}
              item={item}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
