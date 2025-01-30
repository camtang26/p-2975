export const AgentInteraction = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Experience the Future of Conversation
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Don't take our word for it – experience the power of our Conversational AI firsthand. 
            Engage with our AI agent now to see how it can transform your customer interactions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-morphism p-8 rounded-xl">
          {/* Placeholder for AI agent embed */}
          <div className="aspect-video bg-white/5 rounded-lg flex items-center justify-center">
            <p className="text-white/60">AI Agent Interface Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
};