import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Step } from "../Step";
import { useGestures } from "@/hooks/useGestures";

interface Step {
  number: number;
  title: string;
  description: string;
  Icon: any;
  color: string;
}

interface Props {
  steps: Step[];
}

export const MobileHowItWorksCarousel = ({ steps }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      } else if (deltaX < 0 && currentIndex < steps.length - 1) {
        setCurrentIndex(prev => prev + 1);
      }
    }
  };

  const getSlideStyle = (index: number) => {
    const offset = index - currentIndex;
    const translateX = offset * 40;
    const translateZ = Math.abs(offset) * -150;
    const rotateY = offset * 30;
    const scale = offset === 0 ? 1 : 0.85;
    const opacity = Math.max(1 - Math.abs(offset) * 0.3, 0);

    return {
      transform: `
        translate(-50%, -50%)
        translateX(${translateX}%) 
        translateZ(${translateZ}px)
        rotateY(${rotateY}deg)
        scale(${scale})
      `,
      opacity,
      zIndex: Math.abs(offset) === 0 ? 1 : 0,
      pointerEvents: Math.abs(offset) === 0 ? "auto" : "none" as const,
    };
  };

  return (
    <div 
      className={cn(
        "md:hidden relative w-full overflow-hidden",
        "h-[500px] flex flex-col items-center justify-center"
      )}
    >
      <div 
        ref={containerRef}
        className={cn(
          "relative w-full h-full perspective-1000",
          "flex items-center justify-center"
        )}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className={cn(
            "absolute inset-0",
            "flex items-center justify-center",
            "transform-gpu"
          )}
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                "absolute top-1/2 left-1/2 origin-center",
                "transform-gpu will-change-transform",
                "w-full max-w-[260px]"
              )}
              style={getSlideStyle(index)}
            >
              <Step 
                {...step} 
                className={cn(
                  "scale-90",
                  "h-[360px]"
                )}
              />
            </div>
          ))}
        </div>

        <div 
          className={cn(
            "absolute bottom-6 left-0 right-0",
            "flex justify-center gap-2"
          )}
          role="tablist"
          aria-label="Carousel navigation"
        >
          {steps.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={currentIndex === index}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                "bg-white/20 hover:bg-white/40",
                currentIndex === index && "bg-white/90 w-4"
              )}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};