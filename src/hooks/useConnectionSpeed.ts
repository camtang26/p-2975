import { useState, useEffect } from 'react';

export type ConnectionQuality = 'low' | 'medium' | 'high';

export const useConnectionSpeed = () => {
  const [quality, setQuality] = useState<ConnectionQuality>('medium');

  useEffect(() => {
    const checkConnection = () => {
      if (!navigator.connection) {
        // Fallback to navigator.onLine
        setQuality(navigator.onLine ? 'medium' : 'low');
        return;
      }

      const connection = (navigator as any).connection;
      
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
    if ((navigator as any).connection) {
      (navigator as any).connection.addEventListener('change', checkConnection);
    }

    window.addEventListener('online', () => setQuality('medium'));
    window.addEventListener('offline', () => setQuality('low'));

    return () => {
      if ((navigator as any).connection) {
        (navigator as any).connection.removeEventListener('change', checkConnection);
      }
      window.removeEventListener('online', () => setQuality('medium'));
      window.removeEventListener('offline', () => setQuality('low'));
    };
  }, []);

  return quality;
};