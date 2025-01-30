import { Button } from "../ui/button";

export const HeroContent = () => {
  const letters = "Cre8tive AI".split("");
  const colors = {
    blue: "text-blue-500 [text-shadow:0_0_8px_rgba(59,130,246,0.6),0_0_15px_rgba(59,130,246,0.3),0_0_25px_rgba(59,130,246,0.15)]",
    orange: "text-orange-500 [text-shadow:0_0_8px_rgba(249,115,22,0.6),0_0_15px_rgba(249,115,22,0.3),0_0_25px_rgba(249,115,22,0.15)]",
    green: "text-green-500 [text-shadow:0_0_8px_rgba(34,197,94,0.6),0_0_15px_rgba(34,197,94,0.3),0_0_25px_rgba(34,197,94,0.15)]",
    red: "text-red-500 [text-shadow:0_0_8px_rgba(239,68,68,0.6),0_0_15px_rgba(239,68,68,0.3),0_0_25px_rgba(239,68,68,0.15)]",
    purple: "text-purple-500 [text-shadow:0_0_8px_rgba(168,85,247,0.6),0_0_15px_rgba(168,85,247,0.3),0_0_25px_rgba(168,85,247,0.15)]",
  };

  const colorOrder = ['blue', 'orange', 'green', 'red', 'purple'];

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