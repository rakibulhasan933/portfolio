'use client'

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { AnimatedCodeSnippet } from "./animated-code-snippet"

const socialLinks = [
  { icon: Github, href: "https://github.com/rakibulhasan933", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rakibulhossainrakib", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/rakibul_hasan80", label: "Twitter" },
]

const codeSnippet = `const developer = {
  name: "Rakibul Hasan",
  role: "Full-Stack Developer",
  skills: [
    "JavaScript",
    "TypeScript", 
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL"
  ],
  passion: "Building great UX"
};`

export function HeroSection() {
  const codeBoxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!codeBoxRef.current) return

    // Add glow animation to code box
    gsap.fromTo(
      codeBoxRef.current,
      {
        boxShadow: '0 0 20px rgba(114, 214, 165, 0)',
      },
      {
        boxShadow: '0 0 40px rgba(114, 214, 165, 0.4)',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      }
    )
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center md:pt-20 pt-1 md:pb-16 pb-4 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <p className="text-primary font-mono text-sm tracking-wider uppercase">
                Full-Stack Web Developer
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Building digital experiences with modern web technologies
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                I&apos;m Rakibul Hasan, a passionate developer specializing in{" "}
                <span className="text-primary font-semibold">JavaScript</span>,{" "}
                <span className="text-primary font-semibold">TypeScript</span>, and{" "}
                <span className="text-primary font-semibold">Next.js</span>. I craft performant,
                accessible, and visually stunning web applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="group hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
                <Link href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="hover:border-primary transition-all duration-300 bg-transparent">
                <Link href="#contact">Let&apos;s Talk</Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              {socialLinks.map((social, index) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div ref={codeBoxRef} className="hidden lg:flex justify-center opacity-0 animate-fade-in-down" style={{ animationDelay: "0.4s" }}>
            <div className="relative w-full max-w-md">
              <div className="w-80 h-80 rounded-full bg-primary/10 absolute -inset-4 blur-3xl animate-glow" />
              <div className="relative">
                <AnimatedCodeSnippet
                  code={codeSnippet}
                  title="developer.ts"
                  language="typescript"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
