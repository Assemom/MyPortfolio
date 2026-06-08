"use client"

import { useId } from "react"
import { motion } from "framer-motion"
import { portfolioData } from "@/lib/data"
import { SectionHeader } from "@/components/ui/SectionHeader"

function SkillTag({
  skill,
  color,
  index,
}: {
  skill: string
  color: string
  index: number
}) {
  const seed = useId()
  const x = ((seed.charCodeAt(0) || 0) % 200) - 100
  const y = ((seed.charCodeAt(1) || 0) % 200) - 100

  return (
    <motion.span
      initial={{ opacity: 0, x, y, scale: 0.5 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 0 20px ${color}40`,
        transition: { duration: 0.2 },
      }}
      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-tag text-sm border transition-all cursor-default"
      style={{
        backgroundColor: `${color}10`,
        color: color,
        borderColor: `${color}25`,
      }}
    >
      {skill}
    </motion.span>
  )
}

function SkillCategory({
  category,
  skills,
  color,
  index,
}: {
  category: string
  skills: string[]
  color: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <h3
        className="font-display text-lg font-semibold mb-4"
        style={{ color }}
      >
        <span className="mr-2">▸</span>
        {category}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <SkillTag key={skill} skill={skill} color={color} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

export function Skills() {
  const { skills } = portfolioData

  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Skills" title="Tech Stack & Expertise" />

        <div className="space-y-10">
          {skills.map((group, i) => (
            <SkillCategory key={group.category} {...group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
