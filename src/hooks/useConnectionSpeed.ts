import { useState, useEffect } from 'react';

export type ConnectionQuality = 'low' | 'medium' | 'high';

// Define the NetworkInformation interface
interface NetworkInformation extends EventTarget {
  readonly effectiveType: '4g' | '3g' | '2g' | 'slow-2g';
  readonly saveData: boolean;
  addEventListener: (type: string, listener: EventListener) => void;
  removeEventListener: (type: string, listener: EventListener) => void;
}

// Extend Navigator interface to include connection property
interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation;
}

export const useConnectionSpeed = () => {
  const [quality, setQuality] = useState<ConnectionQuality>('medium');

  useEffect(() => {
    const checkConnection = () => {
      const nav = navigator as NavigatorWithConnection;
      
      if (!nav.connection) {
        // Fallback to navigator.onLine
        setQuality(nav.onLine ? 'medium' : 'low');
        return;
      }

      const connection = nav.connection;
      
      if (connection.effectiveType === '4g' && !connection.saveData) {
        setQuality('high');
      } else if (connection.effectiveType === '3g' || (connection.effectiveType === '4g' && connection.saveData)) {
        setQuality('medium');
      } else {
        setQuality('low');
      }
    };

    // Check initial connection
    checkConnection();

    // Listen for connection changes
    const nav = navigator as NavigatorWithConnection;
    if (nav.connection) {
      nav.connection.addEventListener('change', checkConnection);
    }

    window.addEventListener('online', () => setQuality('medium'));
    window.addEventListener('offline', () => setQuality('low'));

    return () => {
      const nav = navigator as NavigatorWithConnection;
      if (nav.connection) {
        nav.connection.removeEventListener('change', checkConnection);
      }
      window.removeEventListener('online', () => setQuality('medium'));
      window.removeEventListener('offline', () => setQuality('low'));
    };
  }, []);

  return quality;
};