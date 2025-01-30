import { Button } from "../ui/button";

export const HeroContent = () => {
  return (
    <div className="relative z-[2] flex flex-col items-center justify-center text-center space-y-6 md:space-y-8 max-w-[90vw] md:max-w-4xl mx-auto px-4">
      <h1 className="font-inter text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.02em] animate-fade-in">
        <span className="text-white inline-block transition-transform duration-300 [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
          Cre8tive AI
        </span>
      </h1>
      <p className="font-inter text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-[-0.01em] text-white/90 animate-fade-in [animation-delay:200ms] [text-shadow:0_0_4px_rgba(255,255,255,0.4),0_0_8px_rgba(255,255,255,0.2)]">
        Cutting Edge AI Solutions For Your Business
      </p>
      <Button
        size="lg"
        className="font-inter text-base font-semibold bg-[#4A90E2] hover:bg-[#357ABD] text-white px-6 sm:px-8 py-4 sm:py-5 h-auto transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 animate-fade-in [animation-delay:300ms] tracking-[-0.01em] w-full sm:w-auto"
        aria-label="Get a free consultation"
      >
        Get a Free Consultation
      </Button>
    </div>
  );
};