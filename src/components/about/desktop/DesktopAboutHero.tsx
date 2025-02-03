import { motion } from "framer-motion";

export const DesktopAboutHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div 
        className="absolute inset-0 bg-black"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h1 className="text-7xl font-bold text-white tracking-tight">
            About Cre8tive AI
          </h1>
          <p className="text-2xl text-white/90">
            Pioneering the Future of AI-Driven Content Creation
          </p>
        </motion.div>
      </div>
    </section>
  );
};