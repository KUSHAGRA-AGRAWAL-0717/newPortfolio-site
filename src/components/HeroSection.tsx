import { motion } from "framer-motion";
import { Award, Code2, Github, Linkedin, Code, Mail, ChevronDown } from "lucide-react";

const SOCIALS = [
  { icon: Github, href: "https://github.com/KUSHAGRA-AGRAWAL-0717", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/kushagraagrawal017", label: "LinkedIn" },
  { icon: Code, href: "https://leetcode.com/u/Kushagra_0717", label: "LeetCode" },
  { icon: Mail, href: "mailto:kushagraagrawal.9672@gmail.com", label: "Email" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-6 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/8 blur-[150px] rounded-full animate-pulse-glow" />
      <div className="absolute top-[30%] -right-[10%] w-[35%] h-[35%] bg-accent/6 blur-[150px] rounded-full animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="section-badge mb-8 inline-flex"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for Freelance
          </motion.span>

          <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-4 leading-[1.05]">
            Hi, I'm <span className="gradient-text">Kushagra Agrawal</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl font-medium text-muted-foreground mb-4"
          >
            Full-Stack & AI Developer | Building Intelligent SaaS Systems
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg text-muted-foreground/70 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Software developer specializing in AI-powered applications, scalable SaaS systems, and
            intelligent automation tools. I build high-performance products using modern web technologies,
            machine learning, and cloud infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <a
              href="#projects"
              className="gradient-btn px-8 py-3.5 font-semibold rounded-full text-accent-foreground transition-all hover:scale-105 hover:shadow-[0_0_25px_-5px_hsla(180,100%,50%,0.3)] flex items-center gap-2"
            >
              View Projects
              <ChevronDown size={18} />
            </a>
            <a
              href="#contact"
              className="glass px-8 py-3.5 font-semibold rounded-full text-foreground transition-all hover:scale-105 hover:border-accent/50 hover:shadow-[0_0_25px_-5px_hsla(180,100%,50%,0.15)]"
            >
              Hire Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center gap-3 mb-12"
          >
            {SOCIALS.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                whileHover={{ y: -3, scale: 1.05 }}
                className="w-11 h-11 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 hover:shadow-[0_0_15px_-5px_hsla(180,100%,50%,0.3)] transition-all duration-300"
              >
                <s.icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {/* <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm hover:border-accent/30 transition-all duration-300">
              <Award size={16} className="text-accent" />
              <span className="font-medium">LeetCode Global Rank 347</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm hover:border-accent/30 transition-all duration-300">
              <Code2 size={16} className="text-accent" />
              <span className="font-medium">700+ Problems Solved</span>
            </div> */}
          {/* </motion.div> */}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-accent/30 flex justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-accent" />
        </div>
      </motion.div>
    </section>
  );
}
