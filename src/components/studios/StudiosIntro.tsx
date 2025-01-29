import { cn } from "@/lib/utils";

export const StudiosIntro = () => {
  return (
    <section 
      className="py-24 relative overflow-hidden"
      aria-label="Introduction section"
    >
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