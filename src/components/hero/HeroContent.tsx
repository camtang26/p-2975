import { Button } from "../ui/button";

export const HeroContent = () => {
  return (
    <div className="relative z-[2] flex flex-col items-center justify-center text-center space-y-5 md:space-y-6 max-w-[90vw] md:max-w-4xl mx-auto px-4 mt-32 min-h-[90vh]">
      <h1 className="font-inter text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[-0.02em] opacity-0 animate-[fadeIn_3s_ease-out_forwards]">
        <span className="text-white inline-block transition-transform duration-300 [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
          Cre8tive AI
        </span>
      </h1>
      <p className="font-inter text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.01em] text-white/90 opacity-0 animate-[fadeIn_3s_ease-out_forwards] [text-shadow:0_0_4px_rgba(255,255,255,0.4),0_0_8px_rgba(255,255,255,0.2)]">
        Cutting Edge AI Solutions For Your Business
      </p>
      <Button
        size="default"
        className="font-inter text-sm sm:text-base font-semibold bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white px-4 sm:px-5 py-2 sm:py-2.5 h-auto transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(30,174,219,0.5),0_0_30px_rgba(30,174,219,0.3)] hover:shadow-[0_0_20px_rgba(30,174,219,0.6),0_0_40px_rgba(30,174,219,0.4)] active:scale-95 opacity-0 animate-[fadeIn_4s_ease-out_forwards] tracking-[-0.01em] w-auto"
        aria-label="Get a free consultation"
      >
        Get a Free Consultation
      </Button>
    </div>
  );
};