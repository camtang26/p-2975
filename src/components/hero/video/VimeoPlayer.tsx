import { useEffect, useRef } from "react";

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
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (containerRef.current && !iframeRef.current) {
      const iframe = document.createElement('iframe');
      iframe.src = "https://player.vimeo.com/video/1051821551?h=cff11aa998&background=1&autoplay=1&loop=1&autopause=0&muted=1";
      iframe.allow = "autoplay; fullscreen; picture-in-picture";
      iframe.style.position = "absolute";
      iframe.style.top = "50%";
      iframe.style.left = "50%";
      iframe.style.width = "100vw";
      iframe.style.height = "100vh";
      iframe.style.transform = "translate(-50%, -50%)";
      iframe.style.border = "none";
      
      iframe.onload = () => {
        console.log("Vimeo iframe loaded successfully");
        onLoad();
      };

      iframe.onerror = () => {
        console.error("Failed to load Vimeo iframe");
        onError("Failed to load video");
      };

      containerRef.current.appendChild(iframe);
      iframeRef.current = iframe;
    }

    return () => {
      if (iframeRef.current && containerRef.current) {
        containerRef.current.removeChild(iframeRef.current);
        iframeRef.current = null;
      }
    };
  }, [onLoad, onError]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full z-[1] overflow-hidden"
      style={{ background: '#000' }}
    />
  );
};