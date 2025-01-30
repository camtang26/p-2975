import { Button } from "../ui/button";

export const HeroContent = () => {
  return (
    <div className="relative z-[2] flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto px-4">
      <h1 className="font-inter text-7xl md:text-8xl font-bold tracking-[-0.02em] text-gradient neon-glow animate-fade-in">
        Cre8tive AI
      </h1>
      <p className="font-inter text-2xl md:text-3xl font-medium tracking-[-0.01em] text-white/90 neon-glow-subtle animate-fade-in [animation-delay:200ms]">
        Cutting Edge AI Solutions For Your Business
      </p>
      <Button
        size="lg"
        className="font-inter text-lg font-semibold bg-[#4A90E2] hover:bg-[#357ABD] text-white px-10 py-7 h-auto transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 animate-fade-in [animation-delay:300ms] tracking-[-0.01em]"
        aria-label="Get a free consultation"
      >
        Get a Free Consultation
      </Button>
    </div>
  );
};