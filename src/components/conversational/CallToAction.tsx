import { Button } from "../ui/button";

export const CallToAction = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,128,0.05)_0%,transparent_70%)]" />
      </div>
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
          Ready to Transform Your Customer Interactions?
        </h2>
        <Button 
          size="lg"
          className="text-lg px-8 py-6 h-auto bg-primary hover:bg-primary/90"
        >
          Get Started Today
        </Button>
      </div>
    </section>
  );
};
