export const WhatIsSection = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/95 to-black/90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,128,0.04)_0%,transparent_60%)]" />
      </div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient text-center">
          What is a Conversational AI Agent?
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-white/80">
          <p>
            Conversational AI agents are intelligent virtual assistants designed to engage in natural, 
            human-like conversations with your customers. They leverage advanced natural language 
            processing (NLP) and machine learning (ML) to understand user intent, answer questions, 
            provide support, and even generate leads.
          </p>
          <p>
            Unlike traditional chatbots with limited functionality, our Conversational AI agents are 
            highly sophisticated, capable of complex dialogue flows, personalized responses, and 
            seamless integration with your existing systems.
          </p>
        </div>
      </div>
    </section>
  );
};
