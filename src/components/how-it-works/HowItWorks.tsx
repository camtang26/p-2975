import { Brain, Layers, Target, Rocket } from "lucide-react";
import { StepCard } from "./StepCard";
import { StepArrow } from "./StepArrow";

const steps = [
  {
    number: 1,
    title: "Input Your Vision",
    description: "Share your product details and creative vision through our intuitive interface.",
    Icon: Brain,
    color: "#60A5FA" // blue-400
  },
  {
    number: 2,
    title: "AI Processing",
    description: "Our AI analyzes your input and generates creative concepts and storyboards.",
    Icon: Layers,
    color: "#F87171" // red-400
  },
  {
    number: 3,
    title: "Review & Refine",
    description: "Review the generated concepts and make refinements as needed.",
    Icon: Target,
    color: "#C084FC" // purple-400
  },
  {
    number: 4,
    title: "Production Ready",
    description: "Receive production-ready storyboards for your creative team.",
    Icon: Rocket,
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
        <h2 className="text-5xl md:text-6xl font-bold text-gradient text-center mb-24 animate-fade-in">
          How It Works
        </h2>
        
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