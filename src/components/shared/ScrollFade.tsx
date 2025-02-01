import { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface ScrollFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollFade = ({ children, className, delay = 0 }: ScrollFadeProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the device prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply optimized animations based on device preferences
            setTimeout(() => {
              if (prefersReducedMotion) {
                if (ref.current) {
                  ref.current.style.opacity = '1';
                  ref.current.style.transform = 'none';
                }
              } else {
                entry.target.classList.add('fade-in-visible');
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      // Add will-change for performance optimization
      currentRef.style.willChange = 'opacity, transform';
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
        // Clean up will-change
        currentRef.style.willChange = 'auto';
      }
    };
  }, [delay]);

  return (
    <div 
      ref={ref}
      className={cn(
        "opacity-0 translate-y-8 transition-all duration-700 ease-out",
        "fade-in-visible:opacity-100 fade-in-visible:translate-y-0",
        "transform-gpu",
        className
      )}
      style={{
        transitionDuration: window.matchMedia('(max-width: 768px)').matches ? '500ms' : '700ms'
      }}
    >
      {children}
    </div>
  );
};