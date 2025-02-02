import { cn } from "@/lib/utils";
import { type StepType } from "./types";

export const Step = ({ number, title, description, Icon, color }: StepType) => {
  return (
    <div className="relative group w-full">
      <div 
        className={cn(
          "glass-morphism p-8 md:p-12 rounded-xl hover-lift hover-glow",
          "bg-gradient-to-br from-black/40 via-black/20 to-transparent",
          "transform-gpu transition-all duration-500",
          "border border-white/10",
          "hover:border-[var(--step-color)]/30",
          "h-[400px] w-full md:w-[300px]", // Adjusted for mobile
          "flex flex-col items-center justify-start",
          "relative"
        )}
        style={{ '--step-color': color } as React.CSSProperties}
      >
        {/* Step Number */}
        <div 
          className={cn(
            "absolute -top-4 -left-4 w-12 h-12 rounded-xl",
            "flex items-center justify-center",
            "text-white font-bold text-xl",
            "transform-gpu transition-transform duration-300",
            "hover:scale-110 hover:rotate-12",
            "shadow-[0_0_30px_var(--step-color)]"
          )}
          style={{ background: color }}
        >
          {number}
        </div>

        {/* Icon */}
        <div className="mb-6 md:mb-8 relative group-hover:animate-pulse pt-6">
          <Icon 
            className={cn(
              "w-12 h-12 md:w-16 md:h-16 transition-all duration-300",
              "drop-shadow-[0_0_20px_var(--step-color)]",
              "group-hover:drop-shadow-[0_0_40px_var(--step-color)]"
            )}
            style={{ color }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center space-y-4 px-4">
          <h3 className="text-xl md:text-2xl font-bold text-gradient text-center">
            {title}
          </h3>
          <p className="text-sm md:text-base text-white/80 leading-relaxed text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};