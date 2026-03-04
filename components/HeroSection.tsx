import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary font-mono text-sm tracking-widest uppercase mb-6"
          >
            Full Stack Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading text-5xl sm:text-6xl md:text-8xl font-bold leading-tight mb-6"
          >
            Hi, I'm <span className="text-gradient">Faisal</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I craft high-performance web applications with React, Haskell,
            PostgreSQL & modern DevOps. Currently building products at{" "}
            <span className="text-foreground font-medium">
              Juspay Technologies
            </span>
            .
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center justify-center gap-5 mb-16"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/faisalsaifii",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/faisalsaifii",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:the.m.faisal.s@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="animate-float"
          >
            <button
              onClick={() =>
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <ArrowDown size={24} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
