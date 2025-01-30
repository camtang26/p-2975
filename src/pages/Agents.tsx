import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AgentsHero } from "@/components/agents/AgentsHero";
import { AiMarketingSolutions } from "@/components/agents/sections/AiMarketingSolutions";
import { HowItWorks } from "@/components/agents/sections/HowItWorks";
import { useEffect } from "react";

const Agents = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <AgentsHero />
        <AiMarketingSolutions />
        <HowItWorks />
      </main>
      <Footer />
      <elevenlabs-convai agent-id="lQXvJFg8zSqlerOKPXm6"></elevenlabs-convai>
    </div>
  );
};

export default Agents;