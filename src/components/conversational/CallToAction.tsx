import { Button } from "../ui/button";

export const CallToAction = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/80">
            Get started with Cre8tive AI's autonomous agents today and experience the future of marketing.
          </p>
          <Button 
            size="lg"
            className="bg-[#4A90E2] hover:bg-[#357ABD] text-white px-10 py-7 h-auto text-lg font-semibold"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};