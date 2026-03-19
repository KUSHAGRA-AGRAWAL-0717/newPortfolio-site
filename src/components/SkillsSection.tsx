import { motion } from "framer-motion";
import { Code, Sparkles } from "lucide-react";

const SKILL_GROUPS = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "C++", level: 75 },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vite", level: 85 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "FastAPI", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "LangChain", level: 90 },
      { name: "OpenAI APIs", level: 85 },
      { name: "TensorFlow", level: 80 },
      { name: "LLMs", level: 85 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Supabase", level: 85 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Vercel", level: 85 },
      { name: "AWS", level: 75 },
      { name: "Git", level: 90 },
    ],
  },
];

const TECH_TAGS = [
  "JavaScript", "TypeScript", "Python", "React", "Next.js", "Node.js",
  "FastAPI", "Express.js", "MongoDB", "PostgreSQL", "Supabase", "Redis",
  "TensorFlow", "LangChain", "OpenAI", "Docker", "Git", "Tailwind CSS",
  "Vite", "Vercel", "AWS", "LLMs", "Vector Databases",
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-accent/70 text-xs font-mono">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4 inline-flex">
            <Code size={14} />
            Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Proficient in modern technologies and frameworks for building scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 space-y-4 hover:border-accent/30 hover:shadow-[0_0_30px_-10px_hsla(180,100%,50%,0.12)] transition-all duration-500"
            >
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_hsla(180,100%,50%,0.4)]" />
                {group.title}
              </h3>
              {group.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={gi * 0.1 + si * 0.05}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-4 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-accent" />
            Technologies I Work With
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {TECH_TAGS.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-3 py-1.5 rounded-lg glass text-xs font-medium text-accent/60 hover:text-accent hover:border-accent/30 transition-all duration-300 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
