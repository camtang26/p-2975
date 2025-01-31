import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Player from '@vimeo/player';

interface VimeoPlayerProps {
  videoId: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  isBackground?: boolean;
  className?: string;
  onReady?: () => void;
  onError?: (error: Error) => void;
}

export interface VimeoPlayerHandle {
  play: () => Promise<void>;
  pause: () => Promise<void>;
  setMuted: (muted: boolean) => Promise<void>;
}

const VimeoPlayer = forwardRef<VimeoPlayerHandle, VimeoPlayerProps>(
  ({ videoId, autoplay = false, loop = false, muted = false, isBackground = false, className = '', onReady, onError }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<Player | null>(null);

    // Initialize player
    useEffect(() => {
      if (!containerRef.current) return;

      const iframe = document.createElement('iframe');
      iframe.src = `https://player.vimeo.com/video/${videoId}?autoplay=${autoplay ? 1 : 0}&loop=${loop ? 1 : 0}&muted=${muted ? 1 : 0}${isBackground ? '&background=1' : ''}`;
      iframe.allow = 'autoplay; fullscreen; picture-in-picture';
      iframe.style.cssText = 'position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%,-50%);border:none;';
      
      containerRef.current.appendChild(iframe);
      
      const player = new Player(iframe);
      playerRef.current = player;

      player.ready()
        .then(() => {
          console.log('Vimeo player ready');
          onReady?.();
          player.setVolume(muted ? 0 : 1);
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
    }, [videoId, autoplay, loop, muted, isBackground, onReady, onError]);

    // Expose player controls via ref
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
        className={`relative h-0 pb-[56.25%] overflow-hidden ${className}`}
        role="presentation"
      />
    );
  }
);

VimeoPlayer.displayName = 'VimeoPlayer';

export default VimeoPlayer;