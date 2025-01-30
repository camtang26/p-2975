import { Link } from "react-router-dom";
import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative">
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #000000 0%, #000000 75%, #0D0D1D 100%)',
          opacity: 0.95
        }}
      />
      
      <div className="relative border-t border-white/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/1695cb6f-90ec-4a79-aedf-92f17ba25444.png" 
                  alt="Logo" 
                  className="w-8 h-8" 
                />
                <span className="font-geist text-white font-bold">Cre8tive AI</span>
              </div>
              <div className="flex space-x-4">
                <Twitter className="w-5 h-5 text-white/70 hover:text-white transition-colors duration-300 cursor-pointer" />
                <Instagram className="w-5 h-5 text-white/70 hover:text-white transition-colors duration-300 cursor-pointer" />
                <Youtube className="w-5 h-5 text-white/70 hover:text-white transition-colors duration-300 cursor-pointer" />
                <Linkedin className="w-5 h-5 text-white/70 hover:text-white transition-colors duration-300 cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="font-geist text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/studios" className="font-geist text-white/70 hover:text-white transition-colors duration-300">
                    Cre8tive AI Studios
                  </Link>
                </li>
                <li>
                  <Link to="/manager" className="font-geist text-white/70 hover:text-white transition-colors duration-300">
                    Ad Manager
                  </Link>
                </li>
                <li>
                  <Link to="/agents" className="font-geist text-white/70 hover:text-white transition-colors duration-300">
                    AI Agents
                  </Link>
                </li>
                <li>
                  <Link to="/conversational" className="font-geist text-white/70 hover:text-white transition-colors duration-300">
                    Conversational AI Agents
                  </Link>
                </li>
                <li>
                  <Link to="/b2b" className="font-geist text-white/70 hover:text-white transition-colors duration-300">
                    B2B Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-geist text-white font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/contact" className="font-geist text-white/70 hover:text-white transition-colors duration-300">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="font-geist text-white/70 hover:text-white transition-colors duration-300">
                    Terms of Service & Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-end">
              <h3 className="font-geist text-white font-semibold mb-4">© 2025 Cre8tive AI</h3>
              <Link to="/">
                <img 
                  src="/lovable-uploads/1695cb6f-90ec-4a79-aedf-92f17ba25444.png" 
                  alt="Footer logo" 
                  className="w-32 hover:opacity-90 transition-opacity duration-300" 
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};