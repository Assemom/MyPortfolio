import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8 } : undefined}
      className={cn(
        "glass-card p-6",
        hover && "cursor-default",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
