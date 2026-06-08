"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi"
import { FiDownload } from "react-icons/fi"
import { portfolioData } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const { navLinks, personal } = portfolioData

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const sections = navLinks.map((l) => document.querySelector(l.href))

    sections.forEach((section) => {
      if (!section) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(`#${section.id}`)
        },
        { threshold: 0.3 }
      )
      observer.observe(section)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [navLinks])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
    >
      <nav
        className={cn(
          "glass-nav rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300",
          scrolled && "scrolled"
        )}
      >
        <button
          onClick={() => scrollTo("#hero")}
          className="font-display text-xl font-bold tracking-tight text-accent"
        >
          AO
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-mono transition-all duration-300",
                activeSection === link.href
                  ? "text-accent bg-accent/10"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </button>
          ))}
          <a
            href={personal.cvUrl}
            download
            className="ml-2 flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-background text-sm font-mono font-medium hover:bg-accent/90 transition-all"
          >
            <FiDownload className="w-4 h-4" />
            CV
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="glass-card mt-2 p-4 flex flex-col gap-2 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-mono text-left transition-all",
                  activeSection === link.href
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </button>
            ))}
            <a
              href={personal.cvUrl}
              download
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-accent text-background text-sm font-mono font-medium"
            >
              <FiDownload className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
