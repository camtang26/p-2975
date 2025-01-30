import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { AdManagerHero } from "@/components/ad-manager/AdManagerHero";
import { AdManagerFeatures } from "@/components/ad-manager/AdManagerFeatures";
import { AdManagerPricing } from "@/components/ad-manager/AdManagerPricing";

const AdManager = () => {
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
        <AdManagerHero />
        <AdManagerFeatures />
        <AdManagerPricing />
      </main>
      <Footer />
      <elevenlabs-convai agent-id="lQXvJFg8zSqlerOKPXm6"></elevenlabs-convai>
    </div>
  );
};

export default AdManager;