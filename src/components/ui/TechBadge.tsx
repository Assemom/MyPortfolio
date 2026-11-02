"use client"

import { cn } from "@/lib/utils"

interface TechBadgeProps {
  label: string
  color?: string
  className?: string
}

export function TechBadge({ label, color, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-tag font-medium tracking-wide",
        "bg-accent/10 text-accent border border-accent/20",
        className
      )}
      style={
        color
          ? {
              backgroundColor: `${color}15`,
              color: color,
              borderColor: `${color}30`,
            }
          : undefined
      }
    >
      {label}
    </span>
  )
}
