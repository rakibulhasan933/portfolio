"use client"

import React from "react"

import { useState } from "react"
import { Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="md:py-24 py-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: "0s" }}>
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let&apos;s work together
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Have a project in mind? I&apos;d love to hear about it. Whether you need
            a full-stack application, want to improve an existing product, or just
            want to say hi, feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 md:gap-12 gap-4 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="md:space-y-8 space-y-4 opacity-0 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <div className="md:space-y-6 space-y-3">
              <div className="flex items-start gap-4 group md:p-4 p-2 rounded-lg hover:bg-primary/5 transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:rakibulmd933@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    rakibulmd933@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group md:p-4 p-2 rounded-lg hover:bg-primary/5 transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Dhaka, Bangladesh (Remote Available)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group">
              <h3 className="font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                Availability
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                I&apos;m currently available for freelance projects and full-time
                opportunities. My typical response time is within 24 hours.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">
                  Available for new projects
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="md:space-y-6 space-y-3 opacity-0 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Project inquiry"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                required
                className="focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
                className="focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              />
            </div>

            {submitted && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg animate-scale-in">
                <p className="text-green-500 text-sm font-medium">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </p>
              </div>
            )}

            <Button type="submit" size="lg" className="w-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="inline-block animate-spin mr-2">⟳</span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
