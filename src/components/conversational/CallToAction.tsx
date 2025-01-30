import { Button } from "../ui/button";

export const CallToAction = () => {
  return (
    <section className="py-20 bg-black/30">
      <div className="container mx-auto px-4 text-center">
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