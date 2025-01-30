import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StudiosHero } from "@/components/studios/StudiosHero";
import { StudiosIntro } from "@/components/studios/StudiosIntro";
import { ExpertiseBenefits } from "@/components/studios/ExpertiseBenefits";
import { Testimonials } from "@/components/studios/Testimonials";
import { useEffect } from "react";

const Studios = () => {
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
        <StudiosHero />
        <StudiosIntro />
        <ExpertiseBenefits />
        <Testimonials />
      </main>
      <Footer />
      <elevenlabs-convai agent-id="lQXvJFg8zSqlerOKPXm6"></elevenlabs-convai>
    </div>
  );
};

export default Studios;