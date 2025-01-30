import { Clock, MessageSquare, GitMerge, Zap, Scale, Database } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="p-6 rounded-lg glass-morphism hover-lift">
    <div className="mb-4 text-primary">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
);

export const FeaturesSection = () => {
  return (
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
  );
};