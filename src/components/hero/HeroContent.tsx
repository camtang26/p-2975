import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const HeroContent = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Transform Your Business with AI-Powered Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          Leverage cutting-edge AI technology to create engaging content, automate processes, and drive growth
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className={cn(
              "bg-white text-black hover:bg-white/90",
              "text-lg px-8 py-6 h-auto"
            )}
            onClick={() => {
              const element = document.getElementById('services');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Explore Our Services
          </Button>
          <Button
            size="lg"
            variant="outline"
            className={cn(
              "border-white text-white hover:bg-white/10",
              "text-lg px-8 py-6 h-auto"
            )}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};