import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      
      {/* Contact Section */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, #000000 0%, #000000 75%, #0D0D1D 100%)',
          }}
        />
        
        <div className="container relative mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-geist">
              Get in Touch
            </h2>
            <p className="text-white/90 text-lg font-geist">
              Have a question or want to learn more? Send us a message and we'll get back to you shortly.
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