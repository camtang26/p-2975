import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Link 
            to="/" 
            className="flex items-center space-x-4" 
            aria-label="Go to homepage"
          >
            <img 
              src="/lovable-uploads/a5f0ca2b-7777-4887-8e92-d1d0959c2448.png" 
              alt="Cre8tive AI Logo" 
              className="h-14 w-auto" // Increased from h-10
              width="56" // Increased from 40
              height="56" // Increased from 40
            />
            <span className="text-white font-geist font-bold text-2xl tracking-[-0.02em]">Cre8tive AI</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-12" role="menubar">
            <Link 
              to="/studios" 
              className="text-white/90 hover:text-white transition-colors font-geist text-lg font-medium tracking-[-0.01em] my-auto"
              role="menuitem"
            >
              Cre8tive AI Studios
            </Link>
            <Link 
              to="/manager" 
              className="text-white/90 hover:text-white transition-colors font-geist text-lg font-medium tracking-[-0.01em] my-auto"
              role="menuitem"
            >
              Ad Manager
            </Link>
            <Link 
              to="/agents" 
              className="text-white/90 hover:text-white transition-colors font-geist text-lg font-medium tracking-[-0.01em] my-auto"
              role="menuitem"
            >
              AI Agents
            </Link>
            <Link 
              to="/conversational" 
              className="text-white/90 hover:text-white transition-colors font-geist text-lg font-medium tracking-[-0.01em] my-auto"
              role="menuitem"
            >
              Conversational AI Agents
            </Link>
            <Link 
              to="/about" 
              className="text-white/90 hover:text-white transition-colors font-geist text-lg font-medium tracking-[-0.01em] my-auto"
              role="menuitem"
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-white/90 hover:text-white transition-colors font-geist text-lg font-medium tracking-[-0.01em] my-auto"
              role="menuitem"
            >
              Contact
            </Link>
          </div>

          <Button 
            variant="outline" 
            className="bg-transparent text-white border-white/20 hover:bg-white/10 font-geist font-medium tracking-[-0.01em] text-lg"
            aria-label="Sign in to your account"
          >
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
};