import React from 'react';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
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
        data-allow-cors="true"
      ></elevenlabs-convai>
    </div>
  );
};