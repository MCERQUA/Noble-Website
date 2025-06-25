import { useRef, useState, useEffect, RefObject } from 'react';

interface UseOptimizedImageProps {
  src: string;
  alt: string;
  onLoad?: () => void;
  onError?: () => void;
}

interface UseOptimizedImageReturn {
  src: string;
  alt: string;
  isLoading: boolean;
  isLoaded: boolean;
  hasError: boolean;
  ref: RefObject<HTMLDivElement>;
}

export function useOptimizedImage({
  src,
  alt,
  onLoad,
  onError,
}: UseOptimizedImageProps): UseOptimizedImageReturn {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!src) {
      setIsLoading(false);
      setHasError(true);
      return;
    }

    const img = new Image();
    
    img.onload = () => {
      setIsLoading(false);
      setIsLoaded(true);
      setHasError(false);
      onLoad?.();
    };

    img.onerror = () => {
      setIsLoading(false);
      setIsLoaded(false);
      setHasError(true);
      onError?.();
    };

    // Start loading the image
    img.src = src;

    // Cleanup function
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, onLoad, onError]);

  return {
    src,
    alt,
    isLoading,
    isLoaded,
    hasError,
    ref,
  };
}

// Alternative hook with intersection observer for lazy loading
export function useOptimizedImageLazy({
  src,
  alt,
  onLoad,
  onError,
}: UseOptimizedImageProps): UseOptimizedImageReturn {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Load image when shouldLoad is true
  useEffect(() => {
    if (!shouldLoad || !src) {
      if (!src) {
        setIsLoading(false);
        setHasError(true);
      }
      return;
    }

    const img = new Image();
    
    img.onload = () => {
      setIsLoading(false);
      setIsLoaded(true);
      setHasError(false);
      onLoad?.();
    };

    img.onerror = () => {
      setIsLoading(false);
      setIsLoaded(false);
      setHasError(true);
      onError?.();
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [shouldLoad, src, onLoad, onError]);

  return {
    src,
    alt,
    isLoading,
    isLoaded,
    hasError,
    ref,
  };
}
