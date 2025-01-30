import { useState, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface VideoBackgroundProps {
  isMuted: boolean;
  isPlaying: boolean;
  onToggleMute: () => void;
  onTogglePlay: () => void;
}

export const VideoBackground = ({
  isMuted,
  isPlaying,
  onToggleMute,
  onTogglePlay
}: VideoBackgroundProps) => {
  const isMobile = useIsMobile();
  const [videoError, setVideoError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.addEventListener('error', () => setVideoError(true));
      video.addEventListener('loadeddata', () => setIsLoaded(true));
      return () => {
        video.removeEventListener('error', () => setVideoError(true));
        video.removeEventListener('loadeddata', () => setIsLoaded(true));
      };
    }
  }, []);

  if (videoError) {
    return (
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"
        role="img"
        aria-label="Fallback background gradient"
      />
    );
  }

  return (
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover"
        aria-label="Background video showcasing Cre8tive AI capabilities"
        ref={(el) => {
          if (el) {
            isPlaying ? el.play() : el.pause();
          }
        }}
        poster="/placeholder.svg"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        <source 
          src="/hero-video.mp4" 
          type="video/mp4" 
        />
        <track 
          kind="captions" 
          src="/captions.vtt" 
          label="English captions" 
          default 
        />
        Your browser does not support the video tag.
      </video>
      
      <div 
        className="absolute inset-0 bg-black/50 z-[1]" 
        aria-hidden="true" 
      />
      
      {!isMobile && (
        <div className="absolute bottom-8 right-8 flex gap-4 z-[2]">
          <Button
            variant="outline"
            size="icon"
            onClick={onToggleMute}
            className="bg-black/20 border-white/10 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? 
              <VolumeX className="h-4 w-4" aria-hidden="true" /> : 
              <Volume2 className="h-4 w-4" aria-hidden="true" />
            }
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={onTogglePlay}
            className="bg-black/20 border-white/10 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? 
              <Pause className="h-4 w-4" aria-hidden="true" /> : 
              <Play className="h-4 w-4" aria-hidden="true" />
            }
          </Button>
        </div>
      )}
    </div>
  );
};