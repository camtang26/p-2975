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
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Handle play/pause through postMessage
  useEffect(() => {
    const message = {
      type: isPlaying ? 'play' : 'pause'
    };
    iframeRef.current?.contentWindow?.postMessage(JSON.stringify(message), '*');
  }, [isPlaying]);

  // Handle mute/unmute through postMessage
  useEffect(() => {
    const message = {
      type: isMuted ? 'mute' : 'unmute'
    };
    iframeRef.current?.contentWindow?.postMessage(JSON.stringify(message), '*');
  }, [isMuted]);

  return (
    <div className="absolute inset-0 z-0">
      {/* Video Container */}
      <div className="relative w-full h-full z-[1]">
        <iframe
          ref={iframeRef}
          src={`https://iframe.mediadelivery.net/embed/376993/56c0d74d-b753-4bd7-82cf-e51101163d42?autoplay=true&loop=true&muted=${isMuted}&controls=false`}
          className="w-full h-full"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            border: 'none'
          }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
          onLoad={() => setIsLoaded(true)}
          title="Cre8tive AI Background Video"
        />
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