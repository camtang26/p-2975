import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollFade } from "@/components/shared/ScrollFade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type Testimonial } from "../Testimonials";
import { useGestures } from "@/hooks/useGestures";

interface MobileTestimonialCarouselProps {
  testimonials: Testimonial[];
  brandColors: Record<string, string>;
}

export const MobileTestimonialCarousel = ({ 
  testimonials,
  brandColors 
}: MobileTestimonialCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-md mx-auto perspective-1000"
    >
      <CarouselContent className="-ml-2 md:hidden [transform-style:preserve-3d] min-h-[500px]">
        {testimonials.map((testimonial, index) => {
          const color = Object.values(brandColors)[index % Object.values(brandColors).length];
          
          return (
            <CarouselItem 
              key={testimonial.name} 
              className="pl-2 basis-full group"
            >
              <ScrollFade delay={index * 100}>
                <div
                  className={cn(
                    "glass-morphism p-6 rounded-2xl space-y-4",
                    "transition-all duration-500 transform",
                    "group-data-[state=current]:scale-100 group-data-[state=current]:z-20 group-data-[state=current]:opacity-100",
                    "group-data-[state=prev]:scale-75 group-data-[state=prev]:-translate-x-12 group-data-[state=prev]:opacity-40 group-data-[state=prev]:z-10",
                    "group-data-[state=next]:scale-75 group-data-[state=next]:translate-x-12 group-data-[state=next]:opacity-40 group-data-[state=next]:z-10",
                    "relative min-h-[450px] flex flex-col"
                  )}
                  style={{ 
                    background: 'linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.9))',
                    boxShadow: '0 8px 32px -4px rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    '--card-color': color,
                    transform: `
                      perspective(1000px)
                      rotateY(calc(var(--slide-offset, 0) * 45deg))
                      translateZ(calc(var(--slide-offset, 0) * -150px))
                    `
                  } as React.CSSProperties}
                >
                  {/* Quote Icon */}
                  <div className="flex justify-center">
                    <div className="relative group-hover:scale-110 transition-transform duration-300">
                      <div 
                        className="absolute inset-0 blur-xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                        style={{ background: color }}
                      />
                      <Quote 
                        className={cn(
                          "w-4 h-4 relative z-10",
                          "transition-all duration-300",
                          "drop-shadow-[0_0_8px_var(--card-color)]",
                          "group-hover:drop-shadow-[0_0_12px_var(--card-color)]"
                        )}
                        style={{ color }}
                      />
                    </div>
                  </div>

                  <blockquote className="text-sm leading-relaxed text-white/80 italic flex-grow">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="pt-4 border-t border-white/10 mt-auto">
                    <div className="text-base font-semibold text-gradient">
                      {testimonial.name}
                    </div>
                    <div className="text-sm font-medium mt-0.5" style={{ color }}>
                      {testimonial.company}
                    </div>
                    <div className="text-xs text-white/60 mt-0.5">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </ScrollFade>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};