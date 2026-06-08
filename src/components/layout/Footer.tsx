import { FiGithub, FiLinkedin } from "react-icons/fi"
import { portfolioData } from "@/lib/data"

export function Footer() {
  const { socials, personal } = portfolioData

  return (
    <footer className="relative border-t border-glass-border/30 py-8 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          &copy; {new Date().getFullYear()} {personal.name}.
        </p>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label={s.label}
            >
              {s.label === "GitHub" ? (
                <FiGithub className="w-5 h-5" />
              ) : (
                <FiLinkedin className="w-5 h-5" />
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
