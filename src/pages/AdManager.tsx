import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import { Benefits } from "@/components/benefits/Benefits";

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

        {/* How It Works Section */}
        <HowItWorks />

        {/* Benefits Section */}
        <Benefits />

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
