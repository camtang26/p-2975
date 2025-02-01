import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { MobileMenuOverlay } from "./MobileMenuOverlay";

export const MobileNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const openMenu = () => setIsMobileMenuOpen(true);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav 
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10 md:hidden" 
      role="navigation" 
      aria-label="Mobile navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-4" 
            aria-label="Go to homepage"
          >
            <img 
              src="/lovable-uploads/a5f0ca2b-7777-4887-8e92-d1d0959c2448.png" 
              alt="Cre8tive AI Logo" 
              className="h-8 w-auto"
              width="32"
              height="32"
            />
            <span className="text-white font-geist font-bold text-xl tracking-[-0.02em]">
              Cre8tive AI
            </span>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={openMenu}
            className="text-white hover:bg-white/10"
            aria-label="Open mobile menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && <MobileMenuOverlay onClose={closeMenu} />}
    </nav>
  );
};