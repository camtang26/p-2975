import { useRef, useState } from 'react';
import { cn } from "@/lib/utils";
import { ScrollFade } from "@/components/shared/ScrollFade";
import { Step } from "../Step";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type StepType } from "../types";

interface MobileHowItWorksCarouselProps {
  steps: StepType[];
}

export const MobileHowItWorksCarousel = ({ steps }: MobileHowItWorksCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative perspective-1000 w-full max-w-md mx-auto">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
        onSelect={(index) => setActiveIndex(index)}
      >
        <CarouselContent className="-ml-2 [transform-style:preserve-3d]">
          {steps.map((step, index) => (
            <CarouselItem 
              key={step.number} 
              className="pl-2 basis-full group"
            >
              <ScrollFade delay={index * 100}>
                <div
                  className={cn(
                    "transition-all duration-500 transform",
                    "group-data-[state=current]:scale-100 group-data-[state=current]:z-20",
                    "group-data-[state=prev]:scale-90 group-data-[state=prev]:-translate-x-4 group-data-[state=prev]:opacity-50 group-data-[state=prev]:z-10",
                    "group-data-[state=next]:scale-90 group-data-[state=next]:translate-x-4 group-data-[state=next]:opacity-50 group-data-[state=next]:z-10",
                    "relative"
                  )}
                  style={{ 
                    transform: `
                      perspective(1000px)
                      rotateY(calc(var(--slide-offset, 0) * 45deg))
                      translateZ(calc(var(--slide-offset, 0) * -100px))
                    `
                  }}
                >
                  <Step {...step} />
                </div>
              </ScrollFade>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>

      {/* Swipe Indicator - Mobile Only */}
      <div className="flex items-center justify-center gap-4 mt-6 text-white/80">
        <ChevronLeft className="w-5 h-5 animate-pulse" />
        <span className="text-sm font-medium">Swipe to Explore</span>
        <ChevronRight className="w-5 h-5 animate-pulse" />
      </div>
    </div>
  );
};