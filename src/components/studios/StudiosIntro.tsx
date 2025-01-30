import { cn } from "@/lib/utils";

export const StudiosIntro = () => {
  return (
    <section 
      className="py-24 relative overflow-hidden"
      aria-label="Introduction section"
    >
      {/* Background Gradients */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.98) 75%, rgba(13,13,29,0.99) 100%)',
        }}
      />
      
      {/* Brand Color Accents */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 
            'radial-gradient(circle at 20% 20%, rgba(155,135,245,0.15) 0%, transparent 40%), ' +
            'radial-gradient(circle at 80% 80%, rgba(217,70,239,0.15) 0%, transparent 40%)',
          filter: 'blur(120px)'
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Introducing Cre8tive AI Studios
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              At Cre8tive AI, we're here to help you harness the transformative power 
              of AI-driven media services. Our comprehensive suite of solutions is 
              designed to elevate your content, streamline your workflows, and position 
              you as a leader in your industry.
            </p>
          </div>

          {/* Visual */}
          <div 
            className={cn(
              "relative aspect-video rounded-lg overflow-hidden",
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