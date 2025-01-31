import { useEffect } from 'react';
import { useVideoStore } from '@/stores/videoStore';
import { useToast } from '@/hooks/use-toast';
import { ConsentButton } from '@/components/ui/consent-button';

export const useVideoConsent = () => {
  const { toast } = useToast();
  const { isConsentGiven, setConsent } = useVideoStore();

  useEffect(() => {
    if (!isConsentGiven) {
      toast({
        title: "Video Preferences",
        description: "Allow us to remember your video playback preferences?",
        action: (
          <ConsentButton
            consentLabel="Allow"
            onClick={() => setConsent(true)}
            altText="Allow video preferences"
          />
        ),
        duration: 10000,
      });
    }
  }, [isConsentGiven, setConsent, toast]);

  return {
    isConsentGiven,
    setConsent,
  };
};