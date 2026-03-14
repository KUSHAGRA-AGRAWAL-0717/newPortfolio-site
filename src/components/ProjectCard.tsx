import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Play, X } from "lucide-react";
import type { Project } from "@/data/projects";

const DEFAULT_GITHUB = "https://github.com/KUSHAGRA-AGRAWAL-0717";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [showVideo, setShowVideo] = useState(false);
  const githubLink = project.github || DEFAULT_GITHUB;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="glass rounded-1xl overflow-hidden hover:border-accent/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_hsla(180,100%,50%,0.15)]">
        {/* TV Display */}
        <div className="relative">
          <div className="tv-frame aspect-video relative bg-card">
            {showVideo && project.video ? (
              <div className="relative w-full h-full">
                <iframe
                  src={project.video}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-destructive transition-colors z-10"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[0.15] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />
                
                {project.video && (
                  <button
                    onClick={() => setShowVideo(true)}
                    className="absolute inset-0 flex items-center justify-center z-10"
                  >
                    <div className="w-14 h-14 rounded-full gradient-btn flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <Play size={22} className="text-accent-foreground ml-0.5" fill="currentColor" />
                    </div>
                  </button>
                )}

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md glass text-xs font-mono text-foreground">
                  {project.year}
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md gradient-btn text-xs font-bold text-accent-foreground">
                    Featured
                  </div>
                )}

                {project.video && (
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md glass text-xs text-foreground">
                    <Play size={12} fill="currentColor" />
                    Video Demo
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="mx-auto h-1.5 w-3/5 bg-accent/15 blur-lg rounded-[100%] mt-1" />
        </div>

        {/* Info */}
        <div className="p-6 space-y-3">
          <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider glass text-accent/70 border border-accent/15">
            {project.category}
          </span>

          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">{project.title}</h3>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] font-medium rounded glass text-accent/60 border border-accent/10"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-0.5 text-[10px] font-medium rounded glass text-muted-foreground">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          <p className="text-xs text-accent font-medium">{project.impact}</p>

          <div className="flex gap-2 pt-2">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 glass rounded-lg py-2.5 text-xs font-medium text-muted-foreground hover:text-accent hover:border-accent/30 flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Github size={14} />
              Code
            </a>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 gradient-btn rounded-lg py-2.5 text-xs font-bold text-accent-foreground flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
