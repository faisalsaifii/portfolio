"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Fypera Labs",
    desc: "A sleek landing page showcasing a modern tech brand with stunning visuals and responsive design.",
    url: "https://fyperalabs.vercel.app",
    tags: ["Landing Page", "React", "Design"],
  },
  {
    title: "Intech Circuits",
    desc: "Corporate landing page for a PCB manufacturing company, driving 50% increase in company reach.",
    url: "https://intechcircuits.com",
    tags: ["Next.js", "Supabase", "Corporate"],
  },
  {
    title: "Hungy",
    desc: "Social media and food ordering web app combining community features with seamless food delivery.",
    url: "https://hungy.vercel.app",
    tags: ["Social Media", "Food Tech", "Full Stack"],
  },
  {
    title: "DevMeet",
    desc: "Coding interview platform with live video conferencing and integrated development environment.",
    url: "https://developermeet.vercel.app",
    tags: ["WebRTC", "IDE", "Hackathon Winner"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Projects
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Featured <span className="text-gradient">work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1"
                />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
