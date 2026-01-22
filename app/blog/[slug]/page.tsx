import { notFound } from "next/navigation"
import { BlogPostContent } from "./blog-post-content"
import { getBlogPost } from "@/lib/blog-data"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    return { title: "Post Not Found" }
  }
  
  return {
    title: `${post.title} | Rakibul Hasan`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    notFound()
  }

  return <BlogPostContent post={post} />
}
