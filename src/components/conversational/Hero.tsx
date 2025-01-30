import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h1 
            className="text-6xl md:text-7xl font-bold text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            AI Autonomous Agents
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl text-white/90 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cre8tive AI Autonomous Agents: Smarter Solutions for Smarter Businesses
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our custom AI agents are designed to revolutionize your marketing efforts, boost engagement, and deliver tangible results. From CRM to content creation, we provide intelligent solutions that work for you—24/7.
          </motion.p>
        </div>
      </div>
    </section>
  );
};