"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

import type { BlogPost } from "@/lib/blog-data"

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <main className="min-h-screen bg-background">
      <article className="container mx-auto px-6 pt-32 pb-24">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="max-w-3xl mb-12">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="text-primary font-medium">{post.category}</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video max-w-4xl rounded-xl overflow-hidden mb-12 bg-secondary">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="max-w-3xl prose prose-invert prose-lg prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-pre:bg-card prose-pre:border prose-pre:border-border">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-foreground mt-12 mb-6">
                  {paragraph.replace('## ', '')}
                </h2>
              )
            }
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return (
                <p key={index} className="font-semibold text-foreground">
                  {paragraph.replace(/\*\*/g, '')}
                </p>
              )
            }
            if (paragraph.startsWith('```')) {
              const code = paragraph.replace(/```\w*\n?/g, '').trim()
              return (
                <pre key={index} className="bg-card border border-border rounded-lg p-4 overflow-x-auto my-6">
                  <code className="text-sm font-mono text-muted-foreground">{code}</code>
                </pre>
              )
            }
            if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
              const items = paragraph.split('\n').filter(Boolean)
              return (
                <ul key={index} className="list-disc list-inside space-y-2 my-6 text-muted-foreground">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace(/^\d+\.\s*|-\s*/, '')}</li>
                  ))}
                </ul>
              )
            }
            if (paragraph.trim()) {
              return (
                <p key={index} className="text-muted-foreground leading-relaxed my-6">
                  {paragraph}
                </p>
              )
            }
            return null
          })}
        </div>

        {/* Share & Author */}
        <div className="max-w-3xl mt-16 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-semibold">RH</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">Rakibul Hasan</p>
                <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </article>
    </main>
  )
}
