import { Link as RouterLink, LinkProps, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useCallback, useRef } from 'react';

export const Link = ({ to, children, ...props }: LinkProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollAttempts = useRef(0);

  const scrollToHash = useCallback((hash: string) => {
    const attemptScroll = () => {
      const target = document.getElementById(hash);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
        scrollAttempts.current = 0;
      } else if (scrollAttempts.current < 5) {
        scrollAttempts.current += 1;
        setTimeout(attemptScroll, 100 * scrollAttempts.current);
      }
    };

    attemptScroll();
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
          // Cross-page navigation with scroll preservation
          navigate(
            { pathname, hash },
            {
              state: { 
                from: location.pathname,
                shouldScroll: true 
              }
            }
          );
        }
      } else {
        // Only reset scroll for non-hash links
        window.history.scrollRestoration = 'manual';
      }
    }
  };

  useEffect(() => {
    if (location.hash && location.state?.shouldScroll) {
      const hash = location.hash.replace('#', '');
      scrollToHash(hash);
      
      // Clear scroll state after handling
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.hash, location.pathname, location.state, navigate, scrollToHash]);

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