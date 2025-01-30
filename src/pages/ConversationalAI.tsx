import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, Clock, Zap, GitMerge, Scale, Database } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const ConversationalAI = () => {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Navigation />
      <main className="relative pt-20">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, #000000 0%, #000000 75%, #0D0D1D 100%)',
              opacity: 0.95
            }}
          />
          <div className="container mx-auto px-4 text-center relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold mb-6 text-gradient"
          >
            Unlock the Power of Natural Conversations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-white/80"
          >
            Engage, Convert, and Grow with Intelligent Conversational AI Agents
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white/70"
          >
            Transform your customer interactions with AI agents that understand and respond naturally, 
            providing personalized experiences and driving better business outcomes.
          </motion.p>
          </div>
        </section>

        {/* What is a Conversational AI Agent? */}
        <section className="py-20">
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, #000000 0%, #000000 75%, #0D0D1D 100%)',
              opacity: 0.95
            }}
          />
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

      {/* Key Features & Capabilities */}
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

      {/* Use Cases & Applications */}
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

      {/* Experience Our AI Agent */}
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

      {/* Call to Action */}
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

// Use Case Component
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
