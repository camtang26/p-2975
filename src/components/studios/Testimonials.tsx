import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  company: string;
  title: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Kurt Burnette",
    company: "Seven West Media",
    title: "Chief Revenue Officer",
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
  return (
    <section className="py-24 relative overflow-hidden" aria-label="Client testimonials">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-16">
          What Our Clients Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-morphism p-8 rounded-2xl space-y-6 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ 
                animationDelay: `${index * 100}ms`,
                background: 'linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                boxShadow: '0 8px 32px -4px rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.07)'
              }}
            >
              {/* Quote Icon */}
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-white/80 text-lg leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="pt-6 border-t border-white/10">
                <div className="text-xl font-semibold text-white">
                  {testimonial.name}
                </div>
                <div className="text-primary font-medium mt-1">
                  {testimonial.company}
                </div>
                <div className="text-white/60 text-sm mt-1">
                  {testimonial.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};