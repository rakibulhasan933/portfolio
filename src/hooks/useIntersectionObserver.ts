import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useIntersectionObserver({
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
}: UseIntersectionObserverProps = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const targetRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const target = targetRef.current;
        if (!target) return;

        if (hasTriggered && triggerOnce) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsIntersecting(entry.isIntersecting);

                if (entry.isIntersecting && triggerOnce) {
                    setHasTriggered(true);
                }
            },
            {
                threshold,
                rootMargin
            }
        );

        observer.observe(target);

        return () => {
            observer.unobserve(target);
        };
    }, [threshold, rootMargin, triggerOnce, hasTriggered]);

    return { targetRef, isIntersecting };
}

// utils/performance.ts - Performance utilities
export const performanceUtils = {
    // Debounce function for performance optimization
    debounce: <T extends (...args: any[]) => void>(
        func: T,
        wait: number
    ): ((...args: Parameters<T>) => void) => {
        let timeout: NodeJS.Timeout;
        return (...args: Parameters<T>) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    },

    // Throttle function for scroll events
    throttle: <T extends (...args: any[]) => void>(
        func: T,
        limit: number
    ): ((...args: Parameters<T>) => void) => {
        let inThrottle: boolean;
        return (...args: Parameters<T>) => {
            if (!inThrottle) {
                func(...args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    },

    // Lazy load images when they enter viewport
    lazyLoadImage: (img: HTMLImageElement, src: string) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    img.src = src;
                    img.classList.remove('blur');
                    observer.unobserve(img);
                }
            });
        });
        observer.observe(img);
    },

    // Measure and log performance metrics
    measurePerformance: (name: string, fn: () => void) => {
        performance.mark(`${name}-start`);
        fn();
        performance.mark(`${name}-end`);
        performance.measure(name, `${name}-start`, `${name}-end`);

        const measure = performance.getEntriesByName(name)[0];
        console.log(`${name}: ${measure.duration.toFixed(2)}ms`);

        performance.clearMarks(`${name}-start`);
        performance.clearMarks(`${name}-end`);
        performance.clearMeasures(name);
    },

    // Check if device has slow connection
    isSlowConnection: (): boolean => {
        const connection = (navigator as any).connection;
        if (!connection) return false;

        return connection.effectiveType === 'slow-2g' ||
            connection.effectiveType === '2g' ||
            connection.saveData === true;
    },

    // Preload critical resources
    preloadResource: (href: string, as: string, type?: string) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        if (type) link.type = type;
        document.head.appendChild(link);
    }
};

// Performance monitoring constants
export const PERFORMANCE_THRESHOLDS = {
    LCP: 2500, // Largest Contentful Paint should be < 2.5s
    FID: 100,  // First Input Delay should be < 100ms
    CLS: 0.1,  // Cumulative Layout Shift should be < 0.1
    FCP: 1800, // First Contentful Paint should be < 1.8s
    TTFB: 800  // Time to First Byte should be < 800ms
};

export const reportWebVitals = (metric: any) => {
    const { name, value } = metric;

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
        console.log(`${name}: ${value}`);
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
        // Replace with your analytics service
        // analytics.track('Web Vitals', { metric: name, value });
    }
};

// Critical performance optimizations summary:
/*
Performance Optimizations Implemented:

1. **Time to First Byte (TTFB)**:
   - Optimized Next.js configuration
   - Service Worker for caching
   - Resource hints (preconnect, dns-prefetch)
   - Critical CSS inlining

2. **First Contentful Paint (FCP)**:
   - Font optimization with font-display: swap
   - Critical above-the-fold styles
   - Preloading critical resources
   - Reduced initial bundle size

3. **Largest Contentful Paint (LCP)**:
   - Image optimization with Next.js Image
   - WebP format for images
   - Priority loading for above-fold images
   - Lazy loading for below-fold content

4. **First Input Delay (FID)**:
   - Code splitting and lazy loading
   - Reduced JavaScript bundle sizes
   - Optimized event handlers
   - Debouncing and throttling

5. **Cumulative Layout Shift (CLS)**:
   - Defined image dimensions
   - Placeholder content
   - CSS containment
   - Stable layout structure

6. **Interaction to Next Paint (INP)**:
   - Optimized animations with GPU acceleration
   - Reduced motion for accessibility
   - Efficient React rendering with memo
   - Throttled scroll events

Additional optimizations:
- Service Worker for caching
- Bundle splitting and optimization
- Accessible focus management
- SEO optimization with structured data
- Performance monitoring and reporting
*/