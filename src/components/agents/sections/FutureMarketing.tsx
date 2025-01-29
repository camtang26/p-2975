import { Button } from "@/components/ui/button";

export const FutureMarketing = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">
            The Future of Marketing is Here
          </h2>
          <p className="text-lg text-white/80">
            Don't let your competitors outpace you—AI is the future of marketing, and the future is now. 
            Cre8tive AI's Autonomous Agents provide you with the intelligent tools you need to stay ahead 
            of the curve, drive growth, and achieve your marketing goals.
          </p>
          <div className="pt-6">
            <Button 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300"
            >
              Explore Our Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};