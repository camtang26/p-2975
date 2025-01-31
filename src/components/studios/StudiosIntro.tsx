import { cn } from "@/lib/utils";

export const StudiosIntro = () => {
  return (
    <section 
      className="py-32 relative overflow-hidden"
      aria-label="Introduction section"
    >
      {/* Main Background Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.99) 75%, rgba(13,13,29,1) 100%)',
          zIndex: 0
        }}
      />
      
      {/* Brand Color Accents - Top */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 
            'radial-gradient(circle at 30% -10%, rgba(155,135,245,0.15) 0%, transparent 60%), ' +
            'radial-gradient(circle at 70% -20%, rgba(217,70,239,0.15) 0%, transparent 60%)',
          filter: 'blur(120px)',
          zIndex: 1
        }}
      />

      {/* Brand Color Accents - Bottom */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 
            'radial-gradient(circle at 20% 130%, rgba(155,135,245,0.15) 0%, transparent 60%), ' +
            'radial-gradient(circle at 80% 120%, rgba(217,70,239,0.15) 0%, transparent 60%)',
          filter: 'blur(120px)',
          zIndex: 1
        }}
      />

      {/* Neural Tree Image with Radial Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.95) 70%),
            url('/lovable-uploads/2d4632c2-d2b5-4772-94cb-16f99be5ed24.png')
          `,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
          zIndex: 2
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in relative z-20">
            <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold text-gradient mb-8 relative">
              Introducing Cre8tive AI Studios
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              At Cre8tive AI, we're here to help you harness the transformative power 
              of AI-driven media services. Our comprehensive suite of solutions is 
              designed to elevate your content, streamline your workflows, and position 
              you as a leader in your industry.
            </p>
          </div>

          {/* Visual */}
          <div 
            className={cn(
              "relative aspect-video rounded-xl overflow-hidden",
              "glass-morphism animate-scale-in"
            )}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="/placeholder.svg"
            >
              <source src="/studio-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Overlay */}
            <div 
              className="absolute inset-0 bg-black/20"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};