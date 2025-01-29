import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { useScrollFade } from "@/hooks/use-scroll-fade";

interface ScrollFadeProps extends HTMLAttributes<HTMLDivElement> {
  threshold?: number;
  rootMargin?: string;
  children: React.ReactNode;
}

export const ScrollFade = forwardRef<HTMLDivElement, ScrollFadeProps>(
  ({ children, className, threshold, rootMargin, ...props }, _ref) => {
    const { ref, isVisible } = useScrollFade({ threshold, rootMargin });

    return (
      <div
        ref={ref}
        className={cn(
          "transition-all duration-1000 ease-in-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ScrollFade.displayName = "ScrollFade";