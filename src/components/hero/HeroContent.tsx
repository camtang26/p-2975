import { Button } from "../ui/button";

export const HeroContent = () => {
  return (
    <div className="relative z-[2] flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto px-4">
      <h1 className="font-inter text-7xl md:text-8xl font-bold tracking-[-0.02em] animate-fade-in">
        <span className="bg-gradient-to-r from-blue-500 via-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300 [text-shadow:0_0_15px_rgba(59,130,246,0.5),0_0_25px_rgba(239,68,68,0.3),0_0_35px_rgba(0,0,0,0.8)]">
          Cre8tive AI
        </span>
      </h1>
      <p className="font-inter text-2xl md:text-3xl font-medium tracking-[-0.01em] text-white/90 animate-fade-in [animation-delay:200ms] [text-shadow:0_0_4px_rgba(255,255,255,0.4),0_0_8px_rgba(255,255,255,0.2)]">
        Cutting Edge AI Solutions For Your Business
      </p>
      <Button
        size="lg"
        className="font-inter text-base font-semibold bg-[#4A90E2] hover:bg-[#357ABD] text-white px-8 py-5 h-auto transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 animate-fade-in [animation-delay:300ms] tracking-[-0.01em]"
        aria-label="Get a free consultation"
      >
        Get a Free Consultation
      </Button>
    </div>
  );
};