import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AgentsHero } from "@/components/agents/AgentsHero";
import { AiMarketingSolutions } from "@/components/agents/sections/AiMarketingSolutions";
import { HowItWorks } from "@/components/agents/sections/HowItWorks";

const Agents = () => {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Navigation />
      <main className="relative pt-20">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, #000000 0%, #000000 75%, #0D0D1D 100%)',
            opacity: 0.95
          }}
        />
        <AgentsHero />
        <AiMarketingSolutions />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Agents;