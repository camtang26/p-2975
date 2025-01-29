import { NetworkVisualization } from "./NetworkVisualization";
import { Button } from "../ui/button";

export const AgentsHero = () => {
  return (
    <section 
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden" 
      role="banner" 
      aria-label="Agents hero section"
    >
      <div className="absolute inset-0 z-0">
        <NetworkVisualization />
      </div>
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="font-inter text-6xl md:text-7xl font-bold tracking-[-0.02em] text-white neon-glow animate-fade-in">
            AI Autonomous Agents
          </h1>
          <p className="font-inter text-xl md:text-2xl font-medium tracking-[-0.01em] text-white/90 neon-glow-subtle animate-fade-in [animation-delay:200ms]">
            Cre8tive AI Autonomous Agents: Smarter Solutions for Smarter Businesses
          </p>
          <Button
            size="lg"
            className="font-inter text-lg font-semibold bg-[#4A90E2] hover:bg-[#357ABD] text-white px-8 py-6 h-auto transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 animate-fade-in [animation-delay:300ms] tracking-[-0.01em]"
            aria-label="Explore our AI solutions"
          >
            Explore Our Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};