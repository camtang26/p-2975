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
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Debug loading state
  useEffect(() => {
    console.log("Video loading state:", { isLoaded, loadError });
  }, [isLoaded, loadError]);

  // Handle iframe load error
  const handleIframeError = () => {
    console.error("Iframe failed to load");
    setLoadError("Failed to load video");
    setIsLoaded(false);
  };

  // Handle successful iframe load
  const handleIframeLoad = () => {
    console.log("Iframe loaded successfully");
    setIsLoaded(true);
    setLoadError(null);
  };

  // Handle play/pause through postMessage
  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      try {
        const message = {
          type: isPlaying ? 'play' : 'pause'
        };
        console.log("Sending play/pause message:", message);
        iframeRef.current.contentWindow.postMessage(JSON.stringify(message), '*');
      } catch (error) {
        console.error("Error sending play/pause message:", error);
      }
    }
  }, [isPlaying]);

  // Handle mute/unmute through postMessage
  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      try {
        const message = {
          type: isMuted ? 'mute' : 'unmute'
        };
        console.log("Sending mute/unmute message:", message);
        iframeRef.current.contentWindow.postMessage(JSON.stringify(message), '*');
      } catch (error) {
        console.error("Error sending mute/unmute message:", error);
      }
    }
  }, [isMuted]);

  // Construct iframe URL with all necessary parameters
  const iframeUrl = new URL("https://iframe.mediadelivery.net/embed/376993/56c0d74d-b753-4bd7-82cf-e51101163d42");
  iframeUrl.searchParams.set("autoplay", "true");
  iframeUrl.searchParams.set("loop", "true");
  iframeUrl.searchParams.set("muted", isMuted.toString());
  iframeUrl.searchParams.set("controls", "false");
  iframeUrl.searchParams.set("preload", "auto");

  return (
    <div className="absolute inset-0 z-0">
      {/* Video Container */}
      <div className="relative w-full h-full z-[1]">
        <iframe
          ref={iframeRef}
          src={iframeUrl.toString()}
          className="w-full h-full"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            border: 'none'
          }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          title="Cre8tive AI Background Video"
        />
        
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