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
    <section className="py-24 bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#1A1A1A] p-8 rounded-lg space-y-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-[48px] h-[48px] mx-auto flex items-center justify-center">
                <service.icon className="w-12 h-12 text-[#FFD700]" />
              </div>
              <h3 className="text-2xl font-bold text-white text-center font-inter">{service.title}</h3>
              <p className="text-white/70 text-center text-base font-inter">{service.description}</p>
              <div className="text-center pt-2">
                <Button
                  variant="link"
                  className="text-white hover:text-white hover:underline hover:decoration-[#FFD700] transition-all duration-300"
                  asChild
                >
                  <a href={service.link}>Learn More</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};