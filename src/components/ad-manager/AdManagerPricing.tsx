import { Button } from "@/components/ui/button";

export const AdManagerPricing = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12 font-geist">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter Plan */}
          <div className="p-6 rounded-lg border border-white/10 bg-white/5">
            <h3 className="text-xl font-bold text-white mb-2 font-geist">Starter</h3>
            <p className="text-3xl font-bold text-white mb-4 font-geist">$49<span className="text-lg font-normal">/mo</span></p>
            <ul className="space-y-3 mb-6">
              <li className="text-white/70 font-geist">Basic campaign optimization</li>
              <li className="text-white/70 font-geist">Standard analytics</li>
              <li className="text-white/70 font-geist">5 active campaigns</li>
            </ul>
            <Button variant="outline" className="w-full">Get Started</Button>
          </div>

          {/* Pro Plan */}
          <div className="p-6 rounded-lg border border-white/10 bg-white/5">
            <h3 className="text-xl font-bold text-white mb-2 font-geist">Pro</h3>
            <p className="text-3xl font-bold text-white mb-4 font-geist">$99<span className="text-lg font-normal">/mo</span></p>
            <ul className="space-y-3 mb-6">
              <li className="text-white/70 font-geist">Advanced AI optimization</li>
              <li className="text-white/70 font-geist">Real-time analytics</li>
              <li className="text-white/70 font-geist">20 active campaigns</li>
            </ul>
            <Button variant="outline" className="w-full">Get Started</Button>
          </div>

          {/* Enterprise Plan */}
          <div className="p-6 rounded-lg border border-white/10 bg-white/5">
            <h3 className="text-xl font-bold text-white mb-2 font-geist">Enterprise</h3>
            <p className="text-3xl font-bold text-white mb-4 font-geist">Custom</p>
            <ul className="space-y-3 mb-6">
              <li className="text-white/70 font-geist">Custom AI solutions</li>
              <li className="text-white/70 font-geist">Advanced reporting</li>
              <li className="text-white/70 font-geist">Unlimited campaigns</li>
            </ul>
            <Button variant="outline" className="w-full">Contact Sales</Button>
          </div>
        </div>
      </div>
    </section>
  );
};