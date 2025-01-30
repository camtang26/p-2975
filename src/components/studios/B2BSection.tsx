import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const B2BSection = () => {
  const services = [
    {
      title: "Project Collaboration",
      description: "Integrate AI-generated content into your existing workflows to elevate quality and reduce production time."
    },
    {
      title: "Outsourcing Solutions",
      description: "Access reliable, high-quality media content without the need to expand your team or overhead."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.98) 75%, rgba(13,13,29,0.99) 100%)',
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
          B2B Media Services
        </h2>

        <p className="text-xl text-white/90 text-center max-w-4xl mx-auto mb-16 [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
          We partner with traditional media agencies to supercharge their projects with cutting-edge AI capabilities. Our B2B services are designed to enhance creativity, efficiency, and scalability for your business.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-morphism p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-white [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
                {service.title}
              </h3>
              <p className="text-white/80 text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xl text-white/90 text-center max-w-4xl mx-auto mt-12 mb-8 [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
          By combining your expertise with our AI-driven innovation, we help you deliver exceptional results to your clients while staying ahead of the competition.
        </p>
      </div>
    </section>
  );
};