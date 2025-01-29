import { Link } from "react-router-dom";
import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#111111] border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/6505671a-7e7c-49f4-a7ba-6346d7d34e53.png" alt="Logo" className="w-8 h-8" />
              <span className="text-white font-bold">Cre8tive AI</span>
            </div>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-white/70 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-white/70 hover:text-white cursor-pointer" />
              <Youtube className="w-5 h-5 text-white/70 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-white/70 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/studios" className="text-white/70 hover:text-white">Cre8tive AI Studios</Link></li>
              <li><Link to="/manager" className="text-white/70 hover:text-white">Ad Manager</Link></li>
              <li><Link to="/agents" className="text-white/70 hover:text-white">AI Agents</Link></li>
              <li><Link to="/conversational" className="text-white/70 hover:text-white">Conversational AI Agents</Link></li>
              <li><Link to="/b2b" className="text-white/70 hover:text-white">B2B Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-white/70 hover:text-white">Contact Us</Link></li>
              <li><Link to="/terms" className="text-white/70 hover:text-white">Terms of Service & Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">© 2024 Cre8tive AI</h3>
            <img src="/lovable-uploads/6505671a-7e7c-49f4-a7ba-6346d7d34e53.png" alt="Footer logo" className="w-32" />
          </div>
        </div>
      </div>
    </footer>
  );
};