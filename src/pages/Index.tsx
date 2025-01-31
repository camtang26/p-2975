import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { QuoteCard } from "@/components/quotes/QuoteCard";
import { ContactForm } from "@/components/ContactForm";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Cre8tive AI - AI-Powered Video Production & Content Creation</title>
        <meta 
          name="description" 
          content="Transform your business with AI-powered video production, autonomous agents, and innovative content creation solutions. Cre8tive AI helps you stay ahead of the competition." 
        />
        <link rel="canonical" href="https://cre8tive.ai" />
      </Helmet>
      
      <div className="min-h-screen bg-[#111111]">
        <Navigation />
        <main>
          <Hero />
          <Services />
          
          {/* First Quote - Between Services and Gallery */}
          <div className="container mx-auto px-4 py-8">
            <QuoteCard
              quote="The question isn't whether AI will transform your business, but when and how."
              author="Satya Nadella"
              title="CEO of Microsoft"
            />
          </div>
          
          <Gallery />
          
          {/* Contact Section */}
          <section 
            className="py-32 relative overflow-hidden"
            aria-label="Contact us"
          >
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, #000000 0%, #000000 75%, #0D0D1D 100%)',
              }}
              aria-hidden="true"
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
        </main>
      </div>
    </>
  );
};

export default Index;