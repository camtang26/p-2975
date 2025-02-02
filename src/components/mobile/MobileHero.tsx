import { useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { VideoBackground } from "../hero/VideoBackground";
import { HeroContent } from "../hero/HeroContent";
import { TouchRipple } from "./TouchRipple";
import { useGestures } from "@/hooks/useGestures";
import { smoothScrollToElement } from "@/utils/smoothScroll";
import { MobileLoadingSkeleton } from "./MobileLoadingSkeleton";

export const MobileHero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const toggleMute = () => setIsMuted(!isMuted);
  const togglePlay = () => setIsPlaying(!isPlaying);

  useGestures({
    onSwipeLeft: () => {
      smoothScrollToElement('services');
    },
    onSwipeRight: () => {
      console.log('Swiped right');
    }
  });

  return (
    <Suspense fallback={<MobileLoadingSkeleton />}>
      <section 
        className="relative w-full aspect-[4/5] flex items-center justify-center overflow-hidden touch-manipulation" 
        role="banner" 
        aria-label="Hero section"
      >
        <VideoBackground
          isMuted={isMuted}
          isPlaying={isPlaying}
          onToggleMute={toggleMute}
          onTogglePlay={togglePlay}
          priority={true}
          onLoad={() => setIsLoading(false)}
        />
        
        {!isLoading && (
          <div 
            className="relative z-[2] flex flex-col items-center justify-center text-center space-y-4 max-w-[90vw] mx-auto px-4"
            style={{ touchAction: 'manipulation' }}
          >
            <h1 className="font-inter text-4xl sm:text-5xl font-bold tracking-[-0.02em] opacity-0 animate-[fadeIn_3s_ease-out_forwards]">
              <span className="text-white inline-block transition-transform duration-300 [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
                Cre8tive AI
              </span>
            </h1>
            <p className="font-inter text-lg sm:text-xl font-medium tracking-[-0.01em] text-white/90 opacity-0 animate-[fadeIn_3s_ease-out_forwards] [text-shadow:0_0_4px_rgba(255,255,255,0.4),0_0_8px_rgba(255,255,255,0.2)]">
              Cutting Edge AI Solutions For Your Business
            </p>
          </div>
        )}
        
        <TouchRipple />
      </section>
    </Suspense>
  );
};