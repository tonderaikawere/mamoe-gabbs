import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
}

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjNmNGY2Ii8+CjxwYXRoIGQ9Ik0yMCAyOEMxNi42ODYzIDI4IDEzLjUwNTQgMjYuNjgzOSAxMS4xNzE2IDI0LjM1MDNDOC44Mzc4NCAyMi4wMTY3IDcuNTIxNzMgMTguODM1OCA3LjUyMTczIDE1LjUyMTdDNy41MjE3MyAxMi4yMDc2IDguODM3ODQgOS4wMjY3MyAxMS4xNzE2IDYuNjkzMDdDMTMuNTA1NCA0LjM1OTQxIDE2LjY4NjMgMy4wNDM0OCAyMCAzLjA0MzQ4QzIzLjMxMzcgMy4wNDM0OCAyNi40OTQ2IDQuMzU5NDEgMjguODI4NCA2LjY5MzA3QzMxLjE2MjIgOS4wMjY3MyAzMi40NzgzIDEyLjIwNzYgMzIuNDc4MyAxNS41MjE3QzMyLjQ3ODMgMTguODM1OCAzMS4xNjIyIDIyLjAxNjcgMjguODI4NCAyNC4zNTAzQzI2LjQ5NDYgMjYuNjgzOSAyMy4zMTM3IDI4IDIwIDI4WiIgZmlsbD0iIzllYTNhOCIvPgo8L3N2Zz4K'
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const shouldLoad = loading === 'eager' || isInView;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={shouldLoad ? src : placeholder}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        onLoad={handleLoad}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } w-full h-full object-cover`}
        decoding="async"
      />
      {!isLoaded && shouldLoad && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
    </div>
  );
};

export default OptimizedImage;
