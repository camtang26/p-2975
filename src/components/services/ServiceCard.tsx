import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  index: number;
  gradient: string;
}

export const ServiceCard = ({ 
  title, 
  description, 
  link, 
  image, 
  index,
  gradient 
}: ServiceCardProps) => {
  return (
    <div 
      className="glass-morphism p-6 rounded-2xl space-y-4 transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
      style={{ 
        animationDelay: `${index * 100}ms`,
        background: gradient,
        boxShadow: '0 8px 32px -4px rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.07)'
      }}
      role="article"
      aria-labelledby={`service-title-${index}`}
    >
      <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-black/30 mb-6">
        <img 
          src={image}
          alt={`Illustration for ${title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width="640"
          height="360"
        />
      </div>
      
      <h3 
        id={`service-title-${index}`}
        className="text-3xl font-bold text-gradient text-center tracking-tight leading-tight font-geist"
      >
        {title}
      </h3>
      
      <p className="text-white/90 text-center text-lg leading-relaxed font-geist font-normal">
        {description}
      </p>
      
      <div className="text-center pt-2">
        <Button
          variant="link"
          className="text-white/90 hover:text-white relative overflow-hidden group transition-all duration-300 font-geist"
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
  );
};