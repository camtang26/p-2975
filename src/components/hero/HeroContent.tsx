import { Button } from "../ui/button";

export const HeroContent = () => {
  return (
    <div className="relative z-[2] flex flex-col items-center justify-center text-center space-y-6 md:space-y-8 max-w-[90vw] md:max-w-4xl mx-auto px-4">
      <h1 className="font-inter text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.02em] opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
        <span className="text-white inline-block transition-transform duration-300 [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
          Cre8tive AI
        </span>
      </h1>
      <p className="font-inter text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-[-0.01em] text-white/90 opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards] [text-shadow:0_0_4px_rgba(255,255,255,0.4),0_0_8px_rgba(255,255,255,0.2)]">
        Cutting Edge AI Solutions For Your Business
      </p>
      <Button
        size="lg"
        className="font-inter text-lg sm:text-xl md:text-2xl font-semibold bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white px-6 sm:px-8 py-4 sm:py-5 h-auto transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(30,174,219,0.5),0_0_30px_rgba(30,174,219,0.3)] hover:shadow-[0_0_20px_rgba(30,174,219,0.6),0_0_40px_rgba(30,174,219,0.4)] active:scale-95 opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards] tracking-[-0.01em] w-full sm:w-auto"
        aria-label="Get a free consultation"
      >
        Get a Free Consultation
      </Button>
    </div>
  );
};