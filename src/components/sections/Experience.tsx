"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { portfolioData } from "@/lib/data"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { TechBadge } from "@/components/ui/TechBadge"
import { fadeLeftVariant, fadeRightVariant, staggerContainer } from "@/lib/animations"

gsap.registerPlugin(ScrollTrigger)

const accentColor = "#00F5D4"

export function Experience() {
  const { experience } = portfolioData
  const lineRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (!lineRef.current) return

    const path = lineRef.current
    const length = path.getTotalLength()

    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#experience",
        start: "top 60%",
        onUpdate: (self) => {
          const progress = self.progress
          gsap.to(path, {
            strokeDashoffset: length * (1 - progress),
            duration: 0.1,
            ease: "none",
          })
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Experience" title="Timeline" />

        <div className="relative">
          <svg
            className="absolute left-1/2 -translate-x-px top-0 h-full w-0.5 hidden md:block"
            viewBox="0 0 2 100"
            preserveAspectRatio="none"
          >
            <path
              ref={lineRef}
              d="M1 0 L1 100"
              stroke="url(#timelineGradient)"
              strokeWidth={2}
              fill="none"
            />
            <defs>
              <linearGradient id="timelineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00F5D4" stopOpacity="1" />
                <stop offset="100%" stopColor="#00F5D4" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative space-y-8 md:space-y-12"
          >
            {experience.map((item, i) => {
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={`${item.year}-${item.company}`}
                  variants={isLeft ? fadeLeftVariant : fadeRightVariant}
                  className={`flex items-center gap-6 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}
                  >
                    <div
                      className="glass-card p-6 relative overflow-hidden"
                      style={{
                        borderLeftColor: accentColor,
                        borderLeftWidth: 3,
                      }}
                    >
                      <span className="font-tag text-xs text-muted-foreground">
                        {item.year}
                      </span>
                      <h3 className="font-display text-lg font-semibold mt-1 text-foreground">
                        {item.title}
                      </h3>
                      <p className="font-mono text-sm text-muted-foreground mt-0.5">
                        {item.company}
                      </p>
                      <p className="mt-3 font-mono text-sm text-foreground/80 leading-relaxed">
                        {item.description}
                      </p>
                      {item.tags && (
                        <div
                          className={`mt-4 flex flex-wrap gap-2 ${
                            isLeft ? "md:justify-end" : ""
                          }`}
                        >
                          {item.tags.map((tag) => (
                            <TechBadge key={tag} label={tag} />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center w-8 h-8 shrink-0">
                    <div
                      className="w-3 h-3 rounded-full ring-4 ring-background"
                      style={{ backgroundColor: accentColor }}
                    />
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
