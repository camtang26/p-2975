import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import { Benefits } from "@/components/benefits/Benefits";
import { ConceptToCreation } from "@/components/concept-to-creation/ConceptToCreation";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FadeIn } from "@/components/shared/FadeIn";

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
          className="relative min-h-[90vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden py-10 md:py-20 px-4 mb-8 md:mb-16"
          aria-label="Hero section"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center space-y-6 md:space-y-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gradient opacity-0 animate-[fadeIn_3s_ease-out_0.5s_forwards] neon-glow">
                Cre8tive AI Ad Manager
              </h1>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 font-semibold opacity-0 animate-[fadeIn_3s_ease-out_1s_forwards] max-w-5xl mx-auto neon-glow-subtle px-2 md:px-0">
                From Idea to Storyboard: Effortless Ad Creation, Powered by AI
              </h2>

              {/* Blueprint Visual - Now with continuous animations */}
              <div className="relative h-36 md:h-48 w-full max-w-3xl mx-auto opacity-0 animate-[fadeIn_3s_ease-out_1s_forwards]">
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, rgba(0,149,255,0.05) 1px, transparent 1px), linear-gradient(0deg, rgba(0,149,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    transform: 'perspective(1000px) rotateX(15deg)',
                    animation: 'pulse 2s ease-in-out infinite'
                  }}
                />
                
                {/* Animated Neon Lines and Elements */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(0,149,255,0.2) 0%, transparent 60%)',
                    boxShadow: 'inset 0 0 50px rgba(0,149,255,0.3)',
                    animation: 'glow 3s ease-in-out infinite alternate'
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
                
                {/* Content Nodes - with continuous animations */}
                <div className="relative grid grid-cols-5 gap-2 md:gap-4 w-full h-full p-2">
                  {/* Input Node */}
                  <div className="flex items-center justify-center col-span-1">
                    <div 
                      className="w-6 h-6 md:w-10 md:h-10 rounded-lg bg-[#0095ff] opacity-75 shadow-[0_0_20px_#0095ff]"
                      style={{
                        animation: 'pulse 2s ease-in-out infinite'
                      }}
                    />
                  </div>
                  
                  {/* Processing Nodes */}
                  <div className="flex items-center justify-center col-span-3 space-x-2 md:space-x-4">
                    {[200, 400, 600].map((delay, index) => (
                      <div 
                        key={delay}
                        className={`w-${index === 1 ? '8 md:w-12' : '6 md:w-8'} h-${index === 1 ? '8 md:h-12' : '6 md:h-8'} rounded-full bg-[#0095ff] opacity-75 shadow-[0_0_${index === 1 ? '25' : '15'}px_#0095ff]`}
                        style={{
                          animation: `pulse 2s ease-in-out infinite ${delay}ms`
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Output Node */}
                  <div className="flex items-center justify-center col-span-1">
                    <div 
                      className="w-8 h-8 md:w-14 md:h-14 rounded-lg bg-[#0095ff] opacity-75 shadow-[0_0_30px_#0095ff]"
                      style={{
                        animation: 'pulse 2s ease-in-out infinite 800ms'
                      }}
                    />
                  </div>
                </div>
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_3s_ease-out_1.5s_forwards] px-4 neon-glow-subtle">
                Transform your advertising process with the Cre8tive AI Ad Manager—a state-of-the-art platform that takes your product and brand from concept to storyboard in minutes. Whether you're a client or a digital marketing agency, our tool empowers you to develop stunning, professional creatives with ease, ready for production by our Cre8tive AI Studio Team.
              </p>

              <div className="opacity-0 animate-[fadeIn_6s_ease-out_2s_forwards]">
                <Button 
                  size="lg" 
                  className="text-lg md:text-xl px-8 md:px-10 py-6 md:py-7 bg-gradient-to-r from-[#0EA5E9] via-[#1E40AF] to-[#1E3A8A] hover:from-[#0284C7] hover:via-[#1E3A8A] hover:to-[#172554] border-0 shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:shadow-[0_0_25px_rgba(14,165,233,0.8)] transition-all duration-300"
                >
                  Get Started Free
                </Button>
              </div>
            </div>
          </div>

          {/* Animated Background texture */}
          <div 
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none"
            style={{
              animation: 'pulse 4s ease-in-out infinite alternate'
            }}
            aria-hidden="true"
          />
        </section>

        <FadeIn>
          <ConceptToCreation />
        </FadeIn>

        <FadeIn>
          <HowItWorks />
        </FadeIn>

        <FadeIn>
          <Benefits />
        </FadeIn>

        <FadeIn>
          <ContactCTA />
        </FadeIn>
      </main>
    </div>
  );
};

export default AdManager;
