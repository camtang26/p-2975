import { Button } from "../ui/button";

export const HeroContent = () => {
  const letters = "Cre8tive AI".split("");
  const colors = {
    blue: "text-blue-600 bg-gradient-to-b from-blue-500 to-blue-600 bg-clip-text [text-shadow:0_0_15px_rgba(37,99,235,0.8),0_0_30px_rgba(37,99,235,0.6),0_0_45px_rgba(37,99,235,0.3),0_3px_6px_rgba(0,0,0,0.4)]",
    orange: "text-orange-600 bg-gradient-to-b from-orange-500 to-orange-600 bg-clip-text [text-shadow:0_0_15px_rgba(234,88,12,0.8),0_0_30px_rgba(234,88,12,0.6),0_0_45px_rgba(234,88,12,0.3),0_3px_6px_rgba(0,0,0,0.4)]",
    turquoise: "text-cyan-600 bg-gradient-to-b from-cyan-400 to-cyan-600 bg-clip-text [text-shadow:0_0_15px_rgba(8,145,178,0.8),0_0_30px_rgba(8,145,178,0.6),0_0_45px_rgba(8,145,178,0.3),0_3px_6px_rgba(0,0,0,0.4)]",
    red: "text-red-600 bg-gradient-to-b from-red-500 to-red-600 bg-clip-text [text-shadow:0_0_15px_rgba(220,38,38,0.8),0_0_30px_rgba(220,38,38,0.6),0_0_45px_rgba(220,38,38,0.3),0_3px_6px_rgba(0,0,0,0.4)]",
    purple: "text-purple-600 bg-gradient-to-b from-purple-500 to-purple-600 bg-clip-text [text-shadow:0_0_15px_rgba(147,51,234,0.8),0_0_30px_rgba(147,51,234,0.6),0_0_45px_rgba(147,51,234,0.3),0_3px_6px_rgba(0,0,0,0.4)]",
  };

  const colorOrder = ['blue', 'orange', 'turquoise', 'red', 'purple'];

  return (
    <div className="relative z-[2] flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto px-4">
      <h1 className="font-inter text-7xl md:text-8xl font-bold tracking-[-0.02em] animate-fade-in flex">
        {letters.map((letter, index) => (
          <span
            key={index}
            className={colors[colorOrder[index % colorOrder.length] as keyof typeof colors]}
          >
            {letter}
          </span>
        ))}
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