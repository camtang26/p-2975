import { NetworkVisualization } from "./NetworkVisualization";
import { Button } from "../ui/button";

export const AgentsHero = () => {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden" 
      role="banner" 
      aria-label="Agents hero section"
    >
      <div className="absolute inset-0 z-0">
        <NetworkVisualization />
      </div>
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto px-4">
          <h1 className="font-inter text-7xl md:text-8xl font-bold tracking-[-0.02em] text-white neon-glow animate-fade-in">
            AI Autonomous Agents
          </h1>
          <p className="font-inter text-2xl md:text-3xl font-medium tracking-[-0.01em] text-white/90 neon-glow-subtle animate-fade-in [animation-delay:200ms]">
            Cre8tive AI Autonomous Agents: Smarter Solutions for Smarter Businesses
          </p>
          <Button
            size="lg"
            className="font-inter text-lg font-semibold bg-[#4A90E2] hover:bg-[#357ABD] text-white px-10 py-7 h-auto transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 animate-fade-in [animation-delay:300ms] tracking-[-0.01em]"
            aria-label="Explore our AI solutions"
          >
            Explore Our Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};