import { useEffect, useRef, useState } from 'react';

interface ScrollFadeProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const ScrollFade = ({ children, delay = 0, className = '' }: ScrollFadeProps) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay]);

  return (
    <div 
      ref={domRef}
      className={`scroll-fade ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        // Add containment for better performance
        contain: 'layout style paint',
      }}
    >
      {children}
    </div>
  );
};