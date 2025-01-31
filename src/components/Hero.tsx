import { useState } from "react";
import { VideoBackground } from "./hero/VideoBackground";
import { HeroContent } from "./hero/HeroContent";
import { useIsMobile } from "@/hooks/use-mobile";

export const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const isMobile = useIsMobile();

  const toggleMute = () => setIsMuted(!isMuted);
  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <section 
      className="relative w-full aspect-[18/9] md:aspect-[19/9] flex items-center justify-center overflow-hidden" 
      role="banner" 
      aria-label="Hero section"
    >
      <VideoBackground
        isMuted={isMuted}
        isPlaying={isPlaying}
        onToggleMute={toggleMute}
        onTogglePlay={togglePlay}
        priority={true} // Add priority to ensure fast loading for hero video
      />
      <HeroContent />
    </section>
  );
};