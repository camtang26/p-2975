import { Camera, Newspaper, Bot, Phone } from "lucide-react";
import { ServiceCard } from "./services/ServiceCard";

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

const gradients = [
  'linear-gradient(145deg, rgba(155,135,245,0.15) 0%, rgba(126,105,171,0.1) 100%)',
  'linear-gradient(145deg, rgba(13,165,233,0.15) 0%, rgba(99,102,241,0.1) 100%)',
  'linear-gradient(145deg, rgba(217,70,239,0.15) 0%, rgba(139,92,246,0.1) 100%)',
  'linear-gradient(145deg, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.1) 100%)'
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
      
      <div className="container relative mx-auto px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              link={service.link}
              image={service.image}
              index={index}
              gradient={gradients[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};