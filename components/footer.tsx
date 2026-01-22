import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/rakibulhasan933", label: "GitHub" },
  { icon: Linkedin, href: "https:/https://www.linkedin.com/in/rakibulhossainrakib", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/rakibul_hasan80", label: "Twitter" },
  { icon: Mail, href: "mailto:rakibulmd933@gmail.com", label: "Email" },
]

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 hover:border-border/75 transition-colors duration-300">
      <div className="container mx-auto md:px-6 px-3 md:py-12 py-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="space-y-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0s" }}>
            <Link href="/" className="text-xl font-semibold text-foreground hover:text-primary transition-colors duration-300 inline-block">
              Rakibul Hasan
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-stack developer crafting digital experiences with modern web technologies.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 opacity-0 animate-fade-in-down" style={{ animationDelay: "0.1s" }}>
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex md:justify-end justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {socialLinks.map((social, idx) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label={social.label}
                style={{ animationDelay: `${0.2 + idx * 0.05}s` }}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-border/50 md:mt-8 mt-4 md:pt-8 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            © {new Date().getFullYear()} Rakibul Hasan. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Built with{" "}
            <span className="text-primary font-semibold">Next.js</span> &{" "}
            <span className="text-primary font-semibold">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
