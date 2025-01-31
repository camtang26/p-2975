import { useState, useRef } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";
import { VideoErrorBoundary } from "../error/VideoErrorBoundary";
import { videoLogger } from "@/utils/videoLogger";
import { useVimeoPlayer } from "@/hooks/use-vimeo-player";

interface VideoBackgroundProps {
  isMuted: boolean;
  isPlaying: boolean;
  onToggleMute: () => void;
  onTogglePlay: () => void;
  priority?: boolean;
}

const VideoBackgroundContent = ({
  isMuted,
  isPlaying,
  onToggleMute,
  onTogglePlay,
  priority = false
}: VideoBackgroundProps) => {
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const { error, isReady, setMuted, play, pause } = useVimeoPlayer(containerRef, {
    url: "https://player.vimeo.com/video/1051821551?h=cff11aa998",
    background: true,
    autoplay: true,
    loop: true,
    muted: isMuted
  });

  // Effect to handle video state changes
  useState(() => {
    videoLogger.info('Component mounted', { isMuted, isPlaying });
    return () => {
      videoLogger.info('Component unmounted');
    };
  }, []);

  // Effect to handle play/pause state
  useState(() => {
    if (isReady) {
      if (isPlaying) {
        play().catch(error => {
          toast({
            title: "Playback Error",
            description: "Unable to play video. Please try again.",
            variant: "destructive"
          });
        });
      } else {
        pause().catch(error => {
          videoLogger.error(error, 'Error pausing video');
        });
      }
    }
    videoLogger.info('Play state changed', { isPlaying });
  }, [isPlaying, isReady, play, pause, toast]);

  // Effect to handle mute state
  useState(() => {
    if (isReady) {
      setMuted(isMuted).catch(error => {
        videoLogger.error(error, 'Error setting volume');
      });
    }
    videoLogger.info('Mute state changed', { isMuted });
  }, [isMuted, isReady, setMuted]);

  // Update loading state based on player ready status
  useState(() => {
    if (isReady) {
      setIsLoaded(true);
      setLoadError(null);
    }
  }, [isReady]);

  // Update error state if player fails to initialize
  useState(() => {
    if (error) {
      setLoadError("Failed to load video");
      toast({
        title: "Video Loading Issue",
        description: "Failed to load the video. Please refresh the page.",
        variant: "destructive"
      });
    }
  }, [error, toast]);

  return (
    <div className="absolute inset-0 z-0">
      <div 
        ref={containerRef}
        className="relative w-full h-full z-[1] overflow-hidden"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
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

export const VideoBackground = (props: VideoBackgroundProps) => {
  return (
    <VideoErrorBoundary>
      <VideoBackgroundContent {...props} />
    </VideoErrorBoundary>
  );
};