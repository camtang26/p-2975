import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, Clock, Zap, GitMerge, Scale, Database } from "lucide-react";
import { useEffect, useState } from "react";

const ConversationalAI = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState<string | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    
    script.onload = () => {
      setScriptLoaded(true);
      console.log("ElevenLabs script loaded successfully");
    };

    script.onerror = (error) => {
      setScriptError("Failed to load ElevenLabs widget");
      console.error("Error loading ElevenLabs script:", error);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1A1A1A] to-[#282828]">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-extrabold text-white text-center mb-6 font-inter"
            >
              Ignite Natural Conversations
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-semibold mb-10 text-white text-center max-w-3xl font-inter"
            >
              Elevate Customer Experiences and Drive Business Growth with Intelligent Conversational AI
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full max-w-[400px] bg-[#EEEEEE] border border-[#CCCCCC] rounded-lg h-[300px] mx-auto mt-10 relative"
            >
              <style>{`
                #convai-widget {
                  position: static !important;
                  width: 100% !important;
                  height: 100% !important;
                  max-width: 100% !important;
                  max-height: 100% !important;
                  margin: 0 !important;
                  right: auto !important;
                  bottom: auto !important;
                }
              `}</style>
              {scriptError ? (
                <div className="flex items-center justify-center h-full text-red-500">
                  {scriptError}
                </div>
              ) : (
                <elevenlabs-convai agent-id="lQXvJFg8zSqlerOKPXm6"></elevenlabs-convai>
              )}
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient text-center">
            What is a Conversational AI Agent?
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-white/80">
            <p>
              Conversational AI agents are intelligent virtual assistants designed to engage in natural, 
              human-like conversations with your customers. They leverage advanced natural language 
              processing (NLP) and machine learning (ML) to understand user intent, answer questions, 
              provide support, and even generate leads.
            </p>
            <p>
              Unlike traditional chatbots with limited functionality, our Conversational AI agents are 
              highly sophisticated, capable of complex dialogue flows, personalized responses, and 
              seamless integration with your existing systems.
            </p>
          </div>
        </div>
        </section>

        <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gradient text-center">
            Key Features & Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Feature 
              icon={<Clock className="w-8 h-8" />}
              title="24/7 Availability"
              description="Provide instant support and engagement around the clock, improving customer satisfaction and freeing up your human team."
            />
            <Feature 
              icon={<MessageSquare className="w-8 h-8" />}
              title="Personalized Interactions"
              description="Tailor conversations to individual customer needs and preferences, creating a more engaging and relevant experience."
            />
            <Feature 
              icon={<GitMerge className="w-8 h-8" />}
              title="Seamless Integration"
              description="Integrate seamlessly with your CRM, marketing automation, and other systems to streamline workflows and improve data collection."
            />
            <Feature 
              icon={<Zap className="w-8 h-8" />}
              title="Natural Language Understanding"
              description="Understand and respond to complex language, including slang, colloquialisms, and nuanced phrasing."
            />
            <Feature 
              icon={<Scale className="w-8 h-8" />}
              title="Scalability & Efficiency"
              description="Handle a high volume of conversations concurrently, scaling your customer interactions efficiently."
            />
            <Feature 
              icon={<Database className="w-8 h-8" />}
              title="Data-Driven Insights"
              description="Gather valuable insights from conversations to improve your business strategies and customer experience."
            />
          </div>
        </div>
        </section>

        <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gradient text-center">
            Real-World Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <UseCase
              title="Customer Support"
              description="Provide instant answers to FAQs, troubleshoot issues, and guide customers through complex processes."
            />
            <UseCase
              title="Lead Generation"
              description="Qualify leads, collect contact information, and nurture potential customers through personalized conversations."
            />
            <UseCase
              title="Sales & Marketing"
              description="Drive sales by offering personalized product recommendations, promoting special offers, and answering pre-sales questions."
            />
          </div>
        </div>
        </section>

        <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
            Experience the Future of Conversation
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Don't take our word for it – experience the power of our Conversational AI firsthand. 
            Engage with our AI agent now to see how it can transform your customer interactions.
          </p>
          <div className="bg-black/20 p-8 rounded-lg max-w-4xl mx-auto min-h-[400px] glass-morphism">
            {/* Placeholder for AI Agent Embed */}
            <div className="text-white/60">AI Agent Interface will be embedded here</div>
          </div>
        </div>
        </section>

        <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
            Ready to Transform Your Customer Interactions?
          </h2>
          <Button 
            size="lg"
            className="text-lg px-8 py-6 h-auto bg-primary hover:bg-primary/90"
          >
            Get Started Today
          </Button>
        </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const Feature = ({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="p-6 rounded-lg glass-morphism hover-lift">
    <div className="mb-4 text-primary">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
);

const UseCase = ({ title, description }: {
  title: string;
  description: string;
}) => (
  <div className="p-6 rounded-lg glass-morphism hover-lift">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
);

export default ConversationalAI;