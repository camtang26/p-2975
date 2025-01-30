import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Cre8tive AI Logo"
              className="h-12 w-auto"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.src = '/placeholder.svg';
              }}
            />
          </Link>
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
        <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          <Link to="/" className="text-white px-4 py-2">Home</Link>
          <Link to="/studios" className="text-white px-4 py-2">Studios</Link>
          <Link to="/ad-manager" className="text-white px-4 py-2">Ad Manager</Link>
          <Link to="/agents" className="text-white px-4 py-2">Agents</Link>
          <Link to="/conversational" className="text-white px-4 py-2">Conversational AI</Link>
          <Link to="/about" className="text-white px-4 py-2">About</Link>
          <Link to="/contact" className="text-white px-4 py-2">Contact</Link>
        </div>
      </div>
    </nav>
  );
};
