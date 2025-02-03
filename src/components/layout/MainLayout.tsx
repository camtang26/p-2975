import React from 'react';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';
import { useIsMobile } from '@/hooks/use-mobile';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <header role="banner">
        <Navigation />
      </header>

      <main role="main" className="flex-grow">
        {children}
      </main>

      <Footer />
      <elevenlabs-convai 
        agent-id="lQXvJFg8zSqlerOKPXm6"
        size={isMobile ? "small" : "large"}
      ></elevenlabs-convai>
    </div>
  );
};