import { Brain, Users, MessageCircle, Share2 } from "lucide-react";

const features = [
  {
    title: "AI-Powered CRM",
    description: "Monitors customer interactions and behaviors to create personalized experiences. Streamlines lead nurturing with customized messaging and timely follow-ups. Uncovers high-potential opportunities using advanced AI analytics.",
    Icon: Brain,
    color: "#60A5FA"
  },
  {
    title: "AI-Driven Customer Service",
    description: "Serves as the first line of response for marketing-related customer inquiries. Provides quick, consistent, and tailored support around the clock. Routes leads and feedback to the appropriate teams for swift action.",
    Icon: Users,
    color: "#F87171"
  },
  {
    title: "AI Content Generation",
    description: "Learns your brand's unique voice and leverages your business knowledge. Researches industry trends and insights to keep your content relevant. Generates diverse content types, such as emails, blogs, website copy, whitepapers, and more.",
    Icon: MessageCircle,
    color: "#C084FC"
  },
  {
    title: "AI Social Media Management",
    description: "Crafts engaging posts that connect with your target audience. Tailors content to match your ideal customer's preferences and behaviors. Keeps your brand ahead of the curve by identifying trending topics and hashtags.",
    Icon: Share2,
    color: "#4ADE80"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Our AI Marketing Solutions
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="glass-morphism p-8 rounded-xl hover-lift hover-glow"
            >
              <feature.Icon 
                className="w-12 h-12 mb-6" 
                style={{ color: feature.color }} 
              />
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};