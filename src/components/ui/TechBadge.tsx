"use client"

import { cn } from "@/lib/utils"

interface TechBadgeProps {
  label: string
  color?: string
  className?: string
}

export function TechBadge({ label, color, className }: TechBadgeProps) {
  const isDotNetOrAngular =
    label.toLowerCase().includes(".net") ||
    label.toLowerCase().includes("angular")

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-tag font-medium tracking-wide",
        isDotNetOrAngular
          ? "bg-[#FF4D6D]/10 text-[#FF4D6D] border border-[#FF4D6D]/20"
          : "bg-accent/10 text-accent border border-accent/20",
        className
      )}
      style={
        color && !isDotNetOrAngular
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
