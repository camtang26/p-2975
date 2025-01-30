import { PhoneCall, Sun, User, GitMerge, Speech, BarChart2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className={cn(
    "p-8 rounded-xl glass-morphism hover-lift transition-all duration-500",
    "bg-gradient-to-br from-black/40 via-black/20 to-transparent",
    "border border-white/10 group"
  )}>
    <div className="mb-6 relative group-hover:animate-pulse">
      {React.cloneElement(icon as React.ReactElement, {
        className: cn(
          "w-16 h-16 transition-all duration-300",
          "drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]",
          "group-hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.5)]"
        )
      })}
    </div>
    <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
      {title}
    </h3>
    <p className="text-white/70 leading-relaxed">
      {description}
    </p>
  </div>
);

export const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-gradient text-center">
          Unleash the Power of Key Features & Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <Feature 
            icon={<PhoneCall />}
            title="Automated Phone Calls with Real Numbers"
            description="Revolutionize your customer communication with our AI's ability to make and receive calls using real, dedicated phone numbers. Automate outbound campaigns, appointment reminders, and follow-ups while maintaining a personalized touch. Our AI handles complex call flows and analyzes sentiment in real-time."
          />
          <Feature 
            icon={<Sun />}
            title="24/7 Availability & Instant Response"
            description="Provide instant support and engagement around the clock, improving customer satisfaction and freeing up your human team to focus on higher-value tasks. Our AI agents are always available to answer questions, resolve issues, and capture leads."
          />
          <Feature 
            icon={<User />}
            title="Personalized Interactions at Scale"
            description="Deliver tailored conversations that resonate with individual customers, even at scale. Our AI agents access customer data and preferences to personalize interactions, creating a more engaging and relevant experience that drives conversions."
          />
          <Feature 
            icon={<GitMerge />}
            title="Seamless Integration with Your Systems"
            description="Integrate seamlessly with your CRM, marketing automation platforms, and other business systems to streamline workflows, improve data collection, and gain a holistic view of your customer interactions."
          />
          <Feature 
            icon={<Speech />}
            title="Advanced Natural Language Understanding"
            description="Our AI agents possess advanced natural language understanding capabilities, allowing them to comprehend and respond to complex language, including slang, colloquialisms, and nuanced phrasing. This ensures more natural and effective conversations."
          />
          <Feature 
            icon={<BarChart2 />}
            title="Real-Time Sentiment Analysis & Optimization"
            description="Monitor the emotional tone of customer interactions in real-time, allowing you to identify potential issues and optimize conversations for maximum impact. Use sentiment data to improve agent performance and tailor your messaging for better results."
          />
        </div>
      </div>
    </section>
  );
};