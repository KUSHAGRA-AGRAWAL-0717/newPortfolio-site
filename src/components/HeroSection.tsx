import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Code, Mail, Download, ArrowRight } from "lucide-react";

const SOCIALS = [
  { icon: Github, href: "https://github.com/KUSHAGRA-AGRAWAL-0717", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/kushagraagrawal017", label: "LinkedIn" },
  { icon: Code, href: "https://leetcode.com/u/Kushagra_0717", label: "LeetCode" },
  { icon: Mail, href: "mailto:kushagraagrawal.9672@gmail.com", label: "Email" },
];

const ROLES = [
  "Full-Stack Developer",
  "AI Engineer",
  "SaaS Builder",
  "LLM Integrations",
];

const STATS = [
  { value: "10+", label: "Projects Shipped" },
  { value: "2", label: "Internships" },
  { value: "700+", label: "LeetCode Problems" },
  { value: "NIT", label: "Jalandhar" },
];

function useTypewriter(words: string[], typingSpeed = 80, pauseDuration = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, typingSpeed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseDuration);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, typingSpeed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, typingSpeed, pauseDuration]);

  return display;
}

export default function HeroSection() {
  const role = useTypewriter(ROLES);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />

      {/* Very subtle radial gradient for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, hsla(243,75%,59%,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >
          <span className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
            Available for Freelance & Full-time
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[2.6rem] sm:text-5xl md:text-[3.25rem] font-extrabold text-foreground tracking-tight mb-3 leading-[1.1]"
        >
          Hi, I'm{" "}
          <span className="gradient-text">Kushagra Agrawal</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="h-8 flex items-center justify-center mb-4"
        >
          <span className="text-base md:text-lg font-medium text-muted-foreground font-mono tracking-wide">
            {role}
            <span className="animate-blink text-accent">|</span>
          </span>
        </motion.div>

        {/* Bio */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.35, duration: 0.6 }}
           className="flex justify-center mb-7"
         >
           <ul className="text-sm md:text-base text-muted-foreground text-left space-y-2.5 inline-block">
             <li className="flex items-start gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
               <p>Specializing in AI-powered applications and scalable SaaS systems.</p>
             </li>
             <li className="flex items-start gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
               <p>Building high-performance products with modern web technologies.</p>
             </li>
             <li className="flex items-start gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
               <p>Expertise in intelligent automation, ML, and cloud infrastructure.</p>
             </li>
           </ul>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-7"
        >
          <a
            href="#projects"
            className="btn-primary px-7 py-3 rounded-lg text-sm font-semibold flex items-center gap-2"
          >
            View Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="btn-ghost px-7 py-3 rounded-lg text-sm font-semibold"
          >
            Hire Me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex justify-center gap-2"
        >
          {SOCIALS.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.06 }}
              whileHover={{ y: -3 }}
              className="icon-btn w-10 h-10"
            >
              <s.icon size={17} />
            </motion.a>
          ))}
        </motion.div>


      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border border-border/60 flex justify-center pt-1.5">
          <div className="w-0.5 h-2 rounded-full bg-accent/60" />
        </div>
      </motion.div>
    </section>
  );
}
