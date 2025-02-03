import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { RobotIllustration } from "./RobotIllustration";
import { useIsMobile } from "../../hooks/use-mobile";

export const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section 
      className={`relative flex items-center justify-center overflow-hidden ${
        isMobile 
          ? 'min-h-[100vh] -mt-24' 
          : 'max-w-[2560px] mx-auto ' + // Base desktop styles
            'h-[95vh] md:min-h-[700px] ' + // Default desktop height
            '2xl:h-[85vh] 2xl:min-h-[900px] ' + // 2560x1440 specific - increased min-height
            'xl:h-[110vh] xl:min-h-[800px]' // 1366x768 specific - increased height and min-height
      }`}
    >
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/95 to-transparent"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,128,0.05)_0%,transparent_70%)]" />
        </div>
      </div>
      
      <div className={`container mx-auto px-4 text-center relative ${
        isMobile 
          ? 'max-w-[95%]' 
          : 'max-w-[1200px] ' + // Base desktop container
            'pt-28 ' + // Default padding top
            '2xl:pt-24 2xl:max-w-[1600px] ' + // 2560x1440 specific - increased max-width and adjusted padding
            'xl:pt-32' // 1366x768 specific
      }`}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`font-extrabold text-white neon-glow ${
            isMobile 
              ? 'text-4xl mt-2 mb-3' 
              : 'text-5xl lg:text-6xl 2xl:text-8xl xl:text-7xl mb-6' // Added 2xl text size
          }`}
        >
          Ignite Natural Conversations
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`text-white/90 font-semibold max-w-3xl mx-auto neon-glow-subtle ${
            isMobile 
              ? 'text-lg mb-4 px-2 leading-snug' 
              : 'text-xl lg:text-2xl 2xl:text-4xl xl:text-3xl mb-8' // Added 2xl text size
          }`}
        >
          Elevate Customer Experiences and Drive Business Growth with Intelligent Conversational AI
        </motion.p>
        
        <RobotIllustration />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`relative ${isMobile ? 'mt-0 px-4' : 'mt-6'}`}
        >
          <div className={`mx-auto text-center ${
            isMobile 
              ? 'max-w-[95%] space-y-1' 
              : 'max-w-2xl 2xl:max-w-4xl' // Added 2xl max-width
          }`}>
            <h3 className={`font-bold text-white neon-glow ${
              isMobile 
                ? 'text-xl mb-2' 
                : 'text-2xl lg:text-3xl 2xl:text-5xl xl:text-4xl mb-4' // Added 2xl text size
            }`}>
              Experience the Future of Conversation
            </h3>
            <p className={`text-white/80 neon-glow-subtle ${
              isMobile 
                ? 'text-base leading-snug mb-2' 
                : 'text-lg lg:text-xl 2xl:text-3xl xl:text-2xl mb-6' // Added 2xl text size
            }`}>
              Don't take our word for it – experience the power of our Conversational AI firsthand. 
              Engage with our AI agent now to see how it can transform your customer interactions.
            </p>
            <motion.div 
              className={`absolute text-white/80 ${
                isMobile 
                  ? 'bottom-[-40px] right-[20px]' 
                  : 'bottom-[-80px] right-[80px] ' + // Default position
                    '2xl:bottom-[-80px] 2xl:right-[120px] ' + // 2560x1440 specific - adjusted position
                    'xl:bottom-[-120px]' // 1366x768 specific - increased bottom spacing
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
              <ArrowDownRight className={isMobile ? "w-10 h-10" : "w-16 h-16 2xl:w-20 2xl:h-20"} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};