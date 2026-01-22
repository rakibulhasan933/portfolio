'use client'

import { Check } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const solutionPhases = [
  {
    phase: '01',
    title: 'Discovery & Planning',
    description: 'Understanding your vision, goals, and requirements. Creating roadmaps and technical architecture.',
    services: ['Requirement Analysis', 'Architecture Design', 'Technology Stack Selection', 'Project Timeline'],
    icon: '📋',
  },
  {
    phase: '02',
    title: 'Frontend Development',
    description: 'Building responsive, performant, and visually stunning user interfaces with modern frameworks.',
    services: ['UI/UX Design', 'React/Next.js Development', 'Component Architecture', 'Performance Optimization'],
    icon: '🎨',
  },
  {
    phase: '03',
    title: 'Backend Development',
    description: 'Creating scalable, secure, and efficient server-side solutions with robust APIs.',
    services: ['API Development', 'Database Design', 'Authentication & Security', 'Server Architecture'],
    icon: '⚙️',
  },
  {
    phase: '04',
    title: 'Integration & Testing',
    description: 'Connecting frontend and backend, ensuring quality through comprehensive testing.',
    services: ['API Integration', 'Unit Testing', 'Integration Testing', 'Quality Assurance'],
    icon: '✓',
  },
  {
    phase: '05',
    title: 'Deployment & DevOps',
    description: 'Setting up production environments with CI/CD pipelines and monitoring solutions.',
    services: ['Cloud Deployment', 'CI/CD Pipeline', 'Performance Monitoring', 'Infrastructure Setup'],
    icon: '🚀',
  },
  {
    phase: '06',
    title: 'Maintenance & Support',
    description: 'Ongoing support, updates, and optimization to keep your application running smoothly.',
    services: ['Bug Fixes', 'Feature Updates', 'Performance Monitoring', '24/7 Support'],
    icon: '📞',
  },
]

export function CompleteSolutionsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const cards = cardsRef.current.filter(Boolean)

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      }
    )
  }, [])

  return (
    <section id="solutions" className="md:py-24 py-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4 opacity-0 animate-fade-in-up">
            Complete Solutions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            A-Z Business Ready Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            From initial concept to production deployment and beyond, I provide comprehensive,
            business-ready solutions that cover every aspect of your digital product development.
            Full-stack expertise ensures seamless integration and optimal performance.
          </p>
        </div>

        {/* Solution Phases Grid */}
        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:mb-16 mb-8">
          {solutionPhases.map((solution, index) => (
            <div
              key={solution.phase}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
            >
              {/* Phase Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{solution.icon}</span>
                  <span className="text-sm font-mono text-primary font-bold">{solution.phase}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {solution.description}
              </p>

              {/* Services */}
              <ul className="space-y-2">
                {solution.services.map((service) => (
                  <li key={service} className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <Check className="h-4 w-4 text-primary" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-muted-foreground mb-4">
            Ready to transform your idea into a fully functional, production-ready application?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-medium"
          >
            Start Your Project
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
