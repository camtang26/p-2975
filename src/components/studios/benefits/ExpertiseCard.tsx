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
  return (
    <Card 
      className="glass-morphism border-none animate-fade-in hover-lift hover-glow bg-black/40 backdrop-blur-xl" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-8">
        <div className="flex items-start gap-4">
          <Icon className="w-8 h-8 text-primary shrink-0 drop-shadow-[0_0_8px_var(--primary)] group-hover:drop-shadow-[0_0_12px_var(--primary)]" />
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4 tracking-tight">{title}</h3>
            <p className="text-white/80 leading-relaxed">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};