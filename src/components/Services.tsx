import { Brain, Layers, Bot, Phone } from "lucide-react";
import { ServiceCard } from "./services/ServiceCard";

const services = [
  {
    icon: Brain,
    title: "Cre8tive AI Studios",
    description: "Transform your creative vision with our cutting-edge AI-powered studio tools. Create stunning visuals and immersive experiences with our intuitive interface, perfect for both professionals and newcomers alike.",
    link: "/studios",
    color: "#60A5FA" // blue-400
  },
  {
    icon: Layers,
    title: "Ad Manager",
    description: "Revolutionize your advertising with AI-driven optimization. Our intelligent system analyzes trends and behavior to craft compelling content, while providing data-driven insights that keep you ahead of competitors.",
    link: "/manager",
    color: "#F87171" // red-400
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Streamline your workflow with sophisticated AI agents that handle complex tasks with precision. Our intelligent automation solutions learn and adapt to your needs, delivering unprecedented productivity gains.",
    link: "/agents",
    color: "#C084FC" // purple-400
  },
  {
    icon: Phone,
    title: "Conversational AI",
    description: "Elevate customer engagement with our advanced conversational AI platform. Create natural, context-aware interactions that drive meaningful results while continuously learning from each interaction.",
    link: "/conversational",
    color: "#4ADE80" // green-400
  }
];

export const Services = () => {
  return (
    <section 
      className="py-24 relative overflow-hidden" 
      role="region" 
      aria-label="Our Services"
    >
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #000000 0%, #000000 85%, #0D0D1D 100%)',
        }}
        aria-hidden="true"
      />
      
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              link={service.link}
              Icon={service.icon}
              color={service.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};