import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const DesktopAdManagerHero = () => {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4"
      aria-label="Hero section"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-bold text-gradient opacity-0 animate-[fadeIn_3s_ease-out_0.5s_forwards] neon-glow"
          >
            Cre8tive AI Ad Manager
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl text-white/90 font-semibold opacity-0 animate-[fadeIn_3s_ease-out_1s_forwards] max-w-5xl mx-auto neon-glow-subtle"
          >
            From Idea to Storyboard: Effortless Ad Creation, Powered by AI
          </motion.h2>

          {/* Blueprint Visual */}
          <div className="relative h-48 w-full max-w-3xl mx-auto opacity-0 animate-[fadeIn_3s_ease-out_1s_forwards]">
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, rgba(0,149,255,0.05) 1px, transparent 1px), linear-gradient(0deg, rgba(0,149,255,0.05) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                transform: 'perspective(1000px) rotateX(15deg)',
                animation: 'pulse 2s ease-in-out infinite'
              }}
            />
            
            {/* Animated Flow Lines */}
            <div 
              className="absolute inset-0 opacity-50"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #0095ff 50%, transparent 100%)',
                backgroundSize: '200% 100%',
                animation: 'flow 3s linear infinite'
              }}
            />
            
            {/* Content Nodes */}
            <div className="relative grid grid-cols-5 gap-4 w-full h-full p-2">
              <div className="flex items-center justify-center col-span-1">
                <div 
                  className="w-10 h-10 rounded-lg bg-[#0095ff] opacity-75 shadow-[0_0_20px_#0095ff]"
                  style={{ animation: 'pulse 2s ease-in-out infinite' }}
                />
              </div>
              
              <div className="flex items-center justify-center col-span-3 space-x-4">
                {[200, 400, 600].map((delay, index) => (
                  <div 
                    key={delay}
                    className={`w-${index === 1 ? '12' : '8'} h-${index === 1 ? '12' : '8'} rounded-full bg-[#0095ff] opacity-75 shadow-[0_0_${index === 1 ? '25' : '15'}px_#0095ff]`}
                    style={{ animation: `pulse 2s ease-in-out infinite ${delay}ms` }}
                  />
                ))}
              </div>
              
              <div className="flex items-center justify-center col-span-1">
                <div 
                  className="w-14 h-14 rounded-lg bg-[#0095ff] opacity-75 shadow-[0_0_30px_#0095ff]"
                  style={{ animation: 'pulse 2s ease-in-out infinite 800ms' }}
                />
              </div>
            </div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_3s_ease-out_1.5s_forwards] px-4 neon-glow-subtle"
          >
            Transform your advertising process with the Cre8tive AI Ad Manager—a state-of-the-art platform that takes your product and brand from concept to storyboard in minutes. Whether you're a client or a digital marketing agency, our tool empowers you to develop stunning, professional creatives with ease, ready for production by our Cre8tive AI Studio Team.
          </motion.p>

          <div className="opacity-0 animate-[fadeIn_6s_ease-out_2s_forwards]">
            <Button 
              size="lg" 
              className="text-xl px-10 py-7 bg-gradient-to-r from-[#0EA5E9] via-[#1E40AF] to-[#1E3A8A] hover:from-[#0284C7] hover:via-[#1E3A8A] hover:to-[#172554] border-0 shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:shadow-[0_0_25px_rgba(14,165,233,0.8)] transition-all duration-300"
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};