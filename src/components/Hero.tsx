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
      className="relative min-h-[100svh] md:h-[75vh] flex items-center justify-center overflow-hidden" 
      role="banner" 
      aria-label="Hero section"
    >
      <VideoBackground
        isMuted={isMuted}
        isPlaying={isPlaying}
        onToggleMute={toggleMute}
        onTogglePlay={togglePlay}
      />
      <HeroContent />
    </section>
  );
};