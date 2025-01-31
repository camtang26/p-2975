import { useState } from 'react';
import VideoGalleryItem from './VideoGalleryItem';

interface VideoItem {
  id: string;
  videoId: string;
  title: string;
}

export const VideoGallery = ({ videos }: { videos: VideoItem[] }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {videos.map((video) => (
        <VideoGalleryItem
          key={video.id}
          videoId={video.videoId}
          title={video.title}
          isActive={activeVideo === video.id}
          onActivate={() => setActiveVideo(activeVideo === video.id ? null : video.id)}
        />
      ))}
    </div>
  );
};