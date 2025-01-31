import { useEffect, useRef } from "react";
import Player from "@vimeo/player";
import { useToast } from "../ui/use-toast";

interface VimeoPlayerProps {
  videoId: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
  onReady?: () => void;
  onError?: (error: Error) => void;
}

const VimeoPlayer = ({
  videoId,
  autoplay = false,
  loop = false,
  muted = false,
  className = "",
  onReady,
  onError
}: VimeoPlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (containerRef.current && !playerRef.current) {
      const iframeSrc = `https://player.vimeo.com/video/${videoId}?h=cff11aa998&background=1&autoplay=${autoplay ? 1 : 0}&loop=${loop ? 1 : 0}&muted=${muted ? 1 : 0}`;
      const iframe = document.createElement("iframe");
      iframe.src = iframeSrc;
      iframe.allow = "autoplay; fullscreen; picture-in-picture";
      iframe.style.position = "absolute";
      iframe.style.top = "50%";
      iframe.style.left = "50%";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.transform = "translate(-50%, -50%)";
      iframe.style.border = "none";
      
      containerRef.current.appendChild(iframe);
      
      try {
        playerRef.current = new Player(iframe);
        
        playerRef.current.ready().then(() => {
          console.log("Vimeo player is ready");
          onReady?.();
        }).catch(error => {
          console.error("Vimeo player failed to initialize:", error);
          onError?.(error);
          toast({
            title: "Video Loading Issue",
            description: "Failed to load the video. Please refresh the page.",
            variant: "destructive"
          });
        });
      } catch (error) {
        console.error("Error creating Vimeo player:", error);
        onError?.(error as Error);
      }
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [videoId, autoplay, loop, muted, onReady, onError, toast]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full ${className}`}
      role="presentation"
    />
  );
};

export default VimeoPlayer;