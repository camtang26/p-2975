import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Background gradient */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #000000 0%, #000000 75%, #0D0D1D 100%)',
          opacity: 0.95
        }}
      />

      <main className="relative pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-inter tracking-tight">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-inter">
              Ready to Transform Your Business?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Information */}
            <div className="space-y-12">
              {/* Contact Methods */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                    <p className="text-white/70">contact@cre8tiveai.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                    <p className="text-white/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Visit Us</h3>
                    <p className="text-white/70">123 Innovation Drive<br />Silicon Valley, CA 94025</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Section */}
              <div className="space-y-6 p-8 rounded-xl bg-white/5 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white">Why Choose Cre8tive AI?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-white/70" />
                    <p className="text-white/70">
                      <span className="font-semibold text-white">Cutting-Edge Technology:</span> Harness the power of AI to stay ahead of the curve.
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-white/70" />
                    <p className="text-white/70">
                      <span className="font-semibold text-white">Custom Solutions:</span> Tailored to your business, your goals, and your industry.
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-white/70" />
                    <p className="text-white/70">
                      <span className="font-semibold text-white">Proven Results:</span> From faster production times to higher margins, we deliver real value.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-xl bg-white/5 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>

          {/* Reinforced Call to Action */}
          <div className="mt-20 p-8 rounded-xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm">
            <p className="text-lg text-white/90 leading-relaxed">
              The future of business is here—stay ahead of the curve with AI-powered video production, autonomous AI agents, and the Cre8tive AI Ad Manager. Don't let your competitors outpace you. Contact us today to explore how we can build smarter, more efficient solutions tailored to your goals, brand, and competitive edge.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;