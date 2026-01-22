"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = ["All", "Web Apps", "E-Commerce", "SaaS", "Open Source"]

const projects = [
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
    title: "TaskFlow Pro",
    description: "A comprehensive project management platform with real-time collaboration, kanban boards, and team analytics.",
    image: "/projects/taskflow.jpg",
    category: "SaaS",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://taskflow.example.com",
    githubUrl: "https://github.com/rakibul/taskflow",
    featured: true,
  },
  {
    title: "ShopNest",
    description: "Modern e-commerce platform with headless CMS, Stripe integration, and personalized product recommendations.",
    image: "/projects/shopnest.jpg",
    category: "E-Commerce",
    technologies: ["Next.js", "Sanity", "Stripe", "Vercel"],
    liveUrl: "https://shopnest.example.com",
    githubUrl: "https://github.com/rakibul/shopnest",
    featured: true,
  },
  {
    title: "DevMetrics",
    description: "Analytics dashboard for developers to track coding patterns, productivity metrics, and learning progress.",
    image: "/projects/devmetrics.jpg",
    category: "Web Apps",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    liveUrl: "https://devmetrics.example.com",
    githubUrl: "https://github.com/rakibul/devmetrics",
    featured: true,
  },
  {
    title: "FormBuilder",
    description: "Drag-and-drop form builder with conditional logic, integrations, and advanced analytics.",
    image: "/projects/formbuilder.jpg",
    category: "SaaS",
    technologies: ["Next.js", "React DnD", "Prisma", "PostgreSQL"],
    liveUrl: "https://formbuilder.example.com",
    githubUrl: "https://github.com/rakibul/formbuilder",
    featured: false,
  },
  {
    title: "OpenAuth",
    description: "Open-source authentication library supporting multiple providers with TypeScript-first approach.",
    image: "/projects/openauth.jpg",
    category: "Open Source",
    technologies: ["TypeScript", "Node.js", "JWT", "OAuth2"],
    liveUrl: "https://openauth.example.com",
    githubUrl: "https://github.com/rakibul/openauth",
    featured: false,
  },
  {
    title: "FoodieSpot",
    description: "Restaurant discovery platform with real-time reservations and social dining features.",
    image: "/projects/foodiespot.jpg",
    category: "Web Apps",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "Maps API"],
    liveUrl: "https://foodiespot.example.com",
    githubUrl: "https://github.com/rakibul/foodiespot",
    featured: false,
  },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
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
        <div className="flex flex-wrap gap-2 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {project.featured && (
                  <span className="absolute top-3 left-3 px-3 py-1.5 text-xs font-semibold bg-primary text-primary-foreground rounded-full shadow-lg animate-pulse">
                    Featured
                  </span>
                )}
              </div>

              <div className="p-6 space-y-4">
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
                  <Button variant="ghost" size="sm" asChild className="hover:text-primary transition-colors">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1.5" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
