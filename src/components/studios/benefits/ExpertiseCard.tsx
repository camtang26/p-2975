import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const ExpertiseCard = ({ icon: Icon, title, description, index }: ExpertiseCardProps) => {
  // Define brand colors with neon glow effects
  const iconColors = [
    { color: "#8B5CF6", glow: "drop-shadow-[0_0_10px_rgba(139,92,246,0.7)]" }, // Vivid Purple
    { color: "#D946EF", glow: "drop-shadow-[0_0_10px_rgba(217,70,239,0.7)]" }, // Magenta Pink
    { color: "#F97316", glow: "drop-shadow-[0_0_10px_rgba(249,115,22,0.7)]" }, // Bright Orange
    { color: "#0EA5E9", glow: "drop-shadow-[0_0_10px_rgba(14,165,233,0.7)]" }, // Ocean Blue
  ];

  const currentColor = iconColors[index % iconColors.length];

  return (
    <Card 
      className="glass-morphism border-none animate-fade-in hover-lift hover-glow bg-black/40 backdrop-blur-xl" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-8">
        <div className="flex items-start gap-4">
          <Icon 
            className={cn(
              "w-8 h-8 shrink-0 transition-all duration-300",
              currentColor.glow
            )} 
            style={{ color: currentColor.color }}
          />
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4 tracking-tight">{title}</h3>
            <p className="text-white/80 leading-relaxed">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};