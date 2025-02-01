import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface MobileServiceCardProps {
  title: string;
  description: string;
  link: string;
  Icon: LucideIcon;
  color: string;
  index: number;
}

export const MobileServiceCard = ({ 
  title, 
  description, 
  link, 
  Icon,
  color,
  index,
}: MobileServiceCardProps) => {
  return (
    <div 
      className="relative perspective-1000 w-full animate-fade-in"
      style={{ 
        animationDelay: `${index * 100}ms`,
      }}
      role="article"
      aria-labelledby={`service-title-${index}`}
    >
      <div 
        className={cn(
          "glass-morphism rounded-xl hover-glow border border-white/10",
          "bg-gradient-to-br from-black/40 via-black/20 to-transparent relative group",
          "transform-gpu transition-transform duration-500 hover:scale-105",
          "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r",
          "before:opacity-0 before:transition-opacity hover:before:opacity-100",
          "after:absolute after:inset-0 after:rounded-xl",
          "after:opacity-0 after:transition-opacity hover:after:opacity-100",
          "flex flex-col items-center justify-center text-center p-4"
        )}
        style={{
          '--service-color': color,
          boxShadow: `0 0 30px ${color}25`
        } as React.CSSProperties}
      >
        <div className="relative group-hover:animate-pulse mb-3">
          <Icon 
            className="w-12 h-12 transition-all duration-300 drop-shadow-[0_0_15px_var(--service-color)] group-hover:drop-shadow-[0_0_30px_var(--service-color)]"
            style={{ color: color }}
          />
        </div>
        
        <h3 
          id={`service-title-${index}`}
          className="text-xl mb-2 font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent leading-tight"
        >
          {title}
        </h3>
        
        <p className="text-sm mb-3 text-white/80 leading-relaxed">
          {description}
        </p>
        
        <div className="text-center relative z-10">
          <Link 
            to={link}
            className={cn(
              "inline-flex items-center justify-center text-white/90 hover:text-white",
              "relative overflow-hidden group transition-all duration-300",
              "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px]",
              "after:bg-gradient-to-r after:from-white/0 after:via-white/70 after:to-white/0",
              "after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
              "cursor-pointer py-2 px-4 text-sm"
            )}
            aria-label={`Learn more about ${title}`}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};