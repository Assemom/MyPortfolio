"use client"

import { motion } from "framer-motion"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { portfolioData } from "@/lib/data"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { TechBadge } from "@/components/ui/TechBadge"
import { staggerContainer, fadeUpVariant } from "@/lib/animations"

export function Projects() {
  const { projects } = portfolioData

  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Projects" title="What I've Built" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUpVariant}
              className="glass-card p-0 overflow-hidden group relative flex flex-col"
            >
              <div
                className={`h-2 bg-gradient-to-r shrink-0 relative overflow-hidden ${project.gradient}`}
              >
                <div className="absolute inset-0 shimmer-overlay" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-tag text-[10px] uppercase tracking-widest text-muted-foreground">
                      {project.category}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                      {project.title}
                    </h3>
                  </div>
                  {project.title === "TravelNest Agency System" && (
                    <span className="shrink-0 font-tag text-[10px] px-2 py-1 rounded-full bg-[#7B61FF]/10 text-[#7B61FF] border border-[#7B61FF]/20 uppercase tracking-wider">
                      Graduation Project
                    </span>
                  )}
                </div>

                <p className="mt-3 font-mono text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <TechBadge key={tag} label={tag} />
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-glass-border/20">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-accent transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-accent transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
