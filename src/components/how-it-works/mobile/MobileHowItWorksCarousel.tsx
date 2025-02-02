import { useState, useEffect } from 'react';
import { Step } from '../Step';
import { cn } from '@/lib/utils';
import { useGestures } from '@/hooks/useGestures';
import { LucideIcon } from 'lucide-react';

interface StepData {
  number: number;
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
}

interface MobileHowItWorksCarouselProps {
  steps: StepData[];
}

export const MobileHowItWorksCarousel = ({ steps }: MobileHowItWorksCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeLeft = () => {
    setCurrentIndex((prev) => (prev + 1) % steps.length);
  };

  const handleSwipeRight = () => {
    setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  useGestures({ onSwipeLeft: handleSwipeLeft, onSwipeRight: handleSwipeRight });

  return (
    <div className="relative w-full overflow-hidden h-[500px] perspective-1000">
      <div className="relative w-full h-full">
        {steps.map((step, index) => {
          const offset = index - currentIndex;
          const isActive = index === currentIndex;
          
          return (
            <div
              key={step.number}
              className={cn(
                "absolute top-0 left-0 w-full h-full transition-all duration-500",
                "transform-gpu will-change-transform",
              )}
              style={{
                transform: `
                  translateX(${offset * 100}%) 
                  translateZ(${isActive ? 0 : -200}px) 
                  scale(${isActive ? 1 : 0.8})
                  rotateY(${offset * -15}deg)
                `,
                opacity: Math.max(1 - Math.abs(offset) * 0.5, 0),
                zIndex: steps.length - Math.abs(offset),
              }}
            >
              <Step {...step} />
            </div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {steps.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex ? "bg-white" : "bg-white/30"
            )}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};