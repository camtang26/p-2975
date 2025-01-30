import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import { useToast } from "../../ui/use-toast";

interface VimeoPlayerProps {
  isMuted: boolean;
  isPlaying: boolean;
  onLoad: () => void;
  onError: (error: string) => void;
}

export const VimeoPlayer = ({
  isMuted,
  isPlaying,
  onLoad,
  onError
}: VimeoPlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (containerRef.current && !playerRef.current) {
      const iframe = document.createElement('iframe');
      iframe.src = "https://player.vimeo.com/video/1051821551?h=cff11aa998&background=1&autoplay=1&loop=1&autopause=0";
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
      
      playerRef.current.ready().then(() => {
        console.log("Vimeo player is ready");
        onLoad();
        
        playerRef.current?.setVolume(isMuted ? 0 : 1);
        if (!isPlaying) {
          playerRef.current?.pause();
        }
      }).catch(error => {
        console.error("Vimeo player failed to initialize:", error);
        onError("Failed to load video");
        toast({
          title: "Video Loading Issue",
          description: "Failed to load the video. Please refresh the page.",
          variant: "destructive"
        });
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [toast, onLoad, onError, isMuted, isPlaying]);

  useEffect(() => {
    if (playerRef.current) {
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
  }, [isPlaying, toast]);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.setVolume(isMuted ? 0 : 1).catch(console.error);
    }
  }, [isMuted]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full z-[1] overflow-hidden"
    />
  );
};