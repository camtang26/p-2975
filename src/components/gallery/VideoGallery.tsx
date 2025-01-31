import { useState } from 'react';
import VideoGalleryItem from './VideoGalleryItem';

interface VideoItem {
  id: string;
  videoId: string;
  thumbnail: string;
  title: string;
}

const VideoGallery = ({ videos }: { videos: VideoItem[] }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-32 relative overflow-hidden">
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
          {videos.map((video) => (
            <VideoGalleryItem
              key={video.id}
              videoId={video.videoId}
              thumbnail={video.thumbnail}
              title={video.title}
              isActive={activeVideo === video.id}
              onActivate={() => setActiveVideo(activeVideo === video.id ? null : video.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;