"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { FiDownload, FiArrowDown } from "react-icons/fi"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import gsap from "gsap"
import type { ISourceOptions } from "@tsparticles/engine"
import Particles from "@tsparticles/react"
import { portfolioData } from "@/lib/data"

const particlesOptions: ISourceOptions = {
  fpsLimit: 60,
  particles: {
    number: { value: 80, density: { enable: true } },
    color: { value: "#00F5D4" },
    links: {
      enable: true,
      color: "#00F5D4",
      opacity: 0.15,
      distance: 150,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: false,
    },
    opacity: { value: 0.3 },
    size: { value: { min: 1, max: 3 } },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
    },
    modes: {
      grab: {
        distance: 180,
        links: { opacity: 0.3 },
      },
    },
  },
  background: { color: "transparent" },
}

const titleSequence = [
  ".NET Backend Engineer",
  2000,
  "Angular Frontend Dev",
  2000,
  "AI Integration Builder",
  2000,
  "Clean Architecture Fanatic",
  2000,
]

export function Hero() {
  const { personal, contact } = portfolioData
  const timelineRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.fromTo(
        "#hero-label",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
        .fromTo(
          "#hero-name",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.2"
        )
        .fromTo(
          "#hero-typewriter",
          { opacity: 0 },
          { opacity: 1, duration: 0.4 },
          "-=0.3"
        )
        .fromTo(
          "#hero-ctas",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.2"
        )
        .fromTo(
          "#hero-tagline",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.2"
        )
        .fromTo(
          "#hero-socials",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
          "-=0.3"
        )
        .fromTo(
          photoRef.current,
          { opacity: 0, x: 80, scale: 0.9 },
          { opacity: 1, x: 0, scale: 1, duration: 0.7 },
          "-=0.4"
        )
    }, timelineRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <Particles
        id="hero-particles"
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      <div ref={timelineRef} className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-[55%] text-center md:text-left space-y-6">
            <span
              id="hero-label"
              className="block font-mono text-xs tracking-[0.15em] text-accent"
            >
              Hey, I&apos;m
            </span>

            <h1
              id="hero-name"
              className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight"
            >
              {personal.firstName}{" "}
              <span className="text-gradient-glow">{personal.lastName}</span>
            </h1>

            <div
              id="hero-typewriter"
              className="font-mono text-xl text-muted-foreground h-8"
            >
              <TypeAnimation
                sequence={titleSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </div>

            <div
              id="hero-tagline"
              className="flex items-start gap-4 pt-1 border-l-2 border-accent/30 pl-4"
            >
              <p className="font-mono text-sm text-muted-foreground/80 leading-relaxed">
                I write code that runs in production. Full-stack across the entire stack&nbsp;—&nbsp;real clients, real deployments, real problems.
              </p>
            </div>

            <div
              id="hero-ctas"
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-2"
            >
              <a
                href={personal.cvUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono font-medium text-sm text-[#090E1A] transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #00F5D4, #7B61FF)', boxShadow: '0 0 20px rgba(0,245,212,0.2)' }}
              >
                <FiDownload className="w-4 h-4" />
                Download CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#00F5D4]/50 text-foreground font-mono text-sm hover:bg-gradient-to-r hover:from-[#00F5D4]/10 hover:to-[#7B61FF]/10 hover:border-[#00F5D4] transition-all"
              >
                View Projects
              </a>
            </div>

            <div
              id="hero-socials"
              className="flex items-center gap-4 justify-center md:justify-start pt-2"
            >
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#00F5D4] transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#00F5D4] transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div ref={photoRef} className="w-full md:w-[45%] flex justify-center md:justify-end">
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <div className="profile-ring absolute inset-0" />
              <div className="absolute inset-2 rounded-full bg-[#00F5D4]/10 glow-cyan" />
              <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-[#00F5D4]/20">
                <Image
                  src={personal.photoUrl}
                  alt={personal.name}
                  width={288}
                  height={288}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <a href="#about" className="scroll-indicator flex flex-col items-center gap-2 text-muted-foreground hover:text-[#00F5D4] transition-colors">
            <span className="font-tag text-xs tracking-widest">SCROLL</span>
            <FiArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
