import React, { useEffect } from 'react';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  useEffect(() => {
    // Remove old Voiceflow widget if it exists
    const oldWidget = document.querySelector('[data-voiceflow-widget]');
    if (oldWidget) {
      oldWidget.remove();
    }

    // Initialize ElevenLabs widget
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <header role="banner">
        <Navigation />
      </header>

      <main role="main" className="flex-grow">
        {children}
      </main>

      <Footer />
      <elevenlabs-convai agent-id="lQXvJFg8zSqlerOKPXm6"></elevenlabs-convai>
    </div>
  );
};