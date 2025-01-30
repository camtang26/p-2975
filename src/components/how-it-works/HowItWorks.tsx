import { Brain, Users, Sliders, Target } from "lucide-react";
import { StepCard } from "./StepCard";
import { StepArrow } from "./StepArrow";

const steps = [
  {
    number: 1,
    title: "Define Your Mission",
    description: "Set clear marketing objectives for your AI team to achieve.",
    benefits: [
      "Clearly define marketing goals and KPIs",
      "Specify target audience and desired outcomes",
      "Create detailed campaign requirements",
      "Enable data-driven decision making"
    ],
    Icon: Brain,
    color: "#60A5FA" // blue-400
  },
  {
    number: 2,
    title: "Assemble Your AI Team",
    description: "Build your dream team of specialized AI marketing agents.",
    benefits: [
      "Select agents with diverse skill sets",
      "Configure agent specializations",
      "Create balanced team compositions",
      "Scale team size as needed"
    ],
    Icon: Users,
    color: "#F87171" // red-400
  },
  {
    number: 3,
    title: "Assign Tasks & Set Autonomy",
    description: "Define tasks and customize autonomy levels for each agent.",
    benefits: [
      "Set granular permission levels",
      "Define workflow parameters",
      "Establish approval processes",
      "Enable autonomous operations"
    ],
    Icon: Sliders,
    color: "#C084FC" // purple-400
  },
  {
    number: 4,
    title: "Monitor, Optimize, & Achieve",
    description: "Track performance and optimize for marketing success.",
    benefits: [
      "Real-time performance monitoring",
      "Data-driven optimization",
      "Automated reporting",
      "Continuous improvement"
    ],
    Icon: Target,
    color: "#4ADE80" // green-400
  }
];

export const HowItWorks = () => {
  return (
    <section 
      className="py-32 relative overflow-hidden"
      aria-label="How it works section"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-gradient text-center mb-4 animate-fade-in">
          How It Works
        </h2>
        <p className="text-xl text-white/80 text-center mb-24 max-w-3xl mx-auto animate-fade-in [animation-delay:200ms]">
          Building Your AI Dream Team
        </p>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <>
              <StepCard
                key={step.number}
                {...step}
                className={`animate-fade-in [animation-delay:${index * 200}ms]`}
              />
              {index < steps.length - 1 && <StepArrow />}
            </>
          ))}
        </div>
      </div>

      {/* Enhanced background texture */}
      <div 
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%),
            linear-gradient(45deg, rgba(96,165,250,0.1) 0%, rgba(248,113,113,0.1) 50%, rgba(192,132,252,0.1) 100%)
          `
        }}
        aria-hidden="true"
      />
    </section>
  );
};