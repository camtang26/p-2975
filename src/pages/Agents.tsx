import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AgentsHero } from "@/components/agents/AgentsHero";
import { AiMarketingSolutions } from "@/components/agents/sections/AiMarketingSolutions";
import { HowItWorks } from "@/components/agents/sections/HowItWorks";

const Agents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <AgentsHero />
        <AiMarketingSolutions />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Agents;