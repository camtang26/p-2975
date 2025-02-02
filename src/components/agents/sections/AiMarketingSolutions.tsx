import { Database, MessageSquare, Text, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollFade } from "@/components/shared/ScrollFade";

export const AiMarketingSolutions = () => {
  const solutions = [
    {
      title: "AI-Powered CRM",
      description: "Supercharge your customer relationships with our AI-powered CRM system.",
      benefits: [
        "Monitor customer interactions and behaviors for personalized experiences",
        "Streamline lead nurturing with customized messaging",
        "Uncover high-potential opportunities using advanced AI analytics",
        "Boost conversions and strengthen customer loyalty"
      ],
      Icon: Database,
      color: "#60A5FA" // blue-400
    },
    {
      title: "AI-Driven Customer Service",
      description: "Provide instant, 24/7 support with our intelligent customer service solution.",
      benefits: [
        "First-line response for all marketing-related inquiries",
        "Quick, consistent, and tailored support around the clock",
        "Seamless routing of leads and feedback to appropriate teams",
        "Ensure no opportunity is missed with constant monitoring"
      ],
      Icon: MessageSquare,
      color: "#F87171" // red-400
    },
    {
      title: "AI Content Generation",
      description: "Unlock your content creation potential with our AI-powered system that learns your brand's unique voice.",
      benefits: [
        "Generate diverse content types from emails to white papers",
        "Create engaging and relevant content that resonates",
        "Leverage your business knowledge for authentic content",
        "Drive results with targeted content strategies"
      ],
      Icon: Text,
      color: "#C084FC" // purple-400
    },
    {
      title: "AI Social Media Management",
      description: "Elevate your social media presence with intelligent content crafting and audience targeting.",
      benefits: [
        "Create engaging posts tailored to your audience",
        "Match content to audience preferences and behaviors",
        "Identify and leverage trending topics and hashtags",
        "Maximize reach and impact across platforms"
      ],
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
        <ScrollFade>
          <h2 className="text-5xl md:text-6xl font-semibold text-gradient text-center mb-20 relative z-50">
            Our AI Marketing Solutions
          </h2>
        </ScrollFade>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {solutions.map((solution, index) => {
            const { Icon } = solution;
            return (
              <ScrollFade key={index} delay={index * 100}>
                <div 
                  className={cn(
                    "glass-morphism p-16 rounded-xl hover-glow border border-white/10",
                    "bg-gradient-to-br from-black/40 via-black/20 to-transparent relative group",
                    "transform-gpu transition-transform duration-500 hover:scale-105",
                    "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r",
                    "before:opacity-0 before:transition-opacity hover:before:opacity-100",
                    "after:absolute after:inset-0 after:rounded-xl",
                    "after:opacity-0 after:transition-opacity hover:after:opacity-100",
                    "flex flex-col items-center justify-center text-center",
                    "min-h-[700px]" // Ensuring consistent height
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
                  
                  <p className="text-xl text-white/80 leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  <ul className="text-lg text-white/70 space-y-3 text-left w-full">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-[var(--solution-color)]">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollFade>
            );
          })}
        </div>
      </div>
    </section>
  );
};