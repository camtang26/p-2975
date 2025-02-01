import { Brain, Layers, Bot, Phone } from "lucide-react";
import { ScrollFade } from "@/components/shared/ScrollFade";
import { MobileServiceCard } from "./MobileServiceCard";
import { ServicesProps } from "../types";

const iconMap = {
  Brain,
  Layers,
  Bot,
  Phone
};

export const MobileServices = ({ services }: ServicesProps) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col space-y-4">
        {services.map((service, index) => (
          <ScrollFade key={index} delay={index * 100}>
            <MobileServiceCard
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