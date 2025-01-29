import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";

const images = [
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#9b87f5]/10 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 bg-black/20 border-white/10 hover:bg-white/10 transition-colors duration-300"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="h-4 w-4" />
          </Button>
          <img
            src={selectedImage}
            alt="Selected image"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};