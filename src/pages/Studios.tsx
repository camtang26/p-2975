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
      
      <main className="relative">
        <StudiosHero />
        <StudiosIntro />
        <ExpertiseBenefits />
        <Testimonials />

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