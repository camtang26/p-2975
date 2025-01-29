import { Button } from "@/components/ui/button";

export const StudiosHero = () => {
  return (
    <section 
      className="relative h-[80vh] flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Studios hero section"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/placeholder.svg"
        >
          <source src="/studio-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0 bg-black/60"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient mb-6">
          Cre8tive AI Studios
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 italic">
          AI won't take over your business, but a business leveraging AI video 
          production will revolutionize the way you create, engage, and dominate 
          your market.
        </p>

        <Button 
          size="lg"
          className="text-lg px-8 py-6 hover-lift hover-glow"
        >
          Get a Free Consultation
        </Button>
      </div>
    </section>
  );
};