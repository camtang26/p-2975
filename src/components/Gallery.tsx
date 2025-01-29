const images = [
  "/lovable-uploads/6505671a-7e7c-49f4-a7ba-6346d7d34e53.png",
  "/lovable-uploads/6505671a-7e7c-49f4-a7ba-6346d7d34e53.png",
  "/lovable-uploads/6505671a-7e7c-49f4-a7ba-6346d7d34e53.png",
  "/lovable-uploads/6505671a-7e7c-49f4-a7ba-6346d7d34e53.png"
];

export const Gallery = () => {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div key={index} className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};