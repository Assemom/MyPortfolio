"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { portfolioData } from "@/lib/data"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { fadeUpVariant, staggerContainer } from "@/lib/animations"

function StatDisplay({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
  const target = parseFloat(value)
  const isNumeric = !isNaN(target) && !isNaN(parseFloat(value))
  const isDecimal = value.includes(".")
  const hasRun = useRef(false)

  useEffect(() => {
    if (!isNumeric || !inView || hasRun.current) return
    hasRun.current = true

    const duration = 1500
    const start = performance.now()

    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(eased * target)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [inView, target, isNumeric])

  return (
    <span ref={ref} className="tabular-nums">
      {isNumeric
        ? (isDecimal ? count.toFixed(1) : Math.floor(count))
        : value}
      {isNumeric && inView && suffix}
    </span>
  )
}

export function About() {
  const { personal, stats } = portfolioData

  return (
    <section id="about" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="About" title="Who I Am" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <motion.div variants={fadeUpVariant}>
            <p className="font-mono text-base md:text-lg leading-relaxed text-foreground/90">
              {personal.bio}
            </p>
            <div className="mt-6 flex gap-4">
              {["C#", ".NET", "Angular", "React", "TypeScript", "Docker"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="font-tag text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-6 text-center"
              >
                <span className="block font-display text-3xl md:text-4xl font-bold text-accent">
                  <StatDisplay value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-2 block font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
