export const AdManagerFeatures = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border border-white/10 bg-white/5">
            <h3 className="text-xl font-bold text-white mb-4 font-geist">Smart Campaign Optimization</h3>
            <p className="text-white/70 font-geist">
              AI-driven optimization for your ad campaigns to maximize ROI and engagement
            </p>
          </div>
          <div className="p-6 rounded-lg border border-white/10 bg-white/5">
            <h3 className="text-xl font-bold text-white mb-4 font-geist">Real-time Analytics</h3>
            <p className="text-white/70 font-geist">
              Comprehensive analytics and insights to track campaign performance in real-time
            </p>
          </div>
          <div className="p-6 rounded-lg border border-white/10 bg-white/5">
            <h3 className="text-xl font-bold text-white mb-4 font-geist">Automated A/B Testing</h3>
            <p className="text-white/70 font-geist">
              Automated testing to identify the best performing ad variations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};