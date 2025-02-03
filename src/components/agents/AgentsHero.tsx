import { RobotLineup } from "./RobotLineup";
import { useIsMobile } from "@/hooks/use-mobile";

export const AgentsHero = () => {
  const isMobile = useIsMobile();
  
  // Helper function to determine screen resolution classes
  const getResolutionClasses = () => {
    if (typeof window === 'undefined') return '';
    return 'min-h-[100vh]'; // Use the golden template height for all resolutions
  };

  const getTextClasses = () => {
    if (typeof window === 'undefined') return '';
    return 'text-5xl sm:text-7xl md:text-8xl'; // Maintain consistent text sizing
  };

  const getSubTextClasses = () => {
    if (typeof window === 'undefined') return '';
    return 'text-xl sm:text-2xl md:text-3xl'; // Maintain consistent subtext sizing
  };
  
  return (
    <section 
      className={`relative ${getResolutionClasses()} flex items-center justify-center overflow-hidden`}
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
      <div className="absolute inset-0 z-10 opacity-0 animate-[fadeIn_3s_ease-out_1s_forwards]">
        <RobotLineup />
      </div>

      {/* Content */}
      <div className={`relative z-20 ${isMobile ? 'mt-[-8rem]' : 'mt-[-16rem]'}`}>
        <div className="flex flex-col items-center justify-center text-center space-y-12 max-w-5xl mx-auto px-4">
          <h1 className={`font-inter ${getTextClasses()} font-bold tracking-[-0.02em] text-white neon-glow opacity-0 animate-[fadeIn_3s_ease-out_0.5s_forwards]`}>
            AI Autonomous Agents
          </h1>
          <p className={`font-inter ${getSubTextClasses()} font-medium tracking-[-0.01em] text-white/90 neon-glow-subtle opacity-0 animate-[fadeIn_3s_ease-out_1s_forwards]`}>
            Cre8tive AI Autonomous Agents: Smarter Solutions for Smarter Businesses
          </p>
        </div>
      </div>
    </section>
  );
};