const DEBUG_ENABLED = import.meta.env.VITE_VIDEO_DEBUG === 'true';

type LogLevel = 'info' | 'warn' | 'error';
type LogEvent = 'MOUNT' | 'UNMOUNT' | 'STATE_CHANGE' | 'ERROR' | 'PLAYER_READY';

interface LogOptions {
  level?: LogLevel;
  diff?: Record<string, any>;
  error?: Error;
}

export const videoLogger = {
  log(event: LogEvent, message: string, options: LogOptions = {}) {
    if (!DEBUG_ENABLED) return;

    const { level = 'info', diff, error } = options;
    const timestamp = new Date().toISOString();
    const prefix = `[VideoDebug ${timestamp}] ${event}`;

    switch (level) {
      case 'error':
        console.error(prefix, message, error || '');
        break;
      case 'warn':
        console.warn(prefix, message, diff || '');
        break;
      default:
        console.log(prefix, message, diff || '');
    }
  },

  mount(initialState: Record<string, any>) {
    this.log('MOUNT', 'Component mounted', { diff: initialState });
  },

  unmount() {
    this.log('UNMOUNT', 'Component unmounted');
  },

  stateChange(prev: Record<string, any>, next: Record<string, any>) {
    const diff = Object.keys(next).reduce((acc, key) => {
      if (prev[key] !== next[key]) {
        acc[key] = { from: prev[key], to: next[key] };
      }
      return acc;
    }, {} as Record<string, any>);

    if (Object.keys(diff).length > 0) {
      this.log('STATE_CHANGE', 'State updated', { diff });
    }
  },

  error(error: Error, context?: string) {
    this.log('ERROR', context || 'An error occurred', { level: 'error', error });
  },

  playerReady() {
    this.log('PLAYER_READY', 'Vimeo player initialized');
  }
};