export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/6505671a-7e7c-49f4-a7ba-6346d7d34e53.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-white">
          Cre8tive AI
        </h1>
        <p className="text-xl md:text-2xl text-white/90">
          Cutting Edge AI Solutions For Your Business
        </p>
      </div>
    </section>
  );
};