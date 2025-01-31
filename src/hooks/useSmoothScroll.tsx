import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      // Ensure we're working with an HTMLAnchorElement
      const link = e.currentTarget as HTMLAnchorElement;
      
      // Check if this is an internal link
      if (link.hash) {
        e.preventDefault();
        
        const targetId = link.hash;
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Add padding to account for fixed header if needed
          const headerOffset = 80; // Adjust this value based on your header height
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Update URL without scrolling
          history.pushState(null, '', targetId);
        }
      }
    };

    // Select all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listeners
    internalLinks.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    // Cleanup
    return () => {
      internalLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);
};