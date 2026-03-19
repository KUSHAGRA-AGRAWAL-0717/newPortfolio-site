import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Trophy, Calendar, MapPin } from "lucide-react";

const EXPERIENCE = [
  {
    title: "Software Developer Intern – Full Stack",
    company: "Global Holani Tradelink",
    period: "Jun 2025 — Jul 2025",
    type: "Remote",
    description: "Architected an OCR invoice processing system using LangChain and OpenAI with 95%+ accuracy.",
    bullets: [
      "Achieved 95%+ accuracy when parsing semi-structured invoices",
      "Optimized API performance through prompt engineering and caching",
      "Reduced latency by 60%",
      "Built scalable backend workflows for automated document extraction",
    ],
    tags: ["LangChain", "OpenAI", "Python", "OCR"],
  },
  {
    title: "React JS Intern",
    company: "Vitraga Solutions",
    period: "Apr 2025 — May 2025",
    type: "Remote",
    description: "Improved and debugged multiple production systems built with React, Node.js, and MongoDB.",
    bullets: [
      "Reduced API response latency by 40% (250ms → 150ms)",
      "Contributed across four different application domains",
      "Ensured stable deployment",
      "Optimized React components for better performance",
    ],
    tags: ["React", "Node.js", "MongoDB", "JavaScript"],
  },
  {
    title: "Freelance Software Developer",
    company: "Self-Employed",
    period: "2024 — Present",
    type: "Remote",
    description: "Worked with startups and independent clients building SaaS platforms, AI automation systems, and full-stack web applications.",
    bullets: [
      "Delivered end-to-end systems including frontend UI, backend APIs, database architecture",
      "Built AI integrations for multiple clients",
      "Designed scalable SaaS architectures",
      "Data processing pipelines for automation",
    ],
    tags: ["React", "Node.js", "Python", "AI/ML", "Cloud Infrastructure"],
  },
];

const ACHIEVEMENTS = [
  { title: "Hacknovate 6.0", detail: "Ranked Top 1.5% (45 / 3000+ participants)" },
  { title: "LeetCode", detail: "Global Rank 347 (Contest) | Rating 1700 | 700+ problems solved | 150+ day streak" },
  { title: "GirlScript Summer of Code", detail: "Selected contributor for GSSOC 2024" },
  { title: "Energy Quest 2.0", detail: "Finalist with 92nd percentile trading simulation performance" },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4 inline-flex">
            <Briefcase size={14} />
            Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Professional journey building impactful solutions for businesses and startups
          </p>
        </motion.div>

        {/* Two-column layout: Timeline left, Education/Achievements right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Timeline - left side */}
          <div className="lg:col-span-3 relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-primary/40 to-transparent hidden md:block" />

            <div className="space-y-8">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative md:pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_hsla(180,100%,50%,0.5)] hidden md:block" />

                  <div className="glass rounded-2xl p-6 md:p-8 hover:border-accent/30 transition-all duration-500 group">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">{exp.title}</h3>
                        <p className="text-accent font-semibold text-sm">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full glass text-xs font-medium text-muted-foreground border border-accent/20 self-start whitespace-nowrap">
                        {exp.type}
                      </span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4 font-mono">
                      <Calendar size={12} className="text-accent/70" />
                      {exp.period}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                    {/* Bullet points */}
                    <ul className="space-y-2.5 mb-5">
                      {exp.bullets.map((b, bi) => (
                        <motion.li
                          key={bi}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.15 + bi * 0.05 }}
                          className="text-sm text-muted-foreground flex gap-3 items-start"
                        >
                          <span className="text-accent mt-1.5 flex-shrink-0">→</span>
                          {b}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-[11px] font-medium glass text-accent/80 border border-accent/15 hover:border-accent/40 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right sidebar: Education + Achievements */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_hsla(180,100%,50%,0.4)]" />
                Education
              </h3>
              <div className="glass rounded-2xl p-6 hover:border-accent/30 transition-all duration-500">
                <div className="flex items-start gap-3 mb-3">
                  <GraduationCap size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-foreground">
                      Bachelor of Technology – Information Technology
                    </h4>
                    <p className="text-accent font-semibold text-sm mt-1">National Institute of Technology Jalandhar</p>
                    <p className="text-xs text-muted-foreground mt-1 font-mono">2023 – Present</p>
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <span className="px-3 py-1 rounded-full text-xs font-bold gradient-btn text-accent-foreground">
                    CGPA: 7.99 / 10
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_hsla(180,100%,50%,0.4)]" />
                Achievements
              </h3>
              <div className="space-y-3">
                {ACHIEVEMENTS.map((a, i) => (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="glass rounded-xl p-5 hover:border-accent/30 transition-all duration-500 group"
                  >
                    <h4 className="text-sm font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                      {a.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{a.detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
