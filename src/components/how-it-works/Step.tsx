import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepProps {
  number: number;
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
}

export const Step = ({ number, title, description, Icon, color }: StepProps) => {
  return (
    <div className="relative group">
      <div 
        className={cn(
          "glass-morphism p-8 rounded-xl hover-lift hover-glow",
          "bg-gradient-to-br from-black/40 via-black/20 to-transparent",
          "transform-gpu transition-all duration-500",
          "border border-white/10",
          "hover:border-[var(--step-color)]/30",
          "min-h-[320px] flex flex-col items-center justify-center"
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
        <div className="mb-6 relative group-hover:animate-pulse">
          <Icon 
            className={cn(
              "w-16 h-16 transition-all duration-300",
              "drop-shadow-[0_0_20px_var(--step-color)]",
              "group-hover:drop-shadow-[0_0_40px_var(--step-color)]"
            )}
            style={{ color }}
          />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-4 text-gradient">
          {title}
        </h3>
        <p className="text-white/80 leading-relaxed text-center">
          {description}
        </p>
      </div>
    </div>
  );
};