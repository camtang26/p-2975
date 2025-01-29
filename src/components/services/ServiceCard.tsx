import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  Icon: LucideIcon;
  color: string;
  index: number;
}

export const ServiceCard = ({ 
  title, 
  description, 
  link, 
  Icon,
  color,
  index
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "relative perspective-1000 w-full",
        "animate-fade-in"
      )}
      style={{ 
        animationDelay: `${index * 100}ms`,
      }}
      role="article"
      aria-labelledby={`service-title-${index}`}
    >
      <div 
        className={cn(
          "glass-morphism p-12 rounded-xl hover-lift hover-glow border border-white/10",
          "bg-gradient-to-br from-black/40 via-black/20 to-transparent relative group",
          "transform-gpu transition-transform duration-500 hover:rotate-y-10 hover:scale-105",
          "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r",
          "before:opacity-0 before:transition-opacity hover:before:opacity-100",
          "after:absolute after:inset-0 after:rounded-xl",
          "after:opacity-0 after:transition-opacity hover:after:opacity-100"
        )}
        style={{
          '--service-color': color,
          boxShadow: `0 0 30px ${color}25`
        } as React.CSSProperties}
      >
        {/* Icon with enhanced glow */}
        <div className="mb-8 relative group-hover:animate-pulse">
          <Icon 
            className={cn(
              "w-20 h-20 transition-all duration-300",
              "drop-shadow-[0_0_20px_var(--service-color)]",
              "group-hover:drop-shadow-[0_0_40px_var(--service-color)]"
            )}
            style={{ color: color }}
          />
        </div>
        
        {/* Content */}
        <h3 
          id={`service-title-${index}`}
          className="text-3xl font-semibold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
        >
          {title}
        </h3>
        
        <p className="text-lg text-white/80 leading-relaxed">
          {description}
        </p>
        
        <div className="text-center pt-6">
          <Button
            variant="link"
            className="text-white/90 hover:text-white relative overflow-hidden group transition-all duration-300"
            asChild
          >
            <a 
              href={link}
              className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-white/0 after:via-white/70 after:to-white/0 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              aria-label={`Learn more about ${title}`}
            >
              Learn More
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};