import { Button } from "../ui/button";

export const HeroContent = () => {
  const letters = "Cre8tive AI".split("");
  const colors = {
    blue: "text-blue-500 bg-gradient-to-b from-blue-400 to-blue-600 bg-clip-text [text-shadow:0_0_15px_rgba(59,130,246,0.9),0_0_30px_rgba(59,130,246,0.7),0_0_45px_rgba(59,130,246,0.4),0_3px_6px_rgba(0,0,0,0.4)]",
    orange: "text-orange-500 bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text [text-shadow:0_0_15px_rgba(251,146,60,0.9),0_0_30px_rgba(251,146,60,0.7),0_0_45px_rgba(251,146,60,0.4),0_3px_6px_rgba(0,0,0,0.4)]",
    turquoise: "text-cyan-400 bg-gradient-to-b from-cyan-300 to-cyan-500 bg-clip-text [text-shadow:0_0_15px_rgba(34,211,238,0.9),0_0_30px_rgba(34,211,238,0.7),0_0_45px_rgba(34,211,238,0.4),0_3px_6px_rgba(0,0,0,0.4)]",
    red: "text-red-500 bg-gradient-to-b from-red-400 to-red-600 bg-clip-text [text-shadow:0_0_15px_rgba(239,68,68,0.9),0_0_30px_rgba(239,68,68,0.7),0_0_45px_rgba(239,68,68,0.4),0_3px_6px_rgba(0,0,0,0.4)]",
    purple: "text-purple-500 bg-gradient-to-b from-purple-400 to-purple-600 bg-clip-text [text-shadow:0_0_15px_rgba(168,85,247,0.9),0_0_30px_rgba(168,85,247,0.7),0_0_45px_rgba(168,85,247,0.4),0_3px_6px_rgba(0,0,0,0.4)]",
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