import { VideoBackground } from "./hero/VideoBackground";
import { HeroContent } from "./hero/HeroContent";
import { useIsMobile } from "@/hooks/use-mobile";
import { useVideoStore } from "@/stores/useVideoStore";

export const Hero = () => {
  const isMobile = useIsMobile();
  const { isMuted, isPlaying, toggleMute, togglePlay } = useVideoStore();

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
        priority={true}
      />
      <HeroContent />
    </section>
  );
};