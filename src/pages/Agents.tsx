import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { NetworkVisualization } from "@/components/agents/NetworkVisualization";
import { Button } from "@/components/ui/button";

const Agents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90">
          <NetworkVisualization />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold text-gradient animate-fade-in">
                AI Autonomous Agents
              </h1>
              <h2 className="text-xl md:text-2xl text-white/90 font-semibold animate-fade-in [animation-delay:200ms]">
                Cre8tive AI Autonomous Agents: Smarter Solutions for Smarter Businesses
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto animate-fade-in [animation-delay:400ms]">
                Our custom AI agents are designed to revolutionize your marketing efforts, boost engagement, and deliver tangible results. From CRM to content creation, we provide intelligent solutions that work for you—24/7.
              </p>
              <div className="pt-8 animate-fade-in [animation-delay:600ms]">
                <Button 
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 text-white text-lg px-8 py-6 rounded-lg transition-colors duration-300"
                >
                  Explore Our Solutions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our AI Marketing Solutions */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-16">
              Our AI Marketing Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* AI-Powered CRM */}
              <div className="p-6 glass-morphism rounded-lg">
                <div className="w-12 h-12 mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Placeholder for CRM icon" 
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered CRM</h3>
                <p className="text-white/70">
                  Intelligent customer relationship management that learns and adapts to your business needs.
                </p>
              </div>

              {/* AI-Driven Customer Service */}
              <div className="p-6 glass-morphism rounded-lg">
                <div className="w-12 h-12 mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Placeholder for Customer Service icon" 
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-Driven Customer Service</h3>
                <p className="text-white/70">
                  24/7 automated customer support that understands and resolves queries efficiently.
                </p>
              </div>

              {/* AI Content Generation */}
              <div className="p-6 glass-morphism rounded-lg">
                <div className="w-12 h-12 mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Placeholder for Content Generation icon" 
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI Content Generation</h3>
                <p className="text-white/70">
                  Create engaging, SEO-optimized content at scale with our AI content generation tools.
                </p>
              </div>

              {/* AI Social Media Management */}
              <div className="p-6 glass-morphism rounded-lg">
                <div className="w-12 h-12 mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Placeholder for Social Media Management icon" 
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI Social Media Management</h3>
                <p className="text-white/70">
                  Automate and optimize your social media presence with intelligent scheduling and analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Future of Marketing */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient">
                The Future of Marketing is Here
              </h2>
              <p className="text-lg text-white/80">
                Don't let your competitors outpace you—AI is the future of marketing, and the future is now. Cre8tive AI's Autonomous Agents provide you with the intelligent tools you need to stay ahead of the curve, drive growth, and achieve your marketing goals.
              </p>
              <div className="pt-8">
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300">
                  Explore Our Solutions
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Agents;
