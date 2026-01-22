'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface AnimatedHeroTextProps {
  text: string
  className?: string
}

export function AnimatedHeroText({ text, className = '' }: AnimatedHeroTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Split text into words
    const words = text.split(' ')
    const container = containerRef.current
    container.innerHTML = ''

    // Create span for each word
    words.forEach((word, idx) => {
      const span = document.createElement('span')
      span.textContent = word + ' '
      span.style.display = 'inline-block'
      span.style.opacity = '0'
      container.appendChild(span)
    })

    const spans = container.querySelectorAll('span')

    // Animate each word with stagger
    gsap.fromTo(
      spans,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
      }
    )
  }, [text])

  return <div ref={containerRef} className={className} />
}
