import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;