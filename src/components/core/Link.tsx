import { Link as RouterLink, LinkProps, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useCallback } from 'react';

export const Link = ({ to, children, ...props }: LinkProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToHash = useCallback((hash: string) => {
    const target = document.getElementById(hash);
    if (target) {
      // Small delay to ensure DOM stability
      setTimeout(() => {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }, 50);
    }
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof to === 'string') {
      if (to.includes('#')) {
        event.preventDefault();
        const [pathname, hash] = to.split('#');
        
        if (pathname === location.pathname) {
          // Existing page navigation
          window.history.replaceState(null, '', `#${hash}`);
          scrollToHash(hash);
        } else {
          // Cross-page navigation
          navigate({
            pathname,
            hash,
          }, {
            replace: location.pathname === '/',
            state: { from: location.pathname }
          });
        }
      } else {
        window.history.scrollRestoration = 'manual';
      }
    }
  };

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#', '');
      scrollToHash(hash);
    }
  }, [location.hash, scrollToHash]);

  return (
    <RouterLink 
      to={to}
      onClick={handleClick}
      {...props}
      state={{ ...(props as any).state, preserveScroll: true }}
    >
      {children}
    </RouterLink>
  );
};
