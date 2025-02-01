import { ServiceCard } from "./ServiceCard";
import { ScrollFade } from "@/components/shared/ScrollFade";
import { services } from "./servicesData";

export const DesktopServices = () => {
  return (
    <section 
      className="py-24 relative overflow-hidden" 
      role="region" 
      aria-label="Our Services"
    >
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #000000 0%, #000000 85%, #0D0D1D 100%)',
        }}
        aria-hidden="true"
      />
      
      <div className="container relative mx-auto px-8">
        <div className="grid grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollFade key={index} delay={index * 100}>
              <ServiceCard
                title={service.title}
                description={service.description}
                link={service.link}
                Icon={service.icon}
                color={service.color}
                index={index}
                isMobile={false}
              />
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
};