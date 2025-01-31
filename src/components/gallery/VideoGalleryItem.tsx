import { useState, useRef, useEffect } from 'react';
import VimeoPlayer, { VimeoPlayerHandle } from '../core/VimeoPlayer';
import { Play } from "lucide-react";
import { AspectRatio } from "../ui/aspect-ratio";
import { useAnalytics } from '@/hooks/useAnalytics';
import { Alert, AlertDescription } from "../ui/alert";
import { Button } from "../ui/button";

interface VideoGalleryItemProps {
  videoId: string;
  thumbnail: string;
  title: string;
  isActive: boolean;
  onActivate: () => void;
}

const VideoGalleryItem = ({ videoId, thumbnail, title, isActive, onActivate }: VideoGalleryItemProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const playerRef = useRef<VimeoPlayerHandle>(null);
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, { threshold: 0.1 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isActive && playerRef.current) {
      playerRef.current.pause();
      trackEvent({
        action: 'pause',
        category: 'video',
        label: videoId
      });
    } else if (isActive) {
      trackEvent({
        action: 'play',
        category: 'video',
        label: videoId
      });
    }
  }, [isActive, videoId, trackEvent]);

  const handleRetry = () => {
    setHasError(false);
    onActivate();
  };

  const handleError = (error: Error) => {
    console.error(`Video ${videoId} error:`, error);
    setHasError(true);
    trackEvent({
      action: 'error',
      category: 'video',
      label: `${videoId}: ${error.message}`
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative break-inside-avoid cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#9b87f5]/10 animate-fade-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      onClick={onActivate}
      onKeyDown={(e) => e.key === 'Enter' && onActivate()}
      role="button"
      tabIndex={0}
      aria-label={`Play ${title}`}
      aria-pressed={isActive}
    >
      <AspectRatio ratio={16 / 9}>
        {isInView ? (
          <>
            {hasError ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <Alert variant="destructive" className="max-w-[80%]">
                  <AlertDescription className="flex flex-col items-center gap-4">
                    <p>Failed to load video</p>
                    <Button 
                      variant="outline" 
                      onClick={handleRetry}
                      className="w-full sm:w-auto"
                    >
                      Try Again
                    </Button>
                  </AlertDescription>
                </Alert>
              </div>
            ) : (
              <>
                <VimeoPlayer
                  ref={playerRef}
                  videoId={videoId}
                  autoplay={isActive}
                  muted={true}
                  loop={false}
                  isBackground={!isActive}
                  className="w-full h-full rounded-lg"
                  onError={handleError}
                />
                {!isActive && (
                  <div className="absolute inset-0 bg-black/40 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                    <picture>
                      <source
                        media="(max-width: 640px)"
                        srcSet={`${thumbnail}?w=640&fm=webp&q=80 1x, ${thumbnail}?w=1280&fm=webp&q=80 2x`}
                        type="image/webp"
                      />
                      <source
                        media="(max-width: 1024px)"
                        srcSet={`${thumbnail}?w=800&fm=webp&q=80 1x, ${thumbnail}?w=1600&fm=webp&q=80 2x`}
                        type="image/webp"
                      />
                      <source
                        srcSet={`${thumbnail}?w=1024&fm=webp&q=80 1x, ${thumbnail}?w=2048&fm=webp&q=80 2x`}
                        type="image/webp"
                      />
                      <img
                        src={`${thumbnail}?w=1024&q=80`}
                        alt={`Video thumbnail for ${title}`}
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                        decoding="async"
                        width={1024}
                        height={576}
                      />
                    </picture>
                    <Play className="absolute w-20 h-20 text-white" aria-hidden="true" />
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full bg-gray-800/20 animate-pulse rounded-lg" />
        )}
      </AspectRatio>
    </div>
  );
};

export default VideoGalleryItem;