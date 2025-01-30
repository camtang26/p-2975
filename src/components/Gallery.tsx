import { useState } from "react";
import { GalleryVideo } from "./gallery/GalleryVideo";
import { VideoModal } from "./gallery/VideoModal";

// Sample video data - with first real video
const videos = [
  {
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    source: "https://player.vimeo.com/video/1051820049?h=ba3efabac0",
    title: "Cre8tive AI Automotive Demo"
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedVideo) {
      if (e.key === 'ArrowLeft') {
        handlePrevious(e as unknown as React.MouseEvent);
      } else if (e.key === 'ArrowRight') {
        handleNext(e as unknown as React.MouseEvent);
      } else if (e.key === 'Escape') {
        setSelectedVideo(null);
      }
    }
  };

  return (
    <section 
      className="py-32 relative overflow-hidden"
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Video gallery"
    >
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #000000 0%, #000000 75%, #0D0D1D 100%)',
        }}
      />
      
      <div className="container relative mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6 font-geist">
            Our Work
          </h2>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{
            display: "grid",
            gridTemplateRows: "masonry",
            gridAutoRows: "masonry"
          }}
        >
          {videos.map((video, index) => (
            <GalleryVideo
              key={index}
              video={video}
              index={index}
              onClick={handleVideoClick}
            />
          ))}
        </div>
      </div>

      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </section>
  );
};
