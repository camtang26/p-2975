import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white tracking-tight">
            About Page
          </h1>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Mission Statement Column */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold text-white/90 mb-4">
                Our Mission
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Our mission is to revolutionize media production through cutting-edge AI technology, 
                delivering efficiencies leading to margin and unparalleled quality and innovation 
                in video production and content creation.
              </p>
            </div>
            
            {/* Company Overview Column */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold text-white/90 mb-4">
                Company Overview
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                We help media companies, production houses, and digital marketing agencies stay 
                ahead of the curve by implementing the best AI media tools and technologies into 
                traditional workflows. Specializing in high-quality AI video production, we utilize 
                state-of-the-art AI tools to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;