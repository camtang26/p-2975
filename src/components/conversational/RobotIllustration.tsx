import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export const RobotIllustration = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative w-full max-w-[300px] h-[300px] mx-auto my-8"
    >
      {/* Robot and Phone Container */}
      <motion.div 
        className="absolute inset-0"
        style={{
          filter: "drop-shadow(0 0 15px rgba(0,255,128,0.4))"
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Robot Head */}
          <circle cx="80" cy="70" r="30" 
                  className="fill-white/10 stroke-[#00ff80] stroke-2"/>
          
          {/* Robot Eyes */}
          <circle cx="70" cy="65" r="5" className="fill-[#00ff80]"/>
          <circle cx="90" cy="65" r="5" className="fill-[#00ff80]"/>
          
          {/* Robot Antenna */}
          <line x1="80" y1="40" x2="80" y2="30" 
                className="stroke-[#00ff80] stroke-2"/>
          <circle cx="80" cy="28" r="2" className="fill-[#00ff80]"/>
          
          {/* Robot Body */}
          <rect x="60" y="105" width="40" height="50" rx="5" 
                className="fill-white/10 stroke-[#00ff80] stroke-2"/>
          
          {/* Robot Details */}
          <line x1="70" y1="120" x2="90" y2="120" 
                className="stroke-[#00ff80] stroke-2"/>
          <line x1="70" y1="130" x2="90" y2="130" 
                className="stroke-[#00ff80] stroke-2"/>
          
          {/* Phone Icon */}
          <g transform="translate(120, 60) scale(1.5)">
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
              className="fill-none stroke-[#00ff80] stroke-2"
            />
          </g>
          
          {/* Connection Lines */}
          <path d="M95,70 Q110,70 120,70" 
                className="fill-none stroke-[#00ff80]/50 stroke-2 stroke-dasharray-2"/>
        </svg>
      </motion.div>
      
      {/* Enhanced Glow Effects */}
      <div className="absolute inset-0 blur-[50px] opacity-40 bg-gradient-to-r from-[#00ff80]/40 to-[#00ff80]/20"/>
      <div className="absolute inset-0 blur-[25px] opacity-20 bg-gradient-radial from-[#00ff80]/30 via-transparent to-transparent"/>
    </motion.div>
  );
};