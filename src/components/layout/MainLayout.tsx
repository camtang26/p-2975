import React from 'react';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  // Initialize smooth scrolling site-wide
  useSmoothScroll();

  return (
    // Using semantic HTML5 elements for better accessibility and structure
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