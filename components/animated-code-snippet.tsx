'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface AnimatedCodeSnippetProps {
  code: string
  language?: string
  title?: string
}

export function AnimatedCodeSnippet({ code, language = 'javascript', title }: AnimatedCodeSnippetProps) {
  const codeRef = useRef<HTMLPreElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!codeRef.current) return

    const lines = codeRef.current.querySelectorAll('.code-line')
    
    gsap.fromTo(
      lines,
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.out',
      }
    )

    // Animate the container glow
    gsap.fromTo(
      containerRef.current,
      {
        boxShadow: '0 0 20px rgba(114, 214, 165, 0)',
      },
      {
        boxShadow: '0 0 30px rgba(114, 214, 165, 0.3)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      }
    )
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative rounded-lg overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border border-primary/20 hover:border-primary/50 transition-colors duration-300"
    >
      {title && (
        <div className="bg-slate-800/50 px-6 py-3 border-b border-primary/10 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="ml-4 text-sm font-mono text-primary">{title}</span>
        </div>
      )}
      
      <pre
        ref={codeRef}
        className="p-6 text-sm overflow-x-auto font-mono text-gray-100"
      >
        {code.split('\n').map((line, idx) => (
          <div key={idx} className="code-line">
            <span className="text-primary/60 mr-4 inline-block w-8 text-right select-none">{idx + 1}</span>
            <code>{line}</code>
          </div>
        ))}
      </pre>
    </div>
  )
}
