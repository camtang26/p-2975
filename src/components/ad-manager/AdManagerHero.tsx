import { Button } from "@/components/ui/button";

export const AdManagerHero = () => {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4 mb-16"
      aria-label="Hero section"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gradient animate-fade-in neon-glow">
            Cre8tive AI Ad Manager
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-semibold animate-fade-in [animation-delay:200ms] max-w-5xl mx-auto neon-glow-subtle">
            From Idea to Storyboard: Effortless Ad Creation, Powered by AI
          </h2>

          <div className="relative h-48 w-full max-w-3xl mx-auto animate-fade-in [animation-delay:400ms]">
            {/* Blueprint Grid Background */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, rgba(0,149,255,0.05) 1px, transparent 1px), linear-gradient(0deg, rgba(0,149,255,0.05) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                transform: 'perspective(1000px) rotateX(15deg)',
              }}
            />
            
            {/* Neon Lines and Elements */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(0,149,255,0.2) 0%, transparent 60%)',
                boxShadow: 'inset 0 0 50px rgba(0,149,255,0.3)',
              }}
            />
            
            {/* Animated Flow Lines */}
            <div className="absolute inset-0 opacity-50"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #0095ff 50%, transparent 100%)',
                backgroundSize: '200% 100%',
                animation: 'flow 3s linear infinite',
              }}
            />
            
            {/* Content Nodes */}
            <div className="relative grid grid-cols-5 gap-4 w-full h-full p-2">
              <div className="flex items-center justify-center col-span-1">
                <div className="w-10 h-10 rounded-lg bg-[#0095ff] opacity-75 shadow-[0_0_20px_#0095ff] animate-pulse" />
              </div>
              
              <div className="flex items-center justify-center col-span-3 space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#0095ff] opacity-75 shadow-[0_0_15px_#0095ff] animate-pulse [animation-delay:200ms]" />
                <div className="w-12 h-12 rounded-full bg-[#0095ff] opacity-75 shadow-[0_0_25px_#0095ff] animate-pulse [animation-delay:400ms]" />
                <div className="w-8 h-8 rounded-full bg-[#0095ff] opacity-75 shadow-[0_0_15px_#0095ff] animate-pulse [animation-delay:600ms]" />
              </div>
              
              <div className="flex items-center justify-center col-span-1">
                <div className="w-14 h-14 rounded-lg bg-[#0095ff] opacity-75 shadow-[0_0_30px_#0095ff] animate-pulse [animation-delay:800ms]" />
              </div>
              
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" style={{ opacity: 0.5 }}>
                  <path
                    d="M 20% 50% L 80% 50%"
                    stroke="#0095ff"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed animate-fade-in [animation-delay:600ms] px-4 neon-glow-subtle">
            Transform your advertising process with the Cre8tive AI Ad Manager—a state-of-the-art platform that takes your product and brand from concept to storyboard in minutes. Whether you're a client or a digital marketing agency, our tool empowers you to develop stunning, professional creatives with ease, ready for production by our Cre8tive AI Studio Team.
          </p>

          <div className="animate-fade-in [animation-delay:800ms]">
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