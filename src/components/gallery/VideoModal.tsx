import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface VideoModalProps {
  video: {
    source: string;
    title: string;
  };
  onClose: () => void;
  onPrevious: (e: React.MouseEvent) => void;
  onNext: (e: React.MouseEvent) => void;
}

export const VideoModal = ({ video, onClose, onPrevious, onNext }: VideoModalProps) => {
  const isMobile = useIsMobile();

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Video player - ${video.title}`}
    >
      <Button
        variant="outline"
        size="icon"
        className="absolute top-4 right-4 bg-black/20 border-white/10 hover:bg-white/10 transition-colors duration-300 h-8 w-8"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close video player"
      >
        <X className="h-8 w-8 text-red-500" aria-hidden="true" />
      </Button>

      {!isMobile && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 border-white/10 hover:bg-white/10 transition-colors duration-300"
            onClick={onPrevious}
            aria-label="Previous video"
          >
            <ArrowLeft className="h-6 w-6 text-white" aria-hidden="true" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 border-white/10 hover:bg-white/10 transition-colors duration-300"
            onClick={onNext}
            aria-label="Next video"
          >
            <ArrowRight className="h-6 w-6 text-white" aria-hidden="true" />
          </Button>
        </>
      )}

      <div 
        className="max-w-[90vw] max-h-[90vh] w-full aspect-video animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <iframe
            src={video.source}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            allowFullScreen
            title={video.title}
          />
        </div>
      </div>
    </div>
  );
};