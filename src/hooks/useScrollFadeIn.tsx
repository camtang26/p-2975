import { useEffect, useRef, useState } from "react";

export const useScrollFadeIn = (options = {
  threshold: 0.1,
  rootMargin: "50px",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once element is visible, keep it visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after fade in
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: options.threshold,
        rootMargin: options.rootMargin,
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
  }, [options.threshold, options.rootMargin]);

  return { ref, isVisible };
};
