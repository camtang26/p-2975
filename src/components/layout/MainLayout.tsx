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
          paddingTop: 'var(--nav-padding-y)'
        }}
      >
        {children}
      </main>

      <Footer />
      <elevenlabs-convai agent-id="lQXvJFg8zSqlerOKPXm6"></elevenlabs-convai>
    </div>
  );
};