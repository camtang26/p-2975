import { AnimatedBackground } from "../AnimatedBackground";

export const DesktopStudiosHero = () => {
  return (
    <section 
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Studios hero section"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-7xl font-bold mb-6 text-white [text-shadow:0_0_15px_rgba(255,255,255,0.5),0_0_25px_rgba(255,255,255,0.3)] opacity-0 animate-[fadeIn_3s_ease-out_forwards]">
          Cre8tive AI Studios
        </h1>
        
        <p className="text-3xl text-white max-w-4xl mx-auto mb-8 italic [text-shadow:0_0_15px_rgba(255,255,255,0.5),0_0_25px_rgba(255,255,255,0.3)] opacity-0 animate-[fadeIn_3s_ease-out_forwards]">
          AI won't take over your business, but a business leveraging AI video 
          production will revolutionize the way you create, engage, and dominate 
          your market.
        </p>
      </div>
    </section>
  );
};