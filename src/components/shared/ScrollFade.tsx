import { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface ScrollFadeProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollFade = ({ children, className }: ScrollFadeProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
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
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div 
      ref={ref}
      className={cn(
        "opacity-0 translate-y-8 transition-all duration-700 ease-out",
        "fade-in-visible:opacity-100 fade-in-visible:translate-y-0",
        className
      )}
    >
      {children}
    </div>
  );
};