import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { useIsMobile } from '@/hooks/use-mobile';
import Player from '@vimeo/player';

interface VideoState {
  timestamp: number;
  isMuted: boolean;
  lastUpdated: Date;
  isConsentGiven: boolean;
  setTimestamp: (timestamp: number) => void;
  setMuted: (isMuted: boolean) => void;
  setConsent: (consent: boolean) => void;
  syncWithPlayer: (player: Player) => Promise<void>;
  resetState: () => void;
}

const INITIAL_STATE = {
  timestamp: 0,
  isMuted: true, // Default to muted for better UX
  lastUpdated: new Date(),
  isConsentGiven: false,
};

export const useVideoStore = create<VideoState>()(
  persist(
    (set, get) => ({
      ...INITIAL_STATE,

      setTimestamp: (timestamp: number) => {
        set({
          timestamp,
          lastUpdated: new Date(),
        });
      },

      setMuted: (isMuted: boolean) => {
        set({
          isMuted,
          lastUpdated: new Date(),
        });
      },

      setConsent: (consent: boolean) => {
        set({
          isConsentGiven: consent,
          lastUpdated: new Date(),
        });
      },

      syncWithPlayer: async (player: Player) => {
        try {
          // Only sync if we have consent
          if (!get().isConsentGiven) {
            console.log('No consent given for video state persistence');
            return;
          }

          const [currentTime, volume] = await Promise.all([
            player.getCurrentTime(),
            player.getVolume(),
          ]);

          set({
            timestamp: currentTime,
            isMuted: volume === 0,
            lastUpdated: new Date(),
          });

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
      },
    }),
    {
      name: 'video-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => 
        // Only persist if consent is given
        state.isConsentGiven ? {
          timestamp: state.timestamp,
          isMuted: state.isMuted,
          isConsentGiven: state.isConsentGiven,
        } : { isConsentGiven: false },
    }
  )
);

// Hook to get video state with mobile awareness
export const useVideoState = () => {
  const isMobile = useIsMobile();
  const videoState = useVideoStore();

  // Always return muted state on mobile regardless of stored preference
  return {
    ...videoState,
    isMuted: isMobile ? true : videoState.isMuted,
  };
};