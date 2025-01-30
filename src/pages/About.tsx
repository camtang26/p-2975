import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#1A1A1A]">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 md:px-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[60px] font-extrabold text-center mb-10 md:mb-16 text-white tracking-tight font-inter">
            About Us
          </h1>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Mission Statement Column */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 font-inter">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-[#E0E0E0] leading-relaxed font-inter">
                Our mission is to revolutionize media production through cutting-edge AI technology, 
                delivering efficiencies leading to margin and unparalleled quality and innovation 
                in video production and content creation.
              </p>
            </div>
            
            {/* Company Overview Column */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 font-inter">
                Company Overview
              </h2>
              <p className="text-lg md:text-xl text-[#E0E0E0] leading-relaxed font-inter">
                We help media companies, production houses, and digital marketing agencies stay 
                ahead of the curve by implementing the best AI media tools and technologies into 
                traditional workflows. Specializing in high-quality AI video production, we utilize 
                state-of-the-art AI tools to deliver exceptional results.
              </p>
            </div>
          </div>

          {/* Additional Content Section */}
          <div className="mt-16 md:mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Innovation */}
              <div className="p-8 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4 font-inter">Innovation</h3>
                <p className="text-[#E0E0E0] leading-relaxed font-inter">
                  Pushing the boundaries of what's possible with AI-driven media production.
                </p>
              </div>

              {/* Quality */}
              <div className="p-8 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4 font-inter">Quality</h3>
                <p className="text-[#E0E0E0] leading-relaxed font-inter">
                  Delivering exceptional results through state-of-the-art AI technologies.
                </p>
              </div>

              {/* Efficiency */}
              <div className="p-8 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4 font-inter">Efficiency</h3>
                <p className="text-[#E0E0E0] leading-relaxed font-inter">
                  Streamlining workflows and maximizing productivity with AI automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;