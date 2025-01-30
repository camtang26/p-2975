export const UseCases = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Use Cases
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder for use cases - to be populated later */}
          {[1, 2, 3, 4].map((index) => (
            <div 
              key={index}
              className="glass-morphism p-8 rounded-xl hover-lift hover-glow"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Use Case {index}
              </h3>
              <p className="text-white/80">
                Placeholder description for use case {index}. This will be replaced with actual content in a future update.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};