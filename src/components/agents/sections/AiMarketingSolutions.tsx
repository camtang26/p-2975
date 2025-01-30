import { Database, MessageSquare, Text, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const AiMarketingSolutions = () => {
  const solutions = [
    {
      title: "AI-Powered CRM",
      description: "Supercharge your customer relationships with our AI-powered CRM. We monitor customer interactions and behaviors to create truly personalized experiences. Streamline lead nurturing with customized messaging and timely follow-ups, uncovering high-potential opportunities using advanced AI analytics. Boost conversions and build stronger customer loyalty.",
      Icon: Database,
      color: "#60A5FA" // blue-400
    },
    {
      title: "AI-Driven Customer Service",
      description: "Provide instant, 24/7 support with our AI-driven customer service solution. Our intelligent agents serve as the first line of response for marketing-related inquiries, providing quick, consistent, and tailored support around the clock. Seamlessly route leads and feedback to the appropriate teams for swift action, ensuring no opportunity is missed.",
      Icon: MessageSquare,
      color: "#F87171" // red-400
    },
    {
      title: "AI Content Generation",
      description: "Unlock your content creation potential with our AI-powered content generation. Our system learns your brand's unique voice and leverages your business knowledge to create engaging and relevant content. From emails and blogs to website copy and white papers, we generate diverse content types that resonate with your target audience and drive results.",
      Icon: Text,
      color: "#C084FC" // purple-400
    },
    {
      title: "AI Social Media Management",
      description: "Elevate your social media presence with our AI-powered social media management. We craft engaging posts that connect with your target audience, tailoring content to match their preferences and behaviors. Stay ahead of the curve by identifying trending topics and hashtags, maximizing your reach and impact.",
      Icon: Share2,
      color: "#4ADE80" // green-400
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #000000 0%, #000000 85%, #0D0D1D 100%)',
        }}
        aria-hidden="true"
      />
      
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
                  "glass-morphism p-16 rounded-xl hover-glow border border-white/10",
                  "bg-gradient-to-br from-black/40 via-black/20 to-transparent relative group",
                  "transform-gpu transition-transform duration-500 hover:scale-105",
                  "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r",
                  "before:opacity-0 before:transition-opacity hover:before:opacity-100",
                  "after:absolute after:inset-0 after:rounded-xl",
                  "after:opacity-0 after:transition-opacity hover:after:opacity-100",
                  "flex flex-col items-center justify-center text-center"
                )}
                style={{
                  '--solution-color': solution.color,
                  boxShadow: `0 0 30px ${solution.color}25`
                } as React.CSSProperties}
              >
                {/* Icon with enhanced glow */}
                <div className="mb-10 relative group-hover:animate-pulse">
                  <Icon 
                    className={cn(
                      "w-28 h-28 transition-all duration-300",
                      "drop-shadow-[0_0_20px_var(--solution-color)]",
                      "group-hover:drop-shadow-[0_0_40px_var(--solution-color)]"
                    )}
                    style={{ color: solution.color }}
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-4xl font-semibold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {solution.title}
                </h3>
                
                <p className="text-xl text-white/80 leading-relaxed">
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