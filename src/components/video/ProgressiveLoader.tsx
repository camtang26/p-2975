import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useAnalytics } from '@/hooks/useAnalytics';
import VimeoPlayer from '../core/VimeoPlayer';

interface ProgressiveLoaderProps {
  videoId: string;
  title?: string;
}

export const ProgressiveLoader = ({ videoId, title }: ProgressiveLoaderProps) => {
  const [loadPhase, setLoadPhase] = useState<'placeholder' | 'preview' | 'full'>('placeholder');
  const { toast } = useToast();
  const { trackEvent } = useAnalytics();
  const timeoutRef = useRef<NodeJS.Timeout>();
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: '200px',
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    // Start loading preview
    const video = document.createElement('video');
    video.preload = 'metadata';
    
    // Set timeout for loading
    timeoutRef.current = setTimeout(() => {
      if (loadPhase === 'placeholder') {
        handleError(new Error('Video preview load timeout'));
      }
    }, 8000);

    // Track loading start
    trackEvent({
      action: 'video_load_start',
      category: 'video',
      label: videoId
    });

    video.onloadeddata = () => {
      clearTimeout(timeoutRef.current);
      setLoadPhase('preview');
      initializeFullQuality();
    };

    video.onerror = () => handleError(new Error('Failed to load video preview'));

    return () => {
      clearTimeout(timeoutRef.current);
      video.remove();
    };
  }, [inView, videoId]);

  const initializeFullQuality = () => {
    // Set timeout for full quality load
    timeoutRef.current = setTimeout(() => {
      if (loadPhase === 'preview') {
        handleError(new Error('Full quality video load timeout'));
      }
    }, 10000);

    // Simulate full quality load (replace with actual loading logic)
    setTimeout(() => {
      clearTimeout(timeoutRef.current);
      setLoadPhase('full');
      
      trackEvent({
        action: 'video_load_complete',
        category: 'video',
        label: videoId
      });
    }, 1000);
  };

  const handleError = (error: Error) => {
    console.error('Video loading error:', error);
    toast({
      title: "Video Loading Error",
      description: "Failed to load video. Please try again.",
      variant: "destructive",
    });

    trackEvent({
      action: 'video_load_error',
      category: 'video',
      label: `${videoId}: ${error.message}`
    });
  };

  return (
    <div 
      ref={ref}
      className="relative aspect-video bg-black/90 overflow-hidden rounded-lg"
      role="region"
      aria-label={title ? `Video: ${title}` : 'Video player'}
    >
      {/* Placeholder/Preview Phase */}
      {loadPhase !== 'full' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="text-sm text-white/80">
              {loadPhase === 'placeholder' ? 'Loading preview...' : 'Loading full quality...'}
            </span>
          </div>
        </div>
      )}

      {/* Full Quality Phase */}
      <div
        className={`transition-opacity duration-500 ${
          loadPhase === 'full' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <VimeoPlayer
          videoId={videoId}
          autoplay={false}
          muted={true}
          loop={false}
          isBackground={true}
          className="w-full h-full"
          onError={handleError}
        />
      </div>
    </div>
  );
};