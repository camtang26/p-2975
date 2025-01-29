import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Brain, Layers, Target, Rocket } from "lucide-react";

const AdManager = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section 
          className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4"
          aria-label="Hero section"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gradient animate-fade-in">
                Cre8tive AI Ad Manager
              </h1>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 font-semibold animate-fade-in [animation-delay:200ms]">
                From Idea to Storyboard: Effortless Ad Creation, Powered by AI
              </h2>

              {/* Blueprint Visual Placeholder */}
              <div 
                className="max-w-3xl mx-auto my-12 aspect-video glass-morphism rounded-lg p-8 animate-fade-in [animation-delay:400ms]"
                role="img"
                aria-label="Blueprint visualization of the ad creation process"
              >
                <div className="h-full w-full flex items-center justify-center">
                  <p className="text-white/60">Blueprint Visual Placeholder</p>
                </div>
              </div>

              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:600ms]">
                Transform your advertising process with the Cre8tive AI Ad Manager—a state-of-the-art platform that takes your product and brand from concept to storyboard in minutes. Whether you're a client or a digital marketing agency, our tool empowers you to develop stunning, professional creatives with ease, ready for production by our Cre8tive AI Studio Team.
              </p>

              <div className="animate-fade-in [animation-delay:800ms]">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 hover-lift hover-glow bg-gradient-to-r from-blue-600 via-red-600 to-black hover:from-blue-700 hover:via-red-700 hover:to-gray-900 border-0"
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

        {/* How It Works Section - Enhanced 3D Version */}
        <section 
          className="py-24 relative overflow-hidden"
          aria-label="How it works section"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-16 animate-fade-in">
              How It Works
            </h2>
            
            {/* Steps Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* 3D Connecting Lines (visible on larger screens) */}
              <div 
                className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-600/50 via-red-600/50 to-black/50 transform -translate-y-1/2 z-0"
                style={{
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(220, 38, 38, 0.3)',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                }}
              />

              {/* Step 1 */}
              <div className="relative z-10 animate-fade-in [animation-delay:200ms] perspective-1000">
                <div 
                  className="glass-morphism p-8 rounded-lg hover-lift hover-glow border border-white/10 
                            bg-gradient-to-br from-blue-900/20 via-black to-transparent relative group
                            transform-gpu transition-transform duration-500 hover:rotate-y-10 hover:scale-105
                            before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r 
                            before:from-blue-500/20 before:to-transparent before:opacity-0 
                            before:transition-opacity hover:before:opacity-100
                            after:absolute after:inset-0 after:rounded-lg after:bg-blue-500/5
                            after:opacity-0 after:transition-opacity hover:after:opacity-100
                            shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                >
                  {/* 3D Number Badge */}
                  <div 
                    className="absolute -top-4 -left-4 w-10 h-10 rounded-full 
                              bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 
                              flex items-center justify-center text-white font-bold text-lg
                              shadow-[0_0_20px_rgba(59,130,246,0.5)]
                              transform-gpu transition-transform duration-300 
                              hover:scale-110 hover:rotate-12"
                  >
                    1
                  </div>
                  
                  {/* Icon with enhanced glow */}
                  <div className="mb-4 relative group-hover:animate-pulse">
                    <Brain className="w-14 h-14 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]
                                     transition-all duration-300 group-hover:text-blue-300
                                     group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                    Input Your Vision
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Share your product details and creative vision through our intuitive interface.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 animate-fade-in [animation-delay:400ms] perspective-1000">
                <div 
                  className="glass-morphism p-8 rounded-lg hover-lift hover-glow border border-white/10 
                            bg-gradient-to-br from-red-900/20 via-black to-transparent relative group
                            transform-gpu transition-transform duration-500 hover:rotate-y-10 hover:scale-105
                            before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r 
                            before:from-red-500/20 before:to-transparent before:opacity-0 
                            before:transition-opacity hover:before:opacity-100
                            after:absolute after:inset-0 after:rounded-lg after:bg-red-500/5
                            after:opacity-0 after:transition-opacity hover:after:opacity-100
                            shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                >
                  <div 
                    className="absolute -top-4 -left-4 w-10 h-10 rounded-full 
                              bg-gradient-to-r from-red-600 via-red-400 to-red-600 
                              flex items-center justify-center text-white font-bold text-lg
                              shadow-[0_0_20px_rgba(239,68,68,0.5)]
                              transform-gpu transition-transform duration-300 
                              hover:scale-110 hover:rotate-12"
                  >
                    2
                  </div>
                  <div className="mb-4 relative group-hover:animate-pulse">
                    <Layers className="w-14 h-14 text-red-400 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]
                                    transition-all duration-300 group-hover:text-red-300
                                    group-hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
                    AI Processing
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Our AI analyzes your input and generates creative concepts and storyboards.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 animate-fade-in [animation-delay:600ms] perspective-1000">
                <div 
                  className="glass-morphism p-8 rounded-lg hover-lift hover-glow border border-white/10 
                            bg-gradient-to-br from-purple-900/20 via-black to-transparent relative group
                            transform-gpu transition-transform duration-500 hover:rotate-y-10 hover:scale-105
                            before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r 
                            before:from-purple-500/20 before:to-transparent before:opacity-0 
                            before:transition-opacity hover:before:opacity-100
                            after:absolute after:inset-0 after:rounded-lg after:bg-purple-500/5
                            after:opacity-0 after:transition-opacity hover:after:opacity-100
                            shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                >
                  <div 
                    className="absolute -top-4 -left-4 w-10 h-10 rounded-full 
                              bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 
                              flex items-center justify-center text-white font-bold text-lg
                              shadow-[0_0_20px_rgba(168,85,247,0.5)]
                              transform-gpu transition-transform duration-300 
                              hover:scale-110 hover:rotate-12"
                  >
                    3
                  </div>
                  <div className="mb-4 relative group-hover:animate-pulse">
                    <Target className="w-14 h-14 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]
                                     transition-all duration-300 group-hover:text-purple-300
                                     group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
                    Review & Refine
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Review the generated concepts and make refinements as needed.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative z-10 animate-fade-in [animation-delay:800ms] perspective-1000">
                <div 
                  className="glass-morphism p-8 rounded-lg hover-lift hover-glow border border-white/10 
                            bg-gradient-to-br from-green-900/20 via-black to-transparent relative group
                            transform-gpu transition-transform duration-500 hover:rotate-y-10 hover:scale-105
                            before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r 
                            before:from-green-500/20 before:to-transparent before:opacity-0 
                            before:transition-opacity hover:before:opacity-100
                            after:absolute after:inset-0 after:rounded-lg after:bg-green-500/5
                            after:opacity-0 after:transition-opacity hover:after:opacity-100
                            shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                >
                  <div 
                    className="absolute -top-4 -left-4 w-10 h-10 rounded-full 
                              bg-gradient-to-r from-green-600 via-green-400 to-green-600 
                              flex items-center justify-center text-white font-bold text-lg
                              shadow-[0_0_20px_rgba(34,197,94,0.5)]
                              transform-gpu transition-transform duration-300 
                              hover:scale-110 hover:rotate-12"
                  >
                    4
                  </div>
                  <div className="mb-4 relative group-hover:animate-pulse">
                    <Rocket className="w-14 h-14 text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]
                                     transition-all duration-300 group-hover:text-green-300
                                     group-hover:drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">
                    Production Ready
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Receive production-ready storyboards for your creative team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Background texture */}
          <div 
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none"
            aria-hidden="true"
          />
        </section>

        {/* Benefits for Clients Section */}
        <section 
          className="py-24 relative overflow-hidden"
          aria-label="Client benefits section"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-16">
              Benefits for Clients
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="glass-morphism p-8 rounded-lg">
                  <div className="w-12 h-12 bg-gray-800 rounded-full mb-6" role="img" aria-label={`Benefit ${index + 1} icon`} />
                  <h3 className="text-2xl font-bold text-gradient mb-4">Client Benefit {index + 1}</h3>
                  <p className="text-white/80">Description of benefit {index + 1} for clients.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits for Agencies Section */}
        <section 
          className="py-24 relative overflow-hidden"
          aria-label="Agency benefits section"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-16">
              Benefits for Agencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="glass-morphism p-8 rounded-lg">
                  <div className="w-12 h-12 bg-gray-800 rounded-full mb-6" role="img" aria-label={`Agency benefit ${index + 1} icon`} />
                  <h3 className="text-2xl font-bold text-gradient mb-4">Agency Benefit {index + 1}</h3>
                  <p className="text-white/80">Description of benefit {index + 1} for agencies.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies/Testimonials Section */}
        <section 
          className="py-24 relative overflow-hidden"
          aria-label="Case studies and testimonials section"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-16">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="glass-morphism p-8 rounded-lg">
                  <div className="w-20 h-20 bg-gray-800 rounded-full mx-auto mb-6" role="img" aria-label={`Client ${index + 1} logo`} />
                  <h3 className="text-2xl font-bold text-gradient text-center mb-4">Client Name {index + 1}</h3>
                  <p className="text-white/80 text-center italic mb-4">"Testimonial quote from client {index + 1}."</p>
                  <p className="text-white/60 text-center">Client Position, Company</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section 
          className="py-24 relative overflow-hidden"
          aria-label="Call to action section"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
              Ready to Transform Your Ad Strategy?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
              Join the future of intelligent advertising with Cre8tive AI Ad Manager.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-colors">
              Get Started Today
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AdManager;
