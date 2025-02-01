import { Link as RouterLink, LinkProps, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Link = ({ to, children, ...props }: LinkProps) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof to === 'string') {
      if (to.includes('#')) {
        event.preventDefault();
        const [pathname, hash] = to.split('#');
        
        if (!pathname || pathname === window.location.pathname || pathname === '/' + window.location.pathname.split('/')[1]) {
          // If we're already on the correct page, handle smooth scrolling
          const target = document.getElementById(hash);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // Navigate to new page with hash
          navigate(`${pathname}#${hash}`);
        }
      } else {
        // Reset scroll for non-hash links
        window.history.scrollRestoration = 'manual';
      }
    }
  };

  // Handle scroll after navigation for hash links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Initial check for hash in URL
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <RouterLink 
      to={to}
      onClick={handleClick}
      {...props}
    >
      {children}
    </RouterLink>
  );
};