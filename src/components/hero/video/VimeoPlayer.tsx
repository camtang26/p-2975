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
      // Using the correct Vimeo video ID and parameters
      iframe.src = "https://player.vimeo.com/video/1051821551?h=cff11aa998&background=1&autoplay=1&loop=1&autopause=0&muted=1";
      iframe.allow = "autoplay; fullscreen; picture-in-picture";
      iframe.style.position = "absolute";
      iframe.style.top = "50%";
      iframe.style.left = "50%";
      iframe.style.width = "100vw";
      iframe.style.height = "100vh";
      iframe.style.transform = "translate(-50%, -50%)";
      iframe.style.border = "none";
      
      containerRef.current.appendChild(iframe);
      
      playerRef.current = new Player(iframe);
      
      playerRef.current.ready().then(() => {
        console.log("Vimeo player ready");
        playerRef.current?.setVolume(0);
        playerRef.current?.setLoop(true);
        playerRef.current?.play().catch(console.error);
        onLoad();
      }).catch(error => {
        console.error("Vimeo player initialization error:", error);
        onError("Failed to load video");
        toast({
          title: "Video Loading Error",
          description: "There was an issue loading the video. Please refresh the page.",
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
  }, [onLoad, onError, toast]);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.setVolume(isMuted ? 0 : 1).catch(console.error);
    }
  }, [isMuted]);

  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.play().catch(error => {
          console.error("Play error:", error);
        });
      } else {
        playerRef.current.pause().catch(console.error);
      }
    }
  }, [isPlaying]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full z-[1] overflow-hidden"
      style={{ background: '#000' }}
    />
  );
};