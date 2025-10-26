'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
    useEffect(() => {
        // Monitor Core Web Vitals
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                // Log performance metrics for monitoring
                if (entry.entryType === 'largest-contentful-paint') {
                    console.log('LCP:', entry.startTime);
                }

                if (entry.entryType === 'first-input') {
                    const fidEntry = entry as PerformanceEventTiming;
                    console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
                }

                if (entry.entryType === 'layout-shift') {
                    const clsEntry = entry as any;
                    if (!clsEntry.hadRecentInput) {
                        console.log('CLS:', clsEntry.value);
                    }
                }
            }
        });

        // Observe Core Web Vitals
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

        // Monitor resource loading
        const resourceObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.duration > 1000) { // Log slow resources
                    console.warn('Slow resource:', entry.name, entry.duration);
                }
            }
        });

        resourceObserver.observe({ entryTypes: ['resource'] });

        return () => {
            observer.disconnect();
            resourceObserver.disconnect();
        };
    }, []);

    return null;
}
