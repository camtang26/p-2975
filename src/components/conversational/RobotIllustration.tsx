import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export const RobotIllustration = () => {
  return (
    <div className="flex justify-center items-center gap-32 relative w-full max-w-[800px] h-[300px] mx-auto my-8">
      {/* Robot Head Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: [0.95, 1.05, 0.95],
          y: [-5, 5, -5]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-[300px] h-[300px]"
        style={{
          filter: "drop-shadow(0 0 15px rgba(0,255,128,0.4))"
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Robot Head - Larger and more detailed */}
          <motion.circle 
            cx="100" 
            cy="100" 
            r="50" 
            className="fill-white/10 stroke-[#00ff80] stroke-2"
            animate={{
              r: [50, 52, 50],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Robot Eyes - More geometric and robotic */}
          <motion.rect 
            x="77" 
            y="82" 
            width="16" 
            height="16" 
            rx="2" 
            className="fill-[#00ff80]"
            animate={{
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.rect 
            x="107" 
            y="82" 
            width="16" 
            height="16" 
            rx="2" 
            className="fill-[#00ff80]"
            animate={{
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
          />
          
          {/* Robot Antenna */}
          <motion.line 
            x1="100" 
            y1="50" 
            x2="100" 
            y2="35" 
            className="stroke-[#00ff80] stroke-2"
            animate={{
              y2: [35, 33, 35]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.circle 
            cx="100" 
            cy="32" 
            r="3" 
            className="fill-[#00ff80]"
            animate={{
              r: [3, 4, 3],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Robot Details */}
          <motion.path 
            d="M70,110 Q100,130 130,110" 
            className="fill-none stroke-[#00ff80] stroke-2"
            animate={{
              d: [
                "M70,110 Q100,130 130,110",
                "M70,112 Q100,132 130,112",
                "M70,110 Q100,130 130,110"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Circuit-like details */}
          <line x1="70" y1="65" x2="85" y2="65" className="stroke-[#00ff80] stroke-1 opacity-30"/>
          <line x1="115" y1="65" x2="130" y2="65" className="stroke-[#00ff80] stroke-1 opacity-30"/>
          <motion.circle 
            cx="100" 
            cy="140" 
            r="5" 
            className="fill-[#00ff80]"
            animate={{
              r: [5, 6, 5],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
        
        {/* Glow Effects for Robot */}
        <motion.div 
          className="absolute inset-0 blur-[50px] bg-gradient-to-r from-[#00ff80]/40 to-[#00ff80]/20"
          animate={{
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute inset-0 blur-[25px] bg-gradient-radial from-[#00ff80]/30 via-transparent to-transparent"
          animate={{
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Phone Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: [0.95, 1.05, 0.95],
          y: [5, -5, 5]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-[300px] h-[300px] flex items-center justify-center"
        style={{
          filter: "drop-shadow(0 0 15px rgba(0,255,128,0.4))"
        }}
      >
        <div className="relative">
          <Phone 
            size={120} 
            className="text-[#00ff80] transform -rotate-12"
            strokeWidth={1.5}
          />
          
          {/* Phone Connection Lines */}
          <motion.div
            className="absolute inset-0"
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg viewBox="0 0 120 120" className="w-full h-full absolute top-0 left-0">
              <motion.circle 
                cx="60" 
                cy="60" 
                r="55" 
                className="fill-none stroke-[#00ff80] stroke-1"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  r: [55, 57, 55]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.circle 
                cx="60" 
                cy="60" 
                r="45" 
                className="fill-none stroke-[#00ff80] stroke-1"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  r: [45, 47, 45]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.circle 
                cx="60" 
                cy="60" 
                r="35" 
                className="fill-none stroke-[#00ff80] stroke-1"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  r: [35, 37, 35]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </svg>
          </motion.div>
        </div>
        
        {/* Glow Effects for Phone */}
        <motion.div 
          className="absolute inset-0 blur-[50px] bg-gradient-to-r from-[#00ff80]/40 to-[#00ff80]/20"
          animate={{
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute inset-0 blur-[25px] bg-gradient-radial from-[#00ff80]/30 via-transparent to-transparent"
          animate={{
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
};