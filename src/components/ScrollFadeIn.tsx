import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { cn } from "@/lib/utils";

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export const ScrollFadeIn = ({
  children,
  className,
  threshold = 0.1,
  rootMargin = "50px",
}: ScrollFadeInProps) => {
  const { ref, isVisible } = useScrollFadeIn({ threshold, rootMargin });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </div>
  );
};