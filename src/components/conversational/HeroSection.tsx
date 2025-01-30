import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Button } from "../ui/button";

export const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-black/95 to-black/90">
      <div className="container mx-auto px-4 text-center relative">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 text-white"
        >
          Ignite Natural Conversations
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl mb-10 text-white/90 font-semibold max-w-3xl mx-auto"
        >
          Elevate Customer Experiences and Drive Business Growth with Intelligent Conversational AI
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 relative"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Experience the Future of Conversation</h3>
            <p className="text-lg text-white/80 mb-8">
              Don't take our word for it – experience the power of our Conversational AI firsthand. 
              Engage with our AI agent now to see how it can transform your customer interactions.
            </p>
            <motion.div 
              className="absolute bottom-[-120px] right-[80px] text-white/80"
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