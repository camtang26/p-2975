import { RobotLineup } from "./RobotLineup";
import { useIsMobile } from "@/hooks/use-mobile";

export const AgentsHero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-nav-height"
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
      
      {/* Robot lineup - Only show on desktop */}
      {!isMobile && (
        <div className="absolute inset-0 z-10 opacity-0 animate-[fadeIn_3s_ease-out_1s_forwards]">
          <RobotLineup />
        </div>
      )}

      {/* Content */}
      <div 
        className="relative z-20 text-center"
        style={{
          marginTop: "var(--hero-margin)"
        }}
      >
        <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8 max-w-5xl mx-auto px-4">
          <h1 
            className="font-inter font-bold tracking-[-0.02em] text-white neon-glow opacity-0 animate-[fadeIn_3s_ease-out_0.5s_forwards]"
            style={{ fontSize: "var(--hero-h1-size)" }}
          >
            AI Autonomous Agents
          </h1>
          <p 
            className="font-inter tracking-[-0.01em] text-white/90 neon-glow-subtle opacity-0 animate-[fadeIn_3s_ease-out_1s_forwards]"
            style={{ fontSize: "clamp(1rem,2vw,1.5rem)" }}
          >
            Cre8tive AI Autonomous Agents: Smarter Solutions for Smarter Businesses
          </p>
        </div>
      </div>
    </section>
  );
};