"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = ["All", "Web Apps", "E-Commerce", "SaaS"];

interface ProjectIProps {
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  liveUrl: string
  githubUrl?: string
  featured?: boolean
}

const projects: ProjectIProps[] = [
  {
    title: "Mumo Travels & Tours",
    description: "A modern travel booking platform with AI-powered recommendations, real-time availability, and seamless payment integration.",
    image: "https://i.ibb.co.com/8L272W4w/Screenshot-248.png",
    category: "Web Apps",
    technologies: ["Next.js", "TypeScript", "GraphQL", "Stripe"],
    liveUrl: "https://mumotravels.com",
    githubUrl: "",
    featured: true,
  },
  {
    title: "Arafat Foundation",
    description: "A concise, portfolio-ready snapshot of the Arafat Foundation website — a modern, accessible web presence for a community foundation focused on local impact.",
    image: "https://i.ibb.co.com/MxcwfcKn/project-1.png",
    category: "Web Apps",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://arafatfoundation.org",
    featured: true,
  },
  {
    title: "Atelier Store",
    description: "It demonstrates product listing, product detail pages, a responsive header with a mobile sheet menu, and a persistent client-side shopping cart.",
    image: "https://i.ibb.co.com/rfKw44pk/Screenshot-187.png",
    category: "E-Commerce",
    technologies: ["Next.js", "Sanity", "Stripe", "Vercel"],
    liveUrl: "https://atelier-store.vercel.app",
    githubUrl: "https://github.com/rakibul/shopnest",
    featured: true,
  },
  {
    title: "AI MCQ Generator & Test Platform",
    description: "An AI-powered multiple-choice question platform designed for Bangladesh job preparation exams.\nGenerates high-quality, contextually accurate MCQs with well-reasoned explanations and balanced\nanswer options",
    image: "https://i.ibb.co.com/Ngxd4YL9/Screenshot-189.png",
    category: "SaaS",
    technologies: ["React", "OpenAI", "Node.js", "MongoDB"],
    liveUrl: "https://jobpreai.vercel.app",
    featured: true,
  },
  {
    title: "FreePlanTour",
    description: "FreePlanTour is a travel planning web platform that helps users explore destinations and generate ready-made travel itineraries. It provides structured day-by-day plans, destination guides, and an intuitive interface to simplify trip planning for travelers.",
    image: "https://i.ibb.co.com/9yqZTJ8/Screenshot-2024-07-15-182540.png",
    category: "SaaS",
    technologies: ["Next.js", "OpenAI", "Tailwind CSS", "Firebase"],
    liveUrl: "https://www.freeplantour.com",
    featured: false,
  },
  {
    title: "FreelancerMarriage",
    description: "FreelancerMarriage is an online matrimony platform designed to connect individuals seeking serious relationships and life partners. The site facilitates profile browsing, partner matching, and communication features to support users in finding compatible matches.",
    image: "https://i.ibb.co.com/N299jjrG/image.png",
    category: "Web Apps",
    technologies: ["TypeScript", "Node.js", "Neon", "Drizzle ORM", "Clerk"],
    liveUrl: "https://freelancermarriage.com",
    featured: false,
  }
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="md:py-24 py-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0s" }}>
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Projects I&apos;ve built
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A collection of projects that showcase my skills in building modern,
            scalable web applications. Each project represents unique challenges
            and creative solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 md:mb-12 mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${activeCategory === category
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:border-primary/50"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-3">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.title}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="relative aspect-video bg-secondary overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {project.featured && (
                  <span className="absolute top-3 left-3 px-3 py-1.5 text-xs font-semibold bg-primary text-primary-foreground rounded-full shadow-lg animate-pulse">
                    Featured
                  </span>
                )}
              </div>

              <div className="md:p-6 p-2 space-y-4">
                <div>
                  <span className="text-xs text-primary font-mono uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mt-1 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded hover:bg-primary/20 hover:text-primary transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Button variant="outline" size="sm" asChild className="hover:border-primary transition-colors bg-transparent">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1.5" />
                      Live Demo
                    </a>
                  </Button>
                  {project.githubUrl && (
                    <Button variant="ghost" size="sm" asChild className="hover:border-primary transition-colors">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1.5" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
