import { useState } from "react";
import { VideoBackground } from "./hero/VideoBackground";
import { HeroContent } from "./hero/HeroContent";
import { NetworkVisualization } from "./agents/NetworkVisualization";

export const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => setIsMuted(!isMuted);
  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden" 
      role="banner" 
      aria-label="Hero section"
    >
      <div className="absolute inset-0 z-0">
        <NetworkVisualization />
      </div>
      <div className="relative z-10">
        <HeroContent />
      </div>
    </section>
  );
};