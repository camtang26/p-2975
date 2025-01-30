import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Clock, DollarSign, Layers, Shield, Award, Rocket, Brain, Wand2 } from "lucide-react";

export const ExpertiseBenefits = () => {
  const brandColors = {
    blue: "#0EA5E9",    // Ocean blue
    orange: "#F97316",  // Bright orange
    green: "#10B981"    // Bright green
  };

  return (
    <section 
      className="py-32 relative overflow-hidden" 
      aria-label="Expertise and benefits section"
    >
      {/* Main Background Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.98) 75%, rgba(13,13,29,0.99) 100%)',
        }}
      />
      
      {/* Brand Color Accents */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 
            'radial-gradient(circle at 30% 20%, rgba(14,165,233,0.15) 0%, transparent 50%), ' +
            'radial-gradient(circle at 70% 80%, rgba(249,115,22,0.15) 0%, transparent 50%)',
          filter: 'blur(120px)'
        }}
      />

      {/* Benefits Section */}
      <div className="container mx-auto px-4 mb-32 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-gradient text-center mb-16 tracking-tight">
          Get More From Your Video Content
        </h2>
        <div className="max-w-3xl mx-auto text-lg text-white/80 space-y-6 mb-16 leading-relaxed">
          <p>
            Video content is essential for success in today's digital world. But traditional production methods can be slow, costly, and complicated. Cre8tive AI Studios offers a smarter approach: AI-driven video production that delivers exceptional results faster, more efficiently, and more affordably.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Clock,
              title: "Speed & Efficiency",
              description: "Imagine getting professional-quality videos in a fraction of the time. Our AI-powered workflows automate the tedious parts, streamline the creative process, and significantly reduce turnaround times.",
              color: brandColors.blue
            },
            {
              icon: DollarSign,
              title: "Cost-Effectiveness",
              description: "Traditional video production often involves large crews, expensive equipment, and lengthy post-production. Cre8tive AI Studios cuts out these unnecessary costs, making high-quality video production accessible to all businesses.",
              color: brandColors.orange
            },
            {
              icon: Layers,
              title: "Scalability & Flexibility",
              description: "Need videos for different platforms or campaigns? AI video production lets you scale your content creation easily. Adapt your videos for various formats and languages, reaching a wider audience without extra effort or expense.",
              color: brandColors.green
            },
            {
              icon: Shield,
              title: "Uncompromising Quality",
              description: "While speed and cost are important, we never sacrifice quality. Our AI algorithms learn from vast amounts of professional video content, guaranteeing visually stunning videos, compelling stories, and a polished final product.",
              color: brandColors.blue
            }
          ].map((benefit, index) => (
            <Card 
              key={index} 
              className={cn(
                "glass-morphism border-none animate-fade-in hover-lift group",
                "bg-black/40 backdrop-blur-xl",
                "border border-white/10 hover:border-[var(--card-color)]/30",
                "transition-all duration-300 hover:shadow-[0_0_30px_var(--card-color)]"
              )}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--card-color': benefit.color
              } as React.CSSProperties}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                    <div 
                      className="absolute inset-0 blur-xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                      style={{ background: benefit.color }}
                    />
                    <benefit.icon 
                      className={cn(
                        "w-10 h-10 relative z-10",
                        "transition-all duration-300",
                        "drop-shadow-[0_0_8px_var(--card-color)]",
                        "group-hover:drop-shadow-[0_0_12px_var(--card-color)]"
                      )}
                      style={{ color: benefit.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gradient mb-4 tracking-tight group-hover:scale-105 transition-transform duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Brand Color Accents - Expertise Section */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 
            'radial-gradient(circle at 70% 30%, rgba(155,135,245,0.15) 0%, transparent 50%), ' +
            'radial-gradient(circle at 30% 70%, rgba(217,70,239,0.15) 0%, transparent 50%)',
          filter: 'blur(120px)'
        }}
      />

      {/* Expertise Section */}
      <div className="container mx-auto px-4 mb-32 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-gradient text-center mb-16 tracking-tight">
          The Craft of AI Video: Expertise Makes the Difference
        </h2>
        <div className="max-w-3xl mx-auto text-lg text-white/80 space-y-6 mb-16 leading-relaxed">
          <p>
            Creating truly effective AI videos takes more than just a few prompts. It demands a deep understanding of the rapidly changing AI video world, hands-on experience with a wide range of specialized tools, and a strong creative vision. At Cre8tive AI Studios, that's exactly what we offer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Award,
              title: "Early Adopters & Innovators",
              description: "We've been working with AI video since the technology first emerged in 2023. We've seen it evolve, experimented with every new tool and update, and understand its nuances inside and out."
            },
            {
              icon: Rocket,
              title: "Masters of the AI Toolkit",
              description: "We use 30+ AI tools—from video generation and editing to image processing and more. This allows us to select the perfect combination for each project, maximizing the quality of your videos."
            },
            {
              icon: Brain,
              title: "Streamlined for Success",
              description: "We've developed our own efficient workflows for AI video production. This means smooth, consistent results without creative compromises."
            },
            {
              icon: Wand2,
              title: "Creativity Meets Technology",
              description: "Our team blends artistic creativity with technical expertise. Every video we produce is not only visually impressive but also strategically designed to achieve your business goals."
            }
          ].map((expertise, index) => (
            <Card key={index} className="glass-morphism border-none animate-fade-in hover-lift hover-glow" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <expertise.icon className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gradient mb-4 tracking-tight">{expertise.title}</h3>
                    <p className="text-white/80 leading-relaxed">{expertise.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="max-w-3xl mx-auto text-lg text-white/80 mt-16 leading-relaxed">
          <p>
            AI video is constantly getting more sophisticated, with more tools and more complex workflows. It takes real expertise to navigate this landscape effectively. Cre8tive AI Studios takes care of the technical complexities so you can concentrate on your message and your business.
          </p>
        </div>
      </div>

      {/* Brand Color Accents - Comparison Section */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 
            'radial-gradient(circle at 40% 60%, rgba(155,135,245,0.15) 0%, transparent 50%), ' +
            'radial-gradient(circle at 60% 40%, rgba(217,70,239,0.15) 0%, transparent 50%)',
          filter: 'blur(120px)'
        }}
      />

      {/* Comparison Section */}
      <div className="container mx-auto px-4 mb-32 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-gradient text-center mb-16 tracking-tight">
          AI Video vs. Traditional: A Clear Advantage
        </h2>
        <div className="max-w-5xl mx-auto glass-morphism rounded-lg overflow-hidden backdrop-blur-xl bg-black/40 border border-white/10">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-white/10">
                <TableHead className="w-1/3 text-white font-bold text-lg p-6">Feature</TableHead>
                <TableHead className="w-1/3 text-white font-bold text-lg p-6">Traditional Production</TableHead>
                <TableHead className="w-1/3 text-white font-bold text-lg p-6">AI-Powered Production</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  feature: "Production Time",
                  traditional: "Weeks to months",
                  ai: "Hours to days"
                },
                {
                  feature: "Cost",
                  traditional: "High (crew, equipment, location)",
                  ai: "Fraction of traditional costs"
                },
                {
                  feature: "Scalability",
                  traditional: "Limited by resources",
                  ai: "Unlimited potential"
                },
                {
                  feature: "Iterations",
                  traditional: "Time-consuming and costly",
                  ai: "Quick and efficient"
                },
                {
                  feature: "Customization",
                  traditional: "Requires new shoots",
                  ai: "Easy adaptation"
                }
              ].map((row, index) => (
                <TableRow key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <TableCell className="font-medium text-white p-6">{row.feature}</TableCell>
                  <TableCell className="text-white/80 p-6">{row.traditional}</TableCell>
                  <TableCell className="text-primary p-6 font-medium">{row.ai}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Brand Color Accents - Future Section */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 
            'radial-gradient(circle at 20% 80%, rgba(155,135,245,0.15) 0%, transparent 50%), ' +
            'radial-gradient(circle at 80% 20%, rgba(217,70,239,0.15) 0%, transparent 50%)',
          filter: 'blur(120px)'
        }}
      />

      {/* Future Section */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-gradient text-center mb-8 tracking-tight">
          The Future of Video is Intelligent
        </h2>
        <p className="text-xl text-white/80 leading-relaxed mb-12">
          As AI technology continues to evolve, the possibilities for video production become even more exciting. 
          Stay ahead of the curve with Cre8tive AI Studios and embrace the future of content creation today.
        </p>
      </div>
    </section>
  );
};