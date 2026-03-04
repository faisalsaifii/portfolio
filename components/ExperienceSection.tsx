import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Product Engineer",
    company: "Juspay Technologies",
    period: "July 2023 – Present",
    tech: "Python, Flask, PostgreSQL, React, Haskell, Rescript, Jenkins",
    highlights: [
      "Automated integration processes by 70% across multiple product teams",
      "Built Juspay Genius — AI chatbot resolving merchant queries with zero human intervention",
      "Developed Onboarding Assistant, Feature Marketplace, and AI Dashboard",
      "Created Business Observability Dashboard and Credentials Management System",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Intech Circuits",
    period: "Aug 2022 – Jan 2023",
    tech: "Next.js, TypeScript, Tailwind CSS, Supabase",
    highlights: [
      "Increased company reach by 50% through landing page development",
      "Developed 'Get Your PCB' — online ordering platform for customers",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "GitHub",
    period: "Aug 2022 – Present",
    tech: "Various technologies",
    highlights: [
      "Contributed to Supabase — Backend as a Service platform",
      "Built Juspay Remote Development — deploy to host via SSH with NixOS",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Fiverr",
    period: "Aug 2023 – Dec 2023",
    tech: "Python, Flask, React, TypeScript",
    highlights: [
      "Built Slack Apps and landing pages from scratch",
      "Improved existing client applications and interfaces",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Experience
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Where I've <span className="text-gradient">worked</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="relative pl-12 md:pl-16 pb-12 last:pb-0 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 md:left-4 top-1 w-3 h-3 rounded-full bg-primary shadow-glow group-hover:scale-125 transition-transform" />

              <div className="p-5 md:p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/20 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-primary text-sm font-medium flex items-center gap-1.5">
                      <Briefcase size={14} />
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono bg-muted px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-3 font-mono">
                  {exp.tech}
                </p>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-sm text-secondary-foreground flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
