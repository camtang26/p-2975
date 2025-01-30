import { motion } from "framer-motion";

export const RobotIllustration = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative w-full max-w-[300px] h-[300px] mx-auto my-8"
    >
      {/* Robot Body */}
      <motion.div 
        className="absolute inset-0"
        style={{
          filter: "drop-shadow(0 0 15px rgba(155,135,245,0.3))"
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Robot Head */}
          <rect x="70" y="40" width="60" height="50" rx="10" 
                className="fill-white/10 stroke-white/80 stroke-2"/>
          
          {/* Robot Eyes */}
          <circle cx="85" cy="60" r="5" className="fill-[#9b87f5]"/>
          <circle cx="115" cy="60" r="5" className="fill-[#9b87f5]"/>
          
          {/* Robot Body */}
          <rect x="60" y="95" width="80" height="70" rx="10" 
                className="fill-white/10 stroke-white/80 stroke-2"/>
          
          {/* Robot Arm holding phone */}
          <path d="M140,120 C160,120 170,140 170,150" 
                className="stroke-white/80 stroke-2 fill-none"/>
          
          {/* Phone */}
          <rect x="155" y="140" width="25" height="40" rx="3" 
                className="fill-white/10 stroke-white/80 stroke-2"/>
          
          {/* Speech Bubble */}
          <path d="M70,30 Q60,30 60,20 L60,10 Q60,0 70,0 L130,0 Q140,0 140,10 L140,20 Q140,30 130,30 Z" 
                className="fill-white/10 stroke-white/80 stroke-2 translate-x-[-20px] translate-y-[5px]"/>
          
          {/* Speech Lines */}
          <line x1="80" y1="15" x2="120" y2="15" className="stroke-white/80 stroke-2"/>
          <line x1="85" y1="22" x2="115" y2="22" className="stroke-white/80 stroke-2"/>
        </svg>
      </motion.div>
      
      {/* Glow Effects */}
      <div className="absolute inset-0 blur-[50px] opacity-30 bg-gradient-to-r from-[#9b87f5] to-[#d946ef]"/>
    </motion.div>
  );
};