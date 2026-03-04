import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Figma",
      "Rescript",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Haskell",
      "Node.js",
      "Express.js",
      "Flask",
      "Python",
      "C++",
      "Spring Boot",
      "REST APIs",
    ],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Flutter"],
  },
  {
    title: "Database",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Firestore",
      "Supabase",
      "Firebase",
    ],
  },
  {
    title: "DevOps",
    skills: [
      "Jenkins",
      "Docker",
      "Nix",
      "GitHub Actions",
      "Git",
      "Selenium",
      "Bitbucket",
      "GitLab",
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Skills
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            My <span className="text-gradient">toolkit</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="p-5 md:p-6 rounded-2xl bg-gradient-card border border-border/50"
            >
              <h3 className="font-heading font-semibold text-primary text-sm uppercase tracking-wider mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-full bg-muted text-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
