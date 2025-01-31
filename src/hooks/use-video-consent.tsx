import { useEffect } from 'react';
import { useVideoStore } from '@/stores/videoStore';
import { useToast } from '@/hooks/use-toast';

export const useVideoConsent = () => {
  const { toast } = useToast();
  const { isConsentGiven, setConsent } = useVideoStore();

  useEffect(() => {
    // Only show consent toast if we haven't gotten consent yet
    if (!isConsentGiven) {
      toast({
        title: "Video Preferences",
        description: "Allow us to remember your video playback preferences?",
        action: {
          label: "Allow",
          onClick: () => setConsent(true),
        },
        duration: 10000, // 10 seconds
      });
    }
  }, [isConsentGiven, setConsent, toast]);

  return {
    isConsentGiven,
    setConsent,
  };
};