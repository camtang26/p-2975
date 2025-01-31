declare module '@vimeo/player' {
  interface Player {
    setVolume(volume: number, options?: { duration: number }): Promise<void>;
    destroy(): Promise<void>;
  }
}