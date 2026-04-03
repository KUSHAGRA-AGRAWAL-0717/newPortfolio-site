import { motion } from "framer-motion";
import { Github, Linkedin, Code, Mail, ArrowUp } from "lucide-react";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: Github, href: "https://github.com/KUSHAGRA-AGRAWAL-0717", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/kushagraagrawal017", label: "LinkedIn" },
  { icon: Code, href: "https://leetcode.com/u/Kushagra_0717", label: "LeetCode" },
  { icon: Mail, href: "mailto:kushagraagrawal.9672@gmail.com", label: "Email" },
];

export default function FooterSection() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border/60 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <span className="font-extrabold text-xl tracking-tight text-foreground">
              KA<span className="text-accent">.</span>
            </span>
            <p className="text-sm text-muted-foreground mt-2.5 leading-relaxed max-w-xs">
              Building intelligent SaaS systems and AI-powered applications.
            </p>
            <div className="flex gap-2 mt-5">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -2 }}
                  className="icon-btn w-9 h-9 rounded-lg"
                >
                  <s.icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Quick Links
            </h4>
            <div className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors link-underline w-fit"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Get In Touch
            </h4>
            <div className="space-y-2.5 text-sm text-muted-foreground">
              <a
                href="mailto:kushagraagrawal.9672@gmail.com"
                className="block hover:text-foreground transition-colors link-underline w-fit"
              >
                kushagraagrawal.9672@gmail.com
              </a>
              <a
                href="tel:+919672048846"
                className="block hover:text-foreground transition-colors"
              >
                +91 9672048846
              </a>
              <p>Jalandhar, India</p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-border/60 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Kushagra Agrawal. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground">
              Built with React & TypeScript
            </p>
            <button
              onClick={scrollToTop}
              className="icon-btn w-8 h-8 rounded-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
