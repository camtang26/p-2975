import { useState, useEffect, RefObject } from 'react';
import Player from '@vimeo/player';
import { videoLogger } from '@/utils/videoLogger';

interface VimeoOptions {
  url: string;
  background?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

interface PlayerControls {
  player: Player | null;
  error: Error | null;
  isReady: boolean;
  play: () => Promise<void>;
  pause: () => Promise<void>;
  setMuted: (muted: boolean) => Promise<void>;
}

export const useVimeoPlayer = (
  containerRef: RefObject<HTMLElement>,
  options: VimeoOptions
): PlayerControls => {
  const [player, setPlayer] = useState<Player | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let abortController = new AbortController();
    
    const initializePlayer = async () => {
      if (!containerRef.current || abortController.signal.aborted) return;

      try {
        // Create iframe element
        const iframe = document.createElement('iframe');
        iframe.src = options.url;
        iframe.allow = "autoplay; fullscreen; picture-in-picture";
        iframe.style.cssText = `
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          border: none;
        `;

        // Clear container and append iframe
        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(iframe);

        // Initialize Vimeo player
        const vimeoPlayer = new Player(iframe, {
          url: options.url,
          background: options.background,
          autoplay: options.autoplay,
          loop: options.loop,
          muted: options.muted,
        });

        // Wait for player to be ready
        await vimeoPlayer.ready();
        
        if (!abortController.signal.aborted) {
          setPlayer(vimeoPlayer);
          setIsReady(true);
          setError(null);
          videoLogger.playerReady();
        }
      } catch (err) {
        if (!abortController.signal.aborted) {
          const error = err instanceof Error ? err : new Error('Failed to initialize player');
          setError(error);
          videoLogger.error(error, 'Player initialization failed');
        }
      }
    };

    initializePlayer();

    return () => {
      abortController.abort();
      if (player) {
        player.destroy().catch(err => {
          videoLogger.error(err instanceof Error ? err : new Error(String(err)), 'Error destroying player');
        });
      }
    };
  }, [containerRef, options.url]);

  const play = async () => {
    try {
      await player?.play();
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to play video');
      setError(error);
      videoLogger.error(error, 'Play failed');
      throw error;
    }
  };

  const pause = async () => {
    try {
      await player?.pause();
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to pause video');
      setError(error);
      videoLogger.error(error, 'Pause failed');
      throw error;
    }
  };

  const setMuted = async (muted: boolean) => {
    try {
      await player?.setVolume(muted ? 0 : 1);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to set volume');
      setError(error);
      videoLogger.error(error, 'Set volume failed');
      throw error;
    }
  };

  return {
    player,
    error,
    isReady,
    play,
    pause,
    setMuted,
  };
};