import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "../ui/use-toast";

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
  const { toast } = useToast();
  
  // Video sources in order of preference
  const videoSources = [
    { src: "/cre8tive-hero.mp4", type: "video/mp4" },
    { src: "/assets/cre8tive-hero.mp4", type: "video/mp4" },
    { src: "/videos/cre8tive-hero.mp4", type: "video/mp4" },
  ];

  // Debug loading state
  useEffect(() => {
    console.log("Video loading state:", { 
      isLoaded, 
      loadError,
      currentSrc: videoRef.current?.currentSrc,
      readyState: videoRef.current?.readyState,
      networkState: videoRef.current?.networkState,
      error: videoRef.current?.error
    });
  }, [isLoaded, loadError]);

  // Handle video load error
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    console.error("Video failed to load", {
      error: video.error,
      networkState: video.networkState,
      currentSrc: video.currentSrc
    });
    
    setLoadError("Failed to load video");
    setIsLoaded(false);
    
    toast({
      title: "Video Loading Issue",
      description: "Falling back to static image. Please try refreshing the page.",
      variant: "destructive"
    });
  };

  // Handle successful video load
  const handleVideoLoad = () => {
    if (videoRef.current?.readyState >= 3) {
      console.log("Video loaded successfully", {
        currentSrc: videoRef.current.currentSrc,
        readyState: videoRef.current.readyState
      });
      setIsLoaded(true);
      setLoadError(null);
    }
  };

  // Handle play/pause
  useEffect(() => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.error("Error playing video:", error);
              toast({
                title: "Playback Error",
                description: "Unable to play video. Please try again.",
                variant: "destructive"
              });
            });
          }
        } else {
          videoRef.current.pause();
        }
      } catch (error) {
        console.error("Error controlling video playback:", error);
      }
    }
  }, [isPlaying, toast]);

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
          poster="/lovable-uploads/2ed5a6a9-28d3-4ccc-86b5-3861a2f86357.png"
          preload="auto"
        >
          {videoSources.map((source, index) => (
            <source 
              key={index}
              src={source.src} 
              type={source.type}
              onError={(e) => {
                console.error(`Failed to load video source: ${source.src}`, e);
              }}
            />
          ))}
          Your browser does not support the video tag.
        </video>
        
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