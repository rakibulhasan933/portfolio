'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
    className?: string;
    sizes?: string;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    onLoad?: () => void;
}

const OptimizedImage = ({
    src,
    alt,
    width,
    height,
    priority = false,
    className = '',
    sizes,
    placeholder = 'blur',
    blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+JNuBNKTRQyM8rnJA7g==",
    onLoad
}: OptimizedImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleLoad = () => {
        setIsLoading(false);
        onLoad?.();
    };

    const handleError = () => {
        setIsLoading(false);
        setError(true);
    };

    if (error) {
        return (
            <div
                className={`${className} bg-slate-800 flex items-center justify-center text-slate-400 rounded-lg`}
                style={{ width, height }}
            >
                <span className="text-sm">Failed to load image</span>
            </div>
        );
    }

    return (
        <div className={`relative ${isLoading ? 'animate-pulse bg-slate-800 rounded-lg' : ''}`}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority={priority}
                className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                sizes={sizes}
                placeholder={placeholder}
                blurDataURL={blurDataURL}
                onLoad={handleLoad}
                onError={handleError}
                quality={90}
            />
        </div>
    );
};

export default OptimizedImage;
