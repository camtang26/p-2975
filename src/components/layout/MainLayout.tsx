import React from 'react';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <header 
        role="banner" 
        className="fixed top-0 left-0 right-0 z-50"
      >
        <Navigation />
      </header>

      <main 
        role="main" 
        className="flex-grow relative"
        style={{ 
          // Mobile: minimal top padding
          paddingTop: 'var(--nav-padding-y)',
          // Desktop: account for fixed nav height
          '@media (min-width: 1024px)': {
            paddingTop: 'var(--content-offset)'
          }
        }}
      >
        {children}
      </main>

      <Footer />
      <elevenlabs-convai agent-id="lQXvJFg8zSqlerOKPXm6"></elevenlabs-convai>
    </div>
  );
};