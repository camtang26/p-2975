import { useState } from 'react';
import VideoGalleryItem from './VideoGalleryItem';
import { ScrollFade } from '@/components/shared/ScrollFade';

interface VideoItem {
  id: string;
  videoId: string;
  title: string;
}

export const VideoGallery = ({ videos }: { videos: VideoItem[] }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 md:max-w-[90vw] lg:max-w-[85vw] xl:max-w-[80vw] mx-auto">
      {videos.map((video, index) => (
        <ScrollFade key={video.id} delay={index * 100}>
          <VideoGalleryItem
            videoId={video.videoId}
            title={video.title}
            isActive={activeVideo === video.id}
            onActivate={() => setActiveVideo(activeVideo === video.id ? null : video.id)}
          />
        </ScrollFade>
      ))}
    </div>
  );
};