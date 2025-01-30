import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Clock, DollarSign, Layers, Shield, Award, Rocket, Brain, Wand2, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ExpertiseBenefits = () => {
  return (
    <section 
      className="py-32 relative overflow-hidden" 
      aria-label="Expertise and benefits section"
    >
      {/* Background Gradients */}
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
            'radial-gradient(circle at 20% 20%, rgba(155,135,245,0.15) 0%, transparent 40%), ' +
            'radial-gradient(circle at 80% 80%, rgba(217,70,239,0.15) 0%, transparent 40%)',
          filter: 'blur(120px)'
        }}
      />

      {/* Benefits Section */}
      <div className="container mx-auto px-4 mb-32 relative">
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
              description: "Imagine getting professional-quality videos in a fraction of the time. Our AI-powered workflows automate the tedious parts, streamline the creative process, and significantly reduce turnaround times. This means you can share your message sooner and respond quickly to new trends."
            },
            {
              icon: DollarSign,
              title: "Cost-Effectiveness",
              description: "Traditional video production often involves large crews, expensive equipment, and lengthy post-production. Cre8tive AI Studios cuts out these unnecessary costs, making high-quality video production accessible to all businesses. Invest your budget where it matters most and see a real return."
            },
            {
              icon: Layers,
              title: "Scalability & Flexibility",
              description: "Need videos for different platforms or campaigns? AI video production lets you scale your content creation easily. Adapt your videos for various formats and languages, reaching a wider audience without extra effort or expense."
            },
            {
              icon: Shield,
              title: "Uncompromising Quality",
              description: "While speed and cost are important, we never sacrifice quality. Our AI algorithms learn from vast amounts of professional video content, guaranteeing visually stunning videos, compelling stories, and a polished final product comparable to traditional productions."
            }
          ].map((benefit, index) => (
            <Card key={index} className="glass-morphism border-none animate-fade-in hover-lift hover-glow" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <benefit.icon className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gradient mb-4 tracking-tight">{benefit.title}</h3>
                    <p className="text-white/80 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Expertise Section */}
      <div className="container mx-auto px-4 mb-32 relative">
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

      {/* Comparison Section */}
      <div className="container mx-auto px-4 mb-32 relative">
        <h2 className="text-5xl md:text-6xl font-bold text-gradient text-center mb-16 tracking-tight">
          AI Video vs. Traditional: A Clear Advantage
        </h2>
        <div className="max-w-5xl mx-auto glass-morphism rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
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
                <TableRow key={index} className="border-t border-white/10">
                  <TableCell className="font-medium text-white p-6">{row.feature}</TableCell>
                  <TableCell className="text-white/80 p-6">{row.traditional}</TableCell>
                  <TableCell className="text-primary p-6">{row.ai}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Future Section */}
      <div className="container mx-auto px-4 relative">
        <div className="glass-morphism rounded-3xl p-16 relative overflow-hidden">
          {/* Abstract Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Content Container */}
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="p-4 rounded-full bg-primary/10 backdrop-blur-sm animate-fade-in">
                <Sparkles className="w-12 h-12 text-primary animate-pulse" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-bold text-gradient text-center mb-8 tracking-tight animate-fade-in">
              The Future of Video is Intelligent
            </h2>

            {/* Description */}
            <p className="text-xl text-white/80 leading-relaxed mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              As AI technology continues to evolve, the possibilities for video production become even more exciting. 
              Stay ahead of the curve with Cre8tive AI Studios and embrace the future of content creation today.
            </p>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="animate-fade-in hover-lift hover-glow bg-primary text-white text-lg px-8 py-6 h-auto font-semibold tracking-wide"
              style={{ animationDelay: '0.4s' }}
            >
              <Rocket className="w-5 h-5 mr-2" />
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
