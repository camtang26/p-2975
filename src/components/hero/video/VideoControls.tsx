import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Button } from "../../ui/button";

interface VideoControlsProps {
  isMuted: boolean;
  isPlaying: boolean;
  onToggleMute: () => void;
  onTogglePlay: () => void;
}

export const VideoControls = ({
  isMuted,
  isPlaying,
  onToggleMute,
  onTogglePlay
}: VideoControlsProps) => {
  return (
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
  );
};