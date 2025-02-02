import { useState, useRef } from 'react';
import { Step } from '../Step';
import { cn } from '@/lib/utils';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < steps.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }

    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const getSlideStyle = (index: number) => {
    const offset = index - currentIndex;
    const translateX = offset * 50; // Reduced from 100% to 50% to show adjacent slides
    const translateZ = Math.abs(offset) * -150; // Push back inactive slides
    const rotateY = offset * 30; // Softer rotation (30deg instead of 45deg)
    const scale = offset === 0 ? 1 : 0.85; // Scale down inactive slides
    const opacity = Math.max(1 - Math.abs(offset) * 0.3, 0);

    return {
      transform: `
        translateX(${translateX}%) 
        translateZ(${translateZ}px)
        rotateY(${rotateY}deg)
        scale(${scale})
      `,
      opacity,
      zIndex: steps.length - Math.abs(offset),
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <div className="md:hidden relative w-full h-[600px] flex flex-col justify-center items-center py-8">
      {/* 3D Container */}
      <div 
        ref={containerRef}
        className="relative w-full h-full perspective-1000 flex-1"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel Track */}
        <div className="absolute inset-0 flex items-center justify-center transform-gpu">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                "absolute left-1/2 transform-gpu will-change-transform",
                "w-full max-w-[300px]"
              )}
              style={getSlideStyle(index)}
              role="group"
              aria-label={`Step ${step.number}: ${step.title}`}
            >
              <Step {...step} />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div 
          className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4"
          role="tablist"
          aria-label="Carousel navigation"
        >
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex 
                  ? "bg-white w-4" 
                  : "bg-white/30"
              )}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};