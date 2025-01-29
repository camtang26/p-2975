import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/a5f0ca2b-7777-4887-8e92-d1d0959c2448.png" 
              alt="Cre8tive AI Logo" 
              className="h-10 w-auto"
            />
            <span className="text-white font-bold text-xl font-['Inter']">Cre8tive AI</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link 
              to="/studios" 
              className="text-white/90 hover:text-white transition-colors font-['Inter'] text-[15px] font-medium tracking-wide"
            >
              Cre8tive AI Studios
            </Link>
            <Link 
              to="/manager" 
              className="text-white/90 hover:text-white transition-colors font-['Inter'] text-[15px] font-medium tracking-wide"
            >
              Ad Manager
            </Link>
            <Link 
              to="/agents" 
              className="text-white/90 hover:text-white transition-colors font-['Inter'] text-[15px] font-medium tracking-wide"
            >
              AI Agents
            </Link>
            <Link 
              to="/conversational" 
              className="text-white/90 hover:text-white transition-colors font-['Inter'] text-[15px] font-medium tracking-wide"
            >
              Conversational AI Agents
            </Link>
            <Link 
              to="/about" 
              className="text-white/90 hover:text-white transition-colors font-['Inter'] text-[15px] font-medium tracking-wide"
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-white/90 hover:text-white transition-colors font-['Inter'] text-[15px] font-medium tracking-wide"
            >
              Contact
            </Link>
          </div>

          <Button 
            variant="outline" 
            className="bg-transparent text-white border-white/20 hover:bg-white/10 font-['Inter'] font-medium"
          >
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
};