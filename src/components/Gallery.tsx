import { useState } from "react";
import { X, ArrowLeft, ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import { AspectRatio } from "./ui/aspect-ratio";

// Sample video data - replace with actual video sources
const videos = [
  {
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    source: "https://example.com/video1.mp4",
    title: "Video 1"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    source: "https://example.com/video2.mp4",
    title: "Video 2"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    source: "https://example.com/video3.mp4",
    title: "Video 3"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    source: "https://example.com/video4.mp4",
    title: "Video 4"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    source: "https://example.com/video5.mp4",
    title: "Video 5"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    source: "https://example.com/video6.mp4",
    title: "Video 6"
  }
];

export const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleVideoClick = (video: typeof videos[0], index: number) => {
    setSelectedVideo(video);
    setSelectedIndex(index);
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = selectedIndex > 0 ? selectedIndex - 1 : videos.length - 1;
    setSelectedIndex(newIndex);
    setSelectedVideo(videos[newIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = selectedIndex < videos.length - 1 ? selectedIndex + 1 : 0;
    setSelectedIndex(newIndex);
    setSelectedVideo(videos[newIndex]);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #000000 0%, #000000 75%, #0D0D1D 100%)',
        }}
      />
      
      <div className="container relative mx-auto px-4">
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{
            display: "grid",
            gridTemplateRows: "masonry",
            gridAutoRows: "masonry"
          }}
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative break-inside-avoid cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#9b87f5]/10 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleVideoClick(video, index)}
            >
              <AspectRatio ratio={16 / 9}>
                <img
                  src={`${video.thumbnail}?w=800&fm=webp&q=80`}
                  alt={`Video thumbnail ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <Play className="w-16 h-16 text-white" />
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 bg-black/20 border-white/10 hover:bg-white/10 transition-colors duration-300 h-8 w-8"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedVideo(null);
            }}
          >
            <X className="h-8 w-8 text-red-500" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 border-white/10 hover:bg-white/10 transition-colors duration-300"
            onClick={handlePrevious}
          >
            <ArrowLeft className="h-6 w-6 text-white" />
          </Button>

          <div 
            className="max-w-[90vw] max-h-[90vh] w-full aspect-video animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo.source}
              className="w-full h-full rounded-lg"
              controls
              autoPlay
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 border-white/10 hover:bg-white/10 transition-colors duration-300"
            onClick={handleNext}
          >
            <ArrowRight className="h-6 w-6 text-white" />
          </Button>
        </div>
      )}
    </section>
  );
};