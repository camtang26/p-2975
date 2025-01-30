import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import { Benefits } from "@/components/benefits/Benefits";
import { ConceptToCreation } from "@/components/concept-to-creation/ConceptToCreation";
import { ContactCTA } from "@/components/shared/ContactCTA";

const AdManager = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Main Gradient Background */}
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
          className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 px-4 mb-24"
          aria-label="Hero section"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gradient animate-fade-in neon-glow">
                Cre8tive AI Ad Manager
              </h1>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 font-semibold animate-fade-in [animation-delay:200ms] max-w-5xl mx-auto neon-glow-subtle">
                From Idea to Storyboard: Effortless Ad Creation, Powered by AI
              </h2>

              {/* Blueprint Visual */}
              <div 
                className="max-w-5xl mx-auto my-8 aspect-video glass-morphism rounded-lg p-8 animate-fade-in [animation-delay:400ms] relative overflow-hidden"
                role="img"
                aria-label="Blueprint visualization of the ad creation process"
              >
                <div className="h-full w-full flex items-center justify-center relative">
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
                  <div className="relative grid grid-cols-3 gap-8 w-full h-full p-4">
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#0095ff] opacity-75 shadow-[0_0_20px_#0095ff] animate-pulse" />
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-[#0095ff] opacity-75 shadow-[0_0_30px_#0095ff] animate-pulse" />
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#0095ff] opacity-75 shadow-[0_0_20px_#0095ff] animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed animate-fade-in [animation-delay:600ms] px-4 neon-glow-subtle">
                Transform your advertising process with the Cre8tive AI Ad Manager—a state-of-the-art platform that takes your product and brand from concept to storyboard in minutes. Whether you're a client or a digital marketing agency, our tool empowers you to develop stunning, professional creatives with ease, ready for production by our Cre8tive AI Studio Team.
              </p>

              <div className="animate-fade-in [animation-delay:800ms]">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-gradient-to-r from-[#0EA5E9] via-[#1E40AF] to-[#1E3A8A] hover:from-[#0284C7] hover:via-[#1E3A8A] hover:to-[#172554] border-0 shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:shadow-[0_0_25px_rgba(14,165,233,0.8)] transition-all duration-300"
                >
                  Get Started Free
                </Button>
              </div>
            </div>
          </div>

          {/* Optional: Background texture */}
          <div 
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none"
            aria-hidden="true"
          />
        </section>

        {/* Concept to Creation Section */}
        <ConceptToCreation />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Benefits Section */}
        <Benefits />

        {/* Contact CTA Section */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
};

export default AdManager;