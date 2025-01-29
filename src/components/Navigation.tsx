import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-white font-bold text-xl">Cre8tive AI</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/studios" className="text-white/80 hover:text-white transition-colors">
              Cre8tive AI Studios
            </Link>
            <Link to="/manager" className="text-white/80 hover:text-white transition-colors">
              Ad Manager
            </Link>
            <Link to="/agents" className="text-white/80 hover:text-white transition-colors">
              AI Agents
            </Link>
            <Link to="/conversational" className="text-white/80 hover:text-white transition-colors">
              Conversational AI Agents
            </Link>
            <Link to="/about" className="text-white/80 hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <Button variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10">
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
};