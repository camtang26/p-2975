import { useState, useEffect, useCallback, RefObject, useRef } from 'react';
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
  const abortController = useRef(new AbortController());

  useEffect(() => {
    const controller = abortController.current;
    
    const initializePlayer = async () => {
      if (!containerRef.current || controller.signal.aborted) return;

      try {
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

        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(iframe);

        const vimeoPlayer = new Player(iframe, {
          url: options.url,
          background: options.background,
          autoplay: options.autoplay,
          loop: options.loop,
          muted: options.muted,
        });

        await vimeoPlayer.ready();
        
        if (!controller.signal.aborted) {
          setPlayer(vimeoPlayer);
          setIsReady(true);
          setError(null);
          videoLogger.log('STATE_CHANGE', 'Player ready', { context: 'useVimeoPlayer' });
        }
      } catch (err) {
        if (!controller.signal.aborted) {
          const error = err instanceof Error ? err : new Error('Failed to initialize player');
          setError(error);
          videoLogger.error(error, 'Player initialization failed');
        }
      }
    };

    initializePlayer();

    return () => {
      controller.abort();
      if (player) {
        player.destroy().catch(err => {
          videoLogger.error(err instanceof Error ? err : new Error(String(err)), 'Error destroying player');
        });
      }
    };
  }, [containerRef, options.url]);

  const play = useCallback(async () => {
    try {
      await player?.play();
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to play video');
      setError(error);
      videoLogger.error(error, 'Play failed');
      throw error;
    }
  }, [player]);

  const pause = useCallback(async () => {
    try {
      await player?.pause();
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to pause video');
      setError(error);
      videoLogger.error(error, 'Pause failed');
      throw error;
    }
  }, [player]);

  const setMuted = useCallback(async (muted: boolean) => {
    try {
      await player?.setVolume(muted ? 0 : 1);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to set volume');
      setError(error);
      videoLogger.error(error, 'Set volume failed');
      throw error;
    }
  }, [player]);

  return {
    player,
    error,
    isReady,
    play,
    pause,
    setMuted,
  };
};