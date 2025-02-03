import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const DesktopNavigation = () => {
  return (
    <nav 
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10 hidden md:block"
      role="navigation" 
      aria-label="Desktop navigation"
      style={{ height: "var(--nav-height)" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-full">
          <Link 
            to="/" 
            className="flex items-center space-x-[var(--base-spacing)] -mt-1" 
            aria-label="Go to homepage"
          >
            <img 
              src="/lovable-uploads/a5f0ca2b-7777-4887-8e92-d1d0959c2448.png" 
              alt="Cre8tive AI Logo" 
              className="h-[clamp(3rem,8vw,5rem)] w-auto"
              width="56"
              height="56"
            />
            <span 
              className="text-white font-geist font-bold tracking-[-0.02em] leading-none"
              style={{ fontSize: "calc(var(--base-font-size-desktop) * 1.5)" }}
            >
              Cre8tive AI
            </span>
          </Link>
          
          <div className="flex items-center space-x-[var(--base-spacing)] h-full" role="menubar">
            {[
              "Studios",
              "Ad Manager",
              "AI Agents",
              "Conversational AI Agents",
              "About Us",
              "Contact"
            ].map(item => (
              <Link 
                key={item}
                to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                className="text-white/90 hover:text-white transition-colors font-geist font-medium flex items-center h-full"
                style={{ fontSize: "var(--base-font-size-desktop)" }}
                role="menuitem"
              >
                {item}
              </Link>
            ))}
          </div>

          <Button 
            variant="outline" 
            className="bg-transparent text-white border-white/20 hover:bg-white/10 font-geist font-medium flex items-center -mt-1"
            style={{ fontSize: "var(--base-font-size-desktop)" }}
            aria-label="Sign in to your account"
          >
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
};