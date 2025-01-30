interface UseCaseProps {
  title: string;
  description: string;
}

const UseCase = ({ title, description }: UseCaseProps) => (
  <div className="p-6 rounded-lg glass-morphism hover-lift">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
);

export const ApplicationsSection = () => {
  return (
    <section className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gradient text-center">
          Real-World Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <UseCase
            title="Customer Support"
            description="Provide instant answers to FAQs, troubleshoot issues, and guide customers through complex processes."
          />
          <UseCase
            title="Lead Generation"
            description="Qualify leads, collect contact information, and nurture potential customers through personalized conversations."
          />
          <UseCase
            title="Sales & Marketing"
            description="Drive sales by offering personalized product recommendations, promoting special offers, and answering pre-sales questions."
          />
        </div>
      </div>
    </section>
  );
};