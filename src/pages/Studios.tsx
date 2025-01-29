import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StudiosHero } from "@/components/studios/StudiosHero";
import { Button } from "@/components/ui/button";

const Studios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative">
        <StudiosHero />

        {/* Introduction Section */}
        <section 
          className="py-24 relative overflow-hidden"
          aria-label="Introduction section"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                  Introducing Cre8tive AI
                </h2>
                <p className="text-lg text-white/90 mb-6">
                  Welcome to the future of content creation. At Cre8tive AI Studios, we harness the power of artificial intelligence to revolutionize video production, making high-quality content more accessible than ever before.
                </p>
                <p className="text-lg text-white/90">
                  Our cutting-edge AI technology transforms the way stories are told, enabling creators to produce compelling content with unprecedented efficiency and creativity.
                </p>
              </div>
              <div className="aspect-video bg-gray-900 rounded-lg">
                {/* Placeholder for introduction video/image */}
                <div 
                  className="w-full h-full"
                  role="img"
                  aria-label="Placeholder for Cre8tive AI introduction visual"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section 
          className="py-24 relative overflow-hidden"
          aria-label="Services section"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-16">
              AI-Powered Video Content Creation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service cards will be added here in the next iteration */}
              {Array.from({ length: 6 }).map((_, index) => (
                <div 
                  key={index}
                  className="glass-morphism p-6 rounded-lg"
                >
                  <div className="aspect-video bg-gray-900 rounded mb-4">
                    {/* Placeholder for service image */}
                    <div 
                      className="w-full h-full"
                      role="img"
                      aria-label={`Placeholder for service ${index + 1} visual`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient mb-2">
                    Service Title {index + 1}
                  </h3>
                  <p className="text-white/90">
                    Placeholder description for this amazing AI-powered video service.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section 
          className="py-24 relative overflow-hidden"
          aria-label="Advantages section"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-16">
              The Cre8tive AI Advantage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div 
                  key={index}
                  className="glass-morphism p-6 rounded-lg text-center"
                >
                  <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto mb-4">
                    {/* Placeholder for advantage icon */}
                    <div 
                      className="w-full h-full"
                      role="img"
                      aria-label={`Placeholder for advantage ${index + 1} icon`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gradient mb-2">
                    Advantage Title {index + 1}
                  </h3>
                  <p className="text-white/90">
                    Placeholder description for this unique advantage of using Cre8tive AI Studios.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="py-24 relative overflow-hidden"
          aria-label="Call to action section"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Ready to Transform Your Content?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join the future of content creation with Cre8tive AI Studios. Let's bring your vision to life.
            </p>
            <Button 
              size="lg"
              className="text-lg px-8"
            >
              Get Started Today
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Studios;