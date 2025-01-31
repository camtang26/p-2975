import { create } from 'zustand';

interface VideoState {
  isMuted: boolean;
  isPlaying: boolean;
  setMuted: (muted: boolean) => void;
  setPlaying: (playing: boolean) => void;
  toggleMute: () => void;
  togglePlay: () => void;
}

export const useVideoStore = create<VideoState>((set) => ({
  isMuted: true,
  isPlaying: true,
  setMuted: (muted) => set({ isMuted: muted }),
  setPlaying: (playing) => set({ isPlaying: playing }),
  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));