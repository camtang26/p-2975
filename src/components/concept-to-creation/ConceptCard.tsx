import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConceptCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  className?: string;
}

export const ConceptCard = ({
  title,
  description,
  Icon,
  color,
  className,
}: ConceptCardProps) => {
  return (
    <div 
      className={cn(
        "glass-morphism p-6 md:p-12 rounded-xl hover-glow border border-white/10",
        "bg-gradient-to-br from-black/40 via-black/20 to-transparent relative group",
        "transform-gpu transition-all duration-500 hover:scale-105",
        "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r",
        "before:opacity-0 before:transition-opacity hover:before:opacity-100",
        "after:absolute after:inset-0 after:rounded-xl",
        "after:opacity-0 after:transition-opacity hover:after:opacity-100",
        "flex flex-col h-full",
        className
      )}
      style={{
        '--concept-color': color,
      } as React.CSSProperties}
    >
      {/* Icon with enhanced glow */}
      <div className="mb-4 md:mb-8 relative group-hover:animate-pulse flex justify-center">
        <Icon 
          className={cn(
            "w-16 h-16 md:w-24 md:h-24 transition-all duration-300",
            "drop-shadow-[0_0_20px_var(--concept-color)]",
            "group-hover:drop-shadow-[0_0_40px_var(--concept-color)]"
          )}
          style={{ color }}
        />
      </div>
      
      {/* Content */}
      <div className="text-center flex-grow flex flex-col justify-between">
        <h3 
          className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent"
        >
          {title}
        </h3>
        <p className="text-lg md:text-xl leading-relaxed text-white/80">
          {description}
        </p>
      </div>
    </div>
  );
};