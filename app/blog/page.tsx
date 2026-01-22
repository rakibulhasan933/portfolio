import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/blog-data"

const blogPostsList = Object.entries(blogPosts).map(([slug, post]) => ({
  ...post,
  slug,
}))

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export const metadata = {
  title: "Blog | Rakibul Hasan",
  description: "Thoughts and insights on JavaScript, TypeScript, React, and modern web development practices.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold tracking-tight text-foreground">
              Rakibul Hasan
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="text-sm text-foreground">
                Blog
              </Link>
              <Link href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-6 pt-32 pb-24">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
            Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Thoughts on web development
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I write about JavaScript, TypeScript, React, Next.js, and modern web 
            development practices. These articles share insights from building 
            real-world applications and lessons learned along the way.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPostsList.map((post) => (
            <article
              key={post.slug}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative aspect-video bg-secondary overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="text-primary font-medium">{post.category}</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.date)}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-24 bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Stay updated
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Get notified when I publish new articles. No spam, just quality content 
            about web development.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rakibul Hasan. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
