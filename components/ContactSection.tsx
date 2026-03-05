"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Let's build something <span className="text-gradient">amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            I'm always open to new opportunities, collaborations, or just a
            friendly chat about tech.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:the.m.faisal.s@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Mail size={18} />
              Say Hello
              <ArrowUpRight size={16} />
            </a>
            <a
              href="https://github.com/faisalsaifii"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/50 text-foreground font-heading font-semibold text-sm hover:border-primary/50 hover:text-primary transition-all"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/faisalsaifii"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/50 text-foreground font-heading font-semibold text-sm hover:border-primary/50 hover:text-primary transition-all"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
