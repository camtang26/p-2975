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
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.98) 75%, rgba(13,13,29,0.99) 100%)',
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
              "bg-black/10 backdrop-blur-sm animate-scale-in"
            )}
          >
            {/* Premium Glow Effects */}
            <div className="absolute inset-0 z-10 opacity-40"
              style={{
                background: 'radial-gradient(circle at center, rgba(96,165,250,0.3) 0%, rgba(139,92,246,0.3) 50%, rgba(236,72,153,0.3) 100%)',
                filter: 'blur(40px)',
              }}
            />
            
            <div className="absolute -inset-2 z-0 opacity-30"
              style={{
                background: 'conic-gradient(from 0deg at 50% 50%, #60A5FA, #8B5CF6, #EC4899, #60A5FA)',
                filter: 'blur(60px)',
              }}
            />

            <img
              src="/lovable-uploads/fc255e07-2984-4056-b429-07bfc6c065b6.png"
              alt="Neural Tree Visualization"
              className="w-[120%] h-[120%] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(139,92,246,0.3)) drop-shadow(0 0 40px rgba(236,72,153,0.2))',
              }}
            />
            
            {/* Overlay with subtle gradient */}
            <div 
              className="absolute inset-0 z-30 mix-blend-overlay"
              style={{
                background: 'linear-gradient(45deg, rgba(96,165,250,0.1), rgba(139,92,246,0.1), rgba(236,72,153,0.1))',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};