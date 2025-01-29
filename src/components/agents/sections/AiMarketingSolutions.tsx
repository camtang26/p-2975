import { Button } from "@/components/ui/button";

export const AiMarketingSolutions = () => {
  const solutions = [
    {
      title: "AI-Powered CRM",
      description: "Intelligent customer relationship management that learns and adapts to your business needs.",
      icon: "/placeholder.svg",
      alt: "Placeholder for CRM icon"
    },
    {
      title: "AI-Driven Customer Service",
      description: "24/7 automated customer support that understands and resolves queries efficiently.",
      icon: "/placeholder.svg",
      alt: "Placeholder for Customer Service icon"
    },
    {
      title: "AI Content Generation",
      description: "Create engaging, SEO-optimized content at scale with our AI content generation tools.",
      icon: "/placeholder.svg",
      alt: "Placeholder for Content Generation icon"
    },
    {
      title: "AI Social Media Management",
      description: "Automate and optimize your social media presence with intelligent scheduling and analytics.",
      icon: "/placeholder.svg",
      alt: "Placeholder for Social Media Management icon"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-12">
          Our AI Marketing Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className="p-6 glass-morphism rounded-lg">
              <div className="w-12 h-12 mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                <img 
                  src={solution.icon} 
                  alt={solution.alt} 
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
              <p className="text-white/70">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};