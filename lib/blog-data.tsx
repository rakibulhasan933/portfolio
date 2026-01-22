export interface BlogPost {
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
  content: string
}

export const blogPosts: Record<string, BlogPost> = {
  "building-scalable-apis-nextjs-server-actions": {
    title: "Building Scalable APIs with Next.js Server Actions",
    excerpt: "Explore how to leverage Next.js 14 server actions to build type-safe, performant APIs without the complexity of traditional REST endpoints.",
    image: "/blog/server-actions.jpg",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Next.js",
    content: `
Server Actions in Next.js represent a paradigm shift in how we build full-stack applications. Instead of creating separate API routes and managing the complexity of client-server communication, Server Actions allow us to write server-side code that can be called directly from our components.

## Why Server Actions?

Traditional REST APIs require significant boilerplate: defining routes, handling HTTP methods, parsing request bodies, and managing responses. Server Actions eliminate this overhead while providing type safety out of the box.

\`\`\`typescript
'use server'

export async function createUser(formData: FormData) {
  const email = formData.get('email')
  const name = formData.get('name')
  
  const user = await db.user.create({
    data: { email, name }
  })
  
  revalidatePath('/users')
  return user
}
\`\`\`

## Key Benefits

**1. Type Safety**: Server Actions are fully typed, meaning your IDE provides autocomplete and error checking across the client-server boundary.

**2. Progressive Enhancement**: Forms using Server Actions work without JavaScript, making your applications more resilient and accessible.

**3. Simplified Data Mutations**: No need to manage loading states, error handling, or cache invalidation manually—Next.js handles much of this automatically.

## Best Practices

When building scalable applications with Server Actions, consider these patterns:

- **Validation**: Always validate input data on the server, even if you have client-side validation
- **Error Handling**: Return structured error responses that your UI can handle gracefully
- **Caching**: Use \`revalidatePath\` and \`revalidateTag\` strategically to keep your data fresh

Server Actions are particularly powerful when combined with React Server Components, allowing you to build applications that are both performant and developer-friendly.
    `,
  },
  "typescript-best-practices-large-scale-apps": {
    title: "TypeScript Best Practices for Large-Scale Applications",
    excerpt: "A comprehensive guide to writing maintainable TypeScript code in enterprise applications, covering patterns, tooling, and common pitfalls.",
    image: "/blog/typescript-practices.jpg",
    date: "2025-01-08",
    readTime: "12 min read",
    category: "TypeScript",
    content: `
TypeScript has become the de facto standard for building large-scale JavaScript applications. But simply adding types to your code isn't enough—you need to leverage TypeScript's full potential to create truly maintainable codebases.

## Strict Mode is Non-Negotiable

Always enable strict mode in your tsconfig.json. This catches a huge class of bugs at compile time:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true
  }
}
\`\`\`

## Discriminated Unions for State Management

Instead of optional properties, use discriminated unions to model your application state:

\`\`\`typescript
type RequestState<T> = 
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error }
\`\`\`

This makes impossible states unrepresentable and helps TypeScript narrow types automatically.

## Branded Types for Domain Safety

Use branded types to prevent mixing up values that share the same underlying type:

\`\`\`typescript
type UserId = string & { readonly brand: unique symbol }
type OrderId = string & { readonly brand: unique symbol }

function getUser(id: UserId): User { ... }
\`\`\`

Now you can't accidentally pass an OrderId to getUser—the compiler will catch it.

## Key Takeaways

1. **Invest in your types**: Good types are documentation that never goes stale
2. **Avoid any**: Use unknown when you truly don't know the type, then narrow it
3. **Leverage utility types**: Partial, Required, Pick, and Omit are your friends
4. **Keep types close to their usage**: Co-locate types with the code that uses them
    `,
  },
  "optimizing-react-performance-beyond-basics": {
    title: "Optimizing React Performance: Beyond the Basics",
    excerpt: "Deep dive into advanced React optimization techniques including concurrent features, memoization strategies, and bundle optimization.",
    image: "/blog/react-performance.jpg",
    date: "2024-12-28",
    readTime: "10 min read",
    category: "React",
    content: `
Every React developer knows about React.memo and useMemo, but true performance optimization goes much deeper. Let's explore advanced techniques that can make your React applications blazingly fast.

## Understanding Re-renders

Before optimizing, you need to understand why components re-render:

1. State changes
2. Parent re-renders
3. Context value changes
4. Props changes

Use React DevTools Profiler to identify unnecessary re-renders before attempting any optimization.

## Composition Over Memoization

Often, restructuring your component tree is more effective than memoization:

\`\`\`jsx
// Instead of memoizing ExpensiveChild
function Parent({ children }) {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      {children} {/* This won't re-render! */}
    </div>
  )
}

// Usage
<Parent>
  <ExpensiveChild />
</Parent>
\`\`\`

## React 18+ Concurrent Features

Take advantage of React's concurrent features:

- **useTransition**: Mark state updates as non-urgent
- **useDeferredValue**: Defer updating expensive parts of the UI
- **Suspense**: Show fallback UI while content loads

\`\`\`jsx
const [isPending, startTransition] = useTransition()

function handleSearch(query) {
  startTransition(() => {
    setSearchResults(filterResults(query))
  })
}
\`\`\`

## Bundle Optimization

Performance isn't just about runtime—bundle size matters too:

- Use dynamic imports for code splitting
- Analyze your bundle with tools like webpack-bundle-analyzer
- Consider replacing heavy libraries with lighter alternatives

Remember: measure first, optimize second. Premature optimization is the root of all evil.
    `,
  },
  "complete-guide-authentication-nextjs": {
    title: "The Complete Guide to Authentication in Next.js",
    excerpt: "From cookies to JWTs, learn how to implement secure authentication patterns in your Next.js applications with real-world examples.",
    image: "/blog/nextjs-auth.jpg",
    date: "2024-12-15",
    readTime: "15 min read",
    category: "Security",
    content: `
Authentication is one of the most critical aspects of any web application. Getting it wrong can have serious security implications. Let's explore how to implement authentication correctly in Next.js.

## Session vs Token-Based Authentication

**Session-based**: Server stores session data, client gets a session ID cookie. More secure, better for server-rendered apps.

**Token-based (JWT)**: Client stores the token, server validates it. Better for APIs and microservices.

For Next.js apps, I recommend session-based auth with HTTP-only cookies.

## Implementing Secure Authentication

Here's a pattern using Server Actions:

\`\`\`typescript
'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')
  
  // Validate credentials
  const user = await validateCredentials(email, password)
  
  if (!user) {
    return { error: 'Invalid credentials' }
  }
  
  // Create session
  const session = await createSession(user.id)
  
  // Set HTTP-only cookie
  cookies().set('session', session.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7 // 1 week
  })
  
  redirect('/dashboard')
}
\`\`\`

## Security Checklist

1. **Always hash passwords** with bcrypt or Argon2
2. **Use HTTPS** in production
3. **Set secure cookie flags**: httpOnly, secure, sameSite
4. **Implement CSRF protection** for mutations
5. **Rate limit** login attempts
6. **Validate on every request** in middleware

## Middleware for Protected Routes

\`\`\`typescript
// middleware.ts
export async function middleware(request: NextRequest) {
  const session = request.cookies.get('session')
  
  if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  return NextResponse.next()
}
\`\`\`

Security is not a feature—it's a requirement. Take the time to implement authentication correctly from the start.
    `,
  },
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts[slug]
}
