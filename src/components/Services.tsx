import { Camera, Newspaper, Bot, Phone } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Camera,
    title: "Cre8tive AI Studios",
    description: "Craft dynamic experiences and cinematic content with our AI-powered tools.",
    link: "/studios"
  },
  {
    icon: Newspaper,
    title: "Ad Manager",
    description: "Create professional video ads and social media content with AI optimization.",
    link: "/manager"
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Automate processes with intelligent custom AI agents for enhanced productivity.",
    link: "/agents"
  },
  {
    icon: Phone,
    title: "Conversational AI",
    description: "Engage visitors with intelligent, natural conversations that drive results.",
    link: "/conversational"
  }
];

export const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#0F0F1A] pointer-events-none" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-morphism p-8 rounded-xl space-y-6 transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
              style={{ 
                animationDelay: `${index * 100}ms`,
                background: 'linear-gradient(145deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.002) 100%)',
                boxShadow: '0 8px 32px -4px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.03)'
              }}
            >
              <div className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center bg-gradient-to-br from-black/80 to-[#1A1A1A]/80 transition-transform duration-500 group-hover:scale-110 border border-white/5">
                <service.icon className="w-7 h-7 text-white/90" strokeWidth={1.25} />
              </div>
              
              <h3 className="text-2xl font-semibold text-white text-center tracking-tight leading-tight font-geist">
                {service.title}
              </h3>
              
              <p className="text-white/70 text-center text-base leading-relaxed font-geist font-light">
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
          ))}
        </div>
      </div>
    </section>
  );
};