import { Database, MessageSquare, Text, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const AiMarketingSolutions = () => {
  const solutions = [
    {
      title: "AI-Powered CRM",
      description: "Supercharge your customer relationships with our AI-powered CRM. We monitor customer interactions and behaviors to create truly personalized experiences. Streamline lead nurturing with customized messaging and timely follow-ups, uncovering high-potential opportunities using advanced AI analytics. Boost conversions and build stronger customer loyalty.",
      Icon: Database,
      color: "hsl(var(--primary))"
    },
    {
      title: "AI-Driven Customer Service",
      description: "Provide instant, 24/7 support with our AI-driven customer service solution. Our intelligent agents serve as the first line of response for marketing-related inquiries, providing quick, consistent, and tailored support around the clock. Seamlessly route leads and feedback to the appropriate teams for swift action, ensuring no opportunity is missed.",
      Icon: MessageSquare,
      color: "hsl(var(--primary))"
    },
    {
      title: "AI Content Generation",
      description: "Unlock your content creation potential with our AI-powered content generation. Our system learns your brand's unique voice and leverages your business knowledge to create engaging and relevant content. From emails and blogs to website copy and white papers, we generate diverse content types that resonate with your target audience and drive results.",
      Icon: Text,
      color: "hsl(var(--primary))"
    },
    {
      title: "AI Social Media Management",
      description: "Elevate your social media presence with our AI-powered social media management. We craft engaging posts that connect with your target audience, tailoring content to match their preferences and behaviors. Stay ahead of the curve by identifying trending topics and hashtags, maximizing your reach and impact.",
      Icon: Share2,
      color: "hsl(var(--primary))"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-gradient text-center mb-16">
          Our AI Marketing Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const { Icon } = solution;
            return (
              <div 
                key={index} 
                className={cn(
                  "glass-morphism p-8 rounded-xl hover-glow border border-white/10",
                  "transform-gpu transition-all duration-300 hover:scale-[1.02]",
                  "flex flex-col h-full"
                )}
              >
                <div className="flex items-center mb-6">
                  <div className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center",
                    "bg-white/5 backdrop-blur-sm",
                    "transform-gpu transition-transform duration-300 group-hover:scale-110"
                  )}>
                    <Icon 
                      className="w-6 h-6 text-primary transition-all duration-300 hover:scale-110"
                      style={{ color: solution.color }}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-white ml-4">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-white/80 leading-relaxed text-lg">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};