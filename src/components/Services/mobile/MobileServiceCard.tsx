import { Link } from "react-router-dom";
import { Brain, Layers, Bot, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { ServiceCardProps } from "../types";
import { Skeleton } from "@/components/ui/skeleton";

const iconMap = {
  Brain,
  Layers,
  Bot,
  Phone
};

interface MobileServiceCardProps extends ServiceCardProps {
  isLoading?: boolean;
}

export const MobileServiceCard = ({ 
  title, 
  description, 
  link, 
  icon,
  color,
  index,
  isLoading = false
}: MobileServiceCardProps) => {
  const Icon = iconMap[icon as keyof typeof iconMap];

  if (isLoading) {
    return (
      <div className="w-full">
        <Skeleton className="h-[300px] w-full rounded-xl" />
      </div>
    );
  }

  return (
    <div 
      className={cn(
        "relative w-full animate-fade-in",
        "touch-manipulation"
      )}
      style={{ 
        animationDelay: `${index * 100}ms`,
      }}
      role="article"
      aria-labelledby={`mobile-service-title-${index}`}
    >
      <div 
        className={cn(
          "p-6 rounded-xl border border-white/10",
          "bg-gradient-to-br from-black/40 via-black/20 to-transparent",
          "active:scale-[0.98] transition-transform",
          "flex flex-col items-center text-center"
        )}
        style={{
          '--service-color': color,
          boxShadow: `0 0 20px ${color}15`
        } as React.CSSProperties}
      >
        <div className="mb-4 relative">
          <Icon 
            className="w-12 h-12 transition-all duration-300"
            style={{ color }}
          />
        </div>
        
        <h3 
          id={`mobile-service-title-${index}`}
          className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
        >
          {title}
        </h3>
        
        <p className="text-base text-white/80 leading-relaxed mb-4">
          {description}
        </p>
        
        <Link 
          to={link}
          className={cn(
            "inline-flex items-center justify-center",
            "text-white/90 active:text-white",
            "text-base py-2 px-4",
            "relative transition-colors duration-300"
          )}
          aria-label={`Learn more about ${title}`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};