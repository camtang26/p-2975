import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuOverlayProps {
  onClose: () => void;
}

export const MobileMenuOverlay: React.FC<MobileMenuOverlayProps> = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[2147483647] mobile-menu-overlay mobile-active"
        style={{ 
          isolation: 'isolate',
        }}
        aria-modal="true"
        role="dialog"
      >
        <div className="container mx-auto px-4 py-6 h-full flex flex-col">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-4" 
              onClick={onClose}
              aria-label="Go to homepage"
            >
              <img 
                src="/lovable-uploads/a5f0ca2b-7777-4887-8e92-d1d0959c2448.png" 
                alt="Cre8tive AI Logo" 
                className="h-14 w-auto"
                width="56"
                height="56"
              />
              <span className="text-white font-geist font-bold text-2xl tracking-[-0.02em]">
                Cre8tive AI
              </span>
            </Link>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/10 transition-colors rounded-full border-2 border-white/20 hover:border-white/40"
              aria-label="Close mobile menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex-1 mt-8">
            <ul className="space-y-6" role="menu">
              <li role="none">
                <Link
                  to="/studios"
                  className="text-white/90 hover:text-white transition-colors font-geist text-2xl font-medium tracking-[-0.01em] block py-3 px-4 rounded-lg hover:bg-white/10"
                  onClick={onClose}
                  role="menuitem"
                >
                  Cre8tive AI Studios
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/manager"
                  className="text-white/90 hover:text-white transition-colors font-geist text-2xl font-medium tracking-[-0.01em] block py-3 px-4 rounded-lg hover:bg-white/10"
                  onClick={onClose}
                  role="menuitem"
                >
                  Ad Manager
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/agents"
                  className="text-white/90 hover:text-white transition-colors font-geist text-2xl font-medium tracking-[-0.01em] block py-3 px-4 rounded-lg hover:bg-white/10"
                  onClick={onClose}
                  role="menuitem"
                >
                  AI Agents
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/conversational"
                  className="text-white/90 hover:text-white transition-colors font-geist text-2xl font-medium tracking-[-0.01em] block py-3 px-4 rounded-lg hover:bg-white/10"
                  onClick={onClose}
                  role="menuitem"
                >
                  Conversational AI Agents
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/about"
                  className="text-white/90 hover:text-white transition-colors font-geist text-2xl font-medium tracking-[-0.01em] block py-3 px-4 rounded-lg hover:bg-white/10"
                  onClick={onClose}
                  role="menuitem"
                >
                  About Us
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/contact"
                  className="text-white/90 hover:text-white transition-colors font-geist text-2xl font-medium tracking-[-0.01em] block py-3 px-4 rounded-lg hover:bg-white/10"
                  onClick={onClose}
                  role="menuitem"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-auto pb-8">
            <Button 
              variant="outline" 
              className="w-full bg-white text-black hover:bg-white/90 font-geist font-medium tracking-[-0.01em] text-lg h-14 border-0"
              onClick={onClose}
            >
              Sign in
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};