import { Button } from "@/components/ui/button";
import { Brain, Zap, PiggyBank, Expand, Trophy, Clock } from "lucide-react";

export const ExpertiseBenefits = () => {
  const benefitItems = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Generate high-quality video content in minutes, not days"
    },
    {
      icon: <PiggyBank className="w-6 h-6" />,
      title: "Cost Effective",
      description: "Reduce production costs while maintaining professional quality"
    },
    {
      icon: <Expand className="w-6 h-6" />,
      title: "Scalable",
      description: "Create multiple variations and formats with ease"
    }
  ];

  const expertiseItems = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Professional Quality",
      description: "AI-powered tools that deliver broadcast-ready results"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Smart Automation",
      description: "Intelligent workflows that streamline production"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time Saving",
      description: "Complete projects faster without compromising quality"
    }
  ];

  return (
    <>
      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Transform Your Video Production
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Experience the power of AI-driven video creation with our cutting-edge tools and expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefitItems.map((item, index) => (
              <div key={index} className="glass-morphism p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gradient mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 relative overflow-hidden bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Leverage our advanced AI capabilities to create stunning video content
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseItems.map((item, index) => (
              <div key={index} className="glass-morphism p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gradient mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Why Choose Cre8tive AI?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              See how our AI-powered solution compares to traditional video production
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-morphism p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gradient mb-4">Traditional Process</h3>
              <ul className="space-y-4 text-white/80">
                <li>• Days or weeks of production time</li>
                <li>• High equipment and crew costs</li>
                <li>• Limited revision capabilities</li>
                <li>• Complex logistics and scheduling</li>
              </ul>
            </div>
            <div className="glass-morphism p-8 rounded-lg border border-primary/50">
              <h3 className="text-2xl font-bold text-gradient mb-4">Cre8tive AI Process</h3>
              <ul className="space-y-4 text-white/80">
                <li>• Minutes to generate content</li>
                <li>• Fraction of traditional costs</li>
                <li>• Unlimited revisions and variations</li>
                <li>• Simple, streamlined workflow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future of Video Section */}
      <section 
        className="py-24 relative overflow-hidden"
        aria-label="Future of video section"
      >
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 tracking-tight">
              The Future of Video is Intelligent
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed tracking-wide max-w-2xl mx-auto">
              As AI technology continues to evolve, the possibilities for video production become even more exciting. 
              Stay ahead of the curve with Cre8tive AI Studios and embrace the future of content creation today.
            </p>
            
            {/* Abstract AI Animation */}
            <div className="w-48 h-48 mx-auto mb-12 relative">
              <div className="absolute inset-0 bg-gradient-conic from-primary via-primary/50 to-primary animate-spin-slow rounded-full blur-xl opacity-30" />
              <div className="absolute inset-0 bg-gradient-radial from-primary to-transparent opacity-40" />
              <Brain className="w-24 h-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/90" />
            </div>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};