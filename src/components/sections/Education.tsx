"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/lib/data"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { TechBadge } from "@/components/ui/TechBadge"
import { staggerContainer, fadeUpVariant } from "@/lib/animations"

export function Education() {
  const { education } = portfolioData

  return (
    <section id="education" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Education" title="Academic Background" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {education.map((item) => (
            <motion.div
              key={`${item.year}-${item.school}`}
              variants={fadeUpVariant}
              className="glass-card p-0 overflow-hidden group relative flex flex-col"
            >
              <div className="h-2 bg-gradient-to-r from-cyan-500/20 to-violet-600/20 shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 shimmer-overlay" />
              </div>
              <div className="p-6">
              <span className="font-tag text-xs text-muted-foreground">
                {item.year}
              </span>
              <h3 className="font-display text-lg font-semibold mt-1 text-foreground">
                {item.degree}
              </h3>
              <p className="font-mono text-sm text-muted-foreground mt-0.5">
                {item.school}
              </p>
              <p className="mt-3 font-mono text-sm text-foreground/80 leading-relaxed">
                {item.description}
              </p>
              {item.tags && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <TechBadge key={tag} label={tag} />
                  ))}
                </div>
              )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
