import { Brain, Users, Sliders, Target } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepProps {
  number: number;
  title: string;
  description: string;
  Icon: any;
  color: string;
}

const Step = ({ number, title, description, Icon, color }: StepProps) => {
  return (
    <div className="relative group">
      <div 
        className={cn(
          "glass-morphism p-8 rounded-xl hover-lift hover-glow",
          "bg-gradient-to-br from-black/40 via-black/20 to-transparent",
          "transform-gpu transition-all duration-500",
          "border border-white/10",
          "hover:border-[var(--step-color)]/30"
        )}
        style={{ '--step-color': color } as React.CSSProperties}
      >
        {/* Step Number */}
        <div 
          className={cn(
            "absolute -top-4 -left-4 w-12 h-12 rounded-xl",
            "flex items-center justify-center",
            "text-white font-bold text-xl",
            "transform-gpu transition-transform duration-300",
            "hover:scale-110 hover:rotate-12",
            "shadow-[0_0_30px_var(--step-color)]"
          )}
          style={{ background: color }}
        >
          {number}
        </div>

        {/* Icon */}
        <div className="mb-6 relative group-hover:animate-pulse">
          <Icon 
            className={cn(
              "w-16 h-16 transition-all duration-300",
              "drop-shadow-[0_0_20px_var(--step-color)]",
              "group-hover:drop-shadow-[0_0_40px_var(--step-color)]"
            )}
            style={{ color }}
          />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-4 text-gradient">
          {title}
        </h3>
        <p className="text-white/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const steps = [
  {
    number: 1,
    title: "Define Your Mission",
    description: "It all starts with a clear vision. Define your specific marketing objectives, target audience, and campaign goals. A well-defined mission provides a solid foundation for your AI team to work effectively and autonomously.",
    Icon: Brain,
    color: "#60A5FA" // blue-400
  },
  {
    number: 2,
    title: "Assemble Your AI Team",
    description: "Select and configure specialized AI agents, each with expertise in specific marketing functions. Choose from agents skilled in CRM, content creation, social media management, customer service, and more. Build the perfect team to tackle your unique challenges.",
    Icon: Users,
    color: "#F87171" // red-400
  },
  {
    number: 3,
    title: "Assign Tasks & Set Autonomy",
    description: "Delegate tasks to your AI team and set their level of autonomy. From fully automated campaigns to tasks requiring human input, you're in control. Empower your agents to work independently and efficiently, freeing up your time to focus on strategy.",
    Icon: Sliders,
    color: "#C084FC" // purple-400
  },
  {
    number: 4,
    title: "Monitor, Optimize, & Achieve",
    description: "Track the performance of your AI team with real-time dashboards and data-driven insights. Monitor key metrics, identify areas for improvement, and optimize your campaigns for maximum impact. Achieve your marketing goals with intelligent automation and continuous refinement.",
    Icon: Target,
    color: "#4ADE80" // green-400
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            How It Works
          </h2>
          <p className="text-xl text-white/80">
            Building Your AI Dream Team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Step
              key={index}
              {...step}
            />
          ))}
        </div>
      </div>
    </section>
  );
};