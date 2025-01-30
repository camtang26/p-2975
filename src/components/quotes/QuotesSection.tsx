import { QuoteCard } from "./QuoteCard";

export const QuotesSection = () => {
  const quotes = [
    {
      quote: "The question isn't whether AI will transform your business, but when and how.",
      author: "Satya Nadella",
      title: "CEO of Microsoft"
    },
    {
      quote: "Any business that isn't using AI in some way in the next few years will be at a significant disadvantage.",
      author: "Marc Benioff",
      title: "CEO of Salesforce"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.98) 75%, rgba(13,13,29,0.99) 100%)',
          zIndex: 0
        }}
      />
      
      {/* Accent gradients */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 
            'radial-gradient(circle at 30% -10%, rgba(0,255,128,0.15) 0%, transparent 60%), ' +
            'radial-gradient(circle at 70% -20%, rgba(0,255,128,0.15) 0%, transparent 60%)',
          filter: 'blur(120px)',
          zIndex: 1
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-16">
            Industry Leaders on AI
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quotes.map((quote, index) => (
              <QuoteCard
                key={index}
                quote={quote.quote}
                author={quote.author}
                title={quote.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};