"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  label: string
  title: string
  className?: string
}

export function SectionHeader({ label, title, className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("mb-12", className)}
    >
      <span className="font-tag text-xs tracking-[0.2em] uppercase text-accent mb-2 block">
        {label}
      </span>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
        {title}
      </h2>
      <div className="mt-3 w-16 h-0.5 bg-accent rounded-full" />
    </motion.div>
  )
}
