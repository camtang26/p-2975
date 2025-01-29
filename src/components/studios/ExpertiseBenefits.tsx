import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export const ExpertiseBenefits = () => {
  return (
    <section className="py-24 relative overflow-hidden" aria-label="Expertise and benefits section">
      {/* Benefits Section */}
      <div className="container mx-auto px-4 mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-16">
          Get More From Your Video Content
        </h2>
        <div className="max-w-3xl mx-auto text-lg text-white/90 space-y-6 mb-16">
          <p>
            Video content is essential for success in today's digital world. But traditional production methods can be slow, costly, and complicated. Cre8tive AI Studios offers a smarter approach: AI-driven video production that delivers exceptional results faster, more efficiently, and more affordably.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Speed & Efficiency",
              description: "Imagine getting professional-quality videos in a fraction of the time. Our AI-powered workflows automate the tedious parts, streamline the creative process, and significantly reduce turnaround times. This means you can share your message sooner and respond quickly to new trends."
            },
            {
              title: "Cost-Effectiveness",
              description: "Traditional video production often involves large crews, expensive equipment, and lengthy post-production. Cre8tive AI Studios cuts out these unnecessary costs, making high-quality video production accessible to all businesses. Invest your budget where it matters most and see a real return."
            },
            {
              title: "Scalability & Flexibility",
              description: "Need videos for different platforms or campaigns? AI video production lets you scale your content creation easily. Adapt your videos for various formats and languages, reaching a wider audience without extra effort or expense."
            },
            {
              title: "Uncompromising Quality",
              description: "While speed and cost are important, we never sacrifice quality. Our AI algorithms learn from vast amounts of professional video content, guaranteeing visually stunning videos, compelling stories, and a polished final product comparable to traditional productions."
            }
          ].map((benefit, index) => (
            <Card key={index} className="glass-morphism border-none animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gradient mb-4">{benefit.title}</h3>
                <p className="text-white/90">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Expertise Section */}
      <div className="container mx-auto px-4 mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-16">
          The Craft of AI Video: Expertise Makes the Difference
        </h2>
        <div className="max-w-3xl mx-auto text-lg text-white/90 space-y-6 mb-16">
          <p>
            Creating truly effective AI videos takes more than just a few prompts. It demands a deep understanding of the rapidly changing AI video world, hands-on experience with a wide range of specialized tools, and a strong creative vision. At Cre8tive AI Studios, that's exactly what we offer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Early Adopters & Innovators",
              description: "We've been working with AI video since the technology first emerged in 2023. We've seen it evolve, experimented with every new tool and update, and understand its nuances inside and out."
            },
            {
              title: "Masters of the AI Toolkit",
              description: "We use 30+ AI tools—from video generation and editing to image processing and more. This allows us to select the perfect combination for each project, maximizing the quality of your videos."
            },
            {
              title: "Streamlined for Success",
              description: "We've developed our own efficient workflows for AI video production. This means smooth, consistent results without creative compromises."
            },
            {
              title: "Creativity Meets Technology",
              description: "Our team blends artistic creativity with technical expertise. Every video we produce is not only visually impressive but also strategically designed to achieve your business goals."
            }
          ].map((expertise, index) => (
            <Card key={index} className="glass-morphism border-none animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gradient mb-4">{expertise.title}</h3>
                <p className="text-white/90">{expertise.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="max-w-3xl mx-auto text-lg text-white/90 mt-16">
          <p>
            AI video is constantly getting more sophisticated, with more tools and more complex workflows. It takes real expertise to navigate this landscape effectively. Cre8tive AI Studios takes care of the technical complexities so you can concentrate on your message and your business.
          </p>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="container mx-auto px-4 mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-16">
          AI Video vs. Traditional: A Clear Advantage
        </h2>
        {/* Placeholder for comparison content */}
      </div>

      {/* Future Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-16">
          The Future of Video is Intelligent
        </h2>
        {/* Placeholder for future content */}
      </div>
    </section>
  );
};