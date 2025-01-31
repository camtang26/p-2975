import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { useIsMobile } from '@/hooks/use-mobile';
import Player from '@vimeo/player';

// Utility type for safe player operations
type SafePlayer = Pick<Player, 'getCurrentTime' | 'getVolume' | 'destroy'>;

interface VideoState {
  timestamp: number;
  isMuted: boolean;
  lastUpdated: Date;
  isConsentGiven: boolean;
  setTimestamp: (timestamp: number) => void;
  setMuted: (isMuted: boolean) => void;
  setConsent: (consent: boolean) => void;
  syncWithPlayer: (player: SafePlayer) => Promise<void>;
  resetState: () => void;
}

const INITIAL_STATE = {
  timestamp: 0,
  isMuted: true,
  lastUpdated: new Date(),
  isConsentGiven: false,
};

// Safe localStorage access utilities
const getStoredConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('videoConsent') === 'true';
};

const syncStateToStorage = (state: Partial<VideoState>) => {
  if (typeof window === 'undefined') return;
  if (getStoredConsent()) {
    localStorage.setItem('videoState', JSON.stringify({
      t: state.timestamp,
      m: state.isMuted
    }));
  }
};

export const useVideoStore = create<VideoState>()(
  persist(
    (set, get) => ({
      ...INITIAL_STATE,

      setTimestamp: (timestamp: number) => {
        const newState = {
          timestamp,
          lastUpdated: new Date(),
        };
        set(newState);
        syncStateToStorage(newState);
      },

      setMuted: (isMuted: boolean) => {
        const newState = {
          isMuted,
          lastUpdated: new Date(),
        };
        set(newState);
        syncStateToStorage(newState);
      },

      setConsent: (consent: boolean) => {
        set({
          isConsentGiven: consent,
          lastUpdated: new Date(),
        });
        if (typeof window !== 'undefined') {
          localStorage.setItem('videoConsent', String(consent));
        }
      },

      syncWithPlayer: async (player: SafePlayer) => {
        try {
          if (!get().isConsentGiven) {
            console.log('No consent given for video state persistence');
            return;
          }

          const [currentTime, volume] = await Promise.all([
            player.getCurrentTime(),
            player.getVolume(),
          ]);

          const newState = {
            timestamp: currentTime,
            isMuted: volume === 0,
            lastUpdated: new Date(),
          };

          set(newState);
          syncStateToStorage(newState);

          console.log('Video state synced with player:', {
            timestamp: currentTime,
            isMuted: volume === 0,
          });
        } catch (error) {
          console.error('Error syncing with player:', error);
        }
      },

      resetState: () => {
        set(INITIAL_STATE);
        if (typeof window !== 'undefined') {
          localStorage.removeItem('videoState');
        }
      },
    }),
    {
      name: 'video-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => 
        state.isConsentGiven ? {
          timestamp: state.timestamp,
          isMuted: state.isMuted,
          isConsentGiven: state.isConsentGiven,
        } : { isConsentGiven: false },
    }
  )
);

export const useVideoState = () => {
  const isMobile = useIsMobile();
  const videoState = useVideoStore();

  return {
    ...videoState,
    isMuted: isMobile ? true : videoState.isMuted,
  };
};