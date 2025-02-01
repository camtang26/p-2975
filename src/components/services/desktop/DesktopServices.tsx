import { Brain, Layers, Bot, Phone } from "lucide-react";
import { ScrollFade } from "@/components/shared/ScrollFade";
import { DesktopServiceCard } from "./DesktopServiceCard";
import { ServicesProps } from "../types";

const iconMap = {
  Brain,
  Layers,
  Bot,
  Phone
};

export const DesktopServices = ({ services }: ServicesProps) => {
  return (
    <div className="container mx-auto px-8">
      <div className="grid grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ScrollFade key={index} delay={index * 100}>
            <DesktopServiceCard
              {...service}
              icon={service.icon}
              index={index}
            />
          </ScrollFade>
        ))}
      </div>
    </div>
  );
};