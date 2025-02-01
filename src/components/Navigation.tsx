import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileMenuOverlay } from "./mobile/MobileMenuOverlay";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10" 
      role="navigation" 
      aria-label="Main navigation"
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
              className="h-10 w-auto"
              width="40"
              height="40"
            />
            <span className="text-white font-geist font-bold text-xl tracking-[-0.02em] leading-none">
              Cre8tive AI
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 h-full" role="menubar">
            <Link 
              to="/studios" 
              className="text-white/90 hover:text-white transition-colors font-geist text-base font-medium tracking-[-0.01em] flex items-center h-full"
              role="menuitem"
            >
              Cre8tive AI Studios
            </Link>
            <Link 
              to="/manager" 
              className="text-white/90 hover:text-white transition-colors font-geist text-lg font-medium tracking-[-0.01em] flex items-center h-full"
              role="menuitem"
            >
              Ad Manager
            </Link>
            <Link 
              to="/agents" 
              className="text-white/90 hover:text-white transition-colors font-geist text-lg font-medium tracking-[-0.01em] flex items-center h-full"
              role="menuitem"
            >
              AI Agents
            </Link>
            <Link 
              to="/conversational" 
              className="text-white/90 hover:text-white transition-colors font-geist text-lg font-medium tracking-[-0.01em] flex items-center h-full"
              role="menuitem"
            >
              Conversational AI Agents
            </Link>
            <Link 
              to="/about" 
              className="text-white/90 hover:text-white transition-colors font-geist text-lg font-medium tracking-[-0.01em] flex items-center h-full"
              role="menuitem"
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-white/90 hover:text-white transition-colors font-geist text-lg font-medium tracking-[-0.01em] flex items-center h-full"
              role="menuitem"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="bg-transparent text-white border-white/20 hover:bg-white/10 font-geist font-medium tracking-[-0.01em] text-base flex items-center hidden md:flex"
              aria-label="Sign in to your account"
            >
              Sign in
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={openMenu}
              aria-label="Open mobile menu"
            >
              <Menu className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && isMobile && (
        <MobileMenuOverlay onClose={closeMenu} />
      )}
    </nav>
  );
};