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
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
          Cre8tive AI Studios
        </h1>
        
        <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-8 italic [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
          AI won't take over your business, but a business leveraging AI video 
          production will revolutionize the way you create, engage, and dominate 
          your market.
        </p>

        <Button 
          size="lg"
          className="text-lg px-8 py-6 hover-lift hover-glow bg-blue-900 text-white shadow-[0_0_10px_rgba(59,130,246,0.5),0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.6),0_0_30px_rgba(59,130,246,0.4)] hover:bg-blue-800 transition-all duration-300"
        >
          Get a Free Consultation
        </Button>
      </div>
    </section>
  );
};