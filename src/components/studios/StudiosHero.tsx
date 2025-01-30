import { VideoBackground } from "./hero/VideoBackground";
import { HeroContent } from "./hero/HeroContent";

export const StudiosHero = () => {
  return (
    <section 
      className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Studios hero section"
    >
      <VideoBackground videoSrc="/studio-intro.mp4" />
      <HeroContent />
    </section>
  );
};