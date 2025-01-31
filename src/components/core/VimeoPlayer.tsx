import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Player from '@vimeo/player';
import { useConnectionSpeed, ConnectionQuality } from '@/hooks/useConnectionSpeed';
import { useIsMobile } from '@/hooks/use-mobile';

interface VimeoPlayerProps {
  videoId: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  isBackground?: boolean;
  isFullscreen?: boolean;
  className?: string;
  onReady?: () => void;
  onError?: (error: Error) => void;
}

export interface VimeoPlayerHandle {
  play: () => Promise<void>;
  pause: () => Promise<void>;
  setMuted: (muted: boolean) => Promise<void>;
}

const getQualitySettings = (quality: ConnectionQuality, isMobile: boolean) => {
  switch (quality) {
    case 'low':
      return { quality: '360p', autoplay: false };
    case 'medium':
      return { quality: isMobile ? '720p' : '1080p', autoplay: true };
    case 'high':
      return { quality: '1080p', autoplay: true };
    default:
      return { quality: '720p', autoplay: true };
  }
};

const VimeoPlayer = forwardRef<VimeoPlayerHandle, VimeoPlayerProps>(
  ({ 
    videoId, 
    autoplay = false, 
    loop = false, 
    muted = false, 
    controls = false,
    isBackground = false, 
    isFullscreen = false,
    className = '', 
    onReady, 
    onError 
  }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<Player | null>(null);
    const connectionQuality = useConnectionSpeed();
    const isMobile = useIsMobile();
    
    const { quality, autoplay: shouldAutoplay } = getQualitySettings(connectionQuality, isMobile);

    useEffect(() => {
      if (!containerRef.current) return;

      const iframe = document.createElement('iframe');
      iframe.src = `https://player.vimeo.com/video/${videoId}?autoplay=${
        (autoplay && shouldAutoplay) ? 1 : 0
      }&loop=${
        loop ? 1 : 0
      }&muted=${
        muted ? 1 : 0
      }&background=${
        isBackground ? 1 : 0
      }&controls=${
        controls ? 1 : 0
      }&quality=${
        quality
      }&title=0&byline=0&portrait=0&dnt=1&playsinline=1&transparent=1`;
      
      iframe.allow = 'autoplay; fullscreen; picture-in-picture';
      iframe.style.cssText = 'position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%,-50%);border:none;';
      
      if (!isBackground) {
        iframe.style.pointerEvents = 'auto';
      } else {
        iframe.style.pointerEvents = 'none';
      }
      
      containerRef.current.appendChild(iframe);
      
      const player = new Player(iframe, {
        background: isBackground,
        controls: controls,
        quality
      });
      
      playerRef.current = player;

      player.ready()
        .then(() => {
          console.log('Vimeo player ready');
          onReady?.();
          player.setVolume(muted ? 0 : 1);
          player.setQuality(quality);
        })
        .catch((error) => {
          console.error('Vimeo player error:', error);
          onError?.(error);
        });

      return () => {
        console.log('Cleaning up Vimeo player');
        player.destroy();
        playerRef.current = null;
      };
    }, [videoId, autoplay, loop, muted, controls, isBackground, quality, shouldAutoplay, onReady, onError]);

    useImperativeHandle(ref, () => ({
      play: async () => {
        try {
          await playerRef.current?.play();
        } catch (error) {
          console.error('Error playing video:', error);
          throw error;
        }
      },
      pause: async () => {
        try {
          await playerRef.current?.pause();
        } catch (error) {
          console.error('Error pausing video:', error);
          throw error;
        }
      },
      setMuted: async (muted: boolean) => {
        try {
          await playerRef.current?.setVolume(muted ? 0 : 1);
        } catch (error) {
          console.error('Error setting volume:', error);
          throw error;
        }
      }
    }), []);

    return (
      <div 
        ref={containerRef}
        className={`relative h-0 pb-[56.25%] overflow-hidden ${className} ${
          isFullscreen ? '!fixed !inset-0 !h-screen !pb-0 z-[9999]' : ''
        }`}
        role="presentation"
      />
    );
  }
);

VimeoPlayer.displayName = 'VimeoPlayer';

export default VimeoPlayer;