import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import { Benefits } from "@/components/benefits/Benefits";
import { ConceptToCreation } from "@/components/concept-to-creation/ConceptToCreation";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FadeIn } from "@/components/shared/FadeIn";
import { motion } from "framer-motion";

const AdManager = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #000000 0%, #000000 75%, #0D0D1D 100%)',
          opacity: 0.95
        }}
      />
      
      {/* Brand Color Accents */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 
            'radial-gradient(circle at 20% 20%, rgba(155,135,245,0.15) 0%, transparent 40%), ' +
            'radial-gradient(circle at 80% 80%, rgba(217,70,239,0.15) 0%, transparent 40%)',
          filter: 'blur(120px)'
        }}
      />

      <Navigation />
      
      <main className="relative pt-20">
        {/* Hero Section */}
        <section 
          className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4 mb-16"
          aria-label="Hero section"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center space-y-10">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: [0, 1],
                  y: [20, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gradient opacity-0 animate-[fadeIn_3s_ease-out_0.5s_forwards] neon-glow"
              >
                Cre8tive AI Ad Manager
              </motion.h1>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: [0.5, 1],
                  y: [10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-semibold opacity-0 animate-[fadeIn_3s_ease-out_1s_forwards] max-w-5xl mx-auto neon-glow-subtle"
              >
                From Idea to Storyboard: Effortless Ad Creation, Powered by AI
              </motion.h2>

              {/* Blueprint Visual - Now with continuous animation */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.5, 1],
                  scale: [0.98, 1.02]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="relative h-48 w-full max-w-3xl mx-auto opacity-0 animate-[fadeIn_3s_ease-out_1s_forwards]"
              >
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, rgba(0,149,255,0.05) 1px, transparent 1px), linear-gradient(0deg, rgba(0,149,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    transform: 'perspective(1000px) rotateX(15deg)',
                  }}
                />
                
                {/* Neon Lines and Elements with continuous glow */}
                <motion.div 
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(0,149,255,0.2)",
                      "0 0 40px rgba(0,149,255,0.4)",
                      "0 0 20px rgba(0,149,255,0.2)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(0,149,255,0.2) 0%, transparent 60%)',
                  }}
                />
                
                {/* Animated Flow Lines */}
                <motion.div 
                  animate={{
                    backgroundPosition: ["200% 0", "-200% 0"]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 opacity-50"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, #0095ff 50%, transparent 100%)',
                    backgroundSize: '200% 100%',
                  }}
                />
                
                {/* Content Nodes with pulsing animation */}
                <div className="relative grid grid-cols-5 gap-4 w-full h-full p-2">
                  {/* Input Node */}
                  <motion.div 
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="flex items-center justify-center col-span-1"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0095ff] opacity-75 shadow-[0_0_20px_#0095ff]" />
                  </motion.div>
                  
                  {/* Processing Nodes */}
                  <div className="flex items-center justify-center col-span-3 space-x-4">
                    {[0, 1, 2].map((index) => (
                      <motion.div
                        key={index}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                          ease: "easeInOut"
                        }}
                        className="w-8 h-8 rounded-full bg-[#0095ff] opacity-75 shadow-[0_0_15px_#0095ff]"
                      />
                    ))}
                  </div>
                  
                  {/* Output Node */}
                  <motion.div 
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8
                    }}
                    className="flex items-center justify-center col-span-1"
                  >
                    <div className="w-14 h-14 rounded-lg bg-[#0095ff] opacity-75 shadow-[0_0_30px_#0095ff]" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: [0.8, 1],
                  y: [5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 1
                }}
                className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_3s_ease-out_1.5s_forwards] px-4 neon-glow-subtle"
              >
                Transform your advertising process with the Cre8tive AI Ad Manager—a state-of-the-art platform that takes your product and brand from concept to storyboard in minutes. Whether you're a client or a digital marketing agency, our tool empowers you to develop stunning, professional creatives with ease, ready for production by our Cre8tive AI Studio Team.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.9, 1],
                  scale: [0.98, 1.02]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="opacity-0 animate-[fadeIn_6s_ease-out_2s_forwards]"
              >
                <Button 
                  size="lg" 
                  className="text-xl px-10 py-7 bg-gradient-to-r from-[#0EA5E9] via-[#1E40AF] to-[#1E3A8A] hover:from-[#0284C7] hover:via-[#1E3A8A] hover:to-[#172554] border-0 shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:shadow-[0_0_25px_rgba(14,165,233,0.8)] transition-all duration-300"
                >
                  Get Started Free
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Concept to Creation Section */}
        <FadeIn>
          <ConceptToCreation />
        </FadeIn>

        {/* How It Works Section */}
        <FadeIn>
          <HowItWorks />
        </FadeIn>

        {/* Benefits Section */}
        <FadeIn>
          <Benefits />
        </FadeIn>

        {/* Contact CTA Section */}
        <FadeIn>
          <ContactCTA />
        </FadeIn>
      </main>
    </div>
  );
};

export default AdManager;