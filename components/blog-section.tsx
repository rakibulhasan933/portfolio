import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogPosts as blogPostsData } from "@/lib/blog-data"

const blogPosts = Object.entries(blogPostsData).map(([slug, post]) => ({
  ...post,
  slug,
}))

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export function BlogSection() {
  return (
    <section id="blog" className="md:py-24 py-4 bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto md:px-6 px-4 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: "0s" }}>
            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
              Writing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Thoughts on web development
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I write about JavaScript, TypeScript, React, and modern web development
              practices. Sharing insights from building real-world applications.
            </p>
          </div>
          <Button variant="outline" asChild className="opacity-0 animate-fade-in-up hover:border-primary transition-colors bg-transparent" style={{ animationDelay: "0.1s" }}>
            <Link href="/blog" className="flex items-center gap-2">
              View All Posts
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Featured Post */}
        <div className="md:mb-12 mb-3 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <article className="group grid md:grid-cols-2 gap-8 bg-background/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
            <div className="relative aspect-video md:aspect-auto bg-secondary overflow-hidden">
              <Image
                src={blogPosts[0].image || "/placeholder.svg"}
                alt={blogPosts[0].title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="text-primary font-medium">{blogPosts[0].category}</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formatDate(blogPosts[0].date)}
                </span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {blogPosts[0].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <Link
                href={`/blog/${blogPosts[0].slug}`}
                className="inline-flex items-center text-primary font-medium hover:underline group/link"
              >
                Read Article
                <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        </div>

        {/* Other Posts */}
        <div className="grid md:grid-cols-3 md:gap-6 gap-3">
          {blogPosts.slice(1).map((post, idx) => (
            <article
              key={post.slug}
              className="group bg-background/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <div className="relative aspect-video bg-secondary overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="text-primary font-medium">{post.category}</span>
                  <span>{formatDate(post.date)}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm text-primary font-medium hover:underline group/link"
                >
                  Read More
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
