import { useIsMobile } from "@/hooks/use-mobile";
import { MobileServices } from "./services/MobileServices";
import { DesktopServices } from "./services/DesktopServices";

export const Services = () => {
  const isMobile = useIsMobile();
  
  return isMobile ? <MobileServices /> : <DesktopServices />;
};