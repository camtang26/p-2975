import { Link as RouterLink, LinkProps } from 'react-router-dom';

export const Link = ({ to, children, ...props }: LinkProps) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof to === 'string') {
      if (to.includes('#')) {
        const [pathname, hash] = to.split('#');
        const currentPath = window.location.pathname;
        
        // If we're already on the correct page, handle smooth scrolling
        if (!pathname || pathname === '/' + currentPath.split('/')[1]) {
          event.preventDefault();
          const targetElement = document.getElementById(hash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        // Maintain existing scroll behavior for non-hash links
        window.history.scrollRestoration = 'manual';
      }
    }
  };

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