import { Brain, Layers, Target, Rocket } from "lucide-react";
import { Step } from "./Step";
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
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            How It Works
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <>
              <Step
                key={step.number}
                {...step}
              />
              {index < steps.length - 1 && (
                <StepArrow key={`arrow-${index}`} />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};