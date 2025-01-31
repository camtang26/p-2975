import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "../ui/button";
import VimeoPlayer, { VimeoPlayerHandle } from "../core/VimeoPlayer";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "../ui/use-toast";

export const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const playerRef = useRef<VimeoPlayerHandle>(null);
  const isMobile = useIsMobile();
  const { toast } = useToast();

  // Mobile: Force mute and disable autoplay
  useEffect(() => {
    if (isMobile && playerRef.current) {
      playerRef.current.setMuted(true);
    }
  }, [isMobile]);

  const handleReady = () => {
    console.log("Video is ready");
    setIsLoaded(true);
  };

  const handleError = (error: Error) => {
    console.error("Hero video error:", error);
    toast({
      title: "Video Error",
      description: "There was an error loading the video. Please refresh the page.",
      variant: "destructive"
    });
  };

  return (
    <section 
      className="relative w-full aspect-video flex items-center justify-center overflow-hidden" 
      role="banner" 
      aria-label="Hero section"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-[1]">
        <div 
          className="relative w-full h-full"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        >
          <VimeoPlayer
            ref={playerRef}
            videoId="1051821551"
            autoplay={!isMobile}
            loop={true}
            muted={isMuted}
            onReady={handleReady}
            onError={handleError}
            className="absolute inset-0"
          />
        </div>

        {/* Loading Indicator */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        )}
        
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0 bg-black/20 z-[2]" 
          aria-hidden="true" 
        />
      </div>

      {/* Content */}
      <div className="relative z-[3] flex flex-col items-center justify-center text-center space-y-6 md:space-y-8 max-w-[90vw] md:max-w-4xl mx-auto px-4">
        <h1 className="font-inter text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.02em] animate-fade-in">
          <span className="text-white inline-block transition-transform duration-300 [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
            Cre8tive AI
          </span>
        </h1>
        <p className="font-inter text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-[-0.01em] text-white/90 animate-fade-in [animation-delay:200ms] [text-shadow:0_0_4px_rgba(255,255,255,0.4),0_0_8px_rgba(255,255,255,0.2)]">
          Cutting Edge AI Solutions For Your Business
        </p>
        <Button
          size="lg"
          className="font-inter text-lg sm:text-xl md:text-2xl font-semibold bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white px-6 sm:px-8 py-4 sm:py-5 h-auto transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(30,174,219,0.5),0_0_30px_rgba(30,174,219,0.3)] hover:shadow-[0_0_20px_rgba(30,174,219,0.6),0_0_40px_rgba(30,174,219,0.4)] active:scale-95 animate-fade-in [animation-delay:300ms] tracking-[-0.01em] w-full sm:w-auto"
          aria-label="Get a free consultation"
        >
          Get a Free Consultation
        </Button>
      </div>

      {/* Controls */}
      {!isMobile && (
        <div className="absolute bottom-8 right-8 z-[3]">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMuted(!isMuted)}
            className="bg-black/20 border-white/10 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? 
              <VolumeX className="h-4 w-4" aria-hidden="true" /> : 
              <Volume2 className="h-4 w-4" aria-hidden="true" />
            }
          </Button>
        </div>
      )}
    </section>
  );
};