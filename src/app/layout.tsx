import type { Metadata } from "next"
import { Syne, DM_Mono, Space_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/ThemeProvider"

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
})

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
})

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Assem Omar — Full-Stack Engineer",
  description:
    "Full-Stack Engineer specializing in .NET, Angular, and AI Integration. Clean architecture, production APIs, and SPAs that ship.",
  keywords: [
    ".NET",
    "Angular",
    "Full-Stack",
    "Software Engineer",
    "AI Integration",
    "Assem Omar",
  ],
  openGraph: {
    title: "Assem Omar — Full-Stack Engineer",
    description:
      ".NET · Angular · AI Integration. Building production APIs and SPAs.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmMono.variable} ${spaceMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#090E1A] text-[#E8EAF0] antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
