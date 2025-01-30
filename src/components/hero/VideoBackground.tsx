import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { VideoControls } from "./video/VideoControls";
import { VimeoPlayer } from "./video/VimeoPlayer";

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

  return (
    <div className="absolute inset-0 z-0">
      <VimeoPlayer
        isMuted={isMuted}
        isPlaying={isPlaying}
        onLoad={() => setIsLoaded(true)}
        onError={(error) => setLoadError(error)}
      />
      
      {/* Loading Indicator */}
      {!isLoaded && !loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      
      {/* Error Message */}
      {loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <p className="text-white text-lg">{loadError}</p>
        </div>
      )}
      
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 z-[2]" 
        aria-hidden="true" 
      />
      
      {/* Controls */}
      {!isMobile && (
        <VideoControls
          isMuted={isMuted}
          isPlaying={isPlaying}
          onToggleMute={onToggleMute}
          onTogglePlay={onTogglePlay}
        />
      )}
    </div>
  );
};