import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/conversational/Hero";
import { Features } from "@/components/conversational/Features";
import { UseCases } from "@/components/conversational/UseCases";
import { FutureSection } from "@/components/conversational/FutureSection";
import { AgentInteraction } from "@/components/conversational/AgentInteraction";
import { CallToAction } from "@/components/conversational/CallToAction";

const ConversationalAI = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-20">
        <Hero />
        <Features />
        <UseCases />
        <FutureSection />
        <AgentInteraction />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default ConversationalAI;