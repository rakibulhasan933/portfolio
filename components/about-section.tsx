const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
]

const experience = [
  {
    period: "2022 — Present",
    role: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    description: "Leading development of enterprise web applications using Next.js and TypeScript. Architecting scalable solutions that serve millions of users.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    period: "2020 — 2022",
    role: "Full-Stack Developer",
    company: "StartupXYZ",
    description: "Built and maintained multiple client-facing applications. Implemented CI/CD pipelines and improved overall code quality.",
    technologies: ["React", "Node.js", "MongoDB", "Docker"],
  },
  {
    period: "2018 — 2020",
    role: "Frontend Developer",
    company: "DigitalAgency",
    description: "Developed responsive web interfaces for various clients. Collaborated with design teams to create pixel-perfect implementations.",
    technologies: ["JavaScript", "React", "CSS", "Figma"],
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: "0s" }}>
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Crafting digital solutions with precision and creativity
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I&apos;m a developer passionate about creating accessible, performant web
            applications. My work lies at the intersection of design and engineering,
            building experiences that are not only visually appealing but also
            meticulously built for performance and usability.
          </p>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skills.map((skillGroup, idx) => (
            <div key={skillGroup.category} className="space-y-4 opacity-0 animate-fade-in-up" style={{ animationDelay: `${0.1 + idx * 0.1}s` }}>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience
        <div className="space-y-8">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Experience
          </h3>
          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <div key={exp.period} className="grid md:grid-cols-[200px_1fr] gap-6 group opacity-0 animate-fade-in-up" style={{ animationDelay: `${0.5 + idx * 0.15}s` }}>
                <div className="text-sm text-muted-foreground font-mono">
                  {exp.period}
                </div>
                <div className="space-y-3 p-4 rounded-lg transition-all duration-300 group-hover:bg-primary/5 group-hover:border group-hover:border-primary/30">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {exp.role}
                    </h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
