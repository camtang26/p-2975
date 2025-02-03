import { RobotLineup } from "./RobotLineup";
import { useIsMobile } from "@/hooks/use-mobile";

export const AgentsHero = () => {
  const isMobile = useIsMobile();
  
  // Helper function to determine screen resolution classes
  const getResolutionClasses = () => {
    if (typeof window === 'undefined') return '';
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    if (width === 2560 && height === 1440) return '';
    if ((width === 1920 && height === 1080) || (width === 1366 && height === 768)) {
      return 'min-h-[140vh]';
    }
    return 'min-h-[80vh] sm:min-h-[80vh]';
  };

  const getTextClasses = () => {
    if (typeof window === 'undefined') return '';
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    if (width === 2560 && height === 1440) return '';
    if ((width === 1920 && height === 1080) || (width === 1366 && height === 768)) {
      return 'text-4xl sm:text-5xl md:text-6xl';
    }
    return 'text-5xl sm:text-7xl md:text-8xl';
  };

  const getSubTextClasses = () => {
    if (typeof window === 'undefined') return '';
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    if (width === 2560 && height === 1440) return '';
    if ((width === 1920 && height === 1080) || (width === 1366 && height === 768)) {
      return 'text-lg sm:text-xl md:text-2xl mt-4';
    }
    return 'text-xl sm:text-2xl md:text-3xl';
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
      <div className={`relative z-20 ${isMobile ? 'mt-[-8rem]' : 'mt-[-12rem]'}`}>
        <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-5xl mx-auto px-4">
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