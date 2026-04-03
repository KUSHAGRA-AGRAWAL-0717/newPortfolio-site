import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronRight } from "lucide-react";
import { PROJECTS, CATEGORIES } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const displayedProjects = filtered.slice(0, visibleCount);

  const getCategoryCount = (cat: string) =>
    cat === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="section-badge mb-4 inline-flex">
            <Sparkles size={13} />
            Portfolio
          </span>
          <h2 className="text-[1.9rem] md:text-[2.4rem] font-extrabold text-foreground mb-3 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-lg mx-auto text-sm">
            Real-world applications built with modern technologies, solving genuine problems.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeCategory === cat
                  ? "btn-primary"
                  : "btn-ghost"
              }`}
            >
              {cat}
              <span
                className={`text-xs rounded-full px-1.5 py-0.5 font-medium ${
                  activeCategory === cat
                    ? "bg-white/20 text-white"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {getCategoryCount(cat)}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {filtered.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setVisibleCount(visibleCount >= filtered.length ? 6 : filtered.length)}
              className="btn-ghost px-6 py-2.5 rounded-lg text-sm font-semibold transition-all hover:bg-secondary"
            >
              {visibleCount >= filtered.length ? "Show Less" : "Load More"}
            </button>
          </motion.div>
        )}

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/KUSHAGRA-AGRAWAL-0717"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-accent transition-colors link-underline"
          >
            View all projects on GitHub
            <ChevronRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
