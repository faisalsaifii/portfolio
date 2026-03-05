"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Database, Server, Settings } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Frontend", desc: "React, Next.js, TypeScript" },
  { icon: Server, label: "Backend", desc: "Haskell, Flask, Node.js" },
  { icon: Database, label: "Database", desc: "PostgreSQL, MongoDB, MySQL" },
  { icon: Settings, label: "DevOps", desc: "Jenkins, Docker, Nix" },
];

const HighlightCard = ({
  item,
  index,
  isInView,
}: {
  item: (typeof highlights)[0];
  index: number;
  isInView: boolean;
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300 text-center overflow-hidden"
    >
      <item.icon className="mx-auto mb-3 text-primary" size={28} />
      <h3 className="font-heading font-semibold text-foreground mb-1">
        {item.label}
      </h3>
      <p className="text-sm text-muted-foreground">{item.desc}</p>

      {/* Cursor-tracking glow */}
      <div
        className="absolute w-40 h-40 bg-gradient-to-r from-primary/40 to-primary/10 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </motion.div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            About Me
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Building the <span className="text-gradient">future</span>, one
            commit at a time
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Product Engineer with 2+ years of experience shipping
            production-grade systems at scale. I thrive at the intersection of
            clean architecture and impactful user experiences — from AI chatbots
            to payment dashboards processing millions of transactions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {highlights.map((item, i) => (
            <HighlightCard
              key={item.label}
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

export default AboutSection;
