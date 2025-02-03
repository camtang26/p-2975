import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { RobotIllustration } from "./RobotIllustration";
import { useIsMobile } from "../../hooks/use-mobile";

export const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/95 to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,128,0.05)_0%,transparent_70%)]" />
      </div>
      <div className={`container mx-auto px-4 text-center relative ${isMobile ? 'max-w-[95%]' : ''}`}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`font-extrabold mb-6 text-white neon-glow ${
            isMobile ? 'text-4xl' : 'text-6xl md:text-7xl'
          }`}
        >
          Ignite Natural Conversations
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`mb-10 text-white/90 font-semibold max-w-3xl mx-auto neon-glow-subtle ${
            isMobile ? 'text-xl' : 'text-2xl md:text-3xl'
          }`}
        >
          Elevate Customer Experiences and Drive Business Growth with Intelligent Conversational AI
        </motion.p>
        
        <RobotIllustration />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`mt-8 relative ${isMobile ? 'mt-4' : ''}`}
        >
          <div className={`mx-auto text-center ${isMobile ? 'max-w-[95%]' : 'max-w-2xl'}`}>
            <h3 className={`font-bold mb-4 text-white neon-glow ${
              isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'
            }`}>
              Experience the Future of Conversation
            </h3>
            <p className={`text-white/80 mb-8 neon-glow-subtle ${
              isMobile ? 'text-lg' : 'text-xl md:text-2xl'
            }`}>
              Don't take our word for it – experience the power of our Conversational AI firsthand. 
              Engage with our AI agent now to see how it can transform your customer interactions.
            </p>
            <motion.div 
              className={`absolute text-white/80 ${
                isMobile ? 'bottom-[-80px] right-[40px]' : 'bottom-[-120px] right-[80px]'
              }`}
              animate={{ 
                x: [0, 10, 0],
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowDownRight className={isMobile ? "w-12 h-12" : "w-16 h-16"} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};