import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { HeroSection } from "@/components/conversational/HeroSection";
import { WhatIsSection } from "@/components/conversational/WhatIsSection";
import { FeaturesSection } from "@/components/conversational/FeaturesSection";
import { ApplicationsSection } from "@/components/conversational/ApplicationsSection";
import { CallToAction } from "@/components/conversational/CallToAction";

const ConversationalAI = () => {
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
        <HeroSection />
        <WhatIsSection />
        <FeaturesSection />
        <ApplicationsSection />
        <CallToAction />
      </main>
      <Footer />
      <elevenlabs-convai agent-id="lQXvJFg8zSqlerOKPXm6"></elevenlabs-convai>
    </div>
  );
};

export default ConversationalAI;