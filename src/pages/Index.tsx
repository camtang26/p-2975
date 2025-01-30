import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { QuoteCard } from "@/components/quotes/QuoteCard";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { WordPressContent } from "@/components/WordPressContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Navigation />
      <Hero />
      
      {/* First Quote */}
      <div className="container mx-auto px-4 py-16">
        <QuoteCard
          quote="The question isn't whether AI will transform your business, but when and how."
          author="Satya Nadella"
          title="CEO of Microsoft"
        />
      </div>
      
      <Services />
      
      {/* Second Quote */}
      <div className="container mx-auto px-4 py-16">
        <QuoteCard
          quote="Any business that isn't using AI in some way in the next few years will be at a significant disadvantage."
          author="Marc Benioff"
          title="CEO of Salesforce"
        />
      </div>
      
      <Gallery />
      <WordPressContent />
      
      {/* Contact Section */}
      <section className="py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, #000000 0%, #000000 75%, #0D0D1D 100%)',
          }}
        />
        
        <div className="container relative mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6 font-geist neon-glow-subtle">
              Contact Us
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-8 font-geist neon-glow-subtle">
              Don't get left behind—AI is transforming businesses now.
            </h3>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 neon-glow-subtle">
              Reach out today to discover how Cre8tive AI's customized solutions—from AI-powered video production 
              to autonomous AI agents and the Cre8tive AI Ad Manager—can streamline your operations, boost efficiency, 
              and give you a competitive edge.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed neon-glow-subtle">
              Act now and stay ahead of the curve. Contact us to explore smarter, more efficient solutions 
              tailored to your goals, brand, and success.
            </p>
          </div>
          
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;