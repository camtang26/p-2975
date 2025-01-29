import { ArrowRight } from "lucide-react";

export const StepArrow = () => {
  return (
    <div className="hidden lg:flex items-center justify-center w-24 transform translate-y-12">
      <ArrowRight 
        className="w-12 h-12 text-white/30 animate-pulse"
        style={{
          filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))"
        }}
      />
    </div>
  );
};