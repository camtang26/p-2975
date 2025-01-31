import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  company: string;
  title: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Kurt Burnette",
    company: "Kotia",
    title: "Kotia Skincare Director",
    quote: "In the fast-paced media landscape, staying ahead of the curve is crucial. Cre8tive AI Studios has been instrumental in helping us leverage the power of AI video production. Their innovative approach has allowed us to create high-quality content quickly and efficiently, significantly enhancing our ability to engage our audience across multiple platforms. I'm particularly impressed with their team's deep understanding of both the technology and our business needs."
  },
  {
    name: "Paul Sorrell",
    company: "Marina Lab",
    title: "Managing Director",
    quote: "As a managing director, I'm always looking for ways to optimize our marketing efforts and maximize our budget. Cre8tive AI Studios has provided us with a cost-effective solution for producing professional-grade video content that truly captures our brand's essence. Their collaborative approach and attention to detail have made the entire process seamless and stress-free. I highly recommend their services to any business looking to elevate their video marketing."
  },
  {
    name: "Leon Hinde",
    company: "Advisor Plus PTD",
    title: "Director and CEO",
    quote: "Cre8tive AI Studios has transformed our approach to content creation. Their expertise in AI video production is truly exceptional. They've not only helped us produce high-quality videos that resonate with our target audience but have also educated us on the potential of this technology for future campaigns. Their dedication to client success is evident in every interaction."
  }
];

export const Testimonials = () => {
  const brandColors = {
    blue: "#0EA5E9",
    orange: "#F97316",
    green: "#10B981"
  };

  return (
    <section className="py-24 relative overflow-hidden" aria-label="Client testimonials">
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
            'radial-gradient(circle at 30% 20%, rgba(14,165,233,0.15) 0%, transparent 50%), ' +
            'radial-gradient(circle at 70% 80%, rgba(249,115,22,0.15) 0%, transparent 50%)',
          filter: 'blur(120px)',
          zIndex: 1
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-16 relative z-20">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
          {testimonials.map((testimonial, index) => {
            const color = Object.values(brandColors)[index % Object.values(brandColors).length];
            
            return (
              <div
                key={testimonial.name}
                className="glass-morphism p-8 rounded-2xl space-y-6 transition-all duration-500 hover:-translate-y-2 group"
                style={{ 
                  background: 'linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.9))',
                  boxShadow: '0 8px 32px -4px rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  '--card-color': color
                } as React.CSSProperties}
              >
                {/* Quote Icon */}
                <div className="flex justify-center">
                  <div 
                    className="relative group-hover:scale-110 transition-transform duration-300"
                  >
                    <div 
                      className="absolute inset-0 blur-xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                      style={{ background: color }}
                    />
                    <Quote 
                      className={cn(
                        "w-6 h-6 relative z-10",
                        "transition-all duration-300",
                        "drop-shadow-[0_0_8px_var(--card-color)]",
                        "group-hover:drop-shadow-[0_0_12px_var(--card-color)]"
                      )}
                      style={{ color }}
                    />
                  </div>
                </div>

                <blockquote className="text-white/80 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="pt-6 border-t border-white/10">
                  <div className="text-xl font-semibold text-gradient">
                    {testimonial.name}
                  </div>
                  <div className="font-medium mt-1" style={{ color }}>
                    {testimonial.company}
                  </div>
                  <div className="text-white/60 text-sm mt-1">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
