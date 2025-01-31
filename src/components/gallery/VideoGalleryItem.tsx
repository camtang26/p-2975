import { useState, useRef } from 'react';
import { useFullscreen } from '@/hooks/useFullscreen';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Alert, AlertDescription } from "../ui/alert";
import { Button } from "../ui/button";
import VideoModal from '../core/VideoModal';
import { ProgressiveLoader } from '../video/ProgressiveLoader';

interface VideoGalleryItemProps {
  videoId: string;
  title: string;
  isActive: boolean;
  onActivate: () => void;
}

const VideoGalleryItem = ({ videoId, title, isActive, onActivate }: VideoGalleryItemProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { isFullscreen, toggleFullscreen } = useFullscreen(containerRef);
  const { trackEvent } = useAnalytics();

  const handleError = (error: Error) => {
    console.error(`Video ${videoId} error:`, error);
    setHasError(true);
    trackEvent({
      action: 'error',
      category: 'video',
      label: `${videoId}: ${error.message}`
    });
  };

  const handleRetry = () => {
    setHasError(false);
    onActivate();
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    trackEvent({
      action: 'open_modal',
      category: 'video',
      label: videoId
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    trackEvent({
      action: 'close_modal',
      category: 'video',
      label: videoId
    });
  };

  return (
    <>
      <div
        ref={containerRef}
        className="relative break-inside-avoid cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#9b87f5]/10 animate-fade-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        onClick={handleOpenModal}
        onKeyDown={(e) => e.key === 'Enter' && handleOpenModal()}
        role="button"
        tabIndex={0}
        aria-label={`Play ${title}`}
      >
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
          <ProgressiveLoader
            videoId={videoId}
            title={title}
          />
        )}
      </div>

      {isModalOpen && (
        <VideoModal
          videoId={videoId}
          onClose={handleCloseModal}
          isFullscreen={isFullscreen}
          toggleFullscreen={toggleFullscreen}
        />
      )}
    </>
  );
};

export default VideoGalleryItem;