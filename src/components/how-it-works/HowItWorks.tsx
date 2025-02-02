import { Brain, Users, Sliders, Target } from "lucide-react";
import { Step } from "./Step";
import { StepArrow } from "./StepArrow";
import { ScrollFade } from "@/components/shared/ScrollFade";
import { MobileHowItWorksCarousel } from "./mobile/MobileHowItWorksCarousel";
import { type StepType } from "./types";

const steps: StepType[] = [
  {
    number: 1,
    title: "Share Your Vision",
    description: "Begin by sharing your marketing objectives and challenges with us. We'll work closely with you to understand your specific needs, target audience, and desired outcomes.",
    Icon: Brain,
    color: "#60A5FA" // blue-400
  },
  {
    number: 2,
    title: "Custom AI Team Design",
    description: "Our experts design and configure a specialized team of AI agents tailored to your needs. We carefully select and optimize each agent's capabilities to ensure your unique challenges are met with precision.",
    Icon: Users,
    color: "#F87171" // red-400
  },
  {
    number: 3,
    title: "Precision Configuration",
    description: "We meticulously configure each AI agent's parameters and autonomy levels to align with your business processes. Our team ensures seamless integration with your existing workflows.",
    Icon: Sliders,
    color: "#C084FC" // purple-400
  },
  {
    number: 4,
    title: "Continuous Optimization",
    description: "We actively monitor your AI team's performance through advanced analytics and real-time dashboards. Our experts continuously fine-tune and optimize your system, ensuring maximum impact and ROI.",
    Icon: Target,
    color: "#4ADE80" // green-400
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollFade>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              How It Works
            </h2>
          </ScrollFade>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <>
              <ScrollFade key={`step-${step.number}`} delay={index * 100}>
                <Step {...step} />
              </ScrollFade>
              {index < steps.length - 1 && (
                <StepArrow key={`arrow-${index}`} />
              )}
            </>
          ))}
        </div>

        {/* Mobile Version */}
        <div className="md:hidden">
          <MobileHowItWorksCarousel steps={steps} />
        </div>
      </div>
    </section>
  );
};