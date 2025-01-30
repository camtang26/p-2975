import { Button } from "@/components/ui/button";

export const AdManagerHero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-geist tracking-tight">
            AI-Powered Ad Management
          </h1>
          <p className="text-xl text-white/80 mb-8 font-geist">
            Optimize your advertising campaigns with our intelligent AI-driven ad management platform
          </p>
          <Button 
            variant="outline"
            className="bg-white text-black hover:bg-white/90 font-geist"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};