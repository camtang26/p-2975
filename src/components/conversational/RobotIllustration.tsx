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
          filter: "drop-shadow(0 0 15px rgba(0,255,128,0.4))"
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Main Circle Head */}
          <circle cx="100" cy="70" r="35" 
                  className="fill-white/10 stroke-[#00ff80] stroke-2"/>
          
          {/* Digital Pattern Lines */}
          <path d="M75,70 h-10 M135,70 h-10" 
                className="stroke-[#00ff80] stroke-2"/>
          <path d="M100,45 v-10 M100,105 v-10" 
                className="stroke-[#00ff80] stroke-2"/>
          
          {/* Animated Display Screen */}
          <rect x="85" y="60" width="30" height="20" rx="2" 
                className="fill-[#00ff80]/20 stroke-[#00ff80] stroke-2"/>
          
          {/* Connection Points */}
          <circle cx="75" cy="70" r="3" className="fill-[#00ff80]"/>
          <circle cx="125" cy="70" r="3" className="fill-[#00ff80]"/>
          
          {/* Digital Wave Pattern */}
          <path d="M60,130 Q80,120 100,130 Q120,140 140,130" 
                className="fill-none stroke-[#00ff80] stroke-2"/>
          
          {/* Floating Data Particles */}
          <circle cx="70" cy="100" r="2" className="fill-[#00ff80]"/>
          <circle cx="130" cy="100" r="2" className="fill-[#00ff80]"/>
          <circle cx="100" cy="110" r="2" className="fill-[#00ff80]"/>
          
          {/* Communication Beams */}
          <path d="M40,60 Q70,70 40,80" 
                className="fill-none stroke-[#00ff80]/50 stroke-2"/>
          <path d="M160,60 Q130,70 160,80" 
                className="fill-none stroke-[#00ff80]/50 stroke-2"/>
          
          {/* Central Core */}
          <circle cx="100" cy="70" r="15" 
                  className="fill-[#00ff80]/20 stroke-[#00ff80] stroke-2"/>
          
          {/* Pulse Ring Animation */}
          <circle cx="100" cy="70" r="25" 
                  className="fill-none stroke-[#00ff80]/30 stroke-2"/>
        </svg>
      </motion.div>
      
      {/* Enhanced Glow Effects */}
      <div className="absolute inset-0 blur-[50px] opacity-40 bg-gradient-to-r from-[#00ff80]/40 to-[#00ff80]/20"/>
      <div className="absolute inset-0 blur-[25px] opacity-20 bg-gradient-radial from-[#00ff80]/30 via-transparent to-transparent"/>
    </motion.div>
  );
};