import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { RobotIllustration } from "../RobotIllustration";

export const DesktopConversationalHero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/95 to-transparent">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,128,0.05)_0%,transparent_70%)]" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl font-extrabold text-white neon-glow mb-6"
        >
          Ignite Natural Conversations
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-semibold text-white/90 neon-glow-subtle mb-10 max-w-3xl mx-auto"
        >
          Elevate Customer Experiences and Drive Business Growth with Intelligent Conversational AI
        </motion.p>
        
        <RobotIllustration />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative mt-8"
        >
          <div className="mx-auto text-center max-w-2xl">
            <h3 className="text-4xl font-bold text-white neon-glow mb-4">
              Experience the Future of Conversation
            </h3>
            <p className="text-2xl text-white/80 neon-glow-subtle mb-8">
              Don't take our word for it – experience the power of our Conversational AI firsthand. 
              Engage with our AI agent now to see how it can transform your customer interactions.
            </p>
            <motion.div 
              className="absolute text-white/80 bottom-[-120px] right-[80px]"
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
              <ArrowDownRight className="w-16 h-16" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};