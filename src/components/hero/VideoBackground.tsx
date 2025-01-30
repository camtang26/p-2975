import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface VideoBackgroundProps {
  isMuted: boolean;
  isPlaying: boolean;
  onToggleMute: () => void;
  onTogglePlay: () => void;
  priority?: boolean;
}

export const VideoBackground = ({
  isMuted,
  isPlaying,
  onToggleMute,
  onTogglePlay,
  priority = false
}: VideoBackgroundProps) => {
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Debug loading state
  useEffect(() => {
    console.log("Video loading state:", { isLoaded, loadError });
  }, [isLoaded, loadError]);

  // Handle video load error
  const handleVideoError = () => {
    console.error("Video failed to load");
    setLoadError("Failed to load video");
    setIsLoaded(false);
  };

  // Handle successful video load
  const handleVideoLoad = () => {
    console.log("Video loaded successfully");
    setIsLoaded(true);
    setLoadError(null);
  };

  // Handle play/pause
  useEffect(() => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      } catch (error) {
        console.error("Error controlling video playback:", error);
      }
    }
  }, [isPlaying]);

  // Handle mute/unmute
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div className="absolute inset-0 z-0">
      {/* Video Container */}
      <div className="relative w-full h-full z-[1]">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          poster="/lovable-uploads/490c3210-44c9-4dc7-b102-1d79c9852bb3.png"
        >
          <source 
            src="https://cdn.gpteng.co/videos/cre8tive-hero.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Error Message */}
        {loadError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <p className="text-white text-lg">{loadError}</p>
          </div>
        )}
      </div>
      
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 z-[2]" 
        aria-hidden="true" 
      />
      
      {/* Controls */}
      {!isMobile && (
        <div className="absolute bottom-8 right-8 flex gap-4 z-[3]">
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