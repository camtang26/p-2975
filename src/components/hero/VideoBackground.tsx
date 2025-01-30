import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "../ui/use-toast";
import Player from "@vimeo/player";

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
  const playerRef = useRef<Player | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const initializePlayer = async () => {
      if (containerRef.current && !playerRef.current) {
        try {
          console.log("Initializing Vimeo player...");
          const iframe = document.createElement('iframe');
          iframe.src = "https://player.vimeo.com/video/905188141?h=cff11aa998&background=1&autoplay=1&loop=1&autopause=0&muted=1";
          iframe.allow = "autoplay; fullscreen; picture-in-picture";
          iframe.style.position = "absolute";
          iframe.style.top = "50%";
          iframe.style.left = "50%";
          iframe.style.width = "100%";
          iframe.style.height = "100%";
          iframe.style.transform = "translate(-50%, -50%)";
          iframe.style.border = "none";
          
          containerRef.current.appendChild(iframe);
          
          playerRef.current = new Player(iframe);
          
          await playerRef.current.ready();
          console.log("Vimeo player ready");
          setIsLoaded(true);
          setLoadError(null);
          
          await playerRef.current.setVolume(0);
          await playerRef.current.setLoop(true);
          await playerRef.current.play();
          
        } catch (error) {
          console.error("Vimeo player initialization error:", error);
          setLoadError("Failed to load video");
          toast({
            title: "Video Loading Issue",
            description: "Failed to load the video. Please refresh the page.",
            variant: "destructive"
          });
        }
      }
    };

    initializePlayer();

    return () => {
      if (playerRef.current) {
        console.log("Cleaning up Vimeo player");
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [toast]);

  // Handle play/pause
  useEffect(() => {
    if (playerRef.current && isLoaded) {
      if (isPlaying) {
        playerRef.current.play().catch(error => {
          console.error("Error playing video:", error);
          toast({
            title: "Playback Error",
            description: "Unable to play video. Please try again.",
            variant: "destructive"
          });
        });
      } else {
        playerRef.current.pause().catch(console.error);
      }
    }
  }, [isPlaying, isLoaded, toast]);

  // Handle mute/unmute
  useEffect(() => {
    if (playerRef.current && isLoaded) {
      playerRef.current.setVolume(isMuted ? 0 : 1).catch(console.error);
    }
  }, [isMuted, isLoaded]);

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