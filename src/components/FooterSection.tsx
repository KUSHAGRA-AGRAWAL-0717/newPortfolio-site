import { motion } from "framer-motion";
import { Github, Linkedin, Code } from "lucide-react";

const LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: Github, href: "https://github.com/KUSHAGRA-AGRAWAL-0717" },
  { icon: Linkedin, href: "https://linkedin.com/in/kushagraagrawal017" },
  { icon: Code, href: "https://leetcode.com/u/Kushagra_0717" },
];

export default function FooterSection() {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="font-bold text-lg text-foreground">
              Kushagra<span className="text-accent">.</span>
            </span>
            <p className="text-sm text-muted-foreground mt-2">
              Building innovative solutions with modern technologies
            </p>
            <div className="flex gap-2 mt-4">
              {SOCIALS.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300"
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground text-sm mb-3">Quick Links</h4>
            <div className="space-y-2">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground text-sm mb-3">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="hover:text-accent transition-colors cursor-pointer">kushagraagrawal.9672@gmail.com</p>
              <p>+91 9672048846</p>
              <p>India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Kushagra Agrawal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
