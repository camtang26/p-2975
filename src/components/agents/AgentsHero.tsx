import { RobotLineup } from "./RobotLineup";

export const AgentsHero = () => {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden" 
      role="banner" 
      aria-label="Agents hero section"
    >
      {/* Dark gradient backdrop */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, #000000 0%, #000000 75%, #0D0D1D 100%)',
          opacity: 0.95
        }}
      />
      
      {/* Robot lineup */}
      <div className="absolute inset-0 z-10">
        <RobotLineup />
      </div>

      {/* Content */}
      <div className="relative z-20 mt-[-8rem]">
        <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-5xl mx-auto px-4">
          <h1 className="font-inter text-7xl md:text-8xl font-bold tracking-[-0.02em] text-white neon-glow animate-fade-in">
            AI Autonomous Agents
          </h1>
          <p className="font-inter text-2xl md:text-3xl font-medium tracking-[-0.01em] text-white/90 neon-glow-subtle animate-fade-in [animation-delay:200ms]">
            Cre8tive AI Autonomous Agents: Smarter Solutions for Smarter Businesses
          </p>
        </div>
      </div>
    </section>
  );
};