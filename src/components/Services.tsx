import { Camera, Newspaper, Bot, Phone } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Camera,
    title: "Cre8tive AI Studios",
    description: "Craft dynamic experiences and cinematic content with our AI-powered tools. From script to screen, we help bring your vision to life with video production.",
    link: "/studios"
  },
  {
    icon: Newspaper,
    title: "Ad Manager",
    description: "Efficiently create professional video ads and social media content. Our AI tools streamline content creation, optimize your workflow, and maximize your reach.",
    link: "/manager"
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Automate your business processes with intelligent custom AI agents. From writing to creative tasks, we build tools that boost productivity.",
    link: "/agents"
  },
  {
    icon: Phone,
    title: "Conversational AI Agents",
    description: "Engage your visitors with intelligent, natural conversations. Our AI agents handle customer service tasks and drive sales through natural interactions.",
    link: "/conversational"
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-morphism p-6 rounded-lg space-y-4 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto bg-white/5 rounded-lg flex items-center justify-center">
                <service.icon className="w-8 h-8 text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-semibold text-white text-center">{service.title}</h3>
              <p className="text-white/70 text-center">{service.description}</p>
              <div className="text-center">
                <Button
                  variant="link"
                  className="text-[#9b87f5] hover:text-[#b5a6f8]"
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