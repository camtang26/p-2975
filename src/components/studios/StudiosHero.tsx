import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import Player from "@vimeo/player";
import { useToast } from "@/components/ui/use-toast";

export const StudiosHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const initializePlayer = async () => {
      if (containerRef.current && !playerRef.current) {
        try {
          console.log("Initializing Studios Vimeo player...");
          const iframe = document.createElement('iframe');
          iframe.src = "https://player.vimeo.com/video/905188141?h=cff11aa998&background=1&autoplay=1&loop=1&autopause=0&muted=1";
          iframe.allow = "autoplay; fullscreen; picture-in-picture";
          iframe.style.position = "absolute";
          iframe.style.top = "50%";
          iframe.style.left = "50%";
          iframe.style.width = "177.77777778vh";
          iframe.style.height = "56.25vw";
          iframe.style.minHeight = "100%";
          iframe.style.minWidth = "100%";
          iframe.style.transform = "translate(-50%, -50%)";
          iframe.style.border = "none";
          
          containerRef.current.appendChild(iframe);
          
          playerRef.current = new Player(iframe);
          
          await playerRef.current.ready();
          console.log("Studios Vimeo player ready");
          setIsLoaded(true);
          
          await playerRef.current.setVolume(0);
          await playerRef.current.setLoop(true);
          await playerRef.current.play();
          
        } catch (error) {
          console.error("Studios Vimeo player initialization error:", error);
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
        console.log("Cleaning up Studios Vimeo player");
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [toast]);

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Studios hero section"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-[1]">
        <div 
          ref={containerRef}
          className="relative w-full h-full"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
        
        {/* Loading Indicator */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        )}
        
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0 bg-black/60 z-[2]"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-[3] container mx-auto px-4 text-center mt-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
          Cre8tive AI Studios
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-white max-w-4xl mx-auto mb-8 italic [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
          AI won't take over your business, but a business leveraging AI video 
          production will revolutionize the way you create, engage, and dominate 
          your market.
        </p>

        <Button 
          size="lg"
          className="text-lg px-8 py-6 hover-lift hover-glow bg-blue-900 text-white shadow-[0_0_10px_rgba(59,130,246,0.5),0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.6),0_0_30px_rgba(59,130,246,0.4)] hover:bg-blue-800 transition-all duration-300"
        >
          Get a Free Consultation
        </Button>
      </div>
    </section>
  );
};