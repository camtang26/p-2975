import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black relative overflow-hidden">
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
      
      <main className="relative flex-grow container mx-auto px-4 md:px-10 py-24 md:py-32 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Headline with gradient text */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-16 md:mb-24 font-geist tracking-tight">
            <span className="text-gradient">About Us</span>
          </h1>
          
          {/* Two Column Layout with glass morphism */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Mission Statement Column */}
            <div className="glass-morphism p-8 md:p-10 rounded-2xl space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 font-geist tracking-tight">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-geist">
                Our mission is to revolutionize media production through cutting-edge AI technology, 
                delivering efficiencies leading to margin and unparalleled quality and innovation 
                in video production and content creation.
              </p>
            </div>
            
            {/* Company Overview Column */}
            <div className="glass-morphism p-8 md:p-10 rounded-2xl space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 font-geist tracking-tight">
                Company Overview
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-geist">
                We help media companies, production houses, and digital marketing agencies stay 
                ahead of the curve by implementing the best AI media tools and technologies into 
                traditional workflows. Specializing in high-quality AI video production, we utilize 
                state-of-the-art AI tools to deliver exceptional results.
              </p>
            </div>
          </div>

          {/* Values Section with enhanced styling */}
          <div className="mt-20 md:mt-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Innovation Card */}
              <div className="glass-morphism p-8 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4 font-geist tracking-tight">
                  Innovation
                </h3>
                <p className="text-white/80 leading-relaxed font-geist">
                  Pushing the boundaries of what's possible with AI-driven media production.
                </p>
              </div>

              {/* Quality Card */}
              <div className="glass-morphism p-8 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4 font-geist tracking-tight">
                  Quality
                </h3>
                <p className="text-white/80 leading-relaxed font-geist">
                  Delivering exceptional results through state-of-the-art AI technologies.
                </p>
              </div>

              {/* Efficiency Card */}
              <div className="glass-morphism p-8 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4 font-geist tracking-tight">
                  Efficiency
                </h3>
                <p className="text-white/80 leading-relaxed font-geist">
                  Streamlining workflows and maximizing productivity with AI automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;