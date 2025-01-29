import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const AdManager = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section 
          className="relative h-screen flex items-center justify-center overflow-hidden"
          aria-label="Hero section"
        >
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient text-center mb-6">
              AI-Powered Ad Management
            </h1>
            <p className="text-xl md:text-2xl text-center text-white/80 max-w-3xl mx-auto mb-8">
              Transform your advertising strategy with intelligent automation and data-driven insights
            </p>
            <div className="aspect-video max-w-4xl mx-auto glass-morphism rounded-lg" role="img" aria-label="Placeholder for hero video">
              {/* Video placeholder */}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section 
          className="py-24 relative overflow-hidden"
          aria-label="How it works section"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-16">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="glass-morphism p-8 rounded-lg text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-6" role="img" aria-label={`Step ${index + 1} icon`} />
                  <h3 className="text-2xl font-bold text-gradient mb-4">Step {index + 1}</h3>
                  <p className="text-white/80">Description of step {index + 1} in the ad management process.</p>
                </div>
              ))}
            </div>
          </div>
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