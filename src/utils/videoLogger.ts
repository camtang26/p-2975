interface LogEvent {
  type: 'MOUNT' | 'UNMOUNT' | 'STATE_CHANGE' | 'ERROR';
  message: string;
  timestamp: Date;
  data?: Record<string, any>;
}

interface LogOptions {
  diff?: Record<string, any>;
  error?: Error;
  context?: string;
}

export const videoLogger = {
  log(type: LogEvent['type'], message: string, options?: LogOptions) {
    const event: LogEvent = {
      type,
      message,
      timestamp: new Date(),
      data: options
    };
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Video Logger] ${event.type}: ${event.message}`, event.data);
    }
  },

  error(error: Error, message: string) {
    this.log('ERROR', message, { error });
  },

  mount(initialState: Record<string, any>) {
    this.log('MOUNT', 'Component mounted', { diff: initialState });
  },

  unmount() {
    this.log('UNMOUNT', 'Component unmounted');
  },

  stateChange(prevState: Record<string, any>, nextState: Record<string, any>) {
    this.log('STATE_CHANGE', 'State changed', { 
      diff: { prev: prevState, next: nextState } 
    });
  }
};