import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CompleteSolutionsSection } from "@/components/complete-solutions-section"
import { ProjectsSection } from "@/components/projects-section"
import { BlogSection } from "@/components/blog-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import AIChatbot from "@/components/ai-chatbot"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <CompleteSolutionsSection />
      <ProjectsSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
      <AIChatbot />
    </main>
  )
}
