import { Brain, Sparkles, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
}

const FeatureCard = ({ title, description, Icon }: FeatureCardProps) => (
  <div className={cn(
    "p-8 rounded-xl transition-all duration-500",
    "bg-gradient-to-br from-black/40 via-black/20 to-transparent",
    "border border-white/10 hover:border-white/20",
    "relative z-10 backdrop-blur-xl",
    "group hover:-translate-y-1"
  )}>
    <div className="mb-6 relative">
      <Icon 
        className={cn(
          "w-12 h-12 transition-all duration-300",
          "text-white/80 group-hover:text-white",
          "drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]",
          "group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
        )}
      />
    </div>
    <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
      {title}
    </h3>
    <p className="text-white/70 leading-relaxed">
      {description}
    </p>
  </div>
);

export const ApplicationsSection = () => {
  return (
    <section className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-gradient text-center">
          Beyond the Chat: The Power of Conversational AI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            Icon={Brain}
            title="Intelligent Automation"
            description="Our Conversational AI agents are designed to handle complex conversations and automate tasks, freeing up your team to focus on strategic initiatives. Seamlessly integrate with your existing systems to streamline workflows and improve efficiency."
          />
          <FeatureCard
            Icon={Sparkles}
            title="Personalized Experiences"
            description="Deliver tailored conversations that resonate with individual customers. Our AI agents understand user preferences and adapt their responses accordingly, creating a more engaging and satisfying experience."
          />
          <FeatureCard
            Icon={BarChart3}
            title="Data-Driven Insights"
            description="Gain valuable insights into customer behavior and preferences through the data collected by our Conversational AI agents. Use these insights to optimize your marketing strategies and improve business outcomes."
          />
        </div>
      </div>
    </section>
  );
};