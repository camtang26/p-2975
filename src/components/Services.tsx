import { Camera, Newspaper, Bot, Phone } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Camera,
    title: "Cre8tive AI Studios",
    description: "Transform your creative vision with our cutting-edge AI-powered studio tools. Create stunning visuals and immersive experiences with our intuitive interface, perfect for both professionals and newcomers alike.",
    link: "/studios",
    image: "/placeholder.svg"
  },
  {
    icon: Newspaper,
    title: "Ad Manager",
    description: "Revolutionize your advertising with AI-driven optimization. Our intelligent system analyzes trends and behavior to craft compelling content, while providing data-driven insights that keep you ahead of competitors.",
    link: "/manager",
    image: "/placeholder.svg"
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Streamline your workflow with sophisticated AI agents that handle complex tasks with precision. Our intelligent automation solutions learn and adapt to your needs, delivering unprecedented productivity gains.",
    link: "/agents",
    image: "/placeholder.svg"
  },
  {
    icon: Phone,
    title: "Conversational AI",
    description: "Elevate customer engagement with our advanced conversational AI platform. Create natural, context-aware interactions that drive meaningful results while continuously learning from each interaction.",
    link: "/conversational",
    image: "/placeholder.svg"
  }
];

export const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #000000 0%, #000000 75%, #0D0D1D 100%)',
        }}
      />
      
      <div className="container relative mx-auto px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {services.map((service, index) => {
            // Define different gradients for each card
            const gradients = [
              'linear-gradient(145deg, rgba(155,135,245,0.15) 0%, rgba(126,105,171,0.1) 100%)',
              'linear-gradient(145deg, rgba(13,165,233,0.15) 0%, rgba(99,102,241,0.1) 100%)',
              'linear-gradient(145deg, rgba(217,70,239,0.15) 0%, rgba(139,92,246,0.1) 100%)',
              'linear-gradient(145deg, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.1) 100%)'
            ];

            return (
              <div 
                key={index} 
                className="glass-morphism p-6 rounded-2xl space-y-4 transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  background: gradients[index],
                  boxShadow: '0 8px 32px -4px rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.07)'
                }}
              >
                <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-black/30 mb-6">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <h3 className="text-3xl font-bold text-gradient text-center tracking-tight leading-tight font-geist">
                  {service.title}
                </h3>
                
                <p className="text-white/90 text-center text-lg leading-relaxed font-geist font-normal">
                  {service.description}
                </p>
                
                <div className="text-center pt-2">
                  <Button
                    variant="link"
                    className="text-white/90 hover:text-white relative overflow-hidden group transition-all duration-300 font-geist"
                    asChild
                  >
                    <a 
                      href={service.link}
                      className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-white/0 after:via-white/70 after:to-white/0 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    >
                      Learn More
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};