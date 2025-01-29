import { Camera, Newspaper, Bot, Phone } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Cre8tive AI Studios",
    description: "Craft dynamic experiences and cinematic content with our AI-powered tools. From script to screen, we help bring your vision to life with video production."
  },
  {
    icon: Newspaper,
    title: "Ad Manager",
    description: "Efficiently create professional video ads and social media content. Our AI tools streamline content creation, optimize your workflow, and maximize your reach."
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Automate your business processes with intelligent custom AI agents. From writing to creative tasks, we build tools that boost productivity."
  },
  {
    icon: Phone,
    title: "Conversational AI Agents",
    description: "Engage your visitors with intelligent, natural conversations. Our AI agents handle customer service tasks and drive sales through natural interactions."
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center space-y-4 p-6">
              <div className="w-16 h-16 mx-auto bg-white/5 rounded-lg flex items-center justify-center">
                <service.icon className="w-8 h-8 text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};