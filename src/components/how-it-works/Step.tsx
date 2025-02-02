import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepProps {
  number: number;
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  className?: string;
}

export const Step = ({ number, title, description, Icon, color, className }: StepProps) => {
  return (
    <div className={cn("relative group w-full", className)}>
      <div 
        className={cn(
          "glass-morphism p-8 md:p-12 rounded-xl hover-lift hover-glow", // Reduced padding on mobile
          "bg-gradient-to-br from-black/40 via-black/20 to-transparent",
          "transform-gpu transition-all duration-500",
          "border border-white/10",
          "hover:border-[var(--step-color)]/30",
          "flex flex-col items-center justify-start",
          "relative"
        )}
        style={{ '--step-color': color } as React.CSSProperties}
      >
        {/* Step Number */}
        <div 
          className={cn(
            "absolute -top-3 -left-3 w-10 h-10 md:w-12 md:h-12 rounded-xl", // Smaller on mobile
            "flex items-center justify-center",
            "text-white font-bold text-lg md:text-xl", // Smaller text on mobile
            "transform-gpu transition-transform duration-300",
            "hover:scale-110 hover:rotate-12",
            "shadow-[0_0_30px_var(--step-color)]"
          )}
          style={{ background: color }}
        >
          {number}
        </div>

        {/* Icon */}
        <div className="mb-6 relative group-hover:animate-pulse pt-4">
          <Icon 
            className={cn(
              "w-12 h-12 md:w-16 md:h-16 transition-all duration-300", // Smaller on mobile
              "drop-shadow-[0_0_20px_var(--step-color)]",
              "group-hover:drop-shadow-[0_0_40px_var(--step-color)]"
            )}
            style={{ color }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center space-y-3 px-2 md:px-4">
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