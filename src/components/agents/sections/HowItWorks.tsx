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
    title: "Share Your Vision",
    description: "Begin by sharing your marketing objectives and challenges with us. We'll work closely with you to understand your specific needs, target audience, and desired outcomes. Your vision becomes our blueprint for creating a perfectly tailored AI marketing solution.",
    Icon: Brain,
    color: "#60A5FA" // blue-400
  },
  {
    number: 2,
    title: "Custom AI Team Design",
    description: "Our experts design and configure a specialized team of AI agents tailored to your needs. We carefully select and optimize each agent's capabilities - from CRM and content creation to social media management and customer service - ensuring your unique challenges are met with precision.",
    Icon: Users,
    color: "#F87171" // red-400
  },
  {
    number: 3,
    title: "Precision Configuration",
    description: "We meticulously configure each AI agent's parameters and autonomy levels to align with your business processes. Our team ensures seamless integration with your existing workflows, striking the perfect balance between automation and human oversight.",
    Icon: Sliders,
    color: "#C084FC" // purple-400
  },
  {
    number: 4,
    title: "Continuous Optimization",
    description: "We actively monitor your AI team's performance through advanced analytics and real-time dashboards. Our experts continuously fine-tune and optimize your system, ensuring maximum impact and ROI while adapting to evolving market conditions and business needs.",
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
            Transforming Your Vision into Reality
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