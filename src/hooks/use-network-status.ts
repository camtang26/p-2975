export const useNetworkStatus = () => {
  const getNetworkStatus = (): 'slow' | 'fast' => {
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection && connection.effectiveType) {
        return (connection.effectiveType === '2g' || connection.effectiveType === '3g') ? 'slow' : 'fast';
      }
    }
    return 'fast';
  };

  return getNetworkStatus();
};