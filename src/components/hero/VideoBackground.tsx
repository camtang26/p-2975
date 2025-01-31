import { useState } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { VimeoEmbed } from "../video/VimeoEmbed";

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

  return (
    <div className="absolute inset-0 z-0">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 z-[1]">
          <VimeoEmbed
            videoId="1051821551"
            autoplay={isPlaying}
            loop={true}
            muted={isMuted}
            className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
        
        {/* Reduced opacity of overlay from 0.5 to 0.2 */}
        <div 
          className="absolute inset-0 bg-black/20 z-[2]" 
          aria-hidden="true" 
        />
        
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
    </div>
  );
};