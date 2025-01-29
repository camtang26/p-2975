import { Button } from "../ui/button";

export const HeroContent = () => {
  return (
    <div className="relative z-[2] text-center space-y-8 max-w-4xl mx-auto px-4">
      <h1 className="font-geist text-7xl md:text-8xl font-bold tracking-tight text-gradient animate-fade-in">
        Cre8tive AI
      </h1>
      <p className="font-geist text-2xl md:text-3xl font-medium text-white/90 animate-fade-in [animation-delay:200ms]">
        Cutting Edge AI Solutions For Your Business
      </p>
      <Button
        size="lg"
        className="font-geist text-lg font-semibold bg-[#4A90E2] hover:bg-[#357ABD] text-white px-10 py-7 h-auto transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 animate-fade-in [animation-delay:300ms]"
        aria-label="Get a free consultation"
      >
        Get a Free Consultation
      </Button>
    </div>
  );
};