"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { FiSend, FiMail, FiMapPin, FiGithub, FiLinkedin, FiLoader } from "react-icons/fi"
import emailjs from "@emailjs/browser"
import toast, { Toaster } from "react-hot-toast"
import { portfolioData } from "@/lib/data"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { fadeLeftVariant, fadeRightVariant } from "@/lib/animations"

export function Contact() {
  const { contact } = portfolioData
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields")
      return
    }

    setLoading(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      toast.success("Message sent! I'll get back to you soon.")
      setForm({ name: "", email: "", message: "" })
    } catch {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const contactLinks = [
    { icon: FiMail, label: contact.email, href: `mailto:${contact.email}` },
    { icon: FiLinkedin, label: "linkedin.com/in/assem-omar1", href: contact.linkedin },
    { icon: FiGithub, label: "github.com/Assemom", href: contact.github },
    { icon: FiMapPin, label: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  ]

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Contact" title="Get In Touch" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={fadeLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Let&apos;s Build
              <br />
              <span className="text-gradient">Something</span>
              <br />
              Together.
            </h3>

            <div className="mt-8 space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-accent transition-colors group"
                >
                  <link.icon className="w-4 h-4 group-hover:text-accent transition-colors" />
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            variants={fadeRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-6"
          >
            <div className="focus-glow">
              <label className="block font-tag text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-glass-border px-2 py-3 font-mono text-sm text-foreground outline-none transition-all focus:border-accent"
                placeholder="Your name"
              />
            </div>

            <div className="focus-glow">
              <label className="block font-tag text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-glass-border px-2 py-3 font-mono text-sm text-foreground outline-none transition-all focus:border-accent"
                placeholder="your@email.com"
              />
            </div>

            <div className="focus-glow">
              <label className="block font-tag text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full bg-transparent border-b border-glass-border px-2 py-3 font-mono text-sm text-foreground outline-none transition-all focus:border-accent resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent text-background font-mono font-medium text-sm hover:bg-accent/90 transition-all disabled:opacity-60 glow-cyan"
            >
              {loading ? (
                <FiLoader className="w-4 h-4 animate-spin" />
              ) : (
                <FiSend className="w-4 h-4" />
              )}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0F1629",
            color: "#E8EAF0",
            border: "1px solid rgba(0,245,212,0.15)",
            fontFamily: "DM Mono, monospace",
            fontSize: "14px",
          },
          success: { iconTheme: { primary: "#00F5D4", secondary: "#090E1A" } },
          error: { iconTheme: { primary: "#FF4D6D", secondary: "#090E1A" } },
        }}
      />
    </section>
  )
}
