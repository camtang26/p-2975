import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StudiosHero } from "@/components/studios/StudiosHero";
import { StudiosIntro } from "@/components/studios/StudiosIntro";
import { ExpertiseBenefits } from "@/components/studios/ExpertiseBenefits";
import { Testimonials } from "@/components/studios/Testimonials";
import { Button } from "@/components/ui/button";

const Studios = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Main Gradient Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.98) 75%, rgba(13,13,29,0.99) 100%)',
          zIndex: 0
        }}
      />
      
      {/* Brand Color Accents */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 
            'radial-gradient(circle at 40% 30%, rgba(155,135,245,0.15) 0%, transparent 50%), ' +
            'radial-gradient(circle at 60% 70%, rgba(217,70,239,0.15) 0%, transparent 50%)',
          filter: 'blur(120px)',
          zIndex: 1
        }}
      />

      <Navigation />
      
      <main className="relative z-10">
        <StudiosHero />
        <StudiosIntro />
        <ExpertiseBenefits />
        <Testimonials />

        {/* CTA Section */}
        <section 
          className="py-24 relative overflow-hidden"
          aria-label="Call to action section"
        >
          {/* Main Background Gradient */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.98) 75%, rgba(13,13,29,0.99) 100%)',
              zIndex: 0
            }}
          />
          
          {/* Brand Color Accents */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: 
                'radial-gradient(circle at 30% 70%, rgba(155,135,245,0.15) 0%, transparent 50%), ' +
                'radial-gradient(circle at 70% 30%, rgba(217,70,239,0.15) 0%, transparent 50%)',
              filter: 'blur(120px)',
              zIndex: 1
            }}
          />

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 relative z-20">
              Ready to Transform Your Content?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 relative z-20">
              Join the future of content creation with Cre8tive AI Studios. Let's bring your vision to life.
            </p>
            <Button 
              size="lg"
              className="text-lg px-8 relative z-20"
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